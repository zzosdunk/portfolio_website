import PropTypes from "prop-types";
import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import { Text } from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Landmarks({ articleData, headerImg, articles }) {
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
                            A landmark, also referred to as a point of interest,
                            is a distinct architectural element within a level
                            that prominently stands out from the surrounding
                            composition. Its primary objective is to capture the
                            player&apos;s attention, providing a general sense
                            of direction, aiding in navigation, or contributing
                            to the creation of a unique and atmospheric scene.
                            Landmarks play a vital role in scenes or
                            environments that players revisit multiple times. It
                            is considered good practice to design landmarks with
                            distinctiveness when viewed from different angles,
                            aiding the player in determining their position
                            within the scene or game world.
                            <br />
                            <br />
                            Scenes lacking prominent landmarks can become
                            unattractive and monotonous, potentially causing
                            players to struggle when locating objectives or
                            exploration targets, impeding their progress in the
                            adventure. Landmarks can also assist players in
                            gauging their progression within a level.
                            Periodically concealing them from the player&apos;s
                            view and revealing them as the player draws closer
                            creates a sense of proximity and accomplishment.
                            Players can examine additional details and nearby
                            terrain as they approach the landmark, reinforcing
                            their confidence in heading in the right direction.
                            <br />
                            <br />
                            A notable example of this design technique can be
                            observed in &apos;The Last of Us&apos; during the
                            Pittsburgh bridge sequence. In this scenario, the
                            player must exit the city using the bridge.
                            Throughout the level, the player only catches
                            glimpses of the bridge at specific moments and from
                            different angles. This intuitive design cues the
                            player that they are drawing closer to their primary
                            objective.
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

Landmarks.propTypes = {
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

export default Landmarks;
