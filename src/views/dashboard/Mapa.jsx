import React from "react";
import GoogleMapReact from "google-map-react";

import "./mapa.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { CCard, CCardHeader, CCardTitle } from "@coreui/react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <CCard>
      <CCardHeader>
        <CCardTitle>{text}</CCardTitle>
      </CCardHeader>
    </CCard>
  </div>
);
const Map = ({ zoomLevel }) => {
  const locacion = {
    address: "Ubicación de la obra",
    lat: 19.0153703,
    lng: -98.2541262,
  };

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyChAKNN_dBGE-2OKMP9ljjMHv3784CRvO8" }}
          defaultCenter={locacion}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={locacion.lat}
            lng={locacion.lng}
            text={locacion.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
