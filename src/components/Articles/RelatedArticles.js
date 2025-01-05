import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import RelatedArticle from "./RelatedArticle";

function RelatedArticles({ articleData, articles }) {
    const [relatedArticles, setRelatedArticles] = useState([]);

    // Функция для получения случайных статей
    function getRandomArticles(articles, count) {
        const shuffled = [...articles].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    useEffect(() => {
        // Фильтруем статьи того же типа, что и текущая
        const sameTypeArticles = articles.filter(
            (article) =>
                article.type === articleData.type &&
                article.id !== articleData.id
        );

        // Фильтруем статьи другого типа
        const otherTypeArticle = articles.filter(
            (article) => article.type !== articleData.type
        );

        // Получаем 2 случайные статьи того же типа и 1 статью другого типа
        const randomSameTypeArticles = getRandomArticles(sameTypeArticles, 2);
        const randomOtherArticle = getRandomArticles(otherTypeArticle, 1);

        // Объединяем их в один массив
        setRelatedArticles([...randomSameTypeArticles, ...randomOtherArticle]);
    }, [articleData, articles]); // Этот эффект выполнится только при монтировании и изменении данных статей

    return (
        <>
            {relatedArticles.map((article) => (
                <RelatedArticle key={article.id} article={article} />
            ))}
        </>
    );
}

RelatedArticles.propTypes = {
    articleData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            headerImg: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired, // Добавляем url для корректного отображения ссылок
        })
    ).isRequired,
};

export default RelatedArticles;
