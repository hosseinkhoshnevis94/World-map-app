import React from "react";
import ImageMapper from "react-image-mapper";
import map from "../../coords.json";

export default function Map({ clickHandler }) {
  return (
    <div>
      <ImageMapper
        src={"/map.jpg"}
        map={map}
        width={700}
        imgWidth={1000}
        strokeColor={"rgb(114, 235, 208)"}
        onClick={(e) => clickHandler(e.name)}
        active={true}
      />
    </div>
  );
}
