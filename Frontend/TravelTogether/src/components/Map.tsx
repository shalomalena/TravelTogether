import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const mapStyle = {
  height: "300px",
  width: "100%",
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY_HERE",
  });

  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 28.0289837,
    lng: 1.6666663,
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyle}
          center={markerPosition}
          zoom={5}
          onLoad={onLoad}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
