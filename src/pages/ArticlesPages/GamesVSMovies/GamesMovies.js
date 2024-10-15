import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";

import PropTypes from "prop-types";

import {
    Text,
    Image,
    ImageBlock,
    ImageDescription,
    BlockHeader,
} from "../../../components/Articles/Articles.styles";

import ExampleTemplate from "./ExampleTemplate";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

import aliens from "../../../assets/ArticlesAssets/GamesVSMovies/alien.png";
import assasin from "../../../assets/ArticlesAssets/GamesVSMovies/assasinscreed.png";
import batman from "../../../assets/ArticlesAssets/GamesVSMovies/batman.png";
import forsazh from "../../../assets/ArticlesAssets/GamesVSMovies/forsazh.png";
import lastofus from "../../../assets/ArticlesAssets/GamesVSMovies/lastOfUs.png";
import nfs from "../../../assets/ArticlesAssets/GamesVSMovies/needForSpeed.png";
import spider from "../../../assets/ArticlesAssets/GamesVSMovies/spiderman2.png";
import witcher from "../../../assets/ArticlesAssets/GamesVSMovies/witcher.png";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

function GamesMovies({ articleData, headerImg, articles }) {
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
                                Published on: 2024-02-15 | Author: Denys Zosym
                            </Typography>
                        </Box>

                        <Text>
                            Discussions about movies in games are constantly
                            relevant and attract more and more people each time.
                            Some argue that cinematography in games is
                            inappropriate and takes away players&apos; control
                            over the storyline, while others believe that it
                            would be very difficult to truly immerse oneself in
                            the storyline without it. However, do only films
                            &quot;enter&quot; into games, or do games also enter
                            into cinema? What were the film adaptations of
                            games, and which games were based on the plots of
                            films, books, or even comics? Let&apos;s talk about
                            all of this, as well as the factors that ensure
                            successful adaptation of a work from one industry to
                            another, and the mistakes to avoid.
                        </Text>
                        <BlockHeader>
                            What is the difference between games and movies?
                        </BlockHeader>
                        <Text>
                            🖐️<i>Interaction</i>: In games, players have the
                            opportunity to interact with the environment and
                            influence the development of the plot, whereas in
                            movies, viewers watch events unfold without the
                            ability to influence them.
                            <br />
                            <br />
                            🎮<i>Control</i>: In games, the player has control
                            over the actions of the main character or the
                            situation, while in movies, the director controls
                            the events and characters.
                            <br />
                            <br />
                            🏃<i>Dynamics</i>: In games, the development of
                            events can depend on the choices and actions of the
                            player, whereas in movies, the plot unfolds
                            according to a predetermined script.
                            <br />
                            <br />
                            🧑💻<i>Experience</i>: Players feel a more active
                            experience from games due to the ability to interact
                            and control events, whereas movie viewers passively
                            observe events.
                            <br />
                            <br />⌛<i>Time</i>: Games usually require more time
                            commitment from players, as gameplay can last for
                            hours or even days, while a movie can be watched
                            within a few hours.
                        </Text>
                        <BlockHeader>What are the similarities?</BlockHeader>
                        <Text>
                            📃<i>Narrative</i>: Both movies and games have a
                            narrative, or storyline, that tells a story and
                            develops characters.
                            <br />
                            <br />
                            🎆<i>Visual effects</i>: Both movies and games use
                            visual effects, animation, and graphics to create an
                            immersive world and impress viewers or players.
                            <br />
                            <br />
                            🖼️<i>Art</i>: Both games and movies are forms of art
                            used to express ideas, emotions, and observations
                            about the world.
                            <br />
                            <br />
                            😮<i>Emotional engagement</i>: Both movies and games
                            can evoke a wide range of emotions in viewers or
                            players, from joy and laughter to sadness and
                            excitement.
                            <br />
                            <br />
                            💡<i>Innovation</i>: Both games and movies can be a
                            space for innovative ideas and technical
                            achievements that contribute to the development of
                            culture and the art industry.
                        </Text>
                        <BlockHeader>
                            What games are based on movies? What are the
                            peculiarities of creating such games?
                        </BlockHeader>
                        <Text>
                            Players can experience the unique journey of their
                            favorite screen characters by embodying their roles.
                            Authenticity of the film&apos;s setting is highly
                            valued by players, so the more attention developers
                            pay to details and plot elements of the film or the
                            entire universe it&apos;s based on, the better the
                            player feedback will be.
                        </Text>
                        <BlockHeader>Worst</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={aliens}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Aliens: Colonial Marines (2006)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Aliens: Colonial Marines (2006)"
                            description="Once considered a cult classic, Aliens: Colonial
                            Marines is now infamous for its poorly functioning
                            enemies, abundance of bugs and glitches, and overall
                            lackluster development despite taking 12 years to
                            create. While it may provide some entertainment
                            value in its sheer badness, it ultimately fails to
                            deliver a satisfying gaming experience."
                            rating="IGN Rating: 5/10."
                        />
                        <ImageBlock>
                            <Image
                                component="img"
                                image={forsazh}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Fast & Furious Crossroads (2020)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Fast & Furious Crossroads (2020)"
                            description="Critics panned this game for its subpar graphics, shallow gameplay, and overall failure to capture the excitement of the Fast & Furious film franchise. Despite its tie-in to the popular movies, Fast & Furious Crossroads falls short in execution, leaving players disappointed."
                            rating="IGN Rating: 4/10."
                        />
                        <BlockHeader>Best</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={batman}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Batman: Arkham City (2011)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Batman: Arkham City (2011)"
                            description='Part of the acclaimed Arkham series, including "Batman: Arkham Asylum" (2009), Batman: Arkham City draws heavily from the Batman comics, offering engaging combat, detective mechanics, and immersive storytelling. Praised for its high quality and fidelity to the source material, it has set the standard for superhero video games. '
                            rating="IGN Rating: 9.5/10."
                        />
                        <ImageBlock>
                            <Image
                                component="img"
                                image={spider}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Spider-Man 2 (2004)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Spider-Man 2 (2004)"
                            description="Regarded as a milestone in superhero gaming, Spider-Man 2 effectively captures the essence of its titular character with its open-world sandbox environment and innovative web-swinging mechanics. Unlike previous Spider-Man games, it introduced a seamless web-swinging experience that became a defining feature of the series. "
                            rating="IGN Rating: 8.8/10."
                        />
                        <BlockHeader>
                            What movies or TV series are based on games?
                        </BlockHeader>
                        <BlockHeader>Worst</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={assasin}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Assassin&apos;s Creed (2016)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Assassin's Creed (2016) "
                            description="Has been widely panned for straying too far from its source material, resulting in a lackluster plot, poorly developed characters, and subpar action scenes. Despite the rich mythology and historical backdrop of the video game series, the film failed to capture its essence, disappointing both critics and audiences alike."
                            rating="IMDB rating: 5.6/10"
                        />
                        <ImageBlock>
                            <Image
                                component="img"
                                image={nfs}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                Need For Speed (2014)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="Need For Speed (2014)"
                            description="The movie is regarded as a subpar adaptation of the popular racing game franchise, primarily due to its weak storyline, unengaging characters, and inconsistent pacing. While it attempts to emulate the essence of the games, it ultimately falls short of delivering a captivating cinematic experience, leaving fans and critics dissatisfied."
                            rating="IMDB rating: 6.4/10"
                        />
                        <BlockHeader>Best</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={lastofus}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                The Last of Us (2023)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="The Last of Us (2023)"
                            description="Stands out as one of the finest zombie/post-apocalyptic series in recent years, garnering widespread acclaim from critics and audiences alike. With numerous accolades and stellar reviews, it has firmly established itself as a must-watch show."
                            rating="IMDB rating: 8.8/10"
                        />
                        <ImageBlock>
                            <Image
                                component="img"
                                image={witcher}
                                alt="Article Cover"
                            />
                            <ImageDescription>
                                The Witcher (2019)
                            </ImageDescription>
                        </ImageBlock>
                        <ExampleTemplate
                            title="The Witcher (2019)"
                            description="Based on the book series by Andrzej Sapkowski and the video game franchise by CD Projekt Red, features Henry Cavill as Geralt of Rivia. Praised for its performances, world-building, and thrilling action sequences, the series has earned acclaim from viewers and critics alike."
                            rating="IMDB rating: 8/10"
                        />
                        <BlockHeader>Impact of Movies on Games</BlockHeader>
                        <Text>
                            Despite the criticism often directed towards
                            cinematic elements that can hinder gameplay and
                            limit player agency (which is a fundamental
                            distinction from movies), developers frequently
                            employ cinematic cutscenes to advance the storyline.
                            The use of such scenes is a powerful tool, allowing
                            games to have compelling, well-developed narratives
                            that engage players throughout. However, to minimize
                            player frustration and maintain immersion,
                            developers introduced Quick-Time Events (QTEs),
                            pioneered by Digital Leisure in 1983 with the game
                            Dragon&apos;s Lair. QTEs require players to quickly
                            execute actions through interactive prompts to
                            overcome obstacles or progress the story. While this
                            concept has endured, it&apos;s often considered
                            tedious, prompting developers to seek innovative
                            ways to enhance this mechanic. One notable example
                            is the scene featuring an elephant in the game
                            &quot;It Takes Two,&quot; where QTE interactions
                            with players, requiring synchronized actions and
                            position changes, effectively blend player agency
                            with scripted storytelling, offering a unique and
                            engaging experience.
                        </Text>
                        <BlockHeader>Impact of Games on Movies</BlockHeader>
                        <Text>
                            Games have made significant contributions to the
                            film industry, particularly through technologies
                            like motion capture, enabling realistic character
                            movements and emotions. A notable recent example of
                            motion capture usage is in the series &quot;The
                            Mandalorian,&quot; where it was employed to create
                            the character Baby Yoda, lauded for its lifelike
                            appearance and expressiveness. However,
                            technological advancements aside, filmmakers have
                            also drawn inspiration from games. Director Sam
                            Mendes utilized the third-person camera concept from
                            the video game &quot;Red Dead Redemption&quot; to
                            establish emotional connections with characters in
                            the film &quot;1917&quot; Similarly, the single-shot
                            cinematography concept, popularized by the game
                            &quot;God of War,&quot; has found application in
                            modern cinema.
                            <br />
                            <br />
                            In conclusion, movies influence games just as games
                            influence movies, fostering a symbiotic relationship
                            between the two industries. These mutual influences
                            drive innovation, technology, and storytelling
                            techniques, ultimately benefiting consumers in both
                            mediums.
                            <br />
                            <br />I hope this topic was interesting for you. I
                            would appreciate your feedback and reactions, and
                            I&apos;m also curious to know if you have had any
                            experience with the games or movies mentioned in
                            this article. Do you agree with their ratings? Do
                            you think that cinematic elements in games are
                            detrimental, or do you believe that they are
                            necessary for creating engaging projects? Share your
                            thoughts and, of course, keep creating and dream
                            bigger🙂
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

GamesMovies.propTypes = {
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

export default GamesMovies;
