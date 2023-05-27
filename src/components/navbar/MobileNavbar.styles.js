/* eslint-disable */

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";

export const NavbarStyled = styled(Menu)(({ theme }) => ({
    padding: "0",
    "& a": {
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        textDecoration: "none",
    },
}));

export const NavbarItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "var(--color-footer)"
            : "var(--test-color)",
}));
