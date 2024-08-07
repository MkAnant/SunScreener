import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Local.css"

const Local = () => {
  const navigate = useNavigate();

  const goToUV = () => {
    navigate("/uv");
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
          <label htmlFor="datetime" class="secondary-font secondary-color">Date and Time* :</label>
          <input type="datetime-local" id="datetime" name="datetime" />

          <label htmlFor="location" class="secondary-font secondary-color">City / State / Pin :</label>
          <input type="text" id="location" name="location" autocomplete="off" />

          <label htmlFor="country" class="secondary-font secondary-color">Country* :</label>
          <input type="text" id="country" name="country" autocomplete="off" />
        </div>

        <div className="local-output">
          <div>
            <input type="text" class="lat" value="" name="lat" disabled />

            <input type="text" class="lng" value="" name="lng" disabled />
          </div>
          <div>
            <input type="text" class="iso" value="" name="iso" disabled />
          </div>
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
