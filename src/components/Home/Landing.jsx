import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import "./Landing.css";
import FAQ from "./FAQ";

const Landing = () => {
  const navigate = useNavigate();

  const goToLocal = () => {
    navigate("/local");
  };

  return (
    <div>
      <main id="landing">
        <div className="landing-title">
          <h1 className="primary-font primary-color">Sun Screener</h1>
          <div className="button-group">
            <Button
              type="primary-button"
              goTo={goToLocal}
              value="GET STARTED"
            />
            <Link to="faq" smooth={true} duration={300}><Button type="secondary-button" value="FAQs" ></Button></Link>
          </div>
        </div>
      </main>
      <FAQ></FAQ>
    </div>
  );
};

export default Landing;
