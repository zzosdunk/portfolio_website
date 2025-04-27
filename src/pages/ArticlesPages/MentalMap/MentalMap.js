import { Link } from "react-router-dom";
import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    BlockHeader,
    Image,
    ImageBlock,
    ImageDescription,
    Text,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

import hogwarts from "../../../assets/ArticlesAssets/MentalMap/mentalmaps_hogwarts.png";
import dyinglight from "../../../assets/ArticlesAssets/MentalMap/dyinglight.png";
import shapes from "../../../assets/ArticlesAssets/MentalMap/mentalmaps_shapes.png";
import landmarks from "../../../assets/ArticlesAssets/MentalMap/mentalmaps_landmarks.png";

function MentalMap({ articleData, headerImg, articles }) {
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
                            Games have always strived for realism, and year
                            after year, we witness new technologies emerging
                            that increasingly improve how our reality is
                            represented in video games. But is it only the
                            graphical component that creates the immersion
                            developers aim for? My answer is no. For a game to
                            feel like a reflection of reality, great visuals
                            alone are not enough. There are many other elements,
                            such as physics, AI of opponents, location
                            architecture, and more. Today, however, I want to
                            focus on the intuitive understanding players have of
                            how the world (or location) is built, its purpose,
                            what they expect from it, and even what emotions
                            they experience in various locations.
                        </Text>
                        <Text>
                            In real life, a good example of this understanding
                            and expectation can be seen in your local shopping
                            mall.
                        </Text>
                        <BlockHeader>🛠️Function</BlockHeader>
                        <Text>
                            You instinctively know what you can find and
                            purchase in a mall, even without any detailed
                            description of it. You understand that if you need
                            to buy groceries, clothes, or toys for your pet,
                            instead of traveling to separate stores in different
                            areas, you can simply visit the mall where all these
                            shops are conveniently located under one roof.
                        </Text>
                        <BlockHeader>🫣Expectation</BlockHeader>
                        <Text>
                            You expect the mall to be easily accessible. There
                            should be parking available where you can leave your
                            car while shopping, or you know that there is public
                            transport nearby (perhaps even stops at different
                            entrances), making it easier to get to the mall and
                            back home.
                        </Text>
                        <BlockHeader>😱Emotions</BlockHeader>
                        <Text>
                            When visiting a mall, some people may experience
                            negative emotions due to the crowds, the size of the
                            building, or the possibility of getting lost. On the
                            other hand, others might feel positive and unique
                            emotions in such an environment. Regardless, a mall
                            will evoke emotions that differ from those you feel
                            at home, at work, or simply on the street.
                        </Text>
                        <BlockHeader>So, what is a mental map?</BlockHeader>
                        <Text sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                            A mental map is an intuitive sense of the terrain
                            and an understanding of the layout&apos;s structure
                            without direct indicators or labels in the UI.
                        </Text>
                        <br />
                        <Text>
                            A mental map is something players create for
                            themselves based on what the game provides (if it
                            provides anything at all). Offering players the
                            ability to sort locations by their intended purpose
                            is crucial because it benefits both players and
                            developers. For players, it&apos;s essential to
                            understand, for example, that Area A is a safe zone
                            where they can replenish ammunition or change their
                            outfit. If they head towards Area B, they can gather
                            resources for crafting items, whereas going in the
                            direction of Area C might lead to enemy territory
                            and combat encounters.
                            <br />
                            <br />
                            This means players rely on their understanding of
                            the game (which is rewarding in itself as it
                            demonstrates they&apos;ve learned and grasped the
                            game world) and don&apos;t require additional
                            navigation aids from the game. They can
                            independently find what they need in a given moment.
                            <br />
                            <br />
                            Let&apos;s explore a couple of examples to better
                            understand what a mental map is and how it manifests
                            in gameplay.
                        </Text>
                        <BlockHeader>😱Map division</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={hogwarts}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Divided locations in Hogwarts Legacy World Map
                            </ImageDescription>
                        </ImageBlock>

                        <Text>
                            The open world in Hogwarts Legacy can be divided
                            into three distinct areas.
                            <br />
                            <br />
                            🏰The castle was a safe zone and the main catalyst
                            for the story and character development. I
                            understood that if I wanted to learn new spells, I
                            needed to head to the castle and look for quests
                            from professors. Completing those quests would
                            reward me with the spells I desired.
                            <br />
                            <br />
                            🪄Hogsmeade, on the other hand, felt like a separate
                            location with a very specific purpose. It was still
                            a safe zone where I could also find some quests, but
                            primarily, it was a trading hub. I knew that if I
                            needed a special potion or was short on certain
                            resources, I could go to Hogsmeade to stock up.
                            <br />
                            <br />
                            🌲Finally, the Forbidden Forest was my main
                            battleground for leveling up my character. If I was
                            just a few dozen or a couple hundred XP away from
                            reaching the next level, I knew I could always find
                            enemies in the Forbidden Forest, defeating whom
                            would give me the experience points I needed. While
                            enemies could appear elsewhere outside of Hogwarts
                            and Hogsmeade, in my mental map (and each
                            player&apos;s mental map can differ), the Forbidden
                            Forest was the primary location for gaining those
                            crucial XP points.
                        </Text>
                        <BlockHeader>💡Lighting</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={dyinglight}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                UV-light in Dying Light 2.
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            If you&apos;ve ever found yourself wandering the
                            streets at night in Dying Light 2, your brain has
                            likely been subconsciously searching for the color
                            purple. Techland&apos;s developers managed to make
                            me truly love and appreciate this color in their
                            game. In the situation described above, I knew I had
                            two options: either run to a base or find a location
                            equipped with UV light. And for that, I didn&apos;t
                            need any navigation or hints—I simply knew what to
                            expect from such locations. For instance, when being
                            chased by a Volatile, the moment I spotted a UV
                            light, my brain automatically directed me towards
                            that spot. My chaotic running would instantly
                            transform into a purposeful route.
                        </Text>
                        <br />
                        <Text>
                            Beyond the use of special gameplay colors designated
                            by developers, lighting in general plays an equally
                            crucial role. For example, if you place the player
                            in a dark or completely unlit location, they will
                            immediately expect danger, surprise, and tension.
                            This too ties into the mental map, as the player
                            intuitively understands that they are in a perilous
                            situation, even without explicit cues from the game.
                        </Text>

                        <BlockHeader>📐Shapes</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={shapes}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Triangular shapes as an alert of danger in.
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Sharp objects have always been associated with
                            danger. You can accidentally harm yourself with
                            something sharp, so it&apos;s best to handle such
                            items carefully. This sounds like a perfect
                            intuitive cue for a player about potential danger.
                            If you place a player in a room filled with sharp
                            (triangular) objects, it will immediately evoke a
                            sense of fear.
                        </Text>
                        <br />
                        <Text>
                            Similarly, you can manipulate the player&apos;s
                            emotions using other types of shapes. Round shapes
                            tend to evoke a sense of safety, while square shapes
                            are generally neutral.
                        </Text>
                        <BlockHeader>🎡Landmarks</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={landmarks}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Landmark in The Last of Us Part II.
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The final technique discussed in this article for
                            allowing players to intuitively understand where
                            they need to go and why is <b>Landmarks</b>.
                            I&apos;ve already described this method in level
                            design in one of my{" "}
                            <Link to="/article/Landmarks">
                                previous articles
                            </Link>
                            , but I want to emphasize that it&apos;s a truly
                            powerful tool that aids players significantly. This
                            is especially true in games where players don&apos;t
                            have a GPS mechanic guiding them along a specific
                            route; landmarks play a crucial role.
                            <br />
                            <br />
                            Take, for example, the mission in The Last of Us
                            Part II when Ellie is trying to find and help Tommy.
                            Before the Player even sees the smoke (a landmark),
                            they hear a radio transmission indicating that
                            soldiers have surrounded a &quot;guest&quot; and
                            blown up their car. This not only provides the
                            Player with a point of reference but also
                            <b> generates emotional tension</b>. When they
                            finally see the smoke, they instinctively hurry to
                            the scene, driven by concern for Tommy.
                            <br />
                            <br />
                            As you can see in this example, landmarks provide
                            direction, advance the narrative, and most
                            importantly, evoke emotions that the Player
                            generates for themselves—inevitably feeling urgency
                            and concern as they rush to help.
                        </Text>
                        <BlockHeader>📝Conclusion</BlockHeader>
                        <Text>
                            In a game, elements like UI labels, hints from NPCs,
                            and direct guidance to a specific location are quite
                            normal. However, it&apos;s equally important to
                            allow players to rely on their intuition and
                            organize information in a way that feels most
                            natural to them. It&apos;s this intuition and its
                            positive outcomes that can provide immense
                            satisfaction to the player, serving as a validation
                            of the skills they&apos;ve developed while spending
                            hours immersed in your game.
                            <br />
                            <br />
                            Keep creating and dream bigger🙂
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

MentalMap.propTypes = {
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

export default MentalMap;
