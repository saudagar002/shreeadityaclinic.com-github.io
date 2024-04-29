import React, { useEffect, useRef } from "react";
import "../Style/Hero.css";
import Services1 from "./Services1";
import Contact from "./Contact";
import Map from "./Map";
import { Carousal, TextCarousel } from "./Carousal";

function Hero() {
  const underlineRef = useRef(null);

  useEffect(() => {
    const textWidth = underlineRef.current.offsetWidth;
    const lastTwoDigitsWidth = textWidth % 100;
    underlineRef.current.style.width = `${lastTwoDigitsWidth}px`;
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hand-hand-icon">
            <p className="underline-last-two" style={{ whiteSpace: "nowrap" }}>
              Your Smile, Our Passion! <br />{" "}
              <h1>
                Welcome to Exceptional
                <br />
                Dental Care
              </h1>
            </p>

            <span className="underline" ref={underlineRef}></span>
          </div>
        </div>
      </div>

      <Services1 />
      {/* <Carousal /> */}
      {/* <Contact /> */}
      <Map />
    </>
  );
}

export default Hero;
