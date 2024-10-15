import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fontsource/montserrat";

import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import MessagesPL from "./translations/pl.json";
import MessagesUA from "./translations/ua.json";
import MessagesEN from "./translations/en.json";

import Home from "./pages/HomePage/Home";
import Blog from "./pages/BlogPage/Blog";
import Contact from "./pages/ContactPage/Contact";
import Author from "./pages/AuthorPage/Author";

import { articles, articlesPages } from "./components/Articles/articles";

const messages = {
    Polish: MessagesPL,
    Ukrainian: MessagesUA,
    English: MessagesEN,
};

function App() {
    const currentLanguage = useSelector((state) => state.lang.language);
    const currentTheme = useSelector((state) => state.theme.isDarkTheme);

    const theme = createTheme({
        palette: {
            mode: currentTheme ? "dark" : "light",
            primary: {
                main: "#22edfb",
            },
            secondary: {
                main: "#f0d43a",
            },
        },
        typography: {
            fontFamily: "Montserrat",
            h1: {
                fontSize: 62,
                fontWeight: 800,
                color: currentTheme ? "#f0d43a" : "#22edfb",
            },
            header: {
                color: currentTheme ? "#81AFDD" : "#042c54",
                fontSize: 20,
                fontWeight: 400,
            },
            a: {
                color: currentTheme ? "#fff" : "#000",
                fontWeight: 500,
                fontSize: 18,
                margin: "0 1rem",
                lineHeight: "25px",
                textDecoration: "none",
            },
            p: {
                padding: "20px",
                color: currentTheme ? "#fff" : "#000",
                marginBottom: "20px",
            },
        },
        overrides: {
            MuiTooltip: {
                tooltip: {
                    backgroundColor: "#22edfb",
                    color: "#22edfb",
                },
            },
        },
    });

    return (
        <IntlProvider
            locale={navigator.language}
            messages={messages[currentLanguage]}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        background: currentTheme
                            ? "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)"
                            : "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgb(139, 175, 196) 25%)",
                    }}
                >
                    {/* <RouterProvider router={router} /> */}
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/author" element={<Author />} />
                            <Route path="/contact" element={<Contact />} />

                            {articles.map((article) => {
                                const ArticleComponent =
                                    articlesPages[article.id];
                                return (
                                    <Route
                                        key={article.id}
                                        path={`/article/${article.url}`}
                                        element={
                                            <ArticleComponent
                                                title={article.title}
                                                headerImg={article.headerImg}
                                                articleData={article}
                                                articles={articles}
                                            />
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </Router>
                </Box>
            </ThemeProvider>
        </IntlProvider>
    );
}

export default App;
