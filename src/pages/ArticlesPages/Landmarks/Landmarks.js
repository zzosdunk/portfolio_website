import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from "@mui/material";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import landmarksHeader from "../../../assets/ArticlesAssets/Landmarks/ladnmarksHeader.png";

function Landmarks() {
    return (
        <>
            <Navbar />
            <Box sx={{ width: "80%", margin: "0 auto", marginTop: 4 }}>
                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="400"
                                image={landmarksHeader}
                                alt="Article Cover"
                            />
                        </Card>

                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Published on: 2024-09-15 | Author: John Doe
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ width: "65%" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla euismod neque a nisl viverra, nec
                            facilisis elit porttitor. Phasellus tristique,
                            ligula non fermentum sodales, lacus magna laoreet
                            ligula, at vulputate orci velit ut felis. Aenean nec
                            ante ac odio vehicula gravida. Cras volutpat dolor
                            ac quam facilisis volutpat.
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

export default Landmarks;
