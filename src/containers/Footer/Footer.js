/* eslint-disable */

import { linkedin, github, facebook, instagram } from "./imports";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import {
    FooterStyled,
    HomeLink,
    Links,
    Socials,
    Copyright,
    CopyrightDate,
} from "./Footer.styles";

function Footer() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <FooterStyled id="footer">
            <HomeLink>
                <a href="#home">
                    <ArrowUpwardIcon />
                </a>
            </HomeLink>
            <Links>
                <Socials>
                    <a
                        href="https://www.linkedin.com/in/denys-zosym-498b39141/"
                        target="_blank"
                    >
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://github.com/zzosdunk" target="_blank">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.facebook.com/zzosdunk" target="_blank">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/zonikmus/"
                        target="_blank"
                    >
                        <img src={instagram} alt="instagram" />
                    </a>
                </Socials>
            </Links>

            <Copyright>
                <CopyrightDate component="p">
                    ©{year} - Denys Zosym
                </CopyrightDate>
            </Copyright>
        </FooterStyled>
    );
}

export default Footer;
