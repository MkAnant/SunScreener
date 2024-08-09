import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import axios from "axios";
import "./UV.css";

const UV = () => {
  const {range, setRange, setSafeTime} = useContext(AppContext);
  const [uvValue, setUvValue] = useState(0);
  const [colors, setColors] = useState(["#000", "#FFF", "#000", "#FFF"]);
  const [gradient, setGradient] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

  useEffect(() => {
    const calculateUV = () => {
      try {
        // const headers = { "x-access-token": "openuv-c10t8crlw619zja-io" };
        // let result = await axios.get(
        //   `https://api.openuv.io/api/v1/uv?lat=${formData.lat}&lng=${formData.lng}&alt=100&dt=${formData.iso}`,
        //   { headers }
        // );
        // result = result.data.result;
        // setSafeTime(result["safe_exposure_time"]);
        console.log(data);
        setSafeTime({st1:"15", st2:"25", st3:"35", st4:"45", st5:"55", st6:"65"})
        setUvValue(1);
      } catch (err) {
        console.log(err);
      }
    };
    calculateUV();
  }, []);

  useEffect(() => {
    const getGradient = () => {
      switch (true) {
        case uvValue >= 0 && uvValue < 3:
          setRange("Low");
          setColors(["#30C5D2", "#558B2F"]);
          break;
        case uvValue >= 3 && uvValue < 6:
          setRange("Moderate");
          setColors(["#558B2F", "#F9A825"]);
          break;
        case uvValue >= 6 && uvValue < 8:
          setRange("High");
          setColors(["#F9A825", "#EF6C00"]);
          break;
        case uvValue >= 8 && uvValue < 11:
          setRange("Very High");
          setColors(["#EF6C00", "#B71C1C"]);
          break;
        case uvValue >= 11:
          setRange("Extreme");
          setColors(["#B71C1C", "#6A1B9A"]);
          break;
        default:
          setRange("Error");
          break;
      }
    };
    getGradient();
  }, [uvValue]);

  useEffect(()=>{
    setGradient(`linear-gradient(-135deg, ${colors.join(", ")})`);
  }, [colors])

  const goToSkin = () => {
    navigate("/skin");
  };

  return (
    <main
      className="uv"
      style={{ "--dynamic-gradient": gradient }}
      onClick={goToSkin}
    >
      <div className="uv-title">
        <h1 className="primary-font">UV INDEX</h1>
        <h2 className="primary-font">{uvValue}</h2>
        <h3 className="primary-font">{range}</h3>
      </div>
    </main>
  );
};

export default UV;
