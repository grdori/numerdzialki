import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { LayersHandler } from "../layers/layers_handler";
import SearchBox from "../Layout/SearchBox";
import Navigationbar from "../Layout/Navigationbar";

const icon = L.icon({
  iconUrl: "./znacznik_na_mapie_duzy.png",
  iconSize: [38, 38],
});

const GeoMap = () => {
  const [position, setPosition] = useState([51.9189046, 19.1343786]);
  const [showIcon, setShowIcon] = useState(false);
  const [zoomMap, setZoomMap] = useState(7);
  const [useLocalisation, setUseLocalisation] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (useLocalisation) {
      map.locate({
        setView: true,
      });
      map.on("locationfound", handleOnLocationFound);
    }
  }, [useLocalisation === true]);

  function handleOnLocationFound(event) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);
    setShowIcon(true);
    circle.addTo(map);
  }

  const MapReset = (props) => {
    const { position } = props;
    const { zoomM } = props;

    useEffect(() => {
      const { current = {} } = mapRef;
      const { leafletElement: map } = current;
      if (position) {
        console.log("My position on the map", position);
        console.log("Zoom", zoomM);
        // map.setView(new L.LatLng(position[0], position[1]), zoomM, {
        //   zoom: {
        //     animate: true,
        //   },
        // });
      }
    }, [position]);
    return null;
  };

  return (
    <>
      <Navigationbar doLacalization={setUseLocalisation} doIcon={setShowIcon} />
      <SearchBox
        setSelectedPosition={setPosition}
        setIcon={setShowIcon}
        setZoom={setZoomMap}
      />
      <MapContainer
        refs={mapRef}
        center={position}
        zoom={zoomMap}
        scrollWheelZoom={true}
        // doubleClickZoom={false}
        // clickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersHandler />
        <MapReset
          position={position}
          zoomM={zoomMap}
          doLocalise={useLocalisation}
        />
        {showIcon && (
          <Marker position={position} icon={icon}>
            <Popup>Popup</Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};

export default GeoMap;
