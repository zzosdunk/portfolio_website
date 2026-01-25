import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    BlockHeader,
    Text,
    Image,
    ImageBlock,
    ImageDescription,
    ListContainer,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
} from "../../../components/Articles/Articles.styles";

import stealth2 from "../../../assets/ArticlesAssets/Stealth/stealth_2.png";
import stealth3 from "../../../assets/ArticlesAssets/Stealth/stealth_3.png";
import stealth4 from "../../../assets/ArticlesAssets/Stealth/stealth_4.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Stealth({ articleData, headerImg, articles }) {
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
                        <ImageBlock>
                            <Image
                                component="img"
                                image={stealth2}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Puzzle as a gameplay pacing beat
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Stealth is a separate and very popular game genre.
                            Its earliest predecessors date back to the early
                            1980s, however, the first mainstream game and the
                            one that defined the genre is Metal Gear (1987) by
                            Konami, designed by Hideo Kojima. Since then, there
                            have been many great stealth games. Over time,
                            however, stealth elements became common in other
                            genres as well, and today almost every major game
                            offers this gameplay style in at least some of its
                            levels.
                        </Text>

                        <Text>
                            In general, a key trend in modern level design is
                            giving the player choice. It has always been good
                            practice in both level design and game design as a
                            whole to provide the player with the illusion of
                            choice, making them feel as if they are deciding how
                            to approach a level or how to handle a particular
                            situation.
                            <br />
                            <br />
                            Today, designers go even further by offering a
                            choice of gameplay styles, and stealth is very often
                            one of these options. So let’s go over a few rules
                            that I personally follow when designing levels for
                            stealth gameplay.
                        </Text>
                        <BlockHeader>Stealth as a Puzzle</BlockHeader>
                        <Text>
                            First of all, I see stealth as a kind of puzzle. The
                            player needs to use their awareness, ingenuity, and
                            planning skills to find the right path that will
                            lead them between enemies while remaining unnoticed.
                            By the way, in a previous article I discussed
                            different approaches to puzzle design! I invite you
                            to check it out if you haven’t already.
                        </Text>

                        <Text>
                            As I mentioned at the beginning, a good practice in
                            level design is giving the player a choice in how
                            they approach a level. Let the player decide whether
                            they want to go through the central street with the
                            highest concentration of enemies, or climb onto the
                            rooftops alongside that street, where the risk of
                            being spotted is lower, but the danger of falling
                            while jumping from one roof to another is higher.
                            The same principle applies when designing stealth
                            arenas. Create multiple routes for the player:
                            through the center, around the perimeter, from
                            above, or perhaps through adjacent rooms, and so on.
                        </Text>
                        <BlockHeader>Decision Point</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={stealth4}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Puzzle Triad - follow these three questions when
                                designing a puzzle level
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            For the player to be able to plan their route, you
                            need to provide an appropriate place to do so. A
                            decision point is a moment in a level where gameplay
                            slows down, offering the player a choice in how to
                            proceed. This should be a safe spot with a view of
                            the arena (ideally only a part of it), allowing the
                            player to assess the situation, observe enemy patrol
                            patterns, and plan their route. It’s important to
                            avoid making this spot OP! The player shouldn’t be
                            able to easily eliminate all enemies from a single
                            safe position. One of the simplest ways to prevent
                            this is to make the cover destructible.
                        </Text>
                        <br />

                        <BlockHeader>Enemy patterns</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={stealth3}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Puzzle Triad - follow these three questions when
                                designing a puzzle level
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Enemy patrol patterns can be divided into three
                            categories:{" "}
                        </Text>
                        <br />
                        <br />
                        <ListContainer>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        Idle: The enemy stays in one place and
                                        may rotate, but effectively occupies
                                        only a single area along the player’s
                                        path and never leaves it.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        Ping-pong: The enemy moves back and
                                        forth between two points, occasionally
                                        creating an opening for the player to
                                        pass through a desired area.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        Loop: The enemy constantly changes
                                        position, moving through multiple points
                                        and sometimes pausing, but overall
                                        requires the player’s constant
                                        attention, otherwise, they might not
                                        notice the enemy ending up right in
                                        front of them.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                        </ListContainer>

                        <BlockHeader>
                            How to design a stealth level ?
                        </BlockHeader>
                        <Text>
                            Let’s move on to the steps that I personally follow
                            when designing a stealth arena. From the very
                            beginning, decide on the size of the arena: whether
                            you want it to have multiple floors, whether it
                            should be enclosed or more open, and roughly how
                            much time you expect the player to spend traversing
                            it even without enemies. Adding an extra floor at a
                            later stage can be a very challenging task for the
                            entire team.
                        </Text>
                        <br />
                        <br />
                        <Text>
                            Which enemy types do you want to use in the arena?
                            Different types require different level layouts, so
                            this should be decided in advance in order to build
                            the level in a way that fully utilizes the gameplay
                            potential of each enemy type. Also, try to determine
                            the overall number of enemies you want to place in
                            the level. This number can, of course, be changed
                            later during iteration, but if you initially plan an
                            arena for four enemies, turning that layout into one
                            designed for, say, eight enemies will be very
                            difficult. That’s why it’s important to plan this
                            ahead of time.
                        </Text>
                        <br />
                        <br />
                        <Text>
                            At this stage, when you already have a general plan
                            for the level in mind its beginning, exit, and the
                            types and number of enemies, you can start designing
                            additional routes through the arena. And finally,
                            start placing and planning enemy patrols and routes
                            throughout the arena, and of course, prepare for
                            lots and lots of iteration. Play your own level
                            yourself, try all the routes you’ve designed, and
                            see if you feel that your ideas are working as
                            intended. Also, let other players try your level,
                            listen to their feedback, make changes based on it,
                            and keep testing your level until the feedback fully
                            satisfies you.
                        </Text>
                        <br />
                        <br />
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

Stealth.propTypes = {
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

export default Stealth;
