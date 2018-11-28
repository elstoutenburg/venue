import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade delay={500}>
      <footer className="bck_red">
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">
          The Venue 2018. All rights reserved.
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
