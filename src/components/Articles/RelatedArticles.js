import PropTypes from "prop-types";

import RelatedArticle from "./RelatedArticle";

function RelatedArticles({ articleData, articles }) {
    function getRandomArticles(articles, count) {
        const shuffled = [...articles].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const sameTypeArticles = articles.filter(
        (article) =>
            article.type === articleData.type && article.id !== articleData.id
    );

    const otherTypeArticle = articles.filter(
        (article) => article.type !== articleData.type
    );

    const randomSameTypeArticles = getRandomArticles(sameTypeArticles, 2);
    const randomOtherArticle = getRandomArticles(otherTypeArticle, 1);

    console.log("Related articles: ", randomSameTypeArticles);

    return (
        <>
            {randomSameTypeArticles.map((article) => (
                <RelatedArticle key={article.id} article={article} />
            ))}

            {randomOtherArticle.map((article) => (
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
