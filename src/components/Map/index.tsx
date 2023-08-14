import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Logo } from "../../images";

const Map: React.FC = () => {
  let mapApiKey = "";
  let mapId = "";

  const center = {
    lat: 41.145297671201895,
    lng: -8.5855087483868,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  try {
    if (process.env.REACT_APP_MAPS_API_KEY) {
      mapApiKey = process.env.REACT_APP_MAPS_API_KEY;
    } else {
      throw "Map API key is missing";
    }
    if (process.env.REACT_APP_MAP_ID) {
      mapId = process.env.REACT_APP_MAP_ID;
    } else {
      throw "Map ID is missing";
    }
  } catch (error) {
    console.warn(error);
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapApiKey,
    id: mapId,
    language: "pt",
  });

  return (
    <>
      {/* {!isLoaded && <div>Loading...</div>} */}
      {isLoaded && (
        <GoogleMap
          options={{ mapId }}
          mapContainerStyle={containerStyle}
          zoom={15}
          center={center}
        >
          <Marker
            position={center}
            title="Douro 39"
            label="Douro 39 Riverside Apartments"
          />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
