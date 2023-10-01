import React from "react";
export default function Info({ info, name }) {
  return (
    <>
      {info.flags && (
        <img src={info.flags.svg} alt={info.flags.alt} className="img-fluid" />
      )}
      <ul>
        <li className="my-4 items">
          <span>Country :</span> {name}
        </li>
        <li className="my-4 items">
          <span>Capital :</span> {info.capital}
        </li>
        <li className="my-4 items">
          <span>Region :</span> {info.region}
        </li>
        <li className="my-4 items">
          <span>TimeZone :</span> {info.timezones[0]}
        </li>
        {info.population && (
          <li className="my-4 items">
            <span> Population :</span>{" "}
            {info.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </li>
        )}
      </ul>
    </>
  );
}
