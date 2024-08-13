import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { FaSun } from 'react-icons/fa';
import axios from "axios";
import "./UV.css";

const UV = () => {
  const {range, setRange, setSafeTime} = useContext(AppContext);
  const [uvValue, setUvValue] = useState("Calculating...");
  const [colors, setColors] = useState(["#000", "#FFF"]);
  const [gradient, setGradient] = useState("");
  const [protection, setProtection] = useState(["Generating protective measures..."])
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

  useEffect(() => {
    const calculateUV = async () => {
      try {
        const headers = { "x-access-token": "openuv-c10t8crlw619zja-io" };
        let result = await axios.get(
          `https://api.openuv.io/api/v1/uv?lat=${data.lat}&lng=${data.lng}&alt=100&dt=${data.iso}`,
          { headers }
        );
        result = result.data.result;
        setSafeTime(result["safe_exposure_time"]);
        setUvValue(result.uv);
        console.log(result);
        console.log(data.iso);
      } catch (err) {
        console.log(err);
        setSafeTime({
          st1:`${Math.floor(11.11*2.5)}`,
          st2:`${Math.floor(11.11*3)}`,
          st3:`${Math.floor(11.11*4)}`,
          st4:`${Math.floor(11.11*5)}`,
          st5:`${Math.floor(11.11*8)}`,
          st6:`${Math.floor(11.11*15)}`
        });
        setUvValue(11);
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
          setProtection(protectionMeasures[0].split('.'));
          break;
        case uvValue >= 3 && uvValue < 6:
          setRange("Moderate");
          setColors(["#558B2F", "#F9A825"]);
          setProtection(protectionMeasures[1].split('.'));
          break;
        case uvValue >= 6 && uvValue < 8:
          setRange("High");
          setColors(["#F9A825", "#EF6C00"]);
          setProtection(protectionMeasures[2].split('.'));
          break;
        case uvValue >= 8 && uvValue < 11:
          setRange("Very High");
          setColors(["#EF6C00", "#B71C1C"]);
          setProtection(protectionMeasures[3].split('.'));
          break;
        case uvValue >= 11:
          setRange("Extreme");
          setColors(["#B71C1C", "#6A1B9A"]);
          setProtection(protectionMeasures[4].split('.'));
          break;
        default:
          setRange("How Strong the Sun is..");
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

  const protectionMeasures = [
    "Minimal sun protection required for normal activity. Wear sunglasses on bright days.If outside for more than one hour, cover up and use sunscreen. Reflection off snow can nearly double UV strength, so wear sunglasses and apply sunscreen on your face",
    "Take precautions by covering up, and wearing a hat, sunglasses and sunscreen, especially if you will be outside for 30 minutes or more. Look for shade near midday when the sun is strongest",
    "Protection required - UV damages the skin and can cause sunburn. Reduce time in the sun between 11 am and 3 pm and take full precaution by seeking shade, covering up exposed skin, wearing a hat and sunglasses, and applying sunscreen",
    "Extra precaution required - unprotected skin will be damaged and can burn quickly. Avoid the sun between 11 am and 3 pm and seek shade, cover up, and wear a hat, sunglasses and sunscreen",
    "Take full precaution. Unprotected skin will be damaged and can burn in minutes. Avoid the sun between 11 am and 3 pm, cover up, and wear a hat, sunglasses and sunscreen. Don’t forget that white sand and other bright surfaces reflect UV and increase UV exposure"
  ]

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
        {protection.map((item, index) =><p key= {index}className="primary-font"><FaSun /> {item} <FaSun /><br /></p>)}
      </div>
    </main>
  );
};

export default UV;
