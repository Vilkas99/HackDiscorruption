import estadoReducer from "./estadosSlice";
import { useDispatch, createSelectorHook } from "react-redux";
import {
  Action,
  configureStore,
  getDefaultMiddleware,
  Selector,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import history from "../utils/history";
import sagaRaiz from "./sagaRaiz";

import crearReductor from "./reductorRaiz";

const reduxSagaOpcionesMonitoreo = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaOpcionesMonitoreo);
const { run: runSaga } = sagaMiddleware;

// Creo el store con dos middlewares
// 1. sagaMiddleware: Hace que redux-sagas funcionen.
// 2. routerMiddleware: Sincroniza la ruta de ubicación/URL al state.
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [
  createInjectorsEnhancer({ createReducer: crearReductor, runSaga }),
];

const almacen = configureStore({
  reducer: crearReductor(),
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools: process.env.NODE_ENV !== "production",
  enhancers,
});

// Hago a los reductores "hot reloadable", ver http://mxs.is/googmo
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept("./reductorRaiz", () => {
    forceReducerReload(almacen);
  });
}

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reductorRaiz", () => {
    const nuevosReductores = require("./reductorRaiz").default;
    almacen.replaceReducer(nuevosReductores);
  });
}

// Ejecuto las sagas
runSaga(sagaRaiz);

export default almacen;
