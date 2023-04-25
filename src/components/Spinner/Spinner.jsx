import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="lds-ripple lds-ripple-costume">
      <div></div>
      <div></div>
    </div>
  );
}
