import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

import usersData from "../../users/UsersData";

import { useSelector, useDispatch } from "react-redux";

import {
  seleccionarDatos,
  seleccionarBandera,
  seleccionarEstadoSelec,
  seleccionarEstados,
  seleccionarObra,
  asignarTodosDatos,
  asignarBandera,
} from "../../../../redux/estadosSlice";
import { useState } from "react";
import { useEffect } from "react";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const TablaDesgloseInversion = () => {
  const inversionUtilizado = useSelector(seleccionarEstadoSelec)[
    "TotalEjercido"
  ];
  const inversionExtra = useSelector(seleccionarEstadoSelec)["TotalExcedido"];
  const inversionTotal = useSelector(seleccionarEstadoSelec)["Total"];

  const camposInversion = ["Tipo", "Cantidad"];
  const todosLosDatos = useSelector(seleccionarDatos);

  const datosTabla = [
    { Tipo: "Inversión total", Cantidad: "$" + inversionTotal },
    { Tipo: "Inversión Utilizada", Cantidad: "$" + inversionUtilizado },
    { Tipo: "Inversión Extra", Cantidad: "$" + inversionExtra },
  ];

  return (
    <CCard>
      <CCardHeader>Desglose de Inversión</CCardHeader>
      <CCardBody>
        <CDataTable
          items={datosTabla} //Reemplazar por el llamado a la api (Los datos de la inversión)
          itemsPerPage={3}
          pagination
        />
      </CCardBody>
    </CCard>
  );
};

const Tablas = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>Simple Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>Striped Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>Condensed Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>Bordered Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                bordered
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Combined All Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Combined All dark Table</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                dark
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default TablaDesgloseInversion;
