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

function Seasons({ title, headerImg }) {
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
                            Games featuring the mechanic of eliminating enemies
                            should primarily offer players the chance to develop
                            confidence and grasp their capabilities within the
                            game world. Players need to experience the
                            &quot;taste of blood&quot; without much difficulty
                            during their initial encounter with enemy
                            elimination. This straightforward approach helps
                            players understand the mechanic, while also acting
                            as a valuable teaching tool within a safe
                            environment. As a result, players become more
                            self-assured in their abilities, and when facing
                            real enemies, they won&apos;t feel stressed or
                            uncertain about how to overcome them. To create such
                            a scenario, it is sufficient to position the first
                            enemy with their back turned to the player, or to
                            design a location where the enemy is unarmed and the
                            sole point of focus. This way, the player can
                            concentrate solely on eliminating the enemy without
                            any distracting elements. Keep creating and dream
                            bigger
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

Seasons.propTypes = {
    title: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
};

export default Seasons;
