import { useState } from "react";
import {
    Box,
    Typography,
    CardMedia,
    CardContent,
    Grid,
    Pagination,
    Link,
} from "@mui/material";

import { CardStyled, DescriptionStyled, ArticleStyled } from "./Blog.styles";

import Footer from "../../containers/Footer/Footer";
import Navbar from "../../components/navbar/navbar";

import { articles } from "../../components/Articles/articles";

function Blog() {
    const [page, setPage] = useState(1);
    const articlesPerPage = 5;

    const handleChangePage = (event, value) => {
        setPage(value);
    };

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
                            <ArticleStyled>
                                {/* Картинка статьи */}
                                <CardMedia
                                    component="img"
                                    sx={{ width: 250, height: 250 }}
                                    image={article.headerImg}
                                    alt={article.title}
                                />
                                {/* Контент статьи */}
                                <CardStyled
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                        background: "primary",
                                    }}
                                >
                                    <CardContent sx={{ padding: "16px" }}>
                                        {/* Название статьи */}
                                        <Typography variant="h6" gutterBottom>
                                            {article.title}
                                        </Typography>

                                        {/* Описание статьи с градиентом */}
                                        <DescriptionStyled>
                                            <Typography
                                                variant="body2"
                                                paragraph
                                                sx={{ margin: 0 }}
                                            >
                                                Sample Text
                                            </Typography>
                                        </DescriptionStyled>

                                        <Link
                                            href={`/article/${article.url}`}
                                            variant="body2"
                                            sx={{ marginTop: 2 }}
                                        >
                                            Read more
                                        </Link>
                                    </CardContent>
                                </CardStyled>
                            </ArticleStyled>
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
