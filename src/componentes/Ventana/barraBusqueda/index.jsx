import { string, func, arrayOf, array } from "prop-types";
import React, {
  Component,
  HtmlHTMLAttributes,
  useEffect,
  useState,
} from "react";
import Select from "react-select";

const estilosPersonalizados = {
  control: (base, state) => ({
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
      backgroundColor: isFocused ? "#299bf2" : "white",
      color: isFocused ? "white" : "black",
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

const BarraBusqueda = ({ todosDatos, funcionSeleccionar }) => {
  const [miEstado, setEstado] = useState(null);

  useEffect(() => {
    console.log(todosDatos);
  }, []);

  const listaBusqueda = todosDatos.map(({ Nombre }) => {
    return {
      value: Nombre,
      label: Nombre,
    };
  });

  return (
    <div style={{ marginBottom: "20px" }}>
      <Select
        value={miEstado}
        options={listaBusqueda}
        onChange={(opcionSelec) => funcionSeleccionar(opcionSelec)}
        placeholder="Buscar..."
        openMenuOnClick={false}
        classNamePrefix="select"
        styles={estilosPersonalizados}
      />
    </div>
  );
};

BarraBusqueda.propsTypes = {
  todosDatos: array,
  funcionSeleccionar: func,
};

export default BarraBusqueda;
