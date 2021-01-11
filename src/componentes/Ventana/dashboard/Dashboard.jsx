import React, { lazy, useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  seleccionarDatos,
  seleccionarBandera,
  seleccionarObra,
  asignarObra,
  setDatos,
} from "../../../redux/estadosSlice";

import { estados } from "../../../informacion/estados.ts";

//Importo hook personalizdo de firebase
import useBaseDatos from "./llamadasFireBase/llamadaBaseDatos";

//IMPORT de componentes
const BarraBusqueda = lazy(() => import("../barraBusqueda"));
const InformacionPrincipal = lazy(() => import("./informacion"));
const DescripcionProyecto = lazy(() => import("./descripcion"));
const WidgetsEstado = lazy(() =>
  import("../../Template/widgets/WidgetsDropdown.js")
);
const WidgetTarjetaEmpresa = lazy(() =>
  import("../Tarjetas_componentes/Tarjeta_Empresas")
);
const Dropdown = lazy(() => import("../dropdown"));

//Objeto Principal
const Dashboard = () => {
  const asignador = useDispatch(); //Se encarga de asgnar los datos a nuestras variables globales
  const todosDatos = useSelector(seleccionarDatos);
  const datosCargados = useSelector(seleccionarBandera);
  const indiceObraAzar = Math.floor(Math.random() * 1);
  const obraSeleccionada = useSelector(seleccionarObra);
  const history = useHistory();

  const obraAzar = todosDatos[indiceObraAzar];

  useEffect(() => {
    if (!datosCargados) {
      asignador(setDatos({ coleccion: "obraPublica", tipo: "Datos" }));
      asignador(setDatos({ coleccion: "estado", tipo: "Estados" }));
      asignador(setDatos({ coleccion: "empresa", tipo: "Empresas" }));
      asignador(
        setDatos({ coleccion: "directorioContactos", tipo: "Directorio" })
      );
      asignador(
        setDatos({ coleccion: "administrador", tipo: "Administradores" })
      );
    }
  }, []);

  return (
    <>
      <BarraBusqueda
        todosDatos={todosDatos}
        funcionSeleccionar={(opcionSelec) => {
          let path = `/obraPublica`;

          history.push(path);
          todosDatos.forEach((obra) => {
            if (obra["Nombre"] == opcionSelec.value) {
              asignador(asignarObra(obra));
            }
          });
        }}
      />
      <WidgetsEstado />
      <div>
        <Dropdown arregloDatos={estados} titulo="Seleccionar Estado" />
        <h1>Puebla</h1>
      </div>
      <InformacionPrincipal obraAzar={obraAzar} />
      <DescripcionProyecto />
    </>
  );
};

export default Dashboard;
