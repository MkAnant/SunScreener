import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button"
import "./Landing.css"

const Landing = () => {
  const navigate = useNavigate();

  const goToLocal = () => {
    navigate("/local");
  }

  return (
    <main className="landing">
      <div className="landing-title">
        <h1 className="primary-font primary-color">Sun Screener</h1>
        <div className="button-group">
          <Button type="primary-button" goTo={goToLocal} value="GET STARTED"/>
          <a href="#faq"><Button type="secondary-button" value="FAQs"/></a>
        </div>
      </div>
    </main>
  );
};

export default Landing;
