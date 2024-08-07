import React from "react";
import "./Button.css";

export default function Button({type, goTo, value}) {
  Button.defaultProps

  return (
    <button
      className={"secondary-font "+ type}
      onClick={goTo}
    >
      {value}
    </button>
  );
}
