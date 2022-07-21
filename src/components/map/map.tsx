import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

interface MapProps {
  position: Array<number>;
}

export default function Map(props: MapProps) {
  return (
    <div id="map">
      <MapContainer
        center={[props.position[0], props.position[1]]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.position[0], props.position[1]]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
