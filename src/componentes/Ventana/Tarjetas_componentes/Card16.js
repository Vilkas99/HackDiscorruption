import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  CCard,
  CCardBody,  
  CCardHeader,
  CCol,  CPopover, CButton
} from '@coreui/react'
import {
  CChartPie,  
} from '@coreui/react-chartjs'
import { CRow } from "@coreui/react";

import { useHistory } from "react-router-dom";



const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Photo = styled.div`
  background-position: center center;
  background-image: url(${props => props.bgPhoto});
  background-color: ${props => props.bgColor};
  background-size: cover;
  width: 30%;
  height: 100%;
`;

const Content = styled.div`
  border-radius: 8px;
  color: white;
  background-color: white;
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  color: ${props => props.color};
  margin-bottom: 15px;
  display: block;
`;

const Text = styled.p`
  color: #9ca1ae;
  line-height: 1.5;
`;

const PreTitle = styled.span`
  color: ${props => props.color};
  margin-bottom: 15px;
  display: block;
`;

const CTA = styled.span`
  cursor: pointer;
  color: ${props => props.color};
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  display: block;

  i {
    margin-left: 10px;
  }
`;


const Grafica = (dato1, dato2) => {
  return(<CCard>

    <CCardBody>
      <CChartPie
        type="pie"
        datasets={[
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [dato1, dato2]
          }
        ]}
        labels={['Estatal', 'Federal']}
        options={{
          tooltips: {
            enabled: true
          }
        }}
      />
    </CCardBody>
    </CCard>
    );
}

const Card16 = ({
  bgPhoto,
  bgColor = "#DBE0E6",
  titulo,
  text,
  titleColor = "#1F2126",
  estado,
  fecha,
  inversion,
  preTilteColor = "#36E3AD",
  cta,
  ctaColor = "#056BFD",
  dato1,
  dato2
}) => {

  const history = useHistory();
 
  
  const regresar = () => {
    let path = `/dashboard`;

    history.push(path);
  }
  
  return(
  <Container>
    <Photo bgPhoto={bgPhoto} bgColor={bgColor} />
    <Content>
            
      <CCol>
          <CButton onClick={regresar} block color="warning">Regresar</CButton>
      </CCol>
      {estado && <PreTitle color={preTilteColor}>{estado}</PreTitle>}
      {titulo && <Title color={titleColor}>{titulo}</Title>}
      {estado && <PreTitle color={preTilteColor}>{fecha}</PreTitle>}
      {text && <Text>{text}</Text>}      
      {titulo && <Title color={titleColor}>{"Inversion: $"+ inversion}</Title>}      
      {cta && (
        <CTA color={ctaColor}>
          {cta}
          <i className="fas fa-arrow-right" />
        </CTA>
      )}
      
    </Content>    
  </Container>
)};


export default Card16;
