import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import { Text } from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Rld({ articleData, headerImg, articles }) {
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
                                height="400"
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
                            Every game, as well as each level, requires balance.
                            Designers need to control and understand the
                            difficulty level of specific challenges or the level
                            overall in order to maintain interest in the overall
                            gameplay. It should neither be too simple and
                            therefore boring, nor too impossible for the player
                            to overcome. That&apos;s why today I would like to
                            talk about a methodology called Rational Level
                            Design (RLD). Let&apos;s explore this topic using an
                            example of a game in which the player has access to
                            the following abilities to overcome obstacles:
                            <br />
                            <br />
                            1. Player Movement
                            <br />
                            2. Jumping
                            <br />
                            3. Double Jump
                            <br />
                            4.Dashing
                            <br />
                            <br />
                            The obstacles in the game involve traversing the
                            distance between two platforms. The RLD approach
                            allows us to determine how changing parameters such
                            as the distance between platforms and the height
                            between them impacts the overall difficulty. To
                            assess how challenging it is for the player to jump
                            from one platform to another, we first need to
                            create a testing environment. It&apos;s best to
                            create a separate scene where various platform
                            configurations are placed based on these modified
                            parameters. For this example, I altered two
                            parameters to a specific fixed value, which is 0.5
                            meters.
                            <br />
                            <br />
                            Subsequently, I performed 10 test jumps across
                            varying distances between two platforms to gauge
                            player difficulty. These results were recorded in a
                            table.
                            <br />
                            <br />
                            The key aspect of this method is assessing the
                            actual challenge of crossing a specific distance
                            rather than relying on individual cases. It reveals
                            intriguing findings: initially successful jumps may
                            later prove to be coincidental, resulting in
                            failures after 4-6 attempts. Additionally, I
                            cataloged the player&apos;s actions required to move
                            between platforms, influencing the jump&apos;s
                            overall difficulty. Ten successful attempts with a
                            standard single jump and ten with double jump and
                            dashing represent distinct difficulty levels (!),
                            with the latter being inherently more challenging.
                            <br />
                            <br />
                            This approach yielded a ready-made table outlining
                            difficulty distribution. When designing levels, I
                            could confidently make challenging jumps based on
                            this data, saving time and allowing for further
                            level development.
                            <br />
                            <br />
                            Furthermore, this technique benefits future
                            development and level enhancements. For instance,
                            after multiple level tests, if we decide that a
                            specific area needs more difficulty, we can readily
                            adjust the distance between platforms based on the
                            table&apos;s insights, ensuring the desired level of
                            challenge is maintained.
                            <br />
                            <br />
                            This is just an introduction of how you can apply
                            RLD approach. I strongly recommend seeking
                            additional information on this topic, such as how to
                            use math formulas to calculate the expected
                            difficulty level of overcoming obstacles instead of
                            manually testing each case. How and where have you
                            applied a similar approach?
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

Rld.propTypes = {
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

export default Rld;
