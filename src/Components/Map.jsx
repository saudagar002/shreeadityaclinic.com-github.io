import React from "react";
import "../Style/Map.css";

const Map = () => {
  return (
    <div>
      <div className="hlo">
        <h2>
          <b>Our Clinic</b>
        </h2>
      </div>
      <div className="hello">
        <h3> Shree Aditya Clinic</h3>
        <div className="hii">
          <h3> GuruKrupa Dental Clinic </h3>
        </div>
      </div>

      <div className="map-container">
        {/* First Map with Location A */}
        <iframe
          title="Location A"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59996.390881207255!2d73.7504363!3d19.9759864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec9e3afc710f%3A0x48468e93bffe03bd!2sShree%20Aditya%20Clinic!5e0!3m2!1sen!2sin!&markers=color:red%7Clabel:A%7C19.9759864,73.7504363"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Second Map with Location B */}
        <iframe
          title="Location B"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.4772435104146!2d73.72080059999999!3d19.9884751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded4d2c2863f1%3A0x7128ed2e78dd62ce!2sGurukrupa%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1704359761698!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;
