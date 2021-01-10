import { bool } from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

type propsDropdown = { arregloDatos: string[]; titulo: string };

const BotonEstilizado = styled.button<{ principal: boolean }>`
  -webkit-border-radius: 20px;
  border-radius: 20px;
  background-color: ${(props) => (props.principal ? "#299bf2" : "white")};
  border: none;
  padding: 10px;
  margin: 20px;
  color: ${(props) => (props.principal ? "white" : "black")};
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
  transition: all 0.5s;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
  &:visited {
    background-color: palevioletred;
  }
`;

const Dropdown = ({ arregloDatos = [], titulo = "" }: propsDropdown) => {
  const [mostrar, setMostrar] = useState(false);
  const seleccionador = useRef(null);

  const referencia = useRef(false);
  return (
    <>
      <div>
        <BotonEstilizado
          principal
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          <span>{titulo}</span>
        </BotonEstilizado>
        {mostrar ? (
          <div ref={seleccionador}>
            {arregloDatos.map((dato) => {
              return (
                <BotonEstilizado
                  principal={false}
                  onClick={() => {
                    setMostrar(false);
                  }}
                >
                  <span>{dato}</span>
                </BotonEstilizado>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
