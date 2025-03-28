import React from 'react';
import logo from "../images/h_logo.png";
import background from "../images/stethoscope-doctor-md-medical-health-hospital.jpg";

const ContactUs = () => {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '50px auto',
   
    padding: '50px',
     border: '2px groove darkred',
    // borderRadius: '4px',
    // backgroundColor: '#f9f9f0',
  };

  const headingStyle = {
    color:'darkred',
    fontSize: '70px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow:'4px 4px 5px black',
    textAlign:'center',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
    fontSize: '30px',
    color:'darkred',
  };

  const infoStyle = {
    marginBottom: '25px',
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, height: '150vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
     }}>
    <div style={containerStyle}>
       
      <h1 style={headingStyle}>Contact Us</h1>
      <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
      <div style={infoStyle}>
        <span style={labelStyle}>Address:</span>
        ABC Street-Near Hanuman Mandir HazratGanj , lucknow, Uttar Pradesh, 273009
      </div>
      <div style={infoStyle}>
        <span style={labelStyle}>Email:</span>
        info@aBC12.ac.in
      </div>
      <div style={infoStyle}>
        <span style={labelStyle}>Phone:</span>
        +91 055-456-7890
      </div>
      <div style={infoStyle}>
        <span style={labelStyle}>Fax:</span>
        +91 123-456-7891
      </div>
      
    </div>
    </div>
  );
};

export default ContactUs;
