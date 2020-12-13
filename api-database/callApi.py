#Clases para cada una de las entidades
from Entidades import Obra
from Entidades import Administrador
from Entidades import Empresa
from Entidades import Estado

#Librerías adicionales
import requests
import unicodedata
import firebase_admin
from firebase_admin import credentials,firestore

#Datos para conectar con base de datos
cred = credentials.Certificate('./Key_Objection.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

#Funcion para convertir numeros de string a int
def limpiaCantidad(text):
  if (text.find('E')==-1):
    return int(text)
    #Convertir de notacion cientifica a int
  else:
    indexE=text.find('E')
    base=text[:indexE]
    exponente=text[indexE+2:]
    return int(float(base)*(10**int(exponente)))

#Funcion para simplificar textos (quitar acentos y pone todo en minusculas)
def limpiaEstado(text):

    try:
        text = unicode(text, 'utf-8')
    except NameError:
        pass

    text = text.lower()
    text = unicodedata.normalize('NFD', text)\
           .encode('ascii', 'ignore')\
           .decode("utf-8")

    return str(text)

#Diccionario que traduce meses a float
meses = {'ene':0.01, 'feb':0.02, 'mar':0.03, 'abr':0.04, 'may':0.05, 'jun':0.06, 'jul':0.07, 'ago':0.08, 'sep':0.09, 'oct': 0.1, 'nov':0.11, 'dic':0.12}

#Funcion que pasa fecha a formato de float
def limpiaFecha(text):
    x=text.split('-')
    mes = meses[x[0]]
    anio = int(x[1])+2000
    return anio+mes

#Lista con estados validos
estados = ['aguascalientes','baja california','baja california sur', 'campeche', 'chiapas', 'chihuahua', 'ciudad de mexico', 'coahuila', 'colima', 'durango', 'guanajuato', 'guerrero', 'hidalgo', 'jalisco', 'estado de mexico', 'michoacan', 'morelos', 'nayarit', 'nuevo leon', 'oaxaca', 'puebla', 'queretaro', 'quintana roo', 'san luis potosi', 'sinaloa', 'sonora', 'tabasco', 'tamaulipas', 'tlaxcala', 'veracruz', 'yucatan', 'zacatecas']


obras=[] #Lista de entidades Obra
administradores={} #Diccionario de entidades Administrador
empresas={} #Diccionario de entidades Empresa
estadosObj={} #Diccionario de entidades Estado

pag=1 #Contador para viajar por paginas de API
#Recorrer todas las paginas de la API
while(True):
    print("Página: ",pag)
    response=(requests.get("https://api.datos.gob.mx/v1/proyectos-opa", params={'page':pag})).json()
    countPage=0
    #Recorrer todos los datos de la pagina
    for obra in response['results']:
        id=obra['_id']
        nombre=obra['nombre']
        latitud=obra['latitud-inicial']
        longitud=obra['longitud-inicial']
        ciclo=obra['ciclo']
        estado=limpiaEstado(obra['entidad-federativa'])
        #Si estado no es uno de los estados validos, omite dato
        if estado not in estados:
            continue

        descripcion=obra['desc-ppi']

        #Determinar semaforo
        excedente=(limpiaCantidad(obra['total-gasto-no-consid'])*100)/limpiaCantidad(obra['monto-total-inversion'])

        if(excedente==0):
            status='verde'
        elif(excedente<=15):
            status='amarillo'
        else:
            status='rojo'

        fase=obra['fase']

        #fechas
        fechainicio=limpiaFecha(obra['fecha-ini-ff'])
        fechafinal=limpiaFecha(obra['fecha-fin-ff'])

        nombre_empresa=obra['desc-ur']
        empresa=limpiaEstado(nombre_empresa)
        if(empresa==""):
            empresa="No hay datos"
            nombre_empresa="No hay datos"

        autoridad=obra['desc-ramo']
        nombre_admin=obra['nombre-admin']+' '+obra['ap-paterno-admin']+' '+obra['ap-materno-admin']
        admin=limpiaEstado(nombre_admin)
        if(admin=="  "):
            admin="No hay datos"
            nombre_empresa="No hay datos"

        recest=obra['recursos-estatales']
        recmun=obra['recursos-municipales']
        monto=limpiaCantidad(obra['monto-total-inversion'])
        gasto=limpiaCantidad(obra['total-gasto-operacion-he'])
        ben=obra['meta-beneficios']

        telefono_admin=obra['telefono-admin']
        email_admin=obra['mail-admin']
        cargo_admin=obra['cargo-admin']

        #Se crea nuevo registro de obra
        obra=Obra(id,nombre,ciclo,estado,descripcion,status,fase,fechainicio,fechafinal,empresa,autoridad,admin,recest,recmun,monto,gasto,ben,latitud,longitud)
        obras.append(obra)

        #Se crea nuevo registro de administador si es necesario
        if(admin not in administradores):
          new_admin=Administrador(admin,nombre_admin,telefono_admin,email_admin,cargo_admin,autoridad)
          administradores[admin]=new_admin

          #Se crea nuevo registro de empresa si es necesario
        if(empresa not in empresas):
          new_empresa=Empresa(empresa,nombre_empresa,id,estado,admin,monto)
          empresas[empresa]=new_empresa
        else:
          empresas[empresa].agregarObra(id,estado,admin,monto)

          #Se crea nuevo registro de estado si es necesario
        if(estado not in estadosObj):
          new_estado=Estado(estado, status, fase, id, monto)
          estadosObj[estado]=new_estado
        else:
          estadosObj[estado].agregarObra(status, fase, id, monto)

        countPage+=1
    #Si la pagina esta vacia, se termino la info
    if(countPage==0):
        break
    pag+=1

#Ciclos para imprimir los datos
# for o in obras:
#     o.imprime()
#     print("------------------\n\n")
#
# print("\n\n\n")
# print("----------------------ADMINISTRADORES----------------------")
# print("\n\n\n")
#
# for ad in administradores:
#   administradores[ad].imprime()
#   print("------------------\n")
#
# print("\n\n\n")
# print("----------------------EMPRESAS----------------------")
# print("\n\n\n")
#
# for em in empresas:
#   empresas[em].imprime()
#   print("------------------\n")
#
# print("\n\n\n")
# print("----------------------ESTADOS----------------------")
# print("\n\n\n")
#
# for est in estadosObj:
#   estadosObj[est].imprime()
#   print("------------------\n")

#Enviar todo a la base de datos

#Enviar obras
print("Cargando obras...")
for ob in obras:
    db.collection(u'obraPublica').document(ob.id).set({'Nombre': ob.nombre,  'Anio': ob.anio, 'EntidadFederativa': ob.estado, 'Descripcion': ob.descripcion, 'Semaforo': ob.status,'Fase': ob.fase,'FechaInicio': ob.fechai,'FechaFinal': ob.fechaf,'Empresa': ob.empresa,'DepartamentoGobierno': ob.autoridad,'Administrador': ob.admin,'RecursosEstado': ob.reces, 'RecursosMunicipio': ob.recmun,'Monto': ob.monto,'Comentarios': ob.comentarios,'Gasto': ob.gasto,'Beneficios':ob.beneficios,'Latitud':ob.lat,'Longitud':ob.lon })

#Enviar administradores
print("Cargando admins...")
for adm in administradores:
    ad=administradores[adm]
    db.collection(u'administrador').document(ad.llave).set({'Nombre': ad.nombre,'Telefono': ad.telefono,'E-Mail': ad.email,'DepartamentoGobierno':ad.rama,'Cargo': ad.cargo})

#Enviar empresas
print("Cargando empresas...")
for em in empresas:
    emp=empresas[em]
    db.collection(u'empresa').document(emp.llave).set({'Nombre':emp.nombre,'Obras':emp.obras,'Estados':emp.estados,'AdministradoresRelacionados':emp.admins,'Total':emp.total})

#Enviar estados
print("Cargando estados...")
for est in estadosObj:
    es=estadosObj[est]
    db.collection(u'estado').document(es.nombre).set({'NoObras':es.nobras,'Obras':es.obras,'Total':es.total,'ObrasVerdes':es.nverde,'ObrasAmarillas':es.namarillo,'ObrasRojas':es.nrojo,'ObrasConcluidas':es.nconcluido,'ObrasVigentes':es.nvigente})


#print(counter)
