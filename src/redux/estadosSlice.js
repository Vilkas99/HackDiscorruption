import {
  createImmutableStateInvariantMiddleware,
  createSlice,
} from "@reduxjs/toolkit";

export const estadoSlice = createSlice({
  name: "datos",
  initialState: {
    cargando: false,
    error: false,
    datos: {},
    todosLosDatos: [
      {
        Key: "1212312",
        Administrador: "juan ariel gaxiola villa",
        Anio: "2015",
        Beneficios: "Aumentar la capacidad de transferencia de carga",
        Comentarios: [],
        DepartamentoGobierno: "Comunicaciones y Transportes",
        Descripcion: "Construcción de segundo cuerpo de la vialidad",
        Empresa: "administracion portuaria integral de lazaro cardena",
        EntidadFederativa: "michoacan",
        Fase: "Concluido",
        FechaFinal: "2015.12",
        FechaInicio: "2001.01",
        Gasto: "177833047",
        Latitud: "18",
        Longitud: "-102",
        Monto: "196831070",
        Nombre: "Construcción de vialidad periférica norte e infrae",
        RecursosEstado: "20",
        RecursosMunicipio: "40",
        Semaforo: "verde",
      },
      {
        Administrador: "No Hay Datos",
        Anio: "2014",
        Beneficios: "Optimizacion de gastos por concepto",
        Comentarios: [],
        DepartamentoGobierno: "Hacienda y Crédito Público",
        Descripcion: "Adquisición de inmuebles mediante arrendamiento",
        Empresa: "banco nacional de obras y servicios publicos, s.n.c",
        EntidadFederativa: "baja california",
        Fase: "Concluido",
        FechaFinal: "2002.12",
        FechaInicio: "2002.12",
        Gasto: "0",
        Latitud: "0",
        Longitud: "0",
        Monto: "7053728",
        Nombre: "Bienes Inmuebles por Arrendamiento Financiero",
        RecursosEstado: "0",
        RecursosMunicipio: "0",
        Semaforo: "verde",
      },
    ],
    obraSeleccionada: {
      Administrador: "",
      Anio: "",
      Beneficios: "",
      Comentarios: [],
      DepartamentoGobierno: "",
      Descripcion: "",
      Empresa: "",
      Entidad: "",
      Fase: "",
      FechaFinal: "",
      FechaInicio: "",
      Gasto: "",
      Latitud: "",
      Longitud: "",
      Monto: "",
      Nombre: "Valerio",
      RecursosEstado: "",
      RecursosMunicipio: "",
      Semaforo: "rojo",
    },

    todosLosEstados: [
      {
        Key: "",
        noObras: "20",
        Obras: [],
        ObrasAmarillas: 2,
        ObrasConcluidas: 4,
        ObrasRojas: 2,
        ObrasVerdes: 16,
        obrasVigentes: 16,
        Total: 7175808765,
        TotalExcedido: 4000,
        TotalEjercido: 30000,
      },
      {
        Key: "",
        noObras: "56",
        Obras: [],
        ObrasAmarillas: 5,
        ObrasConcluidas: 17,
        ObrasRojas: 4,
        ObrasVerdes: 47,
        obrasVigentes: 39,
        Total: 18460705687,
      },
      {
        Key: "",
        noObras: "69",
        Obras: [],
        ObrasAmarillas: 3,
        ObrasConcluidas: 13,
        ObrasRojas: 0,
        ObrasVerdes: 66,
        obrasVigentes: 56,
        Total: 22490661345,
      },
    ],

    estadoSeleccionado: {
      noObras: "18",
      Obras: [],
      ObrasAmarillas: 3,
      ObrasConcluidas: 13,
      ObrasRojas: 0,
      ObrasVerdes: 18,
      obrasVigentes: 18,
      Total: 606943634,
      TotalEjercido: 10099779,
      TotalExcedido: 0,
    },

    administradores: [
      {
        Key: "Juan Carlos",
        Cargo: "ingeniero",
        DepartamentoGobierno: "",
        Email: "juan@gmail.com",
        key: "",
        Nombre: "juan ariel gaxiola villa",
        Telefono: "",
      },
    ],

    directorio: [
      {
        Correo: "prueba@gmail.com",
        Direccion: "1ra Cerrada Real de la Hacienda",
        Entidad: "michoacan",
        Estado: "michoacan",
        LineaDeAtencion: "222 2524 846",
        Telefono: "222 544 874",
      },
    ],

    empresa: [
      {
        Key: "Michoacana SA de CV",
        NoObras: "25",
        Obras: [],
        Estados: [],
        AdministradoresRelacionados: [],
        Total: "20",
      },
    ],

    datosCargados: false,
  },
  reducers: {
    asignarTodosDatos: (state, action) => {
      console.log("Continuando proceso");
      state.todosLosDatos = action.payload;
      console.log("Estos son los datos: ", state.todosLosDatos);
    },

    setDatos(state) {
      state.cargando = true;
      state.error = false;
      state.datos = [];
    },
    setDatosOk(state, action) {
      state.cargando = false;
      console.info("action? ", action);
      state.datos = action.payload.datos;
      if (action.type == "Obra") {
        state.obraSeleccionada = action.payload.datos;
      } else if (action.payload.type == "Bandera") {
        state.datosCargados = action.payload.datos;
      } else if (action.payload.type == "Estados") {
        state.todosLosEstados = action.payload.datos;
      } else if (action.payload.type == "EstadoSeleccionado") {
        state.todosLosEstados = action.payload.datos;
      } else if (action.payload.type == "Administradores") {
        state.administradores = action.payload.datos;
      } else if (action.payload.type == "Directorio") {
        state.directorio = action.payload.datos;
      } else if (action.payload.type == "Empresas") {
        state.empresa = action.payload.datos;
      } else if (action.payload.type == "Datos") {
        state.todosLosDatos = action.payload.datos;
      } else {
        console.log("No detectamos que tipo de datos");
      }
    },
    setDatosNok(state, action) {
      console.info("action? ", action);
      state.error = action.payload.error;
      state.cargando = false;
    },

    asignarDatos: (state, action) => {
      if (action.type == "Obra") {
        state.obraSeleccionada = action.payload;
      } else if (action.type == "Bandera") {
        state.datosCargados = action.payload;
      } else if (action.type == "Estados") {
        state.todosLosEstados = action.payload;
      } else if (action.type == "EstadoSeleccionado") {
        state.todosLosEstados = action.payload;
      } else if (action.type == "Administradores") {
        state.administradores = action.payload;
      } else if (action.type == "Directorio") {
        state.directorio = action.payload;
      } else if (action.type == "Empresas") {
        state.empresa = action.payload;
      } else if (action.type == "Datos") {
        state.todosLosDatos = action.payload;
      }
    },

    asignarObra: (state, action) => {
      state.obraSeleccionada = action.payload;
    },

    asignarBandera: (state, action) => {
      state.datosCargados = action.payload;
    },

    asignarEstados: (state, action) => {
      state.todosLosEstados = action.payload;
    },

    asignarEstadoSeleccionado: (state, action) => {
      state.todosLosEstados = action.payload;
    },

    asignarAdministradores: (state, action) => {
      state.administradores = action.payload;
    },

    asignarDirectorio: (state, action) => {
      state.directorio = action.payload;
    },

    asignarEmpresas: (state, action) => {
      state.empresa = action.payload;
    },
  },
});

export const {
  asignarObra,
  asignarDatos,
  asignarTodosDatos,
  asignarBandera,
  asignarEstados,
  asignarEstadoSeleccionado,
  asignarAdministradores,
  asignarDirectorio,
  asignarEmpresas,
  setDatos,
  setDatosNok,
  setDatosOk,
} = estadoSlice.actions;

export const seleccionarDatos = (state) => state.datos.todosLosDatos;
export const seleccionarObra = (state) => state.datos.obraSeleccionada;
export const seleccionarBandera = (state) => state.datos.datosCargados;
export const seleccionarEstados = (state) => state.datos.todosLosEstados;
export const seleccionarEstadoSelec = (state) => state.datos.estadoSeleccionado;
export const seleccionarAdmins = (state) => state.datos.administradores;
export const seleccionarDirectorio = (state) => state.datos.directorio;

export default estadoSlice.reducer;
