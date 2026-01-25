import { styled, Typography, CardMedia } from "@mui/material";

// Контейнер всей страницы
export const PageContainer = styled("div")(() => ({
    width: "100%",
    padding: "5% 0",
}));

// Название проекта
export const TitleStyled = styled("h1")(() => ({
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "2rem",
}));

// Галерея изображений
export const GalleryContainer = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "5% 15%",
    gap: "1rem",
    position: "relative",
}));

export const ImageStyled = styled("img")(() => ({
    width: "320px",
    height: "180px",
    transform: "rotate(15deg)", // Поворот изображения
    transition: "all 0.3s ease-in-out",
    objectFit: "fill",
    cursor: "pointer",
    "&:nth-of-type(2n)": {
        transform: "rotate(-15deg)", // Чередование поворотов
    },
    "&:hover": {
        transform: "rotate(0deg) scale(2.5)", // Поднятие изображения и выравнивание
        zIndex: 2,
    },
}));

// Описание проекта
export const DescriptionContainer = styled("div")(() => ({
    margin: "2rem 5%", // 5% отступы слева и справа
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333", // Цвет текста
    textAlign: "left", // Выровнено по левому краю
}));

export const Text = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "500",
    width: "100%",
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

export const BlockHeader = styled(Typography)(({ theme }) => ({
    fontSize: "23px",
    fontWeight: "bold",
    width: "80%",
    marginTop: "20px",
    marginBottom: "20px",
    color: theme.palette.mode === "dark" ? "#f0d43a" : "#22edfb",
}));

export const ImageBlock = styled("div")({
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
});

export const Image = styled(CardMedia)({
    width: "40%", // Scale to 40% of the original width
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
