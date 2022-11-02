import { linkedin, github, facebook, instagram } from "./imports";
import arrow from "../../assets/upArrow.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="dz__footer section__padding" id="footer">
      <div className="dz__footer-links_homeLink">
      <a href="#home"><img src={arrow} alt="main"/></a>
      </div>
      <div className="dz__footer-links">
        <div className="dz__footer-links_div">
          <a href="https://www.linkedin.com/in/denys-zosym-498b39141/"><img src={linkedin} alt="linkedin"/></a>
          <a href="https://github.com/zzosdunk"><img src={github} alt="github"/></a>
          <a href="https://www.facebook.com/zzosdunk"><img src={facebook} alt="facebook"/></a>
          <a href="https://www.instagram.com/zonikmus/"><img src={instagram} alt="instagram"/></a>
        </div>
      </div>

      <div className="dz__footer-copyright"><p>© 2022 - Denys Zosym</p></div>
    </div>
  );
};

export default Footer;
