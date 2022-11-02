import "./header.css";
import cvimg from "../../assets/CV_img.png";

const Header = () => {
  return (
    <div className="dz__header section__padding" id="about">
      <div className="dz__header-content">
        <h1 className="gradient__text">Welcome!</h1>
        <p>
          For more than three years I have been creating various game and
          business projects on Unity, but the beginning of my journey in IT lies
          in web design. Even at school, I loved to take part in various
          olympiads, created websites with the help of different website
          constructors, and now I would like to return to the roots, turning my
          old hobby into my main activity and start writing a new chapter in my
          professional career dedicated to web development!
        </p>
      </div>

      <div className="dz__header-image">
        <img src={cvimg} alt="frontImage" />
      </div>
    </div>
  );
};

export default Header;
