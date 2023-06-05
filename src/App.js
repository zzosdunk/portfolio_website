import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

import "@fontsource/montserrat";

import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import MessagesPL from "./translations/pl.json";
import MessagesUA from "./translations/ua.json";
import MessagesEN from "./translations/en.json";

import Navbar from "./components/navbar/navbar";
import Header from "./containers/header/header";
import SkillsList from "./components/skills/SkillsList";
import Footer from "./containers/Footer/Footer";
import ContactMe from "./components/Contact/ContactMe";
import Experience from "./containers/Experience/Experience";
import Projects from "./containers/Projects/Projects";

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
                main: "#ff4d71",
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
                    <Navbar />
                    <Header />
                    <Experience />
                    <SkillsList />
                    <Projects />
                    <ContactMe />
                    <Footer />
                </Box>
            </ThemeProvider>
        </IntlProvider>
    );
}

export default App;
