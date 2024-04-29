// About.js
import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h2> Our Clinic</h2>

          <p>
            At our dental care hospital, we're committed to brightening smiles
            and improving lives. With a passionate team of skilled
            professionals, we offer personalized care tailored to each patient's
            needs. From routine check-ups to advanced treatments, we prioritize
            comfort and excellence in every procedure.   </p>
            
            
             <p> Our state-of-the-art
            facilities ensure the highest standards of hygiene and safety. With
            a focus on preventive care and patient education, we empower
            individuals to achieve optimal oral health. Trust us to provide
            compassionate dental care that exceeds expectations, because your
            smile is our priority. Welcome to a place where dental excellence
            meets genuine care.
       </p>
        
        </div>

        <div className="col-md-5">
          <img
            src={process.env.PUBLIC_URL + "/21716-pediatrician.jpg"}
            alt="Clinic"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
