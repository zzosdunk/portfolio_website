import { styled, Card, Typography, Button } from "@mui/material";

// Обертка для карточки
export const StyledCard = styled(Card)({
    position: "relative",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    "&.hovered": {
        "& .title": {
            top: "30px", // Поднимаем текст на 10 пикселей сверху от центра
            transform: "translate(-50%, 0)", // Остается по центру горизонтально
            textAlign: "center",
            textShadow: "black 2px 1px",
        },
        "& .button": {
            opacity: 1, // Показываем кнопку при наведении
        },
    },
});

// Фоновое изображение с размытием при наведении
export const BackgroundImage = styled("div")(({ headerImg }) => ({
    backgroundImage: `url(${headerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(5px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "all 0.3s ease-in-out",
    zIndex: 1, // Слой ниже текста
    "&.hovered": {
        filter: "none",
        opacity: 0.5, // Размытие фона при наведении
    },
}));

// Стилизованный заголовок (Текст)
export const TitleTypography = styled(Typography)(({ theme }) => ({
    position: "absolute",
    top: "50%", // Центрирование по умолчанию
    left: "50%",
    transform: "translate(-50%, -50%)", // Центрируем текст по умолчанию
    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Динамическое изменение шрифта
    whiteSpace: "nowrap",
    fontWeight: "bold",
    color: theme.palette.common.white,
    textShadow: "none", // Тень для читаемости
    margin: 0,
    zIndex: 2, // Поверх всего
    transition: "all 0.3s ease-in-out", // Плавное перемещение
    "&.title": {}, // Класс для заголовка
}));

// Стилизованная кнопка
export const ActionButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    top: "50%", // Центрируем кнопку
    left: "50%",
    transform: "translate(-50%, -50%)", // Центрирование кнопки
    opacity: 0, // Скрыта по умолчанию
    transition: "opacity 0.3s ease-in-out",
    zIndex: 3, // Поверх фона и текста
    backgroundColor: theme.palette.mode === "dark" ? "#f0d43a" : "#042c54",
    color: "#fff",
    "&:hover": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.secondary.dark
                : theme.palette.primary.dark,
    },
    "&.button": {}, // Класс для кнопки
}));
