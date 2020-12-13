#Entidad para almacenar Obra
class Obra:
    #Constructor
    def __init__(self,id, nombre, anio, estado, descripcion, status, fase, fechai,fechaf, empresa, autoridad, admin, reces, recmun, monto, gasto, beneficios,lat,lon):
        self.id=id
        self.nombre=nombre
        self.anio=anio
        self.estado=estado
        self.descripcion=descripcion
        self.status=status
        self.fase=fase
        self.fechai=fechai
        self.fechaf=fechaf
        self.empresa=empresa
        self.autoridad=autoridad
        self.admin=admin
        self.reces=reces
        self.recmun=recmun
        self.monto=monto
        self.comentarios=[]
        self.gasto=gasto
        self.beneficios=beneficios
        self.lat=lat
        self.lon=lon
    #Imprimir datos de un registro
    def imprime(self):
        print(self.id)
        print(self.nombre)
        print(self.anio)
        print(self.estado)
        print(self.descripcion)
        print(self.status)
        print(self.fase)
        print(self.fechai)
        print(self.fechaf)
        print(self.empresa)
        print(self.autoridad)
        print(self.admin)
        print(self.reces)
        print(self.recmun)
        print(self.monto)
        print(self.gasto)
        print(self.beneficios)

#Entidad para almacenar Administrador
class Administrador:
    #Constructor
    def __init__(self,llave,nombre,telefono,email,cargo,rama):
        self.llave=llave
        self.nombre=nombre
        self.telefono=telefono
        self.email=email
        self.cargo=cargo
        self.rama=rama

    #Imprimir datos de un registro
    def imprime(self):
        print(self.nombre)
        print(self.telefono)
        print(self.email)
        print(self.cargo)
        print(self.rama)

#Entidad para almacenar Empresa
class Empresa:
    #Constructor
    def __init__(self,llave,nombre,id_obra,estado,admin,monto):
      self.nombre=nombre
      self.llave=llave
      self.obras=[id_obra]
      self.estados={}
      self.estados[estado]=1
      self.admins={}
      self.admins[admin]=1
      self.total=monto

    #Agregar informacion de una obra a empresa ya existente
    def agregarObra(self,id_obra,estado,admin,monto):
      self.obras.append(id_obra)
      if estado not in self.estados:
        self.estados[estado]=1
      else:
        self.estados[estado]+=1

      if admin not in self.admins:
        self.admins[admin]=1
      else:
        self.admins[admin]+=1

      self.total+=monto

     #Imprimir datos de un registro
    def imprime(self):
        print(self.nombre)
        for obraX in self.obras:
          print(obraX)
        print(self.estados)
        print(self.admins)
        print(self.total)

#Entidad para almacenar Estado
class Estado:
    #Constructor
    def __init__(self,nombre,status,avance,id_obra, monto):
      self.nombre=nombre
      self.nobras=1
      self.total=monto
      if(status=="verde"):
        self.nverde=1
        self.namarillo=0
        self.nrojo=0
      elif(status=="amarillo"):
        self.nverde=0
        self.namarillo=1
        self.nrojo=0
      elif(status=="rojo"):
        self.nverde=0
        self.namarillo=0
        self.nrojo=1
      if(avance=="Concluido"):
        self.nconcluido=1
        self.nvigente=0
      elif(avance=="Vigente"):
        self.nconcluido=0
        self.nvigente=1

      self.obras=[id_obra]

    #Agregar informacion de una obra a estado ya existente
    def agregarObra(self,status,avance,id_obra, monto):

      self.nobras+=1
      self.total+=monto
      if(status=="verde"):
        self.nverde+=1
      elif(status=="amarillo"):
        self.namarillo+=1
      elif(status=="rojo"):
        self.nrojo+=1

      if(avance=="Concluido"):
        self.nconcluido+=1
      elif(avance=="Vigente"):
        self.nvigente+=1

      self.obras.append(id_obra)

      #Imprimir datos de un registro
    def imprime(self):
        print(self.nombre)
        print(self.nobras)
        print(self.nverde)
        print(self.namarillo)
        print(self.nrojo)
        print(self.nconcluido)
        print(self.nvigente)
        print(self.total)
        for obraX in self.obras:
          print(obraX)




"""
Datos para obra pública:

'_id'
'nombre'
'ciclo'
'entidad-federativa' --> verficar estado
'desc-ppi'
status -> ('total-gasto-no-consid'*100)/'monto-total-inversion' si es 0 es verde, si es menor a 15 naranja, mayor es rojo
'fase'
'fecha-ini-ff'->2015.01
'fecha-fin-ff'-> mismo formato
'desc-ur'
'desc-ramo'
'nombre-admin'+'ap-paterno-admin'+'ap-materno-admin'
'recursos-estatales'
'recursos-municipales'
'monto-total-inversion'
lista vacia de objetos comentarios
'total-gasto-operacion-he'
'meta-beneficios'


Datos para Administrador:
'nombre-admin'+'ap-paterno-admin'+'ap-materno-admin'
'mail-admin'
'telefono-admin'
'cargo-admin'



"""
