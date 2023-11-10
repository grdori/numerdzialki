import { PeripheryPolygonLayer } from "./periphery_polygon_layer";
import { useState, Fragment } from "react";

import { dolnoslaskie } from "./dolnoslaskie";
import { kujawsko_pomorskie } from "./kujawsko_pomorskie";
import { lodzkie } from "./lodzkie";
import { lubelskie } from "./lubelskie";
import { lubuskie } from "./lubuskie";
import { malopolskie } from "./malopolskie";
import { mazowieckie } from "./mazowieckie";
import { opolskie } from "./opolskie";
import { podkarpackie } from "./podkarpackie";
import { podlaskie } from "./podlaskie";
import { pomorskie } from "./pomorskie";
import { slaskie } from "./slaskie";
import { swietokrzyskie } from "./swietokrzyskie";
import { warminsko_mazurskie } from "./warminsko_mazurskie";
import { wielkopolskie } from "./wielkopolskie";
import { zachodniopomorskie } from "./zachodniopomorskie";

export const LayersHandler = () => {
  const [geoFilter, setGeoFilter] = useState(null);
  const getGeoFilter = () => geoFilter;

  const elements = [
    dolnoslaskie,
    kujawsko_pomorskie,
    lodzkie,
    lubelskie,
    lubuskie,
    malopolskie,
    mazowieckie,
    opolskie,
    podkarpackie,
    podlaskie,
    pomorskie,
    slaskie,
    swietokrzyskie,
    warminsko_mazurskie,
    wielkopolskie,
    zachodniopomorskie,
  ];

  const listOfLayers = elements.map((el, index) => (
    <PeripheryPolygonLayer key={index} data={el} />
  ));

  return <Fragment>{listOfLayers}</Fragment>;
};
