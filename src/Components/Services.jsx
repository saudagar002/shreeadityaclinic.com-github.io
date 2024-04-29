import React from "react";

const SingleServicePage = () => {
  const services = [
    {
      title: "Orthodontic Treatment",
      content:
        "Orthodontic treatment involves the use of braces or aligners to align teeth and jaws, improving oral function and aesthetics. This personalized approach ensures a healthy, confident smile and optimal bite alignment.",
      imagePath: "/s1.jpg",
    },
    // ... (other service objects)

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
        "Dental extraction, also known as tooth extraction, is the removal of a tooth from its socket in the jawbone. This procedure is typically performed for severely damaged, decayed, or impacted teeth to alleviate pain and prevent further oral issues.",
      imagePath: "/y1.jpg",
    },

    // {
    //   title: "Digital Tooth Surgical",
    //   content:
    //     "Dental implants are titanium posts surgically placed in the jaw to support artificial teeth. They offer a durable, natural-looking solution for missing teeth, promoting oral health and restoring functionality.",
    //   imagePath: "/medical/public/images (4).jpeg",
    // },

  

    {
      title: "Ultrasonic Scaling & polishing",
      content:
        "Dental extraction, also known as tooth extraction, is the removal of a tooth from its socket in the jawbone. This procedure is typically performed for severely damaged, decayed, or impacted teeth to alleviate pain and prevent further oral issues.",
      imagePath: "/y5.webp",
    },

    // {
    //   title: "Dental Implants",
    //   content:
    //     "Dental implants are titanium posts surgically placed in the jaw to support artificial teeth. They offer a durable, natural-looking solution for missing teeth, promoting oral health and restoring functionality.",
    //   imagePath: "/Z1.jpeg",
    // },

    {
      title: "Dental Bleaching Treatment  ",
      content:
        "Dental extraction, also known as tooth extraction, is the removal of a tooth from its socket in the jawbone. This procedure is typically performed for severely damaged, decayed, or impacted teeth to alleviate pain and prevent further oral issues.",
      imagePath: "/s6.jpg",
    },

    {
      title: "Fixed Partial Denture (FPD)",
      content:
        "Pediatric dentistry focuses on the oral health of children, from infancy through adolescence. Pediatric dentists specialize in providing age-appropriate dental care, preventive measures, and education to promote healthy smiles and lifelong oral hygiene habits.",
      imagePath: "/y1.jpg",
    },

    {
      title: "Wisdom Tooth Surgical Removal",
      content:
        "Wisdom tooth surgical removal, or extraction, is a common procedure to address impacted or problematic wisdom teeth. It involves the careful extraction of third molars to alleviate pain, prevent crowding, and maintain oral health.",
      imagePath: "/s3.jpg",
    },

    {
      title: "Removable Partial Denture ",
      content:
        "Removable partial dentures (RPDs) are dental prostheses designed to replace one or more missing teeth in a non-permanent manner. An RPD typically consists of a framework made from metal or acrylic resin, with artificial teeth designed to match the natural ones. The framework uses clasps to attach to existing teeth or dental implants, providing stability and retention. These clasps can be metallic or tooth-colored acrylic, allowing for a balance between function and aesthetics..",
      imagePath: "/Services-2.jpg",
    },

    {
      title: "Dental Extraction ",
      content:
        "Dental extraction, also known as tooth extraction, is the removal of a tooth from its socket in the jawbone. This procedure is typically performed for severely damaged, decayed, or impacted teeth to alleviate pain and prevent further oral issues.",
      imagePath: "/Services-1.jpg",
    },

    {
      title: "Fixed Partial Denture (FPD)",
      content:
        "Pediatric dentistry focuses on the oral health of children, from infancy through adolescence. Pediatric dentists specialize in providing age-appropriate dental care, preventive measures, and education to promote healthy smiles and lifelong oral hygiene habits.",
      imagePath: "/y1.jpg",
    },

    {
      title: "Dental implants ",
      content:
        "Dental implants are artificial tooth roots surgically placed in the jawbone, providing durable, stable support for crowns, bridges, or dentures, resembling natural teeth in function and appearance ",
        
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

  const renderServiceRow = (startIdx, endIdx) => (
    <div key={`row-${startIdx}-${endIdx}`}>
      <div className="row">
        {services.slice(startIdx, endIdx).map(renderService)}
      </div>
      <hr className="my-5" />
    </div>
  );

  return (
    <div className="container mt-5">
      <h1 style={{ color: "black" }}>About Our Services</h1>
      {renderServiceRow(0, 2)}
      {renderServiceRow(2, 4)}
      {renderServiceRow(4, 6)}
      {renderServiceRow(6, 8)}
      {renderServiceRow(8, 10)}
      {renderServiceRow(10, 12)}
      {renderServiceRow(12, 14)}
    </div>
  );
};

export default SingleServicePage;
