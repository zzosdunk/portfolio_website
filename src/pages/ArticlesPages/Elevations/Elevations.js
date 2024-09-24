import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";

import PropTypes from "prop-types";
import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

function Elevations({ title, headerImg }) {
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

                        <Typography variant="body1" sx={{ width: "100%" }}>
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
                            diminish and diminish. In the context of action
                            gameplay, it is considered a very good practice to
                            separate arenas, slightly lower than the standard
                            level height. It can be just half a meter, but
                            stepping onto the arena, the player will lose the
                            feeling of complete safety and enter a location
                            where they will face danger. Moreover, elevations or
                            full-fledged separate floors that the player can
                            navigate through will give them a sense of choice
                            and greater interest in its completion, as now
                            it&apos;s not just the game, but they themselves
                            decide and take responsibility for navigating the
                            location they find themselves in. Keep creating and
                            dream bigger
                        </Typography>
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

Elevations.propTypes = {
    title: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
};

export default Elevations;
