import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import cvimg from "../../assets/CV_img.png";

import { HeaderStyled, HeaderImage, Content } from "./Header.styles";

function Header() {
    return (
        <HeaderStyled id="about">
            <Content>
                <Typography variant="h1">
                    <FormattedMessage
                        id="headerGreetings.text"
                        defaultMessage="Welcome!"
                        description="Greetings"
                    />
                </Typography>
                <Typography variant="header">
                    <FormattedMessage
                        id="header.text"
                        defaultMessage="For more than three years I have been creating various game and
          business projects on Unity, but the beginning of my journey in IT lies
          in web design. Even at school, I loved to take part in various
          olympiads, created websites with the help of different website
          constructors, and now I would like to return to the roots, turning my
          old hobby into my main activity and start writing a new chapter in my
          professional career dedicated to web development!"
                        description="Welcome header on app main page"
                    />
                </Typography>
            </Content>

            <HeaderImage>
                <img src={cvimg} alt="frontImage" />
            </HeaderImage>
        </HeaderStyled>
    );
}

export default Header;
