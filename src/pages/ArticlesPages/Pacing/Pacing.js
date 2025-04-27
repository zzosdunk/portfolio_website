import {
    Box,
    Typography,
    Card,
    CardMedia,
    Grid,
    Table,
    TableBody,
    TableRow,
} from "@mui/material";

import PropTypes from "prop-types";

import {
    BlockHeader,
    Image,
    ImageBlock,
    ImageDescription,
    ListContainer,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
    StyledCell,
    Text,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";
import RelatedArticles from "../../../components/Articles/RelatedArticles";

import action from "../../../assets/ArticlesAssets/Pacing/pacing_action.png";
import traversal from "../../../assets/ArticlesAssets/Pacing/pacing_traversal.png";
import puzzle from "../../../assets/ArticlesAssets/Pacing/pacing_puzzle.png";
import cinematic from "../../../assets/ArticlesAssets/Pacing/pacing_cinematic.png";
import chapter8 from "../../../assets/ArticlesAssets/Pacing/pacing_chapter8.png";
import chapter9 from "../../../assets/ArticlesAssets/Pacing/pacing_chapter9.png";
import chapter20 from "../../../assets/ArticlesAssets/Pacing/pacing_chapter20.png";

function Pacing({ articleData, headerImg, articles }) {
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
                            What do you think is the core difference between a
                            24-lap race and a 24-hour race? Of course, there are
                            plenty of distinctions - for instance, a team of
                            drivers alternating over 24 hours vs. a single
                            driver racing solo for 24 laps, or the technical
                            requirements for the car itself. But the most
                            important difference lies in the{" "}
                            <b>approach and strategy</b>. A race car driver has
                            a limited time window during which they can deliver
                            their peak performance. In fact, humans in general
                            have a limited period in which they can be truly
                            productive - and <b>the same goes for players</b>. A
                            player has a limited span of time during which they
                            can stay engaged with a particular process.
                        </Text>
                        <br />
                        <Text>
                            That’s where <b>pacing</b> comes in. Let’s aim to
                            define pacing at the end of this article, based on
                            all the information I’ll present. It’s arguably one
                            of the most critical tools in a level designer’s
                            arsenal. Understanding the emotions and mental
                            states a player is experiencing at any given moment
                            provides the key to guiding them - and to building a
                            well-structured level and quest progression.
                            Remember those moments when you felt genuinely
                            exhausted during a game, not just challenged, but
                            almost drained, and the game just kept throwing
                            another wave of enemies at you without giving you a
                            breather? Or maybe the opposite, when nothing
                            interesting happened for too long and you started to
                            feel bored due to the lack of expected action?
                            <b>That’s pacing</b>. This system exists in every
                            game you’ve ever played. In some, it’s poorly
                            structured, in others, it’s done brilliantly - but
                            it’s always there.
                        </Text>
                        <br />
                        <Text>
                            Today, I’d like to break down a few chapters from
                            Uncharted 4: A Thief’s End by Naughty Dog and use
                            them to demonstrate what pacing is and how to build
                            it effectively. It’s a great case study because
                            Uncharted 4 is an action-adventure game that had to
                            blend multiple gameplay types (from now on, “beats”)
                            and cycle between them in a way that felt fair,
                            balanced, and fresh - making sure each element
                            offered something different and didn’t overpower the
                            others.
                            <br />
                            Let’s begin by identifying the core gameplay pillars
                            available to the developers and the roles each of
                            them played.
                        </Text>
                        <br />
                        <Text>
                            I would divide the gameplay into four main beats:
                        </Text>
                        <ListContainer>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>Traversal</Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>Stealth/Combat (Action)</Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>Puzzle</Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>Cinematic</Text>
                                </ListTextStyled>
                            </ListItemStyled>
                        </ListContainer>
                        <BlockHeader>🏔️Traversal</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={traversal}
                                alt="Traversal gameplay beat in Uncharted 4: A
                                Thief’s End"
                            />
                            <ImageDescription>
                                Traversal gameplay beat in Uncharted 4: A
                                Thief’s End
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            Traversal, as in most other games, serves as a means
                            of moving the player from one point of interest to
                            another. These points of interest can be combat
                            arenas, puzzles, or locations where important
                            narrative events unfold. During traversal, the
                            player often hears character dialogues, which
                            skillfully advance the story, explain and prepare
                            the player for the next challenge the game has in
                            store, and most importantly, serve as{" "}
                            <b>downbeats</b> - moments of rest from the previous
                            intense sequence. This is a crucial point, and later
                            in the visual breakdown, you’ll see how it helps
                            regulate the alternation of other gameplay elements.
                        </Text>
                        <br />
                        <Text>
                            I slightly downplayed it at the beginning of this
                            section by calling traversal in the Uncharted series
                            simply “a means of movement,” because in reality,
                            the developers place a significant amount of focus
                            on this aspect of gameplay. As you’ll see, traversal
                            makes up the majority of the overall gameplay
                            experience. This segment could even be divided into
                            its own subcategories, each with its own internal
                            pacing. While traversing, the player engages in
                            regular walking, driving across various terrain
                            types, climbing, interacting with environmental
                            elements that help progress forward, swimming, and
                            many other mechanics. However, in this article, I’d
                            like to focus on traversal in a broader sense -
                            specifically on how it integrates with and supports
                            the other gameplay pillars on a global level.
                        </Text>
                        <BlockHeader>🥷🧨Stealth/Combat (Action)</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={action}
                                alt="Action gameplay beat in Uncharted 4: A Thief’s End
"
                            />
                            <ImageDescription>
                                Action gameplay beat in Uncharted 4: A Thief’s
                                End
                            </ImageDescription>
                        </ImageBlock>

                        <Text>
                            It’s worth immediately highlighting Naughty Dog’s
                            approach to this type of gameplay, as it allows the
                            player to decide for themselves which playstyle
                            (stealth or combat) they want to engage with at any
                            given moment. This level of choice adds another
                            layer of variety to the gameplay experience.
                        </Text>
                        <br />
                        <Text>
                            Overall, the <b>action</b> component represents the
                            most &quot;dangerous&quot; and <b>intense</b> type
                            of gameplay, where the player is most prone to
                            making mistakes - and consequently, dying. It
                            requires quick decision-making, constant
                            repositioning, and avoiding tunnel vision. The
                            player has to stay alert, scanning the entire area
                            provided by the camera view in order to spot and
                            either eliminate or evade threats. (I personally
                            really struggled with that sniper in the helicopter
                            😄). As I mentioned earlier, in most cases the
                            player can attempt to clear an arena using stealth.
                            However, even then, the overall <b>tension level</b>{" "}
                            remains high - significantly higher than in the
                            other gameplay beats I described previously.
                        </Text>

                        <BlockHeader>🧩Puzzle</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={puzzle}
                                alt="Puzzle gameplay beat in Uncharted 4: Uncharted 4: A Thief’s End

"
                            />
                            <ImageDescription>
                                Puzzle gameplay beat in Uncharted 4: Uncharted
                                4: A Thief’s End
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            <b>Logic and focused attention on a single task</b>.
                            Right from the first sentence, you can probably
                            agree - this is a fundamentally different gameplay
                            experience compared to the action beat. Here, the
                            player has to engage their brain more than their
                            reflexes. The gameplay is less intense, but at
                            times, you might not even notice how much time has
                            passed while being “locked” in a single location,
                            trying to solve a puzzle the developers have
                            prepared. It’s crucial that solving a puzzle doesn’t
                            become a boring and repetitive trial-and-error task.
                            In the next article, dedicated specifically to
                            puzzle gameplay, I’ll talk about how to create
                            interesting puzzles that don’t leave the player
                            feeling like they’re missing vital information to
                            solve them!
                        </Text>
                        <BlockHeader>🎥Cinematic</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={cinematic}
                                alt="Cinematic gameplay beat in Uncharted 4: Uncharted 4: A Thief’s End
"
                            />
                            <ImageDescription>
                                Cinematic gameplay beat in Uncharted 4:
                                Uncharted 4: A Thief’s End
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            I think there’s the least to say here, but I’ll just
                            note that I consider this gameplay beat as
                            full-fledged cutscenes, which is why I refer to it
                            as cinematic rather than just narrative. Yes,
                            Naughty Dog often uses narration in other beats (we
                            hear a lot of dialogues during traversal, for
                            example), but there it serves more as a filler than
                            a distinction.
                        </Text>
                        <br />
                        <Text>
                            Now that we’ve briefly covered each of the main
                            gameplay beats of Uncharted 4: A Thief’s End, we can
                            look at each of them from a specific perspective.
                        </Text>
                        <ListContainer>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Traversal</i> - a moment when the
                                        player takes a break from
                                        physical/mental activity while focusing
                                        their attention on multiple elements,
                                        such as enemies on the map, or a single
                                        element around which a puzzle is built.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Action</i> - a moment in the game
                                        when the player is in danger,
                                        experiencing the highest level of
                                        stress, and must make quick decisions.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Puzzle</i> - a moment when the player
                                        is lost in their own thoughts, figuring
                                        out how to solve the puzzle that’s
                                        currently blocking their progress in the
                                        game.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Cinematic</i> - the main vehicle for
                                        narrative progression in the game.
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                        </ListContainer>
                        <br />
                        <Text>
                            So how do you properly alternate these processes?
                            How much time should be spent on each of them? Let’s
                            break this down with concrete examples!
                        </Text>
                        <BlockHeader>📊Level’s Pacing Breakdown</BlockHeader>
                        <Text>
                            Before we move on to analyzing some chapters, it is
                            important to note that there are no
                            &quot;ideal&quot; time intervals for pacing a game.
                            Every player has their own skill level; for some,
                            completing a location may take one try and five
                            minutes, while for others, it could take 20 minutes
                            and 4-5 deaths. Of course, as a designer, I always
                            plan how long, on average, I expect a level to take
                            the player to complete, and later, during tests, I
                            pay attention to whether my expectations align with
                            reality. However, there is no perfect formula. Pay
                            attention to the general proportions and ratios that
                            I will discuss.
                        </Text>
                        <br />
                        <Text>
                            For the most fair values, I will use a playthrough
                            from the same person, who has a certain skill level
                            and plays through the game evenly according to that
                            level. Today, I used recordings of a playthrough
                            from the author of the channel{" "}
                            <a
                                href="https://www.youtube.com/@gamingtimespov"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Gaming Times
                            </a>{" "}
                            .
                        </Text>
                        <BlockHeader>
                            Chapter 08: The Grave of Henry Avery
                        </BlockHeader>
                        <Text>
                            To begin, I have chosen a chapter from the middle of
                            the game, when all the gameplay beats have already
                            been introduced and the player is familiar with each
                            of them. Let&apos;s take a look at the progression
                            of the chapter, how much time each beat took, and
                            pay attention to interesting moments.
                        </Text>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={chapter8}
                                alt="Uncharted 4: A Thief’s End, Chapter 8 “The Grave of Henry Avery” Pacing
"
                            />
                            <ImageDescription>
                                Uncharted 4: A Thief’s End, Chapter 8 “The Grave
                                of Henry Avery” Pacing
                            </ImageDescription>
                        </ImageBlock>

                        <Text>
                            This chapter lasts 44:30 minutes. The duration of
                            the chapter itself is also important, as it can
                            affect the overall difficulty level. And this is an
                            example of excellent pacing for such a long level.
                            Notice how the developers only once used a
                            combination of a puzzle followed by action. As
                            mentioned earlier, this combination of beats is
                            quite compatible, as it provides the player with
                            different gameplay processes.
                        </Text>
                        <br />
                        <Text>
                            As you can see from the chart, you can even imagine
                            a level plan based on it: Cutscene → Player heads to
                            an arena with enemies → Arena → Player heads to an
                            arena with enemies → Arena → Player heads to a
                            puzzle arena → Upon exiting the puzzle location, the
                            player enters an arena with enemies → Player heads
                            to an arena with enemies → Arena → Player heads to a
                            location where the chapter ends.
                        </Text>
                        <br />
                        <Text>
                            It looks like the beginning of the level design
                            process, even before you start drawing up level
                            blueprints. At this point, during the very first
                            planning stages of the level, you should plan how
                            much time you want the player to spend in each
                            location.
                        </Text>
                        <br />
                        <Text>
                            As I mentioned before, the duration of the chapter
                            is very important, and the longer the chapter, the
                            more critical it is to set the pacing correctly, so
                            that, for example, the player doesn&apos;t end up
                            spending 40 minutes heading to an arena that they
                            will complete in just 4 minutes. This is why
                            designers divide the entire timeline into a sequence
                            of beats, where they evenly distribute time. If
                            action takes 5 minutes, give the player some time to
                            rest, and let the journey after it last around 5
                            minutes as well (remember, the traversal in this
                            game has its own unique gameplay, consisting of many
                            mechanics).
                        </Text>
                        <br />
                        <Text>
                            Before we move on to the next chapter, let&apos;s
                            take a look at some more statistics, specifically
                            the time distribution of each of the beats.
                        </Text>
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>1</StyledCell>
                                        <StyledCell>20</StyledCell>
                                        <StyledCell>16</StyledCell>
                                        <StyledCell>7</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Total duration for each beat (in minutes)
                            </ImageDescription>
                        </ImageBlock>
                        <br />
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>2.27</StyledCell>
                                        <StyledCell>45.45</StyledCell>
                                        <StyledCell>36.36</StyledCell>
                                        <StyledCell>15.91</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Proportional distribution of each beat (in
                                percentages)
                            </ImageDescription>
                        </ImageBlock>

                        <BlockHeader>
                            Chapter 09: Those Who Prove Worthy
                        </BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={chapter9}
                                alt="Uncharted 4: A Thief’s End, Chapter 9 “Those Who Prove Worthy” Pacing"
                            />
                            <ImageDescription>
                                Uncharted 4: A Thief’s End, Chapter 9 “Those Who
                                Prove Worthy” Pacing
                            </ImageDescription>
                        </ImageBlock>
                        <br />
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>12.75</StyledCell>
                                        <StyledCell>14.5</StyledCell>
                                        <StyledCell>8.25</StyledCell>
                                        <StyledCell>4.5</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Total duration for each beat (in minutes)
                            </ImageDescription>
                        </ImageBlock>
                        <br />
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>31.88</StyledCell>
                                        <StyledCell>36.25</StyledCell>
                                        <StyledCell>20.63</StyledCell>
                                        <StyledCell>11.25</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Proportional distribution of each beat (in
                                percentages)
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            The previous chapter was purely gameplay-oriented,
                            with the narrative mainly advancing through
                            dialogues during the player&apos;s travels. In this
                            chapter, as you can see, most of the time (31.88%)
                            is made up of cinematics. Individually, cutscenes
                            are still the shortest in duration of all the beats,
                            but their richness is due to the pacing decisions
                            made by the developers: in the previous chapter,
                            they focused more on gameplay and action, while this
                            time, they needed to push the narrative forward with
                            a more measured gameplay approach. Chapter 8
                            consists of 45.45% traversal and 36.36% action,
                            while Chapter 9 consists of 36.25% traversal and
                            31.88% cinematic cutscenes.
                        </Text>
                        <br />
                        <Text>
                            I specifically chose these two consecutive chapters
                            to show that pacing should and can be measured not
                            only within a single chapter/mission but also on the
                            larger scale of the entire project.
                        </Text>
                        <BlockHeader>Chapter 20: No Escape</BlockHeader>
                        <ImageBlock>
                            <Image
                                component="img"
                                image={chapter20}
                                alt="Uncharted 4: A Thief’s End, Chapter 20 “No Escape” Pacing"
                            />
                            <ImageDescription>
                                Uncharted 4: A Thief’s End, Chapter 20 “No
                                Escape” Pacing
                            </ImageDescription>
                        </ImageBlock>
                        <br />
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>8</StyledCell>
                                        <StyledCell>9.25</StyledCell>
                                        <StyledCell>11.25</StyledCell>
                                        <StyledCell>-</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Total duration for each beat (in minutes)
                            </ImageDescription>
                        </ImageBlock>
                        <br />
                        <ImageBlock>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <StyledCell>Cinematic</StyledCell>
                                        <StyledCell>Traversal</StyledCell>
                                        <StyledCell>Action</StyledCell>
                                        <StyledCell>Puzzle</StyledCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledCell>28.07</StyledCell>
                                        <StyledCell>32.46</StyledCell>
                                        <StyledCell>39.47</StyledCell>
                                        <StyledCell>-</StyledCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <ImageDescription>
                                Proportional distribution of each beat (in
                                percentages)
                            </ImageDescription>
                        </ImageBlock>
                        <Text>
                            I specifically chose a chapter from the game
                            that&apos;s nearing its end because, to evoke the
                            most intense and memorable emotions in the player,
                            and to provide the stress and endorphins that come
                            from challenges and success, the developers
                            intentionally ramp up the action. The difference
                            between the gameplay we&apos;ve discussed earlier,
                            where the majority of the game was focused on
                            traversal, puzzles, and a moderate pace, is
                            significantly different from the game&apos;s end
                            part. In addition to the endorphins, remember that
                            by the end of the game, the player is already fully
                            familiar with all the mechanics the developers have
                            introduced, and now, the goal is not to surprise
                            them with new gameplay elements, but with the scale
                            of the experience. This is where the idea of
                            surprising them with larger, more intricate
                            locations - filled with more enemies than usual,
                            scripted and intense scenes, such as fighting
                            enemies on a speeding train while under fire from
                            gunmen in cars racing across rough terrain, or, as
                            seen in this particular chapter, a chase from an
                            armored vehicle with a mounted machine gun through
                            narrow streets - comes into play.
                        </Text>
                        <br />
                        <Text>
                            Keep in mind that, aside from the duration of the
                            action beats, their level of difficulty is also much
                            higher than earlier in the game. This is often
                            dictated by the speed of the gameplay, but we
                            won&apos;t dive into the design of difficulty in
                            this article. Also, notice the duration of such an
                            intense chapter. It lasts only 28:39 minutes, which
                            is significantly shorter than Chapters 8 and 9
                            (44:30 and 40 minutes, respectively).
                        </Text>
                        <BlockHeader>
                            📝So, what is pacing and how to use it?
                        </BlockHeader>
                        <Text>
                            After all that has been said, I personally interpret
                            pacing as the rhythmic alternation of gameplay
                            beats, managed by the developers to control the
                            emotions and difficulty experienced by the player.
                        </Text>
                        <br />
                        <Text>
                            Returning to the very beginning, there is no
                            &quot;perfect formula&quot; for pacing that will be
                            universal for every level, let alone every game.
                            It’s all individual and depends on the needs and
                            vision of the developers. As you can see, you can
                            create a level that mostly consists of travel and
                            cutscenes, or you can create a level that the player
                            will remember mainly for its action. Both types of
                            levels can be great. However, it’s important to
                            remember and follow a few basic rules:
                        </Text>
                        <ListContainer>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Alternation</i>. Even based on my
                                        definition of pacing, the most important
                                        thing is the alternation between
                                        gameplay beats..
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                            <ListItemStyled>
                                <ListMarkerStyled />
                                <ListTextStyled>
                                    <Text>
                                        <i>Proportions</i>. It’s not enough to
                                        give 30 minutes of action followed by 2
                                        minutes of travel and then 30 more
                                        minutes of action. As an exception, if
                                        you’re sure that you want to create such
                                        intense tension for the player, it may
                                        work in rare cases, but using this
                                        approach as a regular formula is
                                        something I definitely do not recommend.
                                        This is an example of poor pacing.
                                        Gameplay beats that are evenly
                                        distributed over time, relative to each
                                        other, are the key to successful
                                        pacing..
                                    </Text>
                                </ListTextStyled>
                            </ListItemStyled>
                        </ListContainer>
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

Pacing.propTypes = {
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

export default Pacing;
