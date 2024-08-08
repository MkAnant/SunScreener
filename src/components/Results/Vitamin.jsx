import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import "./Vitamin.css";

const Vitamin = () => {
  const navigate = useNavigate();

  const goToLanding = () => {
    navigate("/");
  };

  const goToSkin = () => {
    navigate("/skin");
  };

  return (
    <main className="vitamin">
      <div className="vitamin-title">
        <p className="secondary-font primary-color" >FOR SUFFICIENT VITAMIN D, </p>
        <h1 className="primary-font primary-color">You only need X mins of Sun Exposure</h1>
        <p className="secondary-font primary-color">AND NOT MORE THAN Y MINS TO AVOID SUN BURN !!</p>
      </div>
      <div className="button-group vitamin-button">
        <Button type="primary-button" goTo={goToSkin} value="GO BACK"/>
        <Button type="secondary-button" goTo={goToLanding} value="HOME"/>
      </div>
    </main>
  )
}

export default Vitamin
