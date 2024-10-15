import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    Image,
    ImageBlock,
    ImageDescription,
} from "../../../components/Articles/Articles.styles";

import propsRewards from "../../../assets/ArticlesAssets/Rewards/propsrewards.png";
import woodenChest from "../../../assets/ArticlesAssets/Rewards/woodenchest.png";
import redGlowChest from "../../../assets/ArticlesAssets/Rewards/redglowchest.png";
import legendaryChest from "../../../assets/ArticlesAssets/Rewards/rewardsHeader.png";
import nornirChest from "../../../assets/ArticlesAssets/Rewards/rewards.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function Rewards({ articleData, headerImg, articles }) {
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
                                Published on: 2024-09-15 | Author: Denys Zosym
                            </Typography>
                        </Box>

                        <Text>
                            The concept of game rewards is crucial in game
                            design. Players often engage with games with the
                            anticipation of receiving rewards, which
                            necessitates favorable evaluation. Positive
                            assessment is sought by players, making a
                            well-structured and fair game rewards system pivotal
                            in any game, regardless of complexity.
                            <br />
                            <br />
                            As a level designer, it&apos;s my responsibility to
                            establish rules for players regarding the
                            acquisition of rewards. It&apos;s crucial for
                            players to clearly understand what actions are
                            needed to earn rewards. Immediate thoughts gravitate
                            toward rewarding players for completing missions, it
                            forms the foundation of any level and is a
                            fundamental rule in gaming. However, to instill
                            curiosity and engagement in exploring the game world
                            (especially open worlds), players should be rewarded
                            for doing so. Today, the game I&apos;m referencing
                            is God of War: Ragnarok, impressed by its level
                            design and how developers established a clear code
                            of conduct for me as a player. It was made evident
                            to me and consistently reiterated that deviating
                            from the leading line to explore various nooks and
                            crannies would yield rewards. Importantly, this
                            isn&apos;t solely about comprehensive side quests
                            that significantly boost my character&apos;s
                            progression as this game design technique is used in
                            almost every game. In this article, I aim to
                            highlight the layers of rewarding players for the
                            time spent exploring and interacting with the game
                            world.
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
                                image={propsRewards}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                1st layer - Barrels, crates, vases and other
                                destructible props
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The simplest are recognizable props like vases,
                            crates, barrels, etc. They&apos;re often found
                            directly along the leading line of the level,
                            breaking them yields a small amount of resources,
                            but it teaches players that interacting with the
                            world leads to rewards, thereby encouraging
                            engagement.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={woodenChest}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                2nd layer - Wooden crates
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Next are the typical wooden crates, also frequently
                            encountered directly along the player&apos;s path or
                            in areas where minimal effort is needed to find them
                            along the leading line. These crates contain
                            essential crafting components, a small amount of
                            monetary resources, and other minor rewards.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={redGlowChest}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                3rd layer - Red-glowing crates
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Red-glowing crates are highly visible from a
                            distance and usually require at least one action
                            (often just one) to unlock access. This distinct
                            characteristic makes them quite intriguing. Level
                            designers often place them visibly but partially,
                            symbolizing that to fully see and approach them,
                            players must deviate from the main path and invest
                            time in obtaining the rewards. These rewards are
                            typically more valuable than in the previous cases,
                            here, players can find special items for upgrading
                            Kratos&apos; primary weapons, along with a notably
                            larger amount of monetary resources.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={legendaryChest}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                4th layer - Legendary crates
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Legendary crates delve deeper into the layers of
                            rewards. The vast majority of these crates require
                            players to complete side quests, explore the world
                            extensively (in other words, deviate significantly
                            from the main campaign), and consequently offer
                            rewards with almost maximal value compared to other
                            rewards.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={nornirChest}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                5th layer - Nornir Chest
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The deepest and most valuable layer of rewards in
                            God of War: Ragnarok is the Nornir Chest. These are
                            genuine puzzles that not only demand time for their
                            resolution but often require the character&apos;s or
                            their companions&apos; special abilities. Throughout
                            the game, these chests are strategically placed,
                            compelling players to return as they unlock new
                            abilities and enhance character skills. While some
                            of these chests may be found along the leading line,
                            players must contemplate how to solve the puzzle
                            that holds the key to unlocking them. The reward for
                            deciphering these riddles, investing such a
                            significant amount of time, effort, and energy, is
                            among the best forms of acknowledgment possible.
                            From Nornir Chests, players can acquire rewards such
                            as rare weapon attachments, crafting components,
                            Idunn Apples (increasing the player&apos;s maximum
                            health), or Horns of Blood Mead (boosting the
                            player&apos;s rage meter).
                            <br />
                            <br />
                            In conclusion, I&apos;d like to emphasize once more
                            that the most effective way to motivate players to
                            explore your world, incite their interest in
                            deviating from the main storyline, and immerse
                            themselves in your levels is through rewards. Set
                            rules with the player, show them that if they stray
                            from the path, they won&apos;t get lost but will
                            instead discover something valuable.
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

Rewards.propTypes = {
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

export default Rewards;
