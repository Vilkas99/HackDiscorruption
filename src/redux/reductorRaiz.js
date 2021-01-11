import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import history from "../utils/history";
import datos from "./estadosSlice";

export let reductorRaiz = combineReducers({
  datos,
  router: connectRouter(history),
});

export default function crearReductor(reductoresInyectados = {}) {
  const reductorPrincipal = combineReducers({
    datos,
    router: connectRouter(history),
    ...reductoresInyectados,
  });
  return reductorPrincipal;
}
