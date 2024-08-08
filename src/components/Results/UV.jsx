import React from "react";
import {useNavigate } from "react-router-dom";
import "./UV.css"

const UV = () => {
  const navigate = useNavigate();

  const goToSkin = () => {
    navigate("/skin");
  };

  return (
    <main className="uv" onClick={goToSkin}>
      <div className="uv-title">
        <h1 className="primary-font ">UV INDEX</h1>
        <h2 className="secondary-font">uv </h2>
        <h3 className="secondary-font"> range </h3>
      </div>
    </main>
  );
};

export default UV;
