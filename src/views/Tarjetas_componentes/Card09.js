import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  CBadge,
  CButton,
  
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardSubtitle,
  CCol,
  CCollapse,
  CRow
} from "@coreui/react";

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
} from "../../redux/estadosSlice";

import { useSelector, useDispatch } from "react-redux";

import User from "../users/User";

const Container = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(45deg, ${props.fromColor}, ${props.toColor})`};
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-bottom: 8px;
`;

const Title = styled.span`
  color: ${props => props.color};
  font-weight: 500;
  font-size: 18px;
`;



const Card09 = ({
  fromColor = "#494AFF",
  toColor = "#006EFE",
  iconName,
  iconSize = 2,
  iconColor = "white",
  titleColor = "white",
  dependencia, 
  adminNombre,     
  nombreEmpresa,
  titulo,
}) => {
  
  const [accordion, setAccordion] = useState(1)
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");

  const administradores = useSelector(seleccionarAdmins);

  useEffect(()=> {

    administradores.forEach(admin => {
      if(admin["Nombre"] == adminNombre){
        setCargo(admin["Cargo"]);
        setCorreo(admin["Email"]);
      }
      
    });

  }, [])

  return(<Container fromColor={fromColor} toColor={toColor}>
     <CRow>
       <CCol>
     <Content>      
      <Title  onClick={() => setAccordion(accordion === 0 ? null : 0)} color={titleColor}>{titulo}</Title>
    </Content>
     <CCard className="mb-0">
                
                <CCollapse show={accordion === 0}>
                  
                  <CCol style = {{margin:"50px"}}>
                    <CRow>
                    <Title style={{fontSize:"40px", marginTop: "20px"}}>Dependencia</Title>                      
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Nombre: " + dependencia} </CCardSubtitle>    
                    </CRow>
                    <CRow>
                    <Title style={{fontSize:"40px", marginTop: "20px"}}>Administrador</Title>     
                    </CRow>     
                    <CRow style = {{marginTop: "20px"}}>           
                    <CCardSubtitle>{"Nombre: " + adminNombre}</CCardSubtitle>      
                    </CRow>      
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>C{"Cargo: " + cargo} </CCardSubtitle>
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Correo: " + correo}</CCardSubtitle>                             
                    </CRow>
                    <CRow>
                      <Title style={{fontSize:"40px", marginTop: "20px"}}>Empresa</Title>   
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>           
                    <CCardSubtitle>{"Nombre: " + nombreEmpresa}</CCardSubtitle>      
                    </CRow>      
                  </CCol>                                                              
                  
                </CCollapse>
              </CCard>
              </CCol>
              </CRow>
   
  </Container>
  
);};


export default Card09;
