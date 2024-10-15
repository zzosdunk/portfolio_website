import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    BlockHeader,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Seasons({ articleData, headerImg, articles }) {
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
                            In the realm of game design, &quot;Seasons&quot;
                            have evolved, captivating players and sparking
                            excitement. One of the earliest instances can be
                            traced back to Diablo 2, where the initial
                            &quot;ladder,&quot; now commonly known as a season,
                            made its debut. At first, it was a race to achieve
                            level 99 first and secure a spot on the leaderboard.
                            While innovative, it lacked the depth for long-term
                            player retention. Fast forward to today, and Seasons
                            has transformed into a multifaceted game design
                            feature. They serve as a potent tool for sustaining
                            player interest and boosting revenue. Let&apos;s
                            explore the essential elements that make Seasons a
                            thriving addition to modern gaming, benefiting both
                            players and game developers:
                        </Text>
                        <BlockHeader>A Clear and Comprehensive UI</BlockHeader>
                        <Text>
                            A highly visible Season UI is vital for effectively
                            conveying objectives, progress, rewards, and
                            remaining time to complete the season. It provides
                            players with direction and motivates active
                            participation in the season&apos;s activities. You
                            can see an excellent example of a season UI screen
                            from Call of Duty®: Modern Warfare® & Warzone.
                        </Text>
                        <BlockHeader>Rewards</BlockHeader>
                        <Text>
                            A successful season pass experience leaves players
                            eagerly anticipating the next season. Achieving this
                            depends on the value of the rewards, especially
                            premium and final ones. The final reward should act
                            as a prestigious capstone, celebrating player effort
                            and commitment. By retiring this exclusive final
                            reward after the season ends, you create a powerful
                            incentive for players to return.
                        </Text>
                        <BlockHeader>Mindful Parameter Definition</BlockHeader>
                        <Text>
                            When defining parameters for your season pass,
                            consider essential factors like season length,
                            tiers, tier rewards, and future updates. Season
                            length determines how long rewards remain available,
                            and establishing a cadence for season events is
                            crucial. Providing a one-week rest period between
                            seasons offers players a breather and helps prevent
                            burnout, while also affording the development team
                            more time to create new content.
                        </Text>
                        <BlockHeader>
                            Claiming Rewards the Right Way
                        </BlockHeader>
                        <Text>
                            Incentivize players to actively engage with the
                            season pass by requiring them to claim rewards via a
                            button in the UI. This approach ensures players
                            acknowledge their rewards and reinforces their
                            interaction with the feature. Automatic rewards run
                            the risk of being overlooked or misunderstood.
                        </Text>
                        <BlockHeader>Daily Engagement</BlockHeader>
                        <Text>
                            Implementing daily missions and resets keeps players
                            engaged and prevents them from consuming season
                            content too quickly. New missions should unlock
                            daily, encouraging consistent player participation
                            and creating a sense of daily accomplishment.
                            <br />
                            <br />
                            By understanding and implementing these key
                            elements, game designers can craft Seasons that not
                            only keep players eagerly awaiting the next
                            adventure but also contribute to the long-term
                            success and sustainability of their games.
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

Seasons.propTypes = {
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

export default Seasons;
