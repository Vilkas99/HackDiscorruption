import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../../../firebase/firebase";
import { asignarDatos } from "../../../../redux/estadosSlice";

const useBaseDatos = async () => {
  const [llamandoBase, setLlamandoBase] = useState(false);
  const asignador = useDispatch(); //Se encarga de asgnar los datos a nuestras variables globales
  useEffect(() => {
    db.collection("obraPublica")
      .get()
      .then((snapshot) => {
        const datosObrasPublicas = snapshot.docs.map((doc) => doc.data());
        const action = {
          payload: datosObrasPublicas,
          type: "Datos",
        };
        asignador(asignarDatos(action));
        console.log("HEMOS LEÍDO DATOS: ", datosObrasPublicas);
      });

    db.collection("estado")
      .get()
      .then((snapshot) => {
        const datosEstados = snapshot.docs.map((doc) => doc.data());
        const informacion = {
          payload: datosEstados,
          type: "Estados",
        };
        asignador(asignarDatos(informacion));
        asignador(
          asignador({ payload: datosEstados[0], type: "EstadoSeleccionado" })
        );
        console.log("HEMOS LEÍDO DATOS: ", datosEstados);
      });

    db.collection("empresa")
      .get()
      .then((snapshot) => {
        const datosEmpresas = snapshot.docs.map((doc) => doc.data());
        asignador(asignarDatos({ payload: datosEmpresas, type: "Empresas" }));
        console.log("HEMOS LEÍDO DATOS: ", datosEmpresas);
      });

    db.collection("directorioContactos")
      .get()
      .then((snapshot) => {
        const datosContactos = snapshot.docs.map((doc) => doc.data());
        asignador(
          asignarDatos({ payload: datosContactos, type: "Directorio" })
        );
        console.log("HEMOS LEÍDO DATOS: ", datosContactos);
      });

    db.collection("administrador")
      .get()
      .then((snapshot) => {
        const datosAdmin = snapshot.docs.map((doc) => doc.data());
        asignador(
          asignarDatos({
            payload: datosAdmin,
            type: "Administradores",
          })
        );
        console.log("HEMOS LEÍDO DATOS: ", datosAdmin);
      });

    asignador(asignarDatos({ payload: true, type: "Bandera" }));

    setLlamandoBase(true);
  }, []);

  return llamandoBase;
};

export default useBaseDatos;
