import React from "react";
import dynamic from "next/dynamic"

import "leaflet/dist/leaflet.css";
// import "antd/dist/antd.variable.min.css";

const App = () => {
  const GeoMap = dynamic(() => import("../dynamic/Map/GeoMap"), { ssr:false })
  return <GeoMap />;
};

export default App
