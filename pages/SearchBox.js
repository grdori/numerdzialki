import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import classes from "./SearchBox.module.css";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const SearchBox = (props) => {
  const [searchText, setSearchText] = useState("Wpisz adres");
  const [listPlaces, setListPlaces] = useState([]);
  const [openList, setOpenList] = useState(false);

  return (
    <>
      <Form className="form-center">
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => {
            const params = {
              q: searchText,
              format: "json",
              addressdetails: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlaces(JSON.parse(result));
              })
              .catch((err) => console.log("err", err));
            setOpenList(true);
          }}
        >
          <b>Szukaj</b>
        </button>
        <FormControl
          type="text"
          placeholder={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        {openList && (
          <ul className="list-group list-group-flush">
            {listPlaces.map((item) => {
              return (
                <div key={item?.place_id}>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      props.setSelectedPosition([item.lat, item.lon]);
                      setOpenList(false);
                      props.setIcon(true);
                      props.setZoom(15);
                    }}
                  >
                    <img src="./znacznik_na_mapie_maly.png" />
                    {item?.display_name}
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </Form>
    </>
  );
};

export default SearchBox;
