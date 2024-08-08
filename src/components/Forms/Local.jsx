import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';
import axios from "axios";
import { addHours, addMinutes, formatISO, parse, format } from 'date-fns';
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Local.css"

const Local = () => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("India");
  const [coordinates, setCoordinates] = useState([22.35,78.67]);

  const [dateTime, setDateTime] = useState(format(new Date(), "yyyy-MM-dd'T'HH:mm"));
  const [gmt, setGmt] = useState("+05:30");
  const [gmtEditable, setGmtEditable] = useState(false);
  const [isoTime, setIsoTime] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const focusInput = () => {
      setGmtEditable(true);
  };

  useEffect(()=>{
    if (gmtEditable) inputRef.current.focus();

  },[gmtEditable])

  useEffect(()=>{
    const getCoordinates = async (address) => {
      try{
        const result = await axios.get(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`);
        const data = result.data[0];
        const coord = [(data.lat/1).toFixed(2), (data.lon/1).toFixed(2)]
        setCoordinates(coord);
      } catch (err) {
        console.log(err);
      }
    }
    const address = `${location} ${country}`
    getCoordinates(address);
  },[location, country]);

  const handleLocation = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  }

  const handleCountry = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
  }

  const handleDateTime = (e) => {
    const newDateTime = e.target.value;
    const date = parse(dateTime, "yyyy-MM-dd'T'HH:mm", new Date());
    const isoStringWithOffset = formatISO(date);

    setDateTime(newDateTime);
    setIsoTime(date.toISOString());
    setGmt(isoStringWithOffset.slice(-6))
    setGmtEditable(false);
  }

  const handleGmt = (e) => {
    const newGmt = e.target.value;
    setGmt(newGmt)
    const newGmtDiff = newGmt.split(':')
    const date = parse(dateTime, "yyyy-MM-dd'T'HH:mm", new Date());
    console.log(date.toISOString());
    console.log(date.toISOString().slice(11,15));
    setIsoTime(date);
  } 

  const goToUV = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    navigate("/uv", { state: { formData: data } });
  };

  const goToLanding = () => {
    navigate("/");
  };

  return (
    <main className="local">
      <Header
        title={"Time and Location"}
        subtitle={"FOR WHEN AND WHERE TO CHECK THE UV INDEX"}
      />
      <form className="local-form" onSubmit={goToUV}>
        
        <div className="local-input">
          <label htmlFor="location" className="secondary-font secondary-color">City / State / Pin :</label>
          <input type="text" id="location" name="location" autoComplete="off" onChange={handleLocation} value={location} />

          <label htmlFor="country" className="secondary-font secondary-color">Country* :</label>
          <input type="text" id="country" name="country" autoComplete="off" onChange={handleCountry} value={country} required />

          <label htmlFor="datetime" className="secondary-font secondary-color">Date and Time* :</label>
          <input type="datetime-local" id="datetime" name="datetime" onChange={handleDateTime} value={dateTime} />
        </div>

        <div className="local-output">
            <label htmlFor="lat" className="secondary-font secondary-color">Lat : </label>
            <input type="number" name="lat" value={coordinates[0]} disabled />

            <label htmlFor="lon" className="secondary-font secondary-color">Lon : </label>
            <input type="number" name="lng" value={coordinates[1]} disabled />
            
            <input type="hidden" id="iso" name="iso" value={isoTime} />

            <label htmlFor="gmt" className="secondary-font secondary-color">Gmt (+/-) : </label>
            <input type="text" name="gmt" className="gmt" value={gmt} disabled={!gmtEditable} ref={inputRef} onChange={handleGmt}/>

            <p className="secondary-font secondary-color" onClick={focusInput}><FaEdit /></p>
        </div>
          


        <div className="button-group">
            <Button type="primary-button" goTo={goToUV} value="GET RESULTS"/>
            <Button type="secondary-button" goTo={goToLanding} value="GO BACK"/>
        </div>

      </form>
    </main>
  );
};

export default Local;
