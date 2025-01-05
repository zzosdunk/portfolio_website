import { Box, Typography } from "@mui/material";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

function ExtractionShooterPage() {
    return (
        <>
            <Navbar />
            <Box sx={{ width: "90%", margin: "0 auto", marginTop: 4 }}>
                <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                    <Typography variant="h3" color="text.primary">
                        Extraction Shoother
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default ExtractionShooterPage;
