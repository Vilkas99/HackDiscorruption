import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetBrand, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

//Color = (Nombre de red social) /  CIcon name = "cib-{red social}"
const Tarjeta = ({color, datoIzq, datoDer, titIzq, titDer, icono, datos, label}) => {
  return(<CWidgetBrand
    color={color}
    rightHeader={datoIzq}
    rightFooter={titIzq}
    leftHeader={datoDer}
    leftFooter={titDer}
  >
    <CIcon
      name={icono}
      height="52"
      className="my-4"
    />
    <ChartLineSimple
      className="position-absolute w-100 h-100"
      backgroundColor="rgba(255,255,255,.1)"
      dataPoints={datos}
      label={label}
      labels="months"
    />
  </CWidgetBrand>);
}



const WidgetsBrand = ()=>{

  // render

  return( 
  <CRow>
    <CCol sm="6" lg="3">
      <Tarjeta 
      color="facebook" 
      datoIzq = {30} 
      datoDer = {40} 
      titIzq = "Titulo prueba" 
      titDer = "Tituo Dos" 
      icono = "cib-facebook" 
      datos = {[1, 2, 3, 4, 5]} 
      label = "prueba"/>
    </CCol>
  </CRow> 

  )}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
}

export default WidgetsBrand
