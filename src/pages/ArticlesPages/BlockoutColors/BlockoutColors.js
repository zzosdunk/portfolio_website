import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    BlockHeader,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function BlockoutColors({ articleData, headerImg, articles }) {
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
                            As a level designer, I constantly collaborate with
                            other departments during level development. To
                            ensure our interaction is as efficient and clear as
                            possible, I employ and recommend the use of a visual
                            communication language. This is particularly useful
                            when working with the art department, so that
                            artists can always understand what you, as a
                            designer, want to convey in your blockout. As an
                            example of such communication, I&apos;d like to
                            discuss the significance of colors in blockouts.
                            Using my project, in which I created a gameplay
                            level for the Assassin&apos;s Creed series, as an
                            example, I&apos;d like to break down the meaning of
                            each color and its application.
                            <br />
                            <br />
                            As you can see, I use a specific palette of simple
                            colors in my blockout. This is intentionally done to
                            better convey all the ideas, main paths,
                            restrictions, and other elements through the
                            blockout. There are two color palettes in this
                            level: one is for the terrain, and the other is for
                            the objects in the scene.
                        </Text>
                        <BlockHeader>Color legend for the terrain:</BlockHeader>
                        <Text>
                            1. White: Represents the leading line that would
                            guide the player.
                            <br />
                            2. Yellow: Indicates an alternate path the player
                            can take.
                            <br />
                            3. Red: Marks locations that are restricted to the
                            player, and places they are not allowed to pass
                            through.
                            <br />
                            4. Green: Depicts the forest terrain, serving
                            exclusively as level art.
                            <br />
                            5. Blue: Represents water, in this case, a river
                            flows through here.
                        </Text>
                        <BlockHeader>
                            Color legend for objects in the scene:
                        </BlockHeader>
                        <Text>
                            1. Yellow: Indicates an object that the player can
                            climb, such as a building.
                            <br />
                            2. Red figure: Represents an enemy.
                            <br />
                            3. Purple figure: Denotes an enemy that is important
                            for the quest.
                            <br />
                            4. Green figure: Depicts an ally.
                            <br />
                            <br />
                            It&apos;s important to note that the colors, shapes,
                            and other details in the blockout may vary and be
                            unique for each project, and they should be
                            discussed with your team. However, such visual
                            communication is a fundamental element of the
                            blockout and significantly enhances the production
                            of levels.
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

BlockoutColors.propTypes = {
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

export default BlockoutColors;
