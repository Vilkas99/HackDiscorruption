import React, { lazy, useState, useEffect } from "react";
import { CCol, CRow, CCard } from "@coreui/react";
import InformacionPrincipal from "../informacion";
const DescripcionProyecto = () => (
  <CRow>
    <CCol style={{ marginTop: "100px" }}>
      <CCard style={{ padding: "40px" }}>
        <h2>Conoce a #Objection y la iniciativa VENTANA</h2>
        <text>
          Somos un equipo multidisciplinario integrado por estudiantes
          pertenecientes a distintas instituciones de nivel superior de México,
          creado con el propósito de construir una herramienta tecnológica que
          permita combatir la corrupción en obras públicas de manera accesible y
          dinámica, que priorice en todo momento, la experiencia del usuario en
          el entorno tecnológico.{" "}
        </text>

        <h2 style={{ marginTop: "50px" }}>Nuestro fin</h2>
        <text>
          VENTANA busca combatir la corrupción en obra pública mediante una
          herramienta tecnológica de geolocalización que permite identificar las
          distintas obras públicas en la República Mexicana y acceder a datos
          concretos de éstas, como la autoridad pública que se encuentra a
          cargo, los particulares involucrados, el objetivo de esta obra, entre
          otros, además de proveer un estatus de normalidad de ésta, respecto a
          su inversión planeada y no considerada.
        </text>
        <h2 style={{ marginTop: "50px" }}>Diagnóstico situacional</h2>
        <text>
          Según el think tank México Evalúa en su Métrica de Transparencia en la
          Obra Pública, en México, las obras públicas tardan en entregarse en
          promedio 126% más del tiempo estipulado en principio y aumentan su
          costo total en un 36.3%. En el mismo sentido, la Auditoría Superior de
          la Federación estima que los costos y asignaciones de contratos tienen
          una desviación promedio de 140%, derivando en obras que presentan
          problemas de factibilidad, rentabilidad y calidad, que impactan
          negativamente a la economía, pues, pese a existir inversión, no se
          gozan los beneficios.
        </text>
        <h2 style={{ marginTop: "50px" }}>Vinculación con la Agenda 2030</h2>
        <text>
          Esta propuesta se encuentra vinculada con el Objetivo de Desarrollo
          Sostenible Número 16, de nombre “Paz, Justicia e Instituciones
          Sólidas”, centrado en la promoción de sociedades pacíficas e
          inclusivas para la construcción de instituciones responsables y
          eficaces en los distintos órdenes de gobierno. En esta óptica, la meta
          16.5 de este Objetivo de Desarrollo Sostenible se encuentra dirigido a
          reducir la corrupción y el soborno en todas sus formas. Sobre esta
          línea, la meta 16.6 insta a los distintos niveles de gobierno a
          mantener instituciones transparentes, en las que los gastos primarios
          del gobierno originalmente sean desglosados por sector. En este
          entendido, toda vez que VENTANA se alinea al combate contra la
          corrupción y la promoción de procesos transparentes por parte de
          instituciones públicas, se alinea a las metas antes expuestas del
          Objetivo de Desarrollo Sostenible Número 16 de la Agenda 2030 de las
          Naciones Unidas.
        </text>

        <h2 style={{ marginTop: "50px" }}>
          Vinculación con el Plan Nacional de Desarrollo 2019-2024
        </h2>
        <text>
          En la presente coyuntura política, uno de los ejes de mayor
          importancia y objetivos principales es aquél de política y gobierno,
          en el cual se ha reconocido que la corrupción es el principal
          inhibidor del crecimiento económico, así como una de las formas más
          extremas de privatización. Para ello, se ha propuesto una regeneración
          ética de las instituciones y de la sociedad, directamente vinculado a
          la transparencia de las instituciones públicas, la austeridad,
          honestidad, transparencia, inclusión, respeto, entre otros valores. La
          presente propuesta tiene como objetivo ahondar a los procesos de
          transparencia de las instituciones públicas, al reunir los datos
          abiertos desconcentrados e inaccesibles que proveen las distintas
          entidades gubernamentales, en los diferentes órdenes de gobierno.
        </text>
      </CCard>
    </CCol>
  </CRow>
);

export default DescripcionProyecto;
