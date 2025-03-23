import { Typography, useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";
import logo from "../../assets/logo_transparent_web.png";
import cvimg from "../../assets/CV_img.png";

import { HeaderStyled, HeaderImage, Content } from "./HeaderMain.styles";

function HeaderMain() {
    const theme = useTheme();
    return (
        <>
            <HeaderStyled id="about">
                <HeaderImage>
                    <img src={cvimg} alt="frontImage" />
                </HeaderImage>
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
                            defaultMessage="I am currently working as a Principal Level Designer with over six years of experience in the industry, specializing in first-person and third-person games. My expertise lies in crafting immersive environments, developing core level design principles, and shaping engaging gameplay experiences. Throughout my career, I have contributed to a variety of projects, from open-world exploration to tightly designed linear experiences."
                            description="Welcome header on app main page"
                        />
                    </Typography>
                </Content>
            </HeaderStyled>

            <HeaderStyled id="about">
                <Content>
                    <Typography
                        variant="h1"
                        sx={{ color: theme.palette.tertiary.main }}
                    >
                        <FormattedMessage
                            id="BlogTitleHomePage.text"
                            defaultMessage="Crafted with Passion"
                            description="Blog Description"
                        />
                    </Typography>
                    <Typography variant="header">
                        <FormattedMessage
                            id="BlogDescription.text"
                            defaultMessage="A blog dedicated to game development, where I share my ideas, experiences, and thoughts on creating captivating worlds and engaging gameplay mechanics. Here, you'll find articles focused on game and level design, ranging from the intricacies of gameplay construction to the development of unforgettable levels that immerse players in the game's atmosphere."
                            description="Blog Description"
                        />
                    </Typography>
                </Content>

                <HeaderImage>
                    <img src={logo} alt="frontImage" />
                </HeaderImage>
            </HeaderStyled>
        </>
    );
}

export default HeaderMain;
