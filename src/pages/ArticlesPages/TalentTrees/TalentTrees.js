import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    Image,
    ImageBlock,
    ImageDescription,
} from "../../../components/Articles/Articles.styles";

import farcry from "../../../assets/ArticlesAssets/TalentTrees/talentTrees_farCry3.png";
import godofwar from "../../../assets/ArticlesAssets/TalentTrees/talentTrees_gow.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

function TalentTrees({ articleData, headerImg, articles }) {
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
                                Published on: 2024-02-08 | Author: Denys Zosym
                            </Typography>
                        </Box>

                        <Text variant="body1" sx={{ width: "100%" }}>
                            There are numerous ways for a game to incorporate
                            customization, provide detailed explanations of
                            mechanics, and enhance replayability. The talent
                            tree, however, accomplishes all three within a
                            single UI panel.
                            <br />
                            <br />
                            Talent trees empower players to shape and choose
                            their unique playstyle from the options offered by
                            the game. An essential aspect is the ability for
                            players to replay the game, opting for a different
                            path in the development of their talents.
                            <br />
                            <br />
                            Another significant advantage of talent trees is
                            their capability to engage players and sustain their
                            interest as the game progresses. They reveal
                            progressively more advanced game mechanics and
                            possibilities. The talent tree acts as an enticing
                            incentive for players to continue playing, aiming to
                            unlock that one defining talent that complements
                            their chosen build and items. Rewards can range from
                            expanded player parameters and unique combat
                            combinations to simplifications or enhancements of
                            other player skills. It&apos;s important to note
                            that every facet of the player&apos;s character and
                            actions can be connected to nodes in the talent
                            tree.
                            <br />
                            <br />
                            As evident, there are numerous possibilities for
                            constructing a talent tree. In this post, let&apos;s
                            explore the origins of this game design mechanic and
                            its fundamental principles.
                            <br />
                            <br />
                            In one of the previous posts dedicated to Seasons in
                            games, Diablo II was acknowledged as a pioneer and
                            creator of this game design mechanic. Well, Diablo
                            II was an innovator in the talent tree as well!
                            Arguably, its most significant addition was the
                            introduction of deep and meaningful talent trees,
                            likely influenced by the tech trees seen in the
                            popular RTS genre. These tech trees provided a
                            linear progression for unlocking buildings and
                            upgrades.
                            <br />
                            <br />
                            Let&apos;s explore some key principles of talent
                            tree designs, and later I will share a couple of
                            examples from already released games where this
                            practice was excellently applied.
                            <br />
                            <br />
                            1. Design the tree so that simple and minor skills
                            are at the beginning and are easily and quite
                            quickly accessible to the player. This will allow
                            the player to gain benefits right from the start and
                            will motivate them to complete various tasks for
                            more significant development of their abilities in
                            the future. More complex aspects are usually
                            introduced at higher tiers to ensure players are
                            adequately prepared for these intricacies. Certain
                            low-tier talents may serve as prerequisites for
                            reaching higher tiers, or a specific player level
                            may be required.
                            <br />
                            2. Decide how player would progress through the
                            tree. The designer&apos;s task is to decide the
                            gating mechanism that best suits their game. If
                            players can freely choose any talent at any time,
                            the progression dynamics and the distinctive
                            playstyle each tree brings will be lost.
                            <br />
                            3. Establish assumptions for the talent tree? Why is
                            it in the game and how will it be beneficial for the
                            player? As I mentioned earlier, the skill tree
                            serves as the user&apos;s options menu to create the
                            game they want to play. Some players may opt for
                            talents that ease their experience, providing more
                            life, extra lives, or enhanced defense. Others may
                            seek fun bonuses for speed and damage to race
                            through the game at an exhilarating pace. Players
                            may choose to min-max using multiple abilities to
                            optimize play, while some prefer a single, spam-able
                            ability. It&apos;s crucial to ensure that both paths
                            are viable.
                            <br />
                            <br />
                            A common design choice is to balance the game so
                            that only players with the highest-level talents can
                            conquer the toughest challenges within the game.
                            <br />
                            <br />
                            The most exceptional talent trees go beyond sheer
                            power, transforming how the entire game is played by
                            enhancing the core functionality based on the
                            player&apos;s chosen build. Before reaching this
                            level, a fundamental understanding of what makes the
                            game enjoyable in various ways is essential.
                            <br />
                            <br />
                            Let&apos;s take a closer look at how the talent tree
                            was implemented in Far Cry 3 and God of War:
                            Ragnarok.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={farcry}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Talent Tree in Far Cry 3 (The Heron branch)
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Skills in Far Cry 3 are enhancements to the
                            player&apos;s abilities that Jason can unlock by
                            completing missions and leveling up in the campaign.
                            As more skills are unlocked, additional additions
                            will be made to your Tatau. These skills are
                            categorized into three different trees:
                            <br />
                            <br />
                            1. <i>The Heron.</i> Focuses on long-range takedowns
                            and mobility.
                            <br />
                            2. <i>The Shark.</i> Emphasizes assault takedowns
                            and healing.
                            <br />
                            3. <i>The Spider.</i> Centers around stealth
                            takedowns and survival.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={godofwar}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Talent Tree in God of War: Ragnarok (Leviathan
                                Axe branch)
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            In God of War: Ragnarok, the skills of Kratos,
                            Atreus, and their companions are intricately linked
                            to their primary weapons. Kratos, specifically,
                            possesses skills related to his Leviathan Axe and
                            Blades of Chaos, falling into three primary
                            categories: Technique, Ranged, and Melee.
                            <br />
                            <br />
                            1. <i>Technique</i> enhances the damage inflicted by
                            melee attacks.
                            <br />
                            2. <i>Ranged</i> augments the damage output of
                            ranged attacks.
                            <br />
                            3. <i>Melee</i> introduces more potent melee attacks
                            and diverse combinations.
                            <br />
                            <br />
                            In conclusion to all that has been discussed and the
                            examples provided, the main takeaway is to design
                            your talent tree to be flexible enough for players
                            to choose their own unique playstyle throughout your
                            captivating game. Provide the opportunity for
                            players to replay the game, ensuring a diverse
                            experience and a unique gameplay style each time.
                            <br />
                            <br />I hope that this article has been beneficial
                            to you. Remember, the best talent tree is one that
                            suits your game specifically. So, experiment,
                            innovate, and, of course, keep creating and dreaming
                            bigger 🙂
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

TalentTrees.propTypes = {
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

export default TalentTrees;
