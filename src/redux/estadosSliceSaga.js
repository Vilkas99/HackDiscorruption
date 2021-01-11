/**
 * Saga para aut
 */
import { call, put, takeEvery } from "redux-saga/effects";
import { setDatos, setDatosOk, setDatosNok } from "./estadosSlice";
import { db } from "../firebase/firebase";
import omit from "lodash/omit";

export function* obtenerDatos({ payload }) {
  console.log(payload.coleccion);
  try {
    let datos = undefined;
    yield db
      .collection(payload.coleccion)
      .get()
      .then((snapshot) => {
        datos = snapshot.docs.map((doc) => doc.data());
        console.info(typeof datos);
        console.table(datos);
      });

    yield put(setDatosOk({ datos, type: payload.tipo }));
  } catch (error) {
    yield put(setDatosNok({ error }));
  }
}

export default function* sagaEstados() {
  yield takeEvery(setDatos.type, obtenerDatos);
}
