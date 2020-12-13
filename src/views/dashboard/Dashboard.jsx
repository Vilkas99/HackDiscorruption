import React, { lazy, useState, useEffect } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";

import Select from "react-select";

import datosPrueba from "./datosPrueba.json";

import styled from "@emotion/styled";

import { db } from "../../firebase";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import {
  seleccionarDatos,
  seleccionarBandera,
  seleccionarEstadoSelec,
  seleccionarEstados,
  seleccionarObra,
  asignarTodosDatos,
  asignarBandera,
  asignarObra,
  asignarAdministradores,
  asignarDirectorio,
  asignarEstadoSeleccionado,
  asignarEstados,
  asignarEmpresas,
} from "../../redux/estadosSlice";
import { Route, Router } from "react-router-dom";

const WidgetsEstado = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsRedes = lazy(() => import("../widgets/WidgetsBrand.js"));
const WidgetDesgloseInversion = lazy(() => import("../base/tables/Tablas"));
const WidgetTarjetaObra = lazy(() =>
  import("../Tarjetas_componentes/Card15.js")
);

const WidgetTarjetaEmpresa = lazy(() =>
  import("../Tarjetas_componentes/Tarjeta_Empresas")
);

const EstiloBusqueda = styled(Select)`
  width: 300px;
  padding: 20px;
  .select__menu-list::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  .select__menu-list::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  .select__menu-list::-webkit-scrollbar-thumb {
    background: #888;
  }
  .select__menu-list::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const estilosPersonalizados = {
  control: (base, state) => ({
    ...base,
    fontFamily: "Serif",
    fontSize: 18,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    cursor: "text",
    borderRadius: 0,
    borderBottom: "solid 1px",
  }),

  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? "white" : "white",
      color: isFocused ? "rgba(255, 80, 86)" : "black",
      lineHeight: 2,
    };
  },

  input: (styles) => ({
    ...styles,
    color: "black",
    fontFamily: "Serif",
  }),

  menu: (styles) => ({
    ...styles,
    marginTop: 0,
    boxShadow: "none",
    borderRadius: 0,
  }),

  singleValue: (styles) => ({
    ...styles,
    color: "rgba(255, 80, 86)",
  }),
};

const BarraBusqueda = () => {
  const todosDatos = useSelector(seleccionarDatos);
  const [miEstado, setEstado] = useState(null);
  const history = useHistory();

  const asignadorOpcion = useDispatch();

  const listaBusqueda = todosDatos.map(({ Nombre }) => {
    return {
      value: Nombre,
      label: Nombre,
    };
  });

  const seleccionarResultado = (opcionSelec) => {
    let path = `/obraPublica`;

    history.push(path);
    todosDatos.forEach((obra) => {
      if (obra["Nombre"] == opcionSelec.value) {
        asignadorOpcion(asignarObra(obra));
      }
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Select
        value={miEstado}
        options={listaBusqueda}
        onChange={seleccionarResultado}
        placeholder="Buscar..."
        openMenuOnClick={false}
        classNamePrefix="select"
        styles={estilosPersonalizados}
      />
    </div>
  );
};

//Color = success / warning / danger / info
const DatoLowStats = ({ titulo, descripción, barraValor, color }) => {
  return (
    <CCol md sm="12" className="mb-sm-2 mb-0">
      <div className="text-muted">{titulo}</div>
      <strong>{descripción}</strong>
      <CProgress
        className="progress-xs mt-2"
        precision={1}
        color={color}
        value={barraValor}
      />
    </CCol>
  );
};

//Color = info, danger, warning
const CalloutDato = ({ titulo, dato, color }) => {
  return (
    <CCallout color={color}>
      <small className="text-muted">{titulo}</small>
      <br />
      <strong className="h4">{dato}</strong>
    </CCallout>
  );
};

const Dashboard = () => {
  const asignador = useDispatch(); //Se encarga de asgnar los datos a nuestras variables globales
  const todosDatos = useSelector(seleccionarDatos);
  const datosCargados = useSelector(seleccionarBandera);
  const indiceObraAzar = Math.floor(Math.random() * 1);
  const obraSeleccionada = useSelector(seleccionarObra);

  const obraAzar = todosDatos[indiceObraAzar];

  const llamadaBaseDatos = async () => {
    db.collection("obraPublica")
      .get()
      .then((snapshot) => {
        const datosObrasPublicas = snapshot.docs.map((doc) => doc.data());
        asignador(asignarTodosDatos(datosObrasPublicas));
        console.log("HEMOS LEÍDO DATOS: ", datosObrasPublicas);
      });

    db.collection("estado")
      .get()
      .then((snapshot) => {
        const datosEstados = snapshot.docs.map((doc) => doc.data());
        asignador(asignarEstados(datosEstados));
        asignador(asignarEstadoSeleccionado(datosEstados[0]));
        console.log("HEMOS LEÍDO DATOS: ", datosEstados);
      });

    db.collection("empresa")
      .get()
      .then((snapshot) => {
        const datosEmpresas = snapshot.docs.map((doc) => doc.data());
        asignador(asignarEmpresas(datosEmpresas));
        console.log("HEMOS LEÍDO DATOS: ", datosEmpresas);
      });

    db.collection("directorioContactos")
      .get()
      .then((snapshot) => {
        const datosContactos = snapshot.docs.map((doc) => doc.data());
        asignador(asignarDirectorio(datosContactos));
        console.log("HEMOS LEÍDO DATOS: ", datosContactos);
      });

    db.collection("administrador")
      .get()
      .then((snapshot) => {
        const datosAdmin = snapshot.docs.map((doc) => doc.data());
        asignador(asignarAdministradores(datosAdmin));
        console.log("HEMOS LEÍDO DATOS: ", datosAdmin);
      });

    asignador(asignarBandera(true));
  };

  useEffect(() => {
    if (!datosCargados) {
      console.log("Aparentemente estamos leyendo..");
      llamadaBaseDatos();
    }

    console.log(obraAzar);
  });

  return (
    <>
      <BarraBusqueda />
      <WidgetsEstado />
      <CRow>
        <CCol xs="12" lg="6">
          <WidgetDesgloseInversion />
        </CCol>
        <CCol xs="12" lg="6">
          <WidgetTarjetaObra
            titulo="Obra Pública del Estado"
            objeto={obraAzar}
            subtitulo={obraAzar["EntidadFederativa"]}
            bgPhoto="https://picsum.photos/740/420/?random"
            nombre={obraAzar["Nombre"]}
            inversion={"$" + obraAzar["Monto"]}
            beneficios={
              obraAzar["Beneficios"] == " "
                ? "No hay datos"
                : obraAzar["Beneficios"]
            }
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{ marginTop: "100px" }}>
          <CCard style={{ padding: "40px" }}>
            <h2>Conoce a #Objection y la iniciativa VENTANA</h2>
            <text>
              Somos un equipo multidisciplinario integrado por estudiantes
              pertenecientes a distintas instituciones de nivel superior de
              México, creado con el propósito de construir una herramienta
              tecnológica que permita combatir la corrupción en obras públicas
              de manera accesible y dinámica, que priorice en todo momento, la
              experiencia del usuario en el entorno tecnológico.{" "}
            </text>

            <h2 style={{ marginTop: "50px" }}>Nuestro fin</h2>
            <text>
              VENTANA busca combatir la corrupción en obra pública mediante una
              herramienta tecnológica de geolocalización que permite identificar
              las distintas obras públicas en la República Mexicana y acceder a
              datos concretos de éstas, como la autoridad pública que se
              encuentra a cargo, los particulares involucrados, el objetivo de
              esta obra, entre otros, además de proveer un estatus de normalidad
              de ésta, respecto a su inversión planeada y no considerada.
            </text>
            <h2 style={{ marginTop: "50px" }}>Diagnóstico situacional</h2>
            <text>
              Según el think tank México Evalúa en su Métrica de Transparencia
              en la Obra Pública, en México, las obras públicas tardan en
              entregarse en promedio 126% más del tiempo estipulado en principio
              y aumentan su costo total en un 36.3%. En el mismo sentido, la
              Auditoría Superior de la Federación estima que los costos y
              asignaciones de contratos tienen una desviación promedio de 140%,
              derivando en obras que presentan problemas de factibilidad,
              rentabilidad y calidad, que impactan negativamente a la economía,
              pues, pese a existir inversión, no se gozan los beneficios.
            </text>
            <h2 style={{ marginTop: "50px" }}>
              Vinculación con la Agenda 2030
            </h2>
            <text>
              Esta propuesta se encuentra vinculada con el Objetivo de
              Desarrollo Sostenible Número 16, de nombre “Paz, Justicia e
              Instituciones Sólidas”, centrado en la promoción de sociedades
              pacíficas e inclusivas para la construcción de instituciones
              responsables y eficaces en los distintos órdenes de gobierno. En
              esta óptica, la meta 16.5 de este Objetivo de Desarrollo
              Sostenible se encuentra dirigido a reducir la corrupción y el
              soborno en todas sus formas. Sobre esta línea, la meta 16.6 insta
              a los distintos niveles de gobierno a mantener instituciones
              transparentes, en las que los gastos primarios del gobierno
              originalmente sean desglosados por sector. En este entendido, toda
              vez que VENTANA se alinea al combate contra la corrupción y la
              promoción de procesos transparentes por parte de instituciones
              públicas, se alinea a las metas antes expuestas del Objetivo de
              Desarrollo Sostenible Número 16 de la Agenda 2030 de las Naciones
              Unidas.
            </text>

            <h2 style={{ marginTop: "50px" }}>
              Vinculación con el Plan Nacional de Desarrollo 2019-2024
            </h2>
            <text>
              En la presente coyuntura política, uno de los ejes de mayor
              importancia y objetivos principales es aquél de política y
              gobierno, en el cual se ha reconocido que la corrupción es el
              principal inhibidor del crecimiento económico, así como una de las
              formas más extremas de privatización. Para ello, se ha propuesto
              una regeneración ética de las instituciones y de la sociedad,
              directamente vinculado a la transparencia de las instituciones
              públicas, la austeridad, honestidad, transparencia, inclusión,
              respeto, entre otros valores. La presente propuesta tiene como
              objetivo ahondar a los procesos de transparencia de las
              instituciones públicas, al reunir los datos abiertos
              desconcentrados e inaccesibles que proveen las distintas entidades
              gubernamentales, en los diferentes órdenes de gobierno.
            </text>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;