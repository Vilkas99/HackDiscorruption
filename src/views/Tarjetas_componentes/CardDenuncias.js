import React, {useState} from "react";
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
  fromColor = "red",
  toColor = "red",
  iconName,
  iconSize = 2,
  iconColor = "white",
  titleColor = "white",
  titulo,
  correo, 
  direccion, 
  entidad,
  linea,
  telefono

}) => {
  
  const [accordion, setAccordion] = useState(1)
  return(<Container fromColor={fromColor} toColor={toColor}>
     <CRow style = {{marginTop: "40px"}}>
       <CCol>
     <Content>      
      <Title  onClick={() => setAccordion(accordion === 0 ? null : 0)} color={titleColor}>{titulo}</Title>
    </Content>
     <CCard className="mb-0">
                
                <CCollapse show={accordion === 0}>
                  
                  <CCol style = {{margin:"50px"}}>                
                    <CRow>
                    <Title style={{fontSize:"40px", marginTop: "20px"}}>Contacto</Title>     
                    </CRow>     
                    <CRow style = {{marginTop: "20px"}}>           
                    <CCardSubtitle>{"Correo: " + correo  }</CCardSubtitle>      
                    </CRow>      
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Direccion: " + direccion } </CCardSubtitle>
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Entidad: " + entidad} </CCardSubtitle>                             
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Linea de atencion: " + linea} </CCardSubtitle>                             
                    </CRow>
                    <CRow style = {{marginTop: "20px"}}>
                    <CCardSubtitle>{"Telefono: " + telefono} </CCardSubtitle>                                                    
                    </CRow>
                  </CCol>                                                              
                  
                </CCollapse>
              </CCard>
              </CCol>
              </CRow>
   
  </Container>
  
);};


export default Card09;
