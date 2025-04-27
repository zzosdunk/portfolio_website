/* eslint-disable import/prefer-default-export */
import { styled, Typography, CardMedia, TableCell } from "@mui/material";

export const ImageBlock = styled("div")({
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
});

export const Image = styled(CardMedia)({
    width: "70%", // Scale to 40% of the original width
    height: "auto", // Maintain aspect ratio
    margin: "auto", // Center the image horizontally
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
