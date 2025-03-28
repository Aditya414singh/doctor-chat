import React from 'react';
// import img from '../images/h_logo.png';
import logo from "../images/h_logo.png";
import img from "../images/360_F_467371208_2cBvWthKecbY7PPW7rxmz99pKSkJPDPm.jpg";
import './style.css';
import background from "../images/stethoscope-doctor-md-medical-health-hospital.jpg";

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '30px',
    // backgroundColor: '#f9f9f0',
    // border: '6px groove darkred',
    borderRadius: '4px',
    color: 'darkred',
    
  };

  const headingStyle = {
    
    marginBottom: '20px',
    fontSize:'70px',
    textAlign:'center',
    fontWeight:'bold',
    textShadow:'4px 4px 4px black'
  };

  const paragraphStyle = {
    lineHeight: '1.5',
    textAlign: 'justify',
    marginBottom: '10px',
    color:'black',
    fontSize:'20px',
    
  };
  
  


  return (
    <div style={{ backgroundImage: `url(${background})`, height: '150vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}>
    <div style={containerStyle}>

      {/* <img style={{marginLeft:`120px`,height:`220px`,width:`550px`,border:`1px solid black`}} src={img}/> */}

      <h2 style={headingStyle}>About Us</h2>
      <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
      <p style={paragraphStyle}>
        Welcome to ABC Hospital, a leading healthcare institution dedicated to providing exceptional medical services. With state-of-the-art equipment, highly skilled medical professionals, and a patient-centered approach, we strive to deliver the highest quality care to our patients.
      </p>
      <p style={paragraphStyle}>
        Our hospital is equipped with the latest technology and cutting-edge medical equipment to ensure accurate diagnoses and effective treatments. From advanced imaging systems and diagnostic tools to state-of-the-art surgical equipment, we are committed to staying at the forefront of medical innovation.
      </p>
      <p style={paragraphStyle}>
        At ABC Hospital, we offer a comprehensive range of services to cater to the diverse healthcare needs of our patients. Our specialties include cardiology, oncology, neurology, orthopedics, obstetrics and gynecology, pediatrics, gastroenterology, pulmonology, and more. We also provide comprehensive diagnostic services, rehabilitation programs, and a variety of support services to ensure holistic patient care.
      </p>
      <p style={paragraphStyle}>
        We take pride in our team of dedicated medical professionals who are experts in their respective fields. Our doctors, surgeons, nurses, and support staff work together to provide personalized care, prioritize patient well-being, and strive for the best possible outcomes. We believe in fostering a compassionate and supportive environment for our patients, ensuring their comfort and peace of mind throughout their healthcare journey.
      </p>
      <p style={paragraphStyle}>
        At ABC Hospital, we are deeply committed to the health and wellness of our community. We actively engage in health education programs, preventive health screenings, and community outreach initiatives to promote wellness and contribute to the overall well-being of the population we serve.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
