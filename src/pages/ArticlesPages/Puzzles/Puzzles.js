import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    BlockHeader,
    Text,
    Image,
    ImageBlock,
    ImageDescription,
} from "../../../components/Articles/Articles.styles";

import {
    GalleryContainer,
    ImageStyled,
} from "../../ProjectsPages/ProjectInfo.styles";

import pacingChapter from "../../../assets/ArticlesAssets/Pacing/pacing_chapter8.png";
import puzzlesBackwards from "../../../assets/ArticlesAssets/Puzzles/puzzles_backwards.png";
import puzzleTriad from "../../../assets/ArticlesAssets/Puzzles/puzzleTriad.png";

import uncharted1 from "../../../assets/ArticlesAssets/Puzzles/uncharted1.png";
import uncharted2 from "../../../assets/ArticlesAssets/Puzzles/uncharted2.png";
import uncharted3 from "../../../assets/ArticlesAssets/Puzzles/uncharted3.png";

import gow1 from "../../../assets/ArticlesAssets/Puzzles/gow1.png";
import gow2 from "../../../assets/ArticlesAssets/Puzzles/gow2.png";
import gow3 from "../../../assets/ArticlesAssets/Puzzles/gow3.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Puzzles({ articleData, headerImg, articles }) {
    const unchartedImages = [uncharted1, uncharted2, uncharted3];
    const godofWarImages = [gow1, gow2, gow3];

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
                                Category: {articleData.type} | Author: Denys
                                Zosym
                            </Typography>
                        </Box>
                        <Text>
                            Puzzles are a unique type of gameplay that can be
                            found in almost every game from the earliest 2D
                            platformers to modern action and even horror titles.
                            In the following slides, I will explain different
                            approaches and rules to puzzle design and also
                            analyze puzzle design examples from other games.
                            Let’s start by discussing how puzzles can be used in
                            your levels.
                            <br />
                            <br />
                            In levels of this game, we can observe various types
                            of resource origins, rewards, and more. The
                            developers divided the quantity and value of rewards
                            into 5 layers, and let&apos;s delve into each of
                            them:
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={pacingChapter}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Puzzle as a gameplay pacing beat
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            In addition to my previous article dedicated to
                            pacing, a puzzle can be treated as a separate
                            gameplay beat that you can use to give the player a
                            moment of rest after an intense gameplay section or
                            to break up a long traversal beat.
                        </Text>
                        <BlockHeader>
                            Let Player know that they have a puzzle challenge to
                            overcome
                        </BlockHeader>

                        <Text>
                            Make it clear to the player that they are in a
                            puzzle. Clearly define the boundaries of the
                            location they are locked in and indicate the exit
                            from the puzzle. Keep the end of the puzzle in sight
                            from the very beginning. Players must think about
                            how to complete a puzzle, not also what to complete.
                            Having a clear end in mind lets the designer play
                            with expectations. The solution at first seems
                            obvious, but players hit an obstacle which makes
                            them realize it isn’t as simple as they thought.
                            Each step of the way, the player slowly lowers
                            obstacles until they reach the solution.
                        </Text>

                        <BlockHeader>Work Backwards</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={puzzlesBackwards}
                                alt="Article Cover"
                            />
                            <ImageDescription>Work Backwards</ImageDescription>
                        </ImageBlock>
                        <Text>
                            When designing puzzles, think backwards. Create the
                            solution first, then figure out how to block the
                            player from reaching that solution, forcing them to
                            problem solve.
                        </Text>
                        <BlockHeader>Craft Puzzles with Purpose</BlockHeader>
                        <Text>
                            Ensure that each puzzle integrates seamlessly with
                            game mechanics and story elements. For instance, if
                            you’re using a physics-based puzzle system, align
                            your puzzles with the laws of physics used in the
                            game, enhancing both realism and challenge.
                        </Text>
                        <br />
                        <Text>
                            This way, we can define three steps that help design
                            a puzzle by creating an unspoken contract between
                            the player and the game, ensuring that the player
                            understands the game has provided all the necessary
                            conditions to solve the puzzle.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={puzzleTriad}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Puzzle Triad - follow these three questions when
                                designing a puzzle level
                            </ImageDescription>
                        </ImageBlock>
                        <BlockHeader>Vary the challenge</BlockHeader>
                        <Text>
                            Don’t forget to vary the challenge throughout the
                            game. Some players always find one puzzle easy and
                            others hard, so variety ensures there’s something
                            for everybody. A mixture of easy levels between
                            harder parts serve a purpose for skilled players as
                            well. Players get a break, their expectations about
                            what comes next are challenged, and they have the
                            chance to show their mastery over the game. A
                            forward march to harder and harder puzzles is
                            challenging but predictable.
                            <br />
                            <br />
                            Let&apos;s breakdown some of the puzzles from games!
                        </Text>
                        <BlockHeader>Uncharted 4: A Thief’s End</BlockHeader>
                        <GalleryContainer>
                            {unchartedImages.map((src) => (
                                <ImageStyled
                                    key={src}
                                    src={src}
                                    alt={`Puzzle Triad example for ${src}`}
                                />
                            ))}
                        </GalleryContainer>
                        <BlockHeader>God of War: Ragnarok</BlockHeader>
                        <GalleryContainer>
                            {godofWarImages.map((src) => (
                                <ImageStyled
                                    key={src}
                                    src={src}
                                    alt={`Puzzle Triad example for ${src}`}
                                />
                            ))}
                        </GalleryContainer>
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

Puzzles.propTypes = {
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

export default Puzzles;
