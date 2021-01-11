import { CCol, CRow } from "@coreui/react";
import React, { lazy } from "react";

const WidgetDesgloseInversion = lazy(() =>
  import("../../../Template/base/tables/Tablas")
);
const WidgetTablaEmpresas = lazy(() =>
  import("../../../Template/base/tables/TablaEmpresas")
);
const WidgetTarjetaObra = lazy(() =>
  import("../../Tarjetas_componentes/Card15.js")
);

const InformacionPrincipal = ({ obraAzar }) => (
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
    <WidgetTablaEmpresas style={{ marginTop: "80px" }} />
  </CRow>
);

export default InformacionPrincipal;
