import logo from "../../assets/logo.png";
import "./Footer.css";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import Slider from "../../components/Slider/Slider";

const Footer = () => {
  return (
    <div className="dz__footer section__padding" id="footer">
      <div className="dz__footer-links">
        <div className="dz__footer-links_logo">
          <img src={logo} alt="dz_logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="dz__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="dz__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="dz__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="dz__footer-copyright"></div>
    </div>
  );
};

export default Footer;
