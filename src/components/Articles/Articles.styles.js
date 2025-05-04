/* eslint-disable import/prefer-default-export */
import { styled, Typography, CardMedia, TableCell } from "@mui/material";
import { Link } from "react-router-dom";

export const ImageBlock = styled("div")({
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
});

export const Image = styled(CardMedia)({
    width: "70%", // Scale to 40% of the original width
    height: "auto", // Maintain aspect ratio
    margin: "auto", // Center the image horizontally
    transition: "transform 0.3s ease, z-index 0.3s ease, borderRadius 1s ease",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.5)", // Увеличение изображения
        zIndex: 2, // Вывод поверх других элементов
    },
});

export const ImageDescription = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontStyle: "italic", // Italic to distinguish description
    marginTop: "5px",
    textAlign: "center",
    color: theme.palette.mode === "dark" ? "#848884" : "#36454F",
}));

export const BlockHeader = styled(Typography)(({ theme }) => ({
    fontSize: "23px",
    fontWeight: "bold",
    width: "80%",
    marginTop: "20px",
    marginBottom: "20px",
    color: theme.palette.mode === "dark" ? "#f0d43a" : "#22edfb",
}));

export const Text = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "500",
    width: "100%",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
}));

export const StyledCell = styled(TableCell)(({ theme }) => ({
    fontSize: "16px",
    textAlign: "center",
    fontWeight: 500,
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        padding: "8px",
    },
}));

// Контейнер для списка
export const ListContainer = styled("ul")(() => ({
    listStyle: "none", // Убираем стандартные маркеры списка
    margin: "0",
    padding: "0",
    width: "100%",
    maxWidth: "800px", // Максимальная ширина для списка
}));

// Элементы списка
export const ListItemStyled = styled("li")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
    padding: "0",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
}));

// Маркер для элемента списка
export const ListMarkerStyled = styled("div")(({ theme }) => ({
    width: "12px",
    height: "12px",
    border: `2px solid ${theme.palette.mode === "dark" ? "#fff" : "#000"}`,
    borderRadius: "50%",
    marginRight: "1rem",
    flexShrink: "0",
}));

// Текст внутри элемента списка
export const ListTextStyled = styled("span")(() => ({
    fontSize: "1rem",
    fontWeight: "500",
}));

export const StyledLink = styled("a")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#f0d43a" : "#22edfb",
    textDecoration: "none",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
    borderBottom: "1px solid transparent",
    "&:hover": {
        color: theme.palette.mode === "dark" ? "#f0d43a" : "#042C54",
        borderBottom:
            theme.palette.mode === "dark"
                ? "1px solid #f0d43a"
                : "1px solid #042C54",
    },
}));

export const ThemedLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#f0d43a" : "#22edfb",
    textDecoration: "none",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
    borderBottom: "1px solid transparent",
    "&:hover": {
        color: theme.palette.mode === "dark" ? "#f0d43a" : "#042C54",
        borderBottom:
            theme.palette.mode === "dark"
                ? "1px solid #f0d43a"
                : "1px solid #042C54",
    },
}));
