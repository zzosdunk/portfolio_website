import "./header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="dz__header section__padding" id="home">
      <div className="dz__header-content">
        <h1 className="gradient__text">Welcome!</h1>
        <p>
          I am a young guy, who has a huge passion for developing a video-games.
          I'm providing my personal blog about game development, which you can
          rate following the Instagram link above. I am easy in communication
          and always open to new acquaintances. Love traveling, researching new
          technologies not only about game development branch, but also in the
          whole world also. Playing on musical instruments and love active
          holidays.
        </p>

        {/* <div className="dz__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div> */}

      </div>

      <div className="dz__header-image">
        <img src={ai} alt="frontImage"/>
      </div>
    </div>
  );
};

export default Header;
