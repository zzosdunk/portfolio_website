import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "@fontsource/montserrat";

import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import useHttp from "./hooks/use-http";

import MessagesPL from "./translations/pl.json";
import MessagesUA from "./translations/ua.json";
import MessagesEN from "./translations/en.json";

import Home from "./pages/HomePage/Home";
import Blog from "./pages/BlogPage/Blog";
import Contact from "./pages/ContactPage/Contact";
import Author from "./pages/AuthorPage/Author";

import { articles, articlesPages } from "./components/Articles/articles";
import projectsPages from "./containers/Projects/projectsImport";

const messages = {
    Polish: MessagesPL,
    Ukrainian: MessagesUA,
    English: MessagesEN,
};

function App() {
    const currentLanguage = useSelector((state) => state.lang.language);
    const currentTheme = useSelector((state) => state.theme.isDarkTheme);

    const [projects, setProjects] = useState([]);

    const { sendRequest: fetchProjects } = useHttp();

    useEffect(() => {
        const transformProjects = (projectObj) => {
            const loadedObjects = Object.entries(projectObj).map(
                ([key, value]) => ({
                    id: key, // Ensure the id is a string to match projectsPages keys
                    name: value.name,
                    description: value.description,
                    link: value.link,
                    logo: value.logo,
                    timeperiod: value.timeperiod,
                    leader: value.leader,
                    translationID: value.translationID,
                    url: value.url,
                })
            );

            setProjects(loadedObjects);
        };

        fetchProjects(
            {
                url: `${process.env.REACT_APP_DB_LINK}/projects.json`,
            },
            transformProjects
        );
    }, [fetchProjects]);

    const theme = createTheme({
        palette: {
            mode: currentTheme ? "dark" : "light",
            primary: {
                main: "#22edfb",
            },
            secondary: {
                main: "#ff4d71",
            },
            tertiary: {
                main: "#f0d43a",
                dark: "#d6bd33",
            },
        },
        typography: {
            fontFamily: "Montserrat",
            h1: {
                fontSize: 62,
                fontWeight: 800,
                color: currentTheme ? "#ff4d71" : "#22edfb",
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
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/portfolio" element={<Author />} />
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

                            {projects.map((project) => {
                                const normalizedId = project.id.replace(
                                    /^p/,
                                    ""
                                ); // Удаляем префикс "p"
                                const ProjectComponent =
                                    projectsPages[normalizedId]; // Используем нормализованный ID

                                if (!ProjectComponent) {
                                    console.error(
                                        `Component for project ID ${project.id} not found.`
                                    );
                                    return null;
                                }

                                return (
                                    <Route
                                        key={project.id}
                                        path={`/project/${project.url}`}
                                        element={
                                            <ProjectComponent
                                                title={project.name}
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
