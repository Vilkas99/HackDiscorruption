import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDataTable,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: ${props => props.bgColor};
  background-image: ${props =>
    `linear-gradient(${props.overlayColor}, ${props.overlayColor}), url(${
      props.bgPhoto
    })`};
  padding: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;

const TagContainer = styled.div`
  background-color: ${props => props.bgColor};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.tagColor};
`;

const TagText = styled.span``;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTA = styled.span`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 25px;
  z-index: 9;
  background: ${props => props.bgColor};
  color: ${props => props.color};
`;

const CTAText = styled.span`
  font-weight: 500;
`;

const Title = styled.span`
  display: block;
  font-size: 48px;
  font-weight: 700;
  margin-top: 8px;
  color: ${props => props.color};
`;

const PreTitle = styled.span`
  font-size: 16px;
  color: ${props => props.color};
`;

const Card08 = ({  
  title,
  titleColor = "white",
  overlayColor = "#41B883",
  bgPhoto,
  bgColor = "#DBE0E6",
  porcentaje, 
  beneficios,

}) => (
  <Container bgPhoto={bgPhoto} bgColor={bgColor} overlayColor={overlayColor}>        
      <Content>
        <CRow>
          <CCol>
        <span>          
          {title && <Title color={titleColor}>{title}</Title>}
        </span>
        <CCard>
          <CCardHeader>
            <h3>Estatus</h3>
          </CCardHeader>
          <CCardBody>
            <CProgress value = {porcentaje} max = {100} showPercentage color = "warning" />
          </CCardBody>
          <CCardFooter>
            <text>{beneficios}</text>
          </CCardFooter>
          </CCard>        
          </CCol>
          </CRow>           
      </Content>
    
  </Container>
);

Card08.propTypes = {
  preTitle: PropTypes.string,
  preTitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  overlayColor: PropTypes.string,
  cta: PropTypes.string,
  ctaColor: PropTypes.string,
  ctaBg: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  tagBg: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default Card08;
