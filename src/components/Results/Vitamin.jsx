import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import "./Vitamin.css";
import { AppContext } from '../../context/Context';

const Vitamin = () => {
  const {range, safeTime} = useContext(AppContext);
  const [sufficient, setSufficient] = useState('X');
  const [safe, setSafe] = useState('Y');
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(()=> {
    const setMins = () => {
      const {skinInput} = location.state || {}
      setSufficient(vitD[`${range}`][skinInput-1]);
      setSafe(safeTime['st'+skinInput]);
    }
    setMins();
  }, [])

  const goToLanding = () => {
    navigate("/");
  };

  const goToLocal = () => {
    navigate("/local");
  };

  const vitD = {
    'Low' : ['15-20', '20-30', '30-40', '40-60', '60-80', 'For Low UV that is insufficient amount'],
    'Moderate' : ['10-15', '15-20', '20-30', '30-40', '40-60', '60-80'],
    'High' : ['5-10', '10-15', '15-20', '20-30', '30-40', '40-60'],
    'Very High' : ['2-8', '5-10', '10-15', '15-20', '20-30', '30-40'],
    'Extreme' : ['1-5', '2-8', '5-10', '10-15', '15-20', '20-30']
  };

  return (
    <main className="vitamin">
      <div className="vitamin-title">
        <p className="secondary-font primary-color" >FOR SUFFICIENT VITAMIN D, </p>
        <h1 className="primary-font primary-color">You only need {sufficient} mins of Sun</h1>
        <p className="secondary-font primary-color">AND NOT MORE THAN {safe} MINS TO AVOID SUN BURN !!</p>
      </div>
      <div className="button-group vitamin-button">
        <Button type="primary-button" goTo={goToLocal} value="RESTART"/>
        <Button type="secondary-button" goTo={goToLanding} value="HOME"/>
      </div>
    </main>
  )
}

export default Vitamin
