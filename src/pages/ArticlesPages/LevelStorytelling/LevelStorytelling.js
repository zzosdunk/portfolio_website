import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";

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

import tlou from "../../../assets/ArticlesAssets/LevelStorytelling/levelstorytelling_lastOfUs.png";
import dyinglight from "../../../assets/ArticlesAssets/LevelStorytelling/levelstorytelling_dyinglight.png";
import re from "../../../assets/ArticlesAssets/LevelStorytelling/levelstorytelling_residentevil.png";

function LevelStorytelling({ title, headerImg }) {
    return (
        <>
            <Navbar />
            <Box sx={{ width: "80%", margin: "0 auto", marginTop: 4 }}>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Typography variant="h3" color="text.primary">
                                {title}
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
                            Narrative in a game can greatly aid in level design,
                            as it provides insight into how to construct the
                            game space in a way that aligns with the events of
                            the game&apos;s story and setting, ensuring
                            coherence and immersion for the player.
                        </Text>
                        <BlockHeader>
                            🌎Basic principles of the surrounding world
                        </BlockHeader>
                        <Text>
                            To enhance the player&apos;s experience of the
                            game&apos;s story, it is crucial to create an
                            appropriate environment. For example, if the
                            game&apos;s plot revolves around an apocalypse
                            theme, it is important to depict a familiar image of
                            a metropolis in a destroyed, abandoned, and
                            overgrown state. It would be foolish to tell the
                            player about a global apocalypse where almost all of
                            humanity perished, while the player walks through
                            clean, well-kept streets with huge television
                            advertising banners.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={tlou}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Flooded city in The Last of Us Part II
                            </ImageDescription>
                        </ImageBlock>

                        <Text>
                            In order for the player to believe and, most
                            importantly, feel like the hero of the story the
                            game wants to tell, it is important that the world
                            surrounding them is authentic to that story. One
                            good example is the Last of Us games, where players
                            can truly feel the climate of desolate, deserted,
                            and overgrown cities, which perfectly emphasizes the
                            level of tragedy that has occurred. Such a setting
                            allows level designers to create convenient pathways
                            in buildings, as structures may be partially
                            destroyed, collapsed houses can harmoniously
                            restrict the level, and indicate the direction for
                            further progression, and so on.
                        </Text>
                        <BlockHeader>
                            🧟Setting the atmosphere and mood in the game
                        </BlockHeader>
                        <Text>
                            After defining the high-level principles of your
                            world, the next important factor in level design is
                            the overall mood and emotion it should convey. Is
                            the surrounding world dangerous for the player? Do
                            its rules change depending on the time, weather, or
                            location? For example, if we want to convey that the
                            world is dangerous for the player, that there is a
                            threat endangering people or that people are
                            fighting against each other, then we can place
                            various barricades, burnt-out cars as shelter for
                            the player, and other elements typical of a
                            dangerous environment. And if we want to show the
                            world from a safe side, then we can place
                            well-groomed lawns, flowers planted along the road,
                            and ordinary passers-by engaged in routine work in
                            the level.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={dyinglight}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Manually crafted guarded bases in Dying Light 2.
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            For example, in Dying Light 2, we can see how
                            factions have built their bases from simple
                            materials (such as wooden and iron planks laid by
                            hand), with concrete blocks placed on the approach
                            to them. At the base itself, there are tall
                            observation towers. These kinds of details
                            immediately emphasize the feeling of a protected
                            territory from threats &quot;from the outside.&quot;
                            The player immediately understands that in such a
                            location, they can feel safe, but beyond its
                            boundaries, there is a threat.
                        </Text>

                        <BlockHeader>
                            💡Lighting and Spatial Breadth
                        </BlockHeader>

                        <Text>
                            The player&apos;s ability to move has a significant
                            impact on their sense of safety. If you place the
                            player in a huge hall, they will feel more relaxed
                            because in case of danger, they will have a large
                            area to maneuver. However, if they find themselves
                            in a narrow corridor or a small room, they will
                            immediately experience fear and uncertainty because
                            they understand that in case of danger, they have
                            nowhere to run or hide.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={re}
                                alt="Article Cover"
                            />

                            <ImageDescription>
                                Narrow and dimly lit spaces in Resident Evil.
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The same principle applies to lighting. Locations
                            saturated with bright colors and well-lit areas will
                            be more welcoming to the player than dark and poorly
                            lit ones. As Antoine de Saint-Exupéry said,
                            &quot;Only the unknown frightens.&quot; By the way,
                            narrow, claustrophobic, and poorly lit spaces are
                            the main principles for creating levels in the
                            horror genre.
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
                            {[1, 2, 3].map((article) => (
                                <Card key={article} sx={{ marginBottom: 2 }}>
                                    <CardContent>
                                        <Typography variant="h3" gutterBottom>
                                            Antoher Article {article}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

LevelStorytelling.propTypes = {
    title: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
};

export default LevelStorytelling;
