import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    BlockHeader,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function ModularDesign({ articleData, headerImg, articles }) {
    return (
        <>
            <Navbar />
            <Box sx={{ width: "80%", margin: "0 auto", marginTop: 4 }}>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Typography variant="h3" color="text.primary">
                                {articleData.title}
                            </Typography>
                        </Box>
                        <Card>
                            <CardMedia
                                component="img"
                                image={headerImg}
                                alt="Article Cover"
                            />
                        </Card>

                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Published on: 2024-09-15 | Author: Denys Zosym
                            </Typography>
                        </Box>

                        <Text>
                            Player customization is crucial for game longevity,
                            especially in multiplayer titles where a fixed meta
                            is to be avoided. While customization and
                            personalization are often linked, they serve
                            different functions. Personalization relates to
                            aesthetics, while customization directly influences
                            gameplay. However, implementing extensive
                            customization can challenge game balance, which is
                            where Modular Design comes in. It categorizes
                            options, allowing for flexibility and balance within
                            unique elements.
                            <br />
                            <br />
                            Modular game design revolves around the division of
                            a game into smaller, self-contained modules or
                            components. These modules encompass in-game assets
                            like characters, levels, items, as well as systems
                            such as mechanics, rules, and AI behaviors. The core
                            tenets of modular game design encompass:
                        </Text>
                        <BlockHeader>Reusability</BlockHeader>
                        <Text>
                            Game components should be created with the intention
                            of being used in different contexts within the game.
                        </Text>
                        <BlockHeader>Flexibility</BlockHeader>
                        <Text>
                            This allows diverse gameplay experiences to emerge
                            through different combinations of modules.
                        </Text>
                        <BlockHeader>Maintainability</BlockHeader>
                        <Text>
                            Should a specific module present issues, it can be
                            addressed without affecting the entire game, thereby
                            reducing the risk of introducing new bugs.
                        </Text>
                        <BlockHeader>Player Agency</BlockHeader>
                        <Text>
                            This empowers players to make choices and have
                            influence within the game world, aligning with the
                            contemporary gaming trends focused on player-driven
                            narratives and open-ended gameplay.
                            <br />
                            <br />
                            In &quot;Tom Clancy&apos;s The Division 2,&quot;
                            character modular design plays a significant role in
                            offering players diverse and customizable
                            characters. The amalgamation of gear, weapon
                            modifications, skills, specializations, and
                            cosmetics forms a rich and diverse system that
                            fosters player creativity and personalization while
                            ensuring a dynamic and engaging gaming experience.
                            Let&apos;s delve into the modular design approach
                            for skills selection. Players can choose from a
                            range of skills, such as turrets, seeker mines, and
                            shields, to tailor their character&apos;s combat
                            style. Additionally, players can modify these skills
                            by selecting different skill mods, allowing for
                            further customization. For example, players can
                            choose a turret that launches incendiary projectiles
                            or a seeker mine that releases a cloud of corrosive
                            gas. Thus, designers set clear boundaries and
                            opportunities for skills and how they can impact the
                            overall gameplay, while leaving complete choice to
                            the player regarding which skills to employ and what
                            style of play to adopt.
                            <br />
                            <br />
                            Keep creating and dream bigger 🙂
                        </Text>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                width: "85%",
                                position: "relative",
                                marginLeft: "auto",
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Related Articles
                            </Typography>
                            <RelatedArticles
                                articleData={articleData}
                                articles={articles}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

ModularDesign.propTypes = {
    articleData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
    headerImg: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            headerImg: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ModularDesign;
