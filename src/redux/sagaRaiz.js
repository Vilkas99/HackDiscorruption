import { all } from "redux-saga/effects";
import estadoSliceSaga from "./estadosSliceSaga";

export default function* sagaRaiz(getState) {
  yield all([estadoSliceSaga()]);
}
