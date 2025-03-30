/* eslint-disable import/prefer-default-export */
import { styled, Button } from "@mui/material";

export const LearnButton = styled(Button)({
    height: "100%", // Кнопка будет иметь ту же высоту, что и родительский контейнер
    padding: "0 16px", // Оставляем стандартные боковые отступы
    fontSize: "14px", // Подстраиваем размер текста под высоту
    textTransform: "none", // Убираем автоматический upper-case для текста
    lineHeight: "normal", // Совпадает с текстовыми элементами
});
