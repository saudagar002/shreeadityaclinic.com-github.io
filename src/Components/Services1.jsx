///////////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import "../Style/Services1.css";
import { Link } from "react-router-dom";

const SingleServicePage = () => {
  const [showAll, setShowAll] = useState(true);

  const services = [
    // ... (your existing service data)

    {
      title: "Orthodontic Treatment",
      content:
        "Orthodontic treatment involves the use of braces or aligners to align teeth and jaws, improving oral function and aesthetics. This personalized approach ensures a healthy, confident smile and optimal bite alignment.",
      imagePath: "/s1.jpg",
    },

    {
      title: "Wisdom Tooth Surgical Removal",
      content:
        "Wisdom tooth surgical removal, or extraction, is a common procedure to address impacted or problematic wisdom teeth. It involves the careful extraction of third molars to alleviate pain, prevent crowding, and maintain oral health.",
      imagePath: "/s3.jpg",
    },
    {
      title: "Root Canal Treatment",
      content:
        "Root canal treatment is a dental procedure aimed at treating infected or damaged pulp within a tooth. The process involves removing the diseased pulp, cleaning, shaping, and sealing the root canals to save the tooth, alleviate pain, and prevent further infection.",
      imagePath: "/s4.jpeg",
    },
    {
      title: "Smile Designing ",
      content:
        "Smile Designing, also known as tooth extraction, is the removal of a tooth from its socket in the jawbone. This procedure is typically performed for severely damaged, decayed, or impacted teeth to alleviate pain and prevent further oral issues.",
      imagePath: "/y1.jpg",
    },

    {
      title: "Digital Tooth Surgical",
      content:
        "Dental Tooth Surgical are titanium posts surgically placed in the jaw to support artificial teeth. They offer a durable, natural-looking solution for missing teeth, promoting oral health and restoring functionality.",
      imagePath: "/y5.webp",
    },

    {
      title: "Dental Implants",
      content:
        "Dental implants are artificial tooth roots surgically placed in the jawbone, providing durable, stable support for crowns, bridges, or dentures, resembling natural teeth in function and appearance.",
        imagePath: "/Services-1.jpg",


  
    },
  ];

  const renderService = (service) => (
    <div className="col-md-6 text-center mt-5" key={service.title}>
      <img
        src={process.env.PUBLIC_URL + service.imagePath}
        alt="Service"
        className="img-fluid mb-4"
      />
      <h2>{service.title}</h2>
      <p>{service.content}</p>
    </div>
  );

  const renderServiceRow = () => (
    <div className="row">{services.map(renderService)}</div>
  );

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mt-5">
      <h1 style={{ color: "black" }}><b>About Our Services</b></h1>
      {showAll ? renderServiceRow() : renderServiceRow().slice(0, 4)}
      {services.length > 4 && (
        <div className="text-center mt-3">
          <Link to="/services">
            {" "}
            {/* Replace "/services1" with your actual route/path */}
            <button className="btn btn-primary">
              {showAll ? "Show More" : "Show All Services"}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleServicePage;
