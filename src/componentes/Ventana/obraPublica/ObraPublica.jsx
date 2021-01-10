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
  CDataTable,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";

import { Twitter, Facebook } from "react-social-sharing";

import {
  seleccionarDatos,
  seleccionarBandera,
  seleccionarEstadoSelec,
  seleccionarEstados,
  seleccionarObra,
  seleccionarAdmins,
  seleccionarDirectorio,
  asignarTodosDatos,
  asignarBandera,
  asignarObra,
} from "../../../redux/estadosSlice";

import { useSelector, useDispatch } from "react-redux";

import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";

import Map from "../mapa/Mapa.jsx";

import crendenciales from "../../../informacion/mapsCredenciales";

const TarjetaGeneral = lazy(() => import("../Tarjetas_componentes/Card16.js"));
const TarjetaBeneficios = lazy(() =>
  import("../Tarjetas_componentes/Card08.js")
);

const TarjetaResponsables = lazy(() =>
  import("../Tarjetas_componentes/Card09.js")
);

const TarjetaDenuncias = lazy(() =>
  import("../Tarjetas_componentes/CardDenuncias.js")
);

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

const TablaDesgloseInversion = ({
  totalInversion,
  noContemplado,
  montoUtilizado,
  semaforo,
}) => {
  const [color, setColor] = useState("danger");

  useEffect(() => {
    if (semaforo == "verde") {
      setColor("info");
    } else if (semaforo == "amarillo") {
      setColor("warning");
    } else if (semaforo == "rojo") {
      setColor("danger");
    }
  });

  const camposInversion = ["Inversion", "Cantidad"];
  return (
    <CCard>
      <CCardHeader>Desglose de Inversión</CCardHeader>
      <CCardBody>
        <CDataTable
          items={[
            {
              Inversion: "Monto total de inversión",
              Cantidad: totalInversion,
            },
            { Inversion: "Monto no contemplado", Cantidad: noContemplado },
            { Inversion: "Monto utilizado", Cantidad: montoUtilizado },
          ]} //Reemplazar por el llamado a la api (Los datos de la inversión)
          fields={camposInversion}
          itemsPerPage={3}
        />
      </CCardBody>
      <CCard>
        <CCardHeader>Semáforo</CCardHeader>
        <CCardBody color={color}></CCardBody>
      </CCard>
    </CCard>
  );
};

const ObraPublica = () => {
  const objetoSeleccionado = useSelector(seleccionarObra);
  const directorio = useSelector(seleccionarDirectorio);
  const [contactoSeleccionado, setContacto] = useState({});

  const locacion = {
    address: "Ubicación de la obra",
    lat: objetoSeleccionado["Latitud"],
    lng: objetoSeleccionado["Longitud"],
  };

  useEffect(() => {
    directorio.forEach((contacto) => {
      if (
        contacto["Estado"] != undefined &&
        objetoSeleccionado["EntidadFederativa"] != undefined
      ) {
        const estado1 = contacto["Estado"];
        estado1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const estado2 = objetoSeleccionado["EntidadFederativa"].normalize(
          "NFD"
        );
        estado2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        console.log("El contacto: ", estado1);
        console.log("El Objeto: ", estado2);
        if (estado1 == estado2) {
          setContacto(contacto);
          console.log("Mi contacto " + contactoSeleccionado);
        }
      }
    });
  });

  const mapURL = `https://maps:googleapis.com/maps/api/js?v=3.exp&key=${crendenciales.mapsKey}`;
  return (
    <div>
      <CRow>
        <CCol sm="4" lg="6">
          <div style={{ marginBottom: "40px" }}>
            <Map location={locacion} zoomLevel={15} />
          </div>

          <TablaDesgloseInversion
            semaforo={objetoSeleccionado["Semaforo"]}
            totalInversion={objetoSeleccionado["Monto"]}
            montoUtilizado={objetoSeleccionado["Gasto"]}
            noContemplado={
              objetoSeleccionado["Gasto"] - objetoSeleccionado["Monto"] < 0
                ? "0"
                : objetoSeleccionado["Gasto"] - objetoSeleccionado["Monto"]
            }
          />
          <TarjetaResponsables
            titulo="Responsables"
            dependencia={objetoSeleccionado["DepartamentoGobierno"]}
            adminNombre={objetoSeleccionado["Administrador"]}
            nombreEmpresa={objetoSeleccionado["Empresa"]}
          />
        </CCol>
        <CCol sm="4" lg="6">
          <CRow>
            <Twitter link="http://ventana.mx/idObraPublica=244" />
            <Facebook link="http://ventana.mx/idObraPublica=244" />
          </CRow>
          <div style={{ marginBottom: "20px" }}>
            <TarjetaGeneral
              titulo="Obra pública"
              text={objetoSeleccionado["Descripcion"]}
              estado={objetoSeleccionado["Entidad"]}
              fecha={
                objetoSeleccionado["FechaInicio"] +
                "-" +
                objetoSeleccionado["FechaFinal"]
              }
              inversion={objetoSeleccionado["Monto"]}
              dato1={parseInt(objetoSeleccionado["RecursosEstado"], 10)}
              dato2={parseInt(objetoSeleccionado["RecursosMunicipio"], 10)}
            />
          </div>
          <div>
            <TarjetaBeneficios
              title="Beneficios para ti"
              preTitle="Prueba2"
              beneficios={objetoSeleccionado["Beneficios"]}
              porcentaje={objetoSeleccionado["Fase"] == "Concluido" ? 100 : 0}
            />
          </div>
          <TarjetaDenuncias
            titulo="Denuncias"
            correo={contactoSeleccionado["Correo"]}
            direccion={contactoSeleccionado["Direccion"]}
            entidad={contactoSeleccionado["Entidad"]}
            linea={contactoSeleccionado["LineaDeAtencion"]}
            telefono={contactoSeleccionado["Telefono"]}
          />
        </CCol>
      </CRow>
    </div>
  );
};

export default ObraPublica;
