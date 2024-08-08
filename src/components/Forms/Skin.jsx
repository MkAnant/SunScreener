import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Skin.css";

const Skin = () => {
  const navigate = useNavigate();

  const goToVitamin = () => {
    navigate("/vitamin");
  };

  const goToUV = () => {
    navigate("/uv");
  };

  const skinType = [
    {
      type:"1",
      color:"I",
      features:"Very fair skin, white; red or blond hair; light-colored eyes; freckles likely",
      ethnicity:"Scandinavian, Celtic"
    },
    {
      type:"2",
      color:"II",
      features:"Fair skin, white; light eyes; light hair",
      ethnicity:"Northern European (Caucasian)"
    },
    {
      type:"3",
      color:"III",
      features:"Fair skin, cream white; any eye or hair color (very common skin type)",
      ethnicity:"Darker Caucasian (Central Europe)"
    },
    {
      type:"4",
      color:"IV",
      features:"Olive skin, Mediterranean Caucasian skin; dark brown hair; medium to heavy pigmentation",
      ethnicity:"Mediterranean, Asian, Hispanic"
    },
    {
      type:"5",
      color:"V",
      features:"Brown skin, typical Middle Eastern skin; dark hair; rarely sun sensitive",
      ethnicity:"Middle eastern, Latin, light-skinned African-American, Indian"
    },
    {
      type:"6",
      color:"VI",
      features:"Black skin; rarely sun sensitive",
      ethnicity:"Dark-skinned African American"
    },

  ]


  return (
    <main className="skin">
      <Header title={"Skin Type"} subtitle={"SELECT THE TYPE THAT BEST MATCHES YOUR SKIN"}/>
      <form className='skin-form' onSubmit={goToVitamin}>
          <table border={0.5}>
              <thead>
                  <tr className='primary-font primary-color'>
                      <th><h3 className="primary-font primary-color">Type</h3></th>
                      <th><h3 className="primary-font primary-color">Color</h3></th>
                      <th><h3 className="primary-font primary-color">Typical Features</h3></th>
                      <th><h3 className="primary-font primary-color">Ethnicity</h3></th>
                  </tr>
              </thead>
              <tbody>
                {skinType.map(({type:t, color:c, features:f, ethnicity:e}, index) => 
                <tr key={index} className='secondary-font secondary-color'>
                  <td className='td-type'>
                      <input type="radio" id={`input-${c}`} name="skin-input" value={t} />
                      <label htmlFor={`input-${c}`}> {c}</label>
                  </td>
                  <td className="td-color">
                      <div id={`color-${c}`}></div>
                  </td>
                  <td>
                      <p>{f}</p>
                  </td>
                  <td>
                      <p>{e}</p>
                  </td>
                </tr>
                )}
              </tbody>
          </table>

          <div className="button-group">
            <Button type="primary-button" goTo={goToVitamin} value="GET RESULTS"/>
            <Button type="secondary-button" goTo={goToUV} value="GO BACK"/>
          </div>
      </form>
    </main>
  )
}

export default Skin