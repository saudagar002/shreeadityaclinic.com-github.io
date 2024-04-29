import React from "react";
import "../Style/Safety.css";
// import safe1 from "../Components/Assets/safe1.jpg";
import safe2 from "../Components/Assets/safe2.png";
import safe5 from "../Components/Assets/safe5.png";
import safe4 from "../Components/Assets/safe4.png";
import safe3 from "../Components/Assets/safe3.png";
function Safety() {
  return (
    <div className="hlo">
      <h3>__ Smyle at Aditya __</h3>
      <h1>You’re Super-Safe Here</h1>

      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/services-1.jpg"}
          alt="smile1.jpg"
        />
      </div>

      <div className="image-description">
        <h2>Excellent treament Quality </h2>
        <p>
          Zero-compromise on quality dentistry is what SmyleXL is known for.
          Here, we prioritize your safety above all. Our state-of-the-art
          facilities and rigorous safety protocols ensure a secure environment
          for your well-being. The image above illustrates some of the key
          safety measures we have in place. The highly experienced team of
          dentists at every SmyleXL centre ensures the best dental treatments
          for you.
        </p>
      </div>
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/services-2.jpg"}
          alt="smile1.jpg"
        />
      </div>

      <div className="image-description">
        <h2>Meet Our Safety Measures</h2>
        <p>
          Here, we prioritize your safety above all. Our state-of-the-art fHere,
          we prioritize your safety above all. Our state-of-the-art facilities
          and rigorous safety protocols ensure a secure environment for your
          well-being. The image above illustrates some of the key safety
          measures we have in place. acilities and rigorous safety protocols
          ensure a secure environment for your well-being. The image above
          illustrates some of the key safety measures we have in place.
        </p>
      </div>

      {/* <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/services-3.jpg"}
          alt="smile1.jpg"
        />
      </div>

      <div className="image-description">
        <h2>Meet Our Safety Measures</h2>
        <p>
          Here, we prioritize your safety above all. Our state-of-the-art
          facilities Here, we prioritize your safety above all. Our
          state-of-the-art facilities and rigorous safety protocols ensure a
          secure environment for your well-being. The image above illustrates
          some of the key safety measures we have in place. and rigorous safety
          protocols ensure a secure environment for your well-being. The image
          above illustrates some of the key safety measures we have in place.
        </p>
      </div> */}

      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + "/services-5.jpg"}
          alt="smile1.jpg"
        />
      </div>
      <div className="image-description">
        <h2>Excellent treament Quality </h2>
        <p>
          Excellent dental treatment quality hinges on several key elements.
          First, it requires a team of highly skilled practitioners, including
          dentists, hygienists, and dental assistants, who are committed to
          continuous learning and staying updated with the latest advancements
          in dental care. These professionals should offer comprehensive
          services that cover a broad range of dental needs, from routine
          cleanings and preventive care to more complex procedures like root
          canals, implants, and cosmetic dentistry.
        </p>
      </div>
    </div>
  );
}

export default Safety;
