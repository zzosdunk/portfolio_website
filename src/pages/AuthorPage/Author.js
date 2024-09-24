import Navbar from "../../components/navbar/navbar";
import Header from "../../containers/header/header";
import Experience from "../../containers/Experience/Experience";
import Projects from "../../containers/Projects/Projects";
import SkillsList from "../../components/skills/SkillsList";
import Footer from "../../containers/Footer/Footer";

function Author() {
    return (
        <>
            <Navbar />
            <Header />
            <Experience />
            <SkillsList />
            <Projects />
            <Footer />
        </>
    );
}

export default Author;
