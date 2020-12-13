import React, { useState } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


import {
  seleccionarDatos,
  seleccionarBandera,
  seleccionarEstadoSelec,
  seleccionarEstados,
  seleccionarObra,
  asignarTodosDatos,
  asignarBandera,
  asignarObra,
  asignarEstadoSeleccionado,
} from "../../redux/estadosSlice";
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { useSelector, useDispatch } from "react-redux";




const OpcionesTarjeta = () => {
  return(<CDropdown>
    <CDropdownToggle color="transparent">
      <CIcon name="cil-settings"/>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownItem>Action</CDropdownItem>
      <CDropdownItem>Another action</CDropdownItem>
      <CDropdownItem>Something else here...</CDropdownItem>
      <CDropdownItem disabled>Disabled action</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>)
}


//Posibles colores: gradient-primary / gradient-warning / gradient-info / gradient - danger
const TarjetaPeqGrafica = ({color, datoTitulo, titulo, conjuntoDatos, labelDatos }) => {
  return(        <CWidgetDropdown
    color={color}
    header={datoTitulo}
    text={titulo}
    footerSlot={
      <ChartLineSimple
        pointed
        className="c-chart-wrapper mt-3 mx-3"
        style={{height: '70px'}}                 
        label={labelDatos}
        labels="months"
      />
    }
  >
    
    
  </CWidgetDropdown>)
}

const WidgetEstados = () => {
  const datosTotales= useSelector(seleccionarEstadoSelec)["noObras"];
  const datosRojo= useSelector(seleccionarEstadoSelec)["ObrasRojas"];
  const datosAmarillo= useSelector(seleccionarEstadoSelec)["ObrasAmarillas"];
  const datosAzul= useSelector(seleccionarEstadoSelec)["ObrasVerdes"];
  // render

  const asignador = useDispatch();
  const todosEstados = useSelector(seleccionarEstados);

  

  const options = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"
  ];
  const [valorDrop, setValor] = useState(options[0]);
  const defaultOption = options[0];

  const seleccionarEstado = (event) => {
    todosEstados.forEach(estado => {
      if(estado["Key"] == event.target.value){}
      asignador(asignarEstadoSeleccionado(estado)) ; 
    });
  }

  function  cambioValor(e){
    console.log(e.target.value);
  }
  

  return (
    <div>
        
    
    <CRow>
      
      <CCol sm="6" lg="3">
        <TarjetaPeqGrafica color = "gradient-primary" datoTitulo = {datosTotales} titulo = "Obras totales Puebla"  labelDatos = "Datos"/>       
      </CCol>

      <CCol sm="6" lg="3">
      <TarjetaPeqGrafica color = "gradient-danger" datoTitulo = {datosRojo} titulo = "Obras en semáforo rojo" labelDatos = "Datos"/>       
      </CCol>

      <CCol sm="6" lg="3">
      <TarjetaPeqGrafica color = "gradient-warning" datoTitulo = {datosAmarillo} titulo = "Obras en semáforo amarillo" labelDatos = "Datos"/>       
      </CCol>

      <CCol sm="6" lg="3">
      <TarjetaPeqGrafica color = "gradient-info" datoTitulo = {datosAzul} titulo = "Obras en semáforo azul" labelDatos = "Datos"/>       
      </CCol>
    </CRow>
    </div>
  )
}

export default WidgetEstados
