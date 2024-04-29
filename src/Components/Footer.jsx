import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="" className="me-3" />
                Our Treatments
              </h6>
              <div>
                <p>Orthodontic Treatment</p>
                <p>Pediatric Dentistry</p>
                <p>Dental Implants</p>
                <p>Fixed Partial Denture</p>
                <p>Digital Dental X-Ray</p>

                <p>Dental Extraction</p>
                <p>Smile Designing</p>
              </div>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
        <p>
          <a href="#!" className="text-reset" style={{ textDecoration: 'none' }}>
            <br/>
            <p>Complete Denture</p>
            <p>Wisdom Tooth Surgical Removal</p>
            <p> Root Canal Treatment</p>
            <p> Dental Bleaching Tratment</p>
            <p> Ultrasonic 
              Scaling & polishing</p>
            <p> Dental Extraction</p>
          </a>
        </p>
      </MDBCol>

      <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
  <h6 className="text-uppercase fw-bold mb-4">Clinics</h6>
  <p>
    <span className="text-reset">
      {/* <Map /> */}
      Shree Aditya Dental & General Clinic
    </span>
  </p>
  <p>
    <span className="text-reset">
      {/* <Map /> */}
      Gurukrupa Dental Clinic
    </span>
  </p>
</MDBCol>

        

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Shree Aditya Dental & General Clinic
                <br /> (Shop No 1, Vinayak Residency, Iti Ambad Rd, Kartikey
                Nagar Nashik 422010 )
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Gurukrupa Dental Clinic (Shop No 9, Ramji Complex, Ashok Nagar
                Rd Satpur Colony, Nashik 422012)
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                drvishalpatel2980@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 9730205515
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
