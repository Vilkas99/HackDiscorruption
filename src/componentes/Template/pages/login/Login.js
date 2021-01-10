import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const IngresarSesion = () => {
  return( 
  <CCard className="p-4">
  <CCardBody>
    <CForm>
      <h1>Objection</h1>
      <p className="text-muted">Ingresa a tu cuenta</p>
      <CInputGroup className="mb-3">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-user" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput type="text" placeholder="Correo" autoComplete="username" />
      </CInputGroup>
      <CInputGroup className="mb-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-lock-locked" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput type="password" placeholder="Contraseña" autoComplete="current-password" />
      </CInputGroup>
      <CRow>
        <CCol xs="6">
          <CButton color="primary" className="px-4">Iniciar Sesión</CButton>
        </CCol>
        <CCol xs="6" className="text-right">
          <CButton color="link" className="px-0">¿Olvidaste tu contraseña?</CButton>
        </CCol>
      </CRow>
    </CForm>
  </CCardBody>
</CCard>)
}

const Registrarse = () => {
  return(
  <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
  <CCardBody className="text-center">
    <div>
      <h2>Regístrate</h2>
      <p>Conoce el estado y los datos de las obras públicas que admninistras el Federación.</p>
      <Link to="/register">
        <CButton color="primary" className="mt-3" active tabIndex={-1}>¡Regístrarte ahora!</CButton>
      </Link>
    </div>
  </CCardBody>
</CCard>)
}

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <IngresarSesion/>
              <Registrarse/>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
