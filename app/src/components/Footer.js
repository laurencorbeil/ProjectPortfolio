import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Footer() {
  return <div className="footer">
    <div className="socialMedia">
        <InstagramIcon /><LinkedInIcon /><EmailIcon /><PhoneAndroidIcon />
    </div>
    <p> &copy; 2024 Lauren Corbeil</p>
    </div>;
}

export default Footer;
