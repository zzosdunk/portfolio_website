import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import { Text } from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Elevations({ articleData, headerImg, articles }) {
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
                                Author: Denys Zosym
                            </Typography>
                        </Box>

                        <Text>
                            Elevations at the level can provide the player with
                            several necessary sensations and opportunities.
                            Using elevations, we delve into the player&apos;s
                            psychological perception. When the player moves
                            upward on the map, it positively influences their
                            perception of the gameplay and instills confidence,
                            as they feel progress and that their efforts are
                            leading them forward. If you want to put the player
                            in a stressful situation, descending downward will
                            be a good way to achieve that. The player will feel
                            danger with every step downward, as the
                            opportunities to view the overall game world will
                            diminish and diminish.
                            <br />
                            <br />
                            In the context of action gameplay, it is considered
                            a very good practice to separate arenas, slightly
                            lower than the standard level height. It can be just
                            half a meter, but stepping onto the arena, the
                            player will lose the feeling of complete safety and
                            enter a location where they will face danger.
                            <br />
                            <br />
                            Moreover, elevations or full-fledged separate floors
                            that the player can navigate through will give them
                            a sense of choice and greater interest in its
                            completion, as now it&apos;s not just the game, but
                            they themselves decide and take responsibility for
                            navigating the location they find themselves in.
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

Elevations.propTypes = {
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

export default Elevations;
