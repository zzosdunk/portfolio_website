import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    BlockHeader,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Covers({ articleData, headerImg, articles }) {
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
                                Published on: 2024-09-15 | Author: John Doe
                            </Typography>
                        </Box>

                        <Text>
                            Strategic cover placement enhances the dynamics of
                            strategy, pacing, and map flow. Cover elements
                            should not only shield players but also facilitate
                            their movement between various points, thereby
                            enhancing the overall map flow. The objective is to
                            discourage players from remaining stationary in a
                            single location, except when they are on the
                            defensive. Cover, in essence, urges players to
                            advance closer to their goals.
                        </Text>
                        <BlockHeader>Types of Cover</BlockHeader>
                        <Text>
                            Safe Cover: This type of cover provides protection
                            as long as the player remains behind it, ensuring
                            safety until they decide to move out into the open.
                            <br />
                            Risky Cover: Risky cover includes objects that can
                            be manipulated, destroyed, or shot through. It acts
                            as a temporary stopping point for players, allowing
                            them to transition to a more secure location.
                        </Text>
                        <BlockHeader>Cover Height</BlockHeader>
                        <Text>
                            The height of visible cover has a substantial impact
                            on player movement, perception, and spatial
                            understanding. High cover gives players a sense of
                            safety but limits their mobility and line of sight,
                            offering only two directions to aim from. In
                            contrast, low cover may expose players to more risk
                            but grants them a better overview of the area and
                            multiple firing angles.
                        </Text>
                        <BlockHeader>Cover Gap</BlockHeader>
                        <Text>
                            Strategically spacing cover points is crucial. It
                            adds an element of risk as players move between
                            cover, making their choices feel meaningful.
                            Maintaining a set cover buffer reinforces the
                            satisfaction of a well-made decision and keeps the
                            gameplay fresh by preventing players from camping
                            behind a single piece of cover.
                        </Text>
                        <BlockHeader>Avoid Overpopulating</BlockHeader>
                        <Text>
                            Excessive cover and props can impede gameplay and
                            encourage camping. Instead, consider how players
                            might approach a given path, offering strategic
                            options for utilizing cover without overcrowding the
                            map or specific areas.
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

Covers.propTypes = {
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

export default Covers;
