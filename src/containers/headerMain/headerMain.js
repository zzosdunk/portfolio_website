import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/logo_transparent_web.png";

import { HeaderStyled, HeaderImage, Content } from "./HeaderMain.styles";

function HeaderMain() {
    return (
        <HeaderStyled id="about">
            <Content>
                <Typography variant="h1">Crafted with Passion</Typography>
                <Typography variant="header">
                    <FormattedMessage
                        id="BlogDescription.text"
                        defaultMessage="Welcome to a blog dedicated to game development, where I share my ideas, experiences, and thoughts on creating captivating worlds and engaging gameplay mechanics. Here, you'll find articles focused on game and level design, ranging from the intricacies of gameplay construction to the development of unforgettable levels that immerse players in the game's atmosphere."
                        description="Welcome header on app main page"
                    />
                </Typography>
            </Content>

            <HeaderImage>
                <img src={logo} alt="frontImage" />
            </HeaderImage>
        </HeaderStyled>
    );
}

export default HeaderMain;
