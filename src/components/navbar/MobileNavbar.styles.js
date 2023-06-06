import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";

export const NavbarStyled = styled(Menu)(({ theme }) => ({
    "& a": {
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        textDecoration: "none",
    },
    "& .MuiPaper-root": {
        background: theme.palette.mode === "dark" ? "#031b34" : "#22b6fb",
    },
}));

export const NavbarItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#031b34" : "#22b6fb",
}));
