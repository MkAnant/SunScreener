import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Overlay from "../Overlay/Overlay";
import Header from "../Header/Header";
import QnA from "./QnA";
import Button from "../Button/Button";
import "./FAQ.css";


const FAQ = () => {
  const navigate = useNavigate();

  const goToLocal = () => {
    navigate("/local");
  };

  return (
    <section id="faq">
      <Overlay />
      <Header title="FAQs" subtitle="FREQUENTLY ASKED QUESTIONS" />
      <div className="faq-list">
        <QnA
          question={"Q1: What is SunScreener?"}
          answer={`A1: SunScreener is a web application that helps you calculate the optimal range of sun exposure
            for getting sufficient vitamin D while preventing sunburn. It also provides personalized safe sun practices
            and recommendations based on your location, timezone, and skin type.`}
        />
        <QnA
          question={"Q2: How does SunScreener calculate the optimal sun duration?"}
          answer={`A2: SunScreener determines the coordinates of your entered location using the OpenStreetMap API.
            It then combines these coordinates with your entered time zone to fetch the UV index from the OpenUV API.
            Using this information, along with your skin type and scientific guidelines for vitamin D synthesis and
            sunburn prevention, it calculates the optimal sun exposure range.`}
        />
        <QnA
          question={"Q3: How do I protect myself from sun damage while using SunScreener?"}
          answer={`A3: While SunScreener helps optimize vitamin D production, it's crucial to balance sun exposure with skin protection.
            Consider wearing protective clothing, using sunscreen, and avoiding peak UV hours to minimize the risk of sunburn.`}
        />
        <QnA
          question={"Q4: Can I use SunScreener anywhere in the world?"}
          answer={`A4: Yes, SunScreener can be used globally, as it relies on the OpenUV and OpenStreetMap APIs,
            which provide worldwide coverage. Just make sure to enter your correct location and update the GMT only
            if you are looking for a different timezone than your current system-logged one for accurate results.`}
        />
        <QnA
          question={"Q5: Do I need to enable location services for SunScreener to work?"}
          answer={`A5: No, you don't need to enable location services. SunScreener uses a default location set for India,
            however, you can manually change the location to match your specific place for more accurate results.`}
        />
        <QnA
          question={"Q6: Is my location data safe with SunScreener?"}
          answer={`A6: Yes, your location data is only used to provide accurate sun exposure calculations and
            is not stored or shared with any third parties.`}
        />
        <QnA
          question={"Q7: Can I customize the settings in SunScreener?"}
          answer={`A7: SunScreener allows you to input your location, time, time-zone and skin-type as of now. Future updates
            may include more customization options based on user feedback.`}
        />
        <QnA
          question={"Q8: Can I use SunScreener if I have sensitive skin?"}
          answer={`A8: Yes, but if you have sensitive skin or are prone to sunburn, consider starting with shorter exposure times
            and gradually increasing them while monitoring your skin's reaction. It's also advisable to consult with a dermatologist.`}
        />
        <QnA
          question={"Q9: Does SunScreener account for sunscreen usage?"}
          answer={`A9: SunScreener currently focuses on providing recommendations based on natural sun exposure without sunscreen.
            Using sunscreen will reduce the amount of UV exposure, which the app does not factor into its calculations.`}
        />
        <QnA
          question={"Q10: Can I use SunScreener indoors or on cloudy days?"}
          answer={`A10: SunScreener is designed for outdoor use, as indoor environments and cloudy weather significantly
            reduce UV exposure. The app may still provide guidance, but results may vary.`}
        />
        <QnA
          question={"Q12: How often should I use SunScreener?"}
          answer={`A12: It's recommended to use SunScreener whenever you're planning sun exposure, especially if your
            routine or location changes. This will help ensure that you get accurate, up-to-date advice.`}
        />
        <QnA
          question={"Q13: Is SunScreener available on mobile devices?"}
          answer={`A13: Yes, SunScreener is accessible via web browsers on both mobile devices and desktops, ensuring
            you can use it anytime, anywhere.`}
        />
        <QnA
          question={"Q14: What if I don’t know my exact skin type?"}
          answer={`A14: If you're unsure of your skin type, SunScreener provides descriptions and examples to help you
            identify it. Selecting the closest match will still give you useful recommendations.`}
        />
        <QnA
          question={"Q15: Are there any limitations to SunScreener’s recommendations?"}
          answer={`A15: While SunScreener provides scientifically backed recommendations, it should not replace professional
            medical advice. Individual factors like existing skin conditions or medical history should be considered in
            consultation with a healthcare provider.`}
        />
      </div>
      <div className="button-group vitamin-button">
          <Link to="landing" smooth={true} duration={300}>
            <Button type="primary-button" value="BACK TO TOP" />
          </Link>
          <Button type="secondary-button" goTo={goToLocal} value="GET STARTED"/>
        </div>
    </section>
  );
};

export default FAQ;
