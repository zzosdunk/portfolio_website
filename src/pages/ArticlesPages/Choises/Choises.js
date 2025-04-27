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

import got from "../../../assets/ArticlesAssets/Choises/choises_got.png";
import farcry from "../../../assets/ArticlesAssets/Choises/choises_farcry.png";
import gow from "../../../assets/ArticlesAssets/Choises/choises_gow.png";
import gow2 from "../../../assets/ArticlesAssets/Choises/choises_gow2.png";
import cs from "../../../assets/ArticlesAssets/Choises/choises_cs.png";
import linear from "../../../assets/ArticlesAssets/Choises/choises_linearld.png";

function Choises({ articleData, headerImg, articles }) {
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
                            People love choice. It’s always more enjoyable to
                            make your own decision and choose something based on
                            your preferences rather than simply doing what
                            you’re told. That’s why it’s so important to provide
                            the Player with choices rather than imposing strict
                            rules on how they should play. Of course, almost
                            every game has its own rules and systems, but good
                            level design is defined by how seamlessly these
                            rules fade into the background and transform into
                            tools for the player. The player decides how to use
                            them, crafting their own unique gameplay experience.
                        </Text>
                        <br />
                        <Text>
                            Today, I’d like to explore a few ideas for
                            incorporating choices into your amazing levels.
                        </Text>

                        <BlockHeader>🥷 Playstyle</BlockHeader>
                        <Text>
                            Fortunately, there are countless game genres and
                            variations, and many of them can be effectively
                            combined. For example, action games often blend
                            elements of stealth and combat. Designing such
                            levels is undoubtedly more challenging, but it gives
                            players the freedom to choose how they want to
                            approach a mission. Would they prefer to charge in
                            aggressively, breaking through the front gates like
                            a samurai in Ghost of Tsushima, confronting enemies
                            face-to-face? Or would they rather sneak between
                            buildings like a ninja (or perhaps a thief), using
                            alternate paths above enemy lines, hiding in tall
                            grass, or slipping through crawl spaces to silently
                            eliminate foes from behind?
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={got}
                                alt="Ghost of Tsushima level design"
                            />
                            <ImageDescription>
                                Level Design in Ghost of Tsushima
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Or maybe they’d like to find a vantage point with a
                            clear line of sight and pick off all enemies from a
                            distance with a sniper rifle, much like in the Far
                            Cry series? This variety of approaches is undeniably
                            more enticing than being limited to a single method
                            for completing a level.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={farcry}
                                alt="Far Cry vantage point"
                            />
                            <ImageDescription>
                                Vantage point level design example in Far Cry 3
                            </ImageDescription>
                        </ImageBlock>

                        <Text>
                            Such versatility needs to be planned from the start,
                            as adding it to a finished level can be quite
                            difficult. Want to let the player take out an enemy
                            base without setting foot in it? Placing it at the
                            base of surrounding cliffs offers an excellent
                            solution.
                            <br />
                            <br />
                            For combining stealth and combat styles, it’s
                            crucial to carefully design enemy paths. In my
                            levels, I avoid creating routes filled with blind
                            spots that enemies simply ignore. Instead, I focus
                            on manipulating enemy timings so players can
                            identify moments to move from one point to another
                            unseen or safely neutralize an enemy, which in turn
                            facilitates progress through the area.
                            <br />
                            <br />
                            This technique is widely used in stealth games
                            because it evokes a sense of risk—and therefore
                            fear—and rewards successful maneuvers with
                            satisfaction (something that’s vital for a player).
                            This ensures gameplay isn’t merely about moving
                            around but also includes direct interaction with the
                            game world.
                        </Text>

                        <BlockHeader>📈 Nonlinearity</BlockHeader>
                        <Text>
                            As I mentioned earlier, games are divided into
                            various genres and types, based not only on gameplay
                            style but also on world design. One of the simplest
                            and most popular distinctions is between open-world
                            and linear games. In open-world games, most missions
                            often boil down to &quot;linear&quot; levels, so
                            what I’ll discuss next doesn’t directly apply to
                            these types of worlds but instead relates to choice.
                            <br />
                            <br />
                            The fact is, even a linear level can be made
                            &quot;nonlinear&quot;. Let’s examine one of the most
                            iconic competitive maps in gaming history: de_dust2
                            from Counter-Strike.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={cs}
                                alt="de_dust2 layout"
                            />
                            <ImageDescription>
                                Left-right Level Design at de_dust2 map in
                                Counter-Strike
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Here, you can see that players are always presented
                            with two choices: go left or go right. Once a player
                            makes a decision and proceeds further, they are
                            again faced with two options, and so on. Of course,
                            we’re not considering things like boosts or advanced
                            team-based strategies. I’m speaking strictly about
                            the general level design. As a result, players are
                            given a relatively small map where they are
                            constantly making decisions about their path.
                            <br />
                            <br />
                            Another excellent example of engaging level design
                            for &quot;nonlinear&quot; levels that are
                            technically linear is found in the levels of God of
                            War: Ragnarok. Here, I’d like to focus on two
                            aspects: <b>exploration</b> and <b>combat arenas</b>
                            .
                        </Text>
                        <BlockHeader>🌍 Exploration</BlockHeader>
                        <Text>
                            The developers have established an excellent
                            gameplay contract with the player:{" "}
                            <b>exploration</b> = <b>reward</b>. Naturally, to
                            maintain excitement and anticipation, this is not a
                            100% guarantee that every corner hides a legendary
                            chest. However, when the player steps off the main
                            path to check out that cave turn, they intuitively
                            expect to find some content prepared by the
                            designers.
                            <br />
                            <br />
                            This could be a chest, health pickup, various types
                            of collectibles, or even a secret boss fight!
                            <br />
                            <br />
                            By breaking up linear paths (which remain linear at
                            their core—the player starts at point A and needs to
                            reach point B) with additional branches or diverging
                            paths that later converge into one, you provide
                            players with the opportunity to make choices about
                            how to spend their playtime. You also create moments
                            of doubt—players may intentionally skip one of the
                            available side paths and later wonder if they missed
                            something valuable.
                            <br />
                            <br />
                            This is a clear example of how a linear level can be
                            transformed into a structure that feels nonlinear.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={linear}
                                alt="Linear level with exploration"
                            />
                            <ImageDescription>
                                Approach to &quot;linear&quot; level design
                            </ImageDescription>
                        </ImageBlock>

                        <BlockHeader>⚔️ Combat</BlockHeader>
                        <Text>
                            One of the key gameplay innovations in God of War:
                            Ragnarok compared to the 2018 installment is the
                            ability to attack enemies from elevated positions.
                            This introduces not only new and exciting combat
                            combinations but also challenges designers to
                            approach level and arena construction differently.
                            <br />
                            <br />
                            Take a look at this arena and notice how much
                            variety it offers.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={gow}
                                alt="Combat arena multi-level"
                            />
                            <ImageDescription>
                                Combat arena with multi-level design in God of
                                War: Ragnarok
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The player can engage enemies on the lower level of
                            the arena, fight from higher ground, or combine both
                            approaches—knocking enemies down to the lower tier
                            and striking them with a powerful attack from above.
                            <br />
                            <br />
                            This variety adds dynamic elements to the gameplay,
                            making combat in God of War: Ragnarok even better
                            and more engaging.
                            <br />
                            <br />
                            By utilizing verticality in level design, players
                            are empowered to decide on which tier they want to
                            fight, take advantageous positions, and create a
                            vast array of potential gameplay scenarios.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={gow2}
                                alt="God of War combat"
                            />
                            <ImageDescription>
                                Another example of verticality in God of War:
                                Ragnarok
                            </ImageDescription>
                        </ImageBlock>

                        <BlockHeader>🗺️ Flanking Routes (Bonus)</BlockHeader>
                        <Text>
                            As a bonus topic for today, I’d like to highlight{" "}
                            <b>flanking routes</b>. Among all the tools
                            discussed above, using bypass paths is one of the
                            simplest to plan, but it is by no means less
                            valuable. When presenting a bypass path to the
                            player, it’s crucial to clearly mark its{" "}
                            <b>entry and exit points</b> so the player can
                            assess how advantageous it is to use such a path.
                            <br />
                            <br />
                            It’s equally important to communicate whether the
                            player’s opponents can also use this path or if it’s
                            exclusively available to the player. This
                            distinction affects the player&apos;s sense of
                            security: should they remain alert and prepared for
                            potential encounters, or can they simply use the
                            path to quickly get behind enemy lines without fear
                            of confrontation?
                        </Text>
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

Choises.propTypes = {
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

export default Choises;
