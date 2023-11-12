import { PeripheryPolygonLayer } from "./periphery_polygon_layer";
import { useState, Fragment } from "react";

import { dolnoslaskie } from "../data/voivodeships/dolnoslaskie";
import { kujawsko_pomorskie } from "../data/voivodeships/kujawsko_pomorskie";
import { lodzkie } from "../data/voivodeships/lodzkie";
import { lubelskie } from "../data/voivodeships/lubelskie";
import { lubuskie } from "../data/voivodeships/lubuskie";
import { malopolskie } from "../data/voivodeships/malopolskie";
import { mazowieckie } from "../data/voivodeships/mazowieckie";
import { opolskie } from "../data/voivodeships/opolskie";
import { podkarpackie } from "../data/voivodeships/podkarpackie";
import { podlaskie } from "../data/voivodeships/podlaskie";
import { pomorskie } from "../data/voivodeships/pomorskie";
import { slaskie } from "../data/voivodeships/slaskie";
import { swietokrzyskie } from "../data/voivodeships/swietokrzyskie";
import { warminsko_mazurskie } from "../data/voivodeships/warminsko_mazurskie";
import { wielkopolskie } from "../data/voivodeships/wielkopolskie";
import { zachodniopomorskie } from "../data/voivodeships/zachodniopomorskie";

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
