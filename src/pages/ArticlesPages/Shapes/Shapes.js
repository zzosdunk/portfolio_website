import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    Image,
    ImageBlock,
} from "../../../components/Articles/Articles.styles";
import zelda from "../../../assets/ArticlesAssets/Shapes/zeldaExample.png";
import triangle from "../../../assets/ArticlesAssets/Shapes/triangleReveal.jpeg";
import zeldaShapes from "../../../assets/ArticlesAssets/Shapes/zeldaExampleTriangles.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Shapes({ articleData, headerImg, articles }) {
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
                            Using non-standard shapes can both diversify your
                            overall level design and assist in player
                            navigation. For instance, more open, obtuse angles
                            may appear safer to the player as their wider field
                            of view allows for more information about the
                            location ahead. Utilizing round and circular
                            geometry also gives off a cozy vibe, which makes
                            this shape inviting to us.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={zelda}
                                alt="Article Cover"
                            />
                        </ImageBlock>
                        <Text>
                            However, I recently came across an excellent example
                            of how using the same geometry as a general rule for
                            world-building can have an incredible impact on the
                            player and their chosen paths of traversal. This
                            concept was utilized by Nintendo developers in the
                            game The Legend of Zelda: Tears of the Kingdom.
                            <br />
                            <br />
                            They encountered an issue where approximately 80% of
                            players moved too uniformly and linearly between
                            landmarks in the open world. Players tended to stick
                            to the main road, neglecting the rest of the world;
                            only about 20% would explore beyond it. To address
                            this, they applied various tools to enhance interest
                            in the open world, but this time I&apos;d like to
                            highlight their approach to world-building. They
                            chose triangles as the primary geometry for
                            constructing the terrain and overall level design.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={triangle}
                                alt="Article Cover"
                            />
                        </ImageBlock>
                        <Text>
                            The arrows indicate the two player reactions when
                            presented with this choice: they would either ascend
                            to the triangle&apos;s apex for a broader view of
                            their surroundings or circumvent it.
                            <br />
                            <br />
                            What makes this approach remarkable is its ability
                            to tantalize players with information. You can
                            conceal a landmark or intriguing area behind a
                            triangle, offering a glimpse that sparks the
                            player&apos;s curiosity. Even from an aerial
                            perspective, numerous triangles are visible,
                            highlighting this design strategy.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={zeldaShapes}
                                alt="Article Cover"
                            />
                        </ImageBlock>
                        <Text>Keep creating and dream bigger 🙂</Text>
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

Shapes.propTypes = {
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

export default Shapes;
