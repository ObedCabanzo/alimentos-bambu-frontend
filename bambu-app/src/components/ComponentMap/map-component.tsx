"use client";
import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { CustomButton } from "@/components/custom-button";
import IconComponent from "@/components/IconComponent";
import "leaflet/dist/leaflet.css";

const MapComponent = ({
  coordinates,
  text,
  href,
  textColor,
  buttonColor,
  buttonTextColor,
  buttonTextColorHover,
  buttonColorHover,
}: {
  coordinates: { lat: number; lng: number };
  text: string;
  href: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonTextColorHover: string;
  buttonColorHover: string;
}) => {
  const icon = L.icon({
    iconUrl: "./images/image_location.png",
    iconSize: [50, 50],
  });

  const mapRef = useRef<any>(null);

  const handleResetClick = () => {
    mapRef.current !== null ? mapRef.current.setView(coordinates, 15) : null;
  };

  return (
    <MapContainer
      center={coordinates}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      ref={mapRef}
    >
      <button
        className="absolute top-16 left-0 m-[11px] z-[1001] p-1 rounded-sm  bg-white  hover:bg-slate-200 transition-all"
        onClick={handleResetClick}
      >
        <IconComponent
          iconName="icon_location_1"
          className="h-6 w-6 text-gray-500 "
        />
      </button>

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates} icon={icon}>
        <Popup className="w-32 sm:w-64 ">
          <p
            className="opificio-neue font-bold  text-xs w-full"
            style={{
              color: textColor,
            }}
          >
            {text}
          </p>
          <br />
          <CustomButton
            text="Visitar"
            href={href}
            bg_hover={buttonColorHover}
            bg={buttonColor}
            textColor={buttonTextColor}
            textColorHover={buttonTextColorHover}
            className=" w-full py-0 text-xs gap-1 px-2"
            blank={true}
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
