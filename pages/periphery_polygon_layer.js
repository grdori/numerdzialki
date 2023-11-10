import { useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";
// import * as L from "leaflet";

export const PeripheryPolygonLayer = ({ data }) => {
  const leafletMap = useMap();
  const [colorMouseOver, setColorMouseOver] = useState("blue");
  const [fillOpacity, setFillOpacity] = useState(0.1);
  const useDefaultColors = () => {
    setColorMouseOver("blue");
    setFillOpacity(0.1);
  };

  return (
    <GeoJSON
      key="geo-json-layer"
      data={data}
      eventHandlers={{
        click: (e) => {
          data.features.map((feature) => {
            const { bbox } = feature;
            leafletMap.fitBounds([
              [bbox[0], bbox[1]],
              [bbox[2], bbox[3]],
            ]);
          });
          useDefaultColors();
          return e.propagatedFrom.feature;
        },
        mouseover: (b) => {
          setColorMouseOver("red");
          setFillOpacity(0.3);
          return b.propagatedFrom.feature;
        },
        mouseout: (c) => {
          useDefaultColors();
          return c.propagatedFrom.feature;
        },
      }}
      style={(feature) => {
        return {
          color: colorMouseOver,
          weight: 0.3,
          fillOpacity: fillOpacity,
        };
      }}
    ></GeoJSON>
  );
};
