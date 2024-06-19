"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";
import IconComponent from "./IconComponent";
import { CustomButton } from "./custom-button";
const MapComponent = () => {
  const [geoData, setGeoData] = useState({
    lat: 4.639231543829626,
    lng: -74.1632130466491,
  });
  const icon = L.icon({ iconUrl: "../assets/images/image_location.png" });
  return (
   
      <MapContainer
        center={geoData}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={geoData} icon={icon}>
          <Popup className=" w-100% ">
            <p className="opificio-neue font-bold text-[#3871C1] text-xs">
              Si deseas visitar nuestra sede central, presiona el siguiente botón{" "}
            </p>
            <br />
            <CustomButton
              text="Visitar"
              href="https://www.google.com/maps/place/Alimentos+Bamb%C3%BA/@4.6389749,-74.1658094,17z/data=!4m16!1m9!3m8!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!2sAlimentos+Bamb%C3%BA!8m2!3d4.6389749!4d-74.1632345!9m1!1b1!16s%2Fg%2F11f__h5cxg!3m5!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!8m2!3d4.6389749!4d-74.1632345!16s%2Fg%2F11f__h5cxg?entry=ttu"
              bg_hover="#3871C1"
              bg="#67B1EB"
              textColor="#fff"
              className="w-full py-0 text-xs gap-1"
              blank={true}
            />
          </Popup>
        </Marker>
      </MapContainer>
   
  );
};

export default MapComponent;
