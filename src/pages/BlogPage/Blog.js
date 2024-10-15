import { useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";

import Footer from "../../containers/Footer/Footer";
import Navbar from "../../components/navbar/navbar";

import { articles } from "../../components/Articles/articles"; // Массив статей
import ArticleCard from "../../components/Articles/ArticleCard";

function Blog() {
    const [page, setPage] = useState(1);
    const articlesPerPage = 5;

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    // Определяем статьи для отображения на текущей странице
    const displayedArticles = articles.slice(
        (page - 1) * articlesPerPage,
        page * articlesPerPage
    );

    return (
        <>
            <Navbar />
            <Box sx={{ width: "80%", margin: "0 auto", paddingTop: 4 }}>
                {/* Список статей */}
                <Grid container spacing={4}>
                    {displayedArticles.map((article) => (
                        <Grid item xs={12} key={article.id}>
                            {/* Используем новый ArticleCard компонент */}
                            <ArticleCard article={article} />
                        </Grid>
                    ))}
                </Grid>

                {/* Пагинация */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 4,
                    }}
                >
                    <Pagination
                        count={Math.ceil(articles.length / articlesPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                    />
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default Blog;
