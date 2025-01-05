import {
    PageContainer,
    TitleStyled,
    GalleryContainer,
    ImageStyled,
    DescriptionContainer,
    Text,
    ImageBlock,
    Image,
    ImageDescription,
    BlockHeader,
    ListContainer,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
} from "../ProjectInfo.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import icv1 from "../../../assets/ProjectsAssets/InteractiveCV/CV_game_img1.png";
import icv2 from "../../../assets/ProjectsAssets/InteractiveCV/CV_game_img3.png";
import icv3 from "../../../assets/ProjectsAssets/InteractiveCV/CV_game_img5.png";
import icv4 from "../../../assets/ProjectsAssets/InteractiveCV/CV_game_img6.png";

import descriptionimg1 from "../../../assets/ProjectsAssets/InteractiveCV/cv1.png";
import descriptionimg2 from "../../../assets/ProjectsAssets/InteractiveCV/cv2.png";
import descriptionimg3 from "../../../assets/ProjectsAssets/InteractiveCV/cv3.png";
import descriptionimg4 from "../../../assets/ProjectsAssets/InteractiveCV/cv4.png";
import descriptionimg5 from "../../../assets/ProjectsAssets/InteractiveCV/CV_game_img4.png";
import descriptionimg6 from "../../../assets/ProjectsAssets/InteractiveCV/cv6.png";

function InteractiveCV() {
    const projectImages = [icv1, icv2, icv3, icv4];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    Interactive CV
                </TitleStyled>

                {/* Галерея */}
                <GalleryContainer>
                    {projectImages.map((src) => (
                        <ImageStyled
                            key={src}
                            src={src}
                            alt={`Project Image ${src}`}
                        />
                    ))}
                </GalleryContainer>

                {/* Описание проекта */}
                <DescriptionContainer>
                    <BlockHeader>Overall Design</BlockHeader>
                    <Text>
                        The purpose of this game is to display my career path
                        through an interactive game way. The main task is to
                        uniquely familiarize the player with my experience, so
                        the game should be as simple as possible in its
                        perception and carry as much useful information as
                        possible. Thus, I decided to divide the game world into
                        different zones, where all the facts and achievements
                        related to work and learning are grouped. There are 4
                        zones divided into countries and one extra zone relating
                        exclusively to my hobbies and hobbies, with the help of
                        which you can get to know me a little closer, get to
                        know me not only from a professional point of view, but
                        from a personal one.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg1}
                            alt="Article Cover"
                        />
                        <ImageDescription>Game world zones</ImageDescription>
                    </ImageBlock>
                    <Text>
                        All locations refer to real places, specifically I tried
                        to rebuild some locations as much as it was in life, or
                        at least as I associate them. This is an open world
                        game, that is, the player is &quot;their own
                        master&quot;, there are no clear goals and tasks,
                        everyone will choose their own path and way of exploring
                        the world around them. Of course, as a designer, I
                        created a few hints that can intuitively help the player
                        find his way to certain places, e.g. there are stone
                        paths on the map. I found it necessary to start the game
                        from where I was born, namely from the location in
                        Ukraine. Each location is divided into two types of
                        interactive objects
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    A building that symbolizes a place of work/a
                                    place of study
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    An object symbolizing the project I was
                                    working on
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>
                    <br />
                    <br />

                    <BlockHeader>Player Controller</BlockHeader>
                    <Text>
                        In order to properly build a level, it was necessary to
                        first determine the possible mechanics of the player in
                        order to know exactly what restrictions he would have.
                        Thus, the player has access to normal running using the
                        WASD keys, sprinting by pressing the Shift button, and
                        the ability to interact with the game world by pressing
                        the E button.
                        <br />I placed information about the control options
                        available to the player in the lower left corner of the
                        screen.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg2}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            Player controls UI guide
                        </ImageDescription>
                    </ImageBlock>

                    <BlockHeader>Game World Bounds</BlockHeader>
                    <Text>
                        Absolutely every game has the limits of its world.
                        Whatever this world is, it can be a 2D game or some kind
                        of card game, one way or another, the playing area
                        always has its limits. What&apos;s more, one of the most
                        discussed and sometimes comical topics is precisely the
                        limits of the world. Earlier, when the gaming industry
                        was just developing, and some time later, it was enough
                        for developers to build an invisible wall or, if
                        possible, a visible one. However, with each passing
                        year, the expectations and demands of players only grow,
                        and in modern games, developers have to think and
                        develop logical explanations for the player why he
                        cannot go beyond certain limits.
                        <br />
                        <br />
                        For this game, I decided to use two types of map
                        constraints. Both are logically connected and explained.
                        I limited the map to the mountains on one side and the
                        ocean on the other. The mountain constraint is perhaps
                        the simplest logical constraint, the player understands
                        that he simply cannot climb such a hill, especially in
                        this game there is no possibility to jump. A more
                        interesting solution is to limit the ocean. First of
                        all, in this part of the map I have placed the location
                        of Portugal, where I lived for half a year studying
                        under the Erasmus+ program, and as you know, Portugal
                        has access to the Atlantic Ocean, so this limitation is
                        logically justified.
                        <br />
                        <br />
                        However, I did not want to limit the player&apos;s
                        ability to &quot;swim&quot; and take an example from
                        Grand Theft Auto Vice City, where the player simply died
                        by falling into the water because he could not swim. But
                        then how do you really put boundaries so that it no
                        longer annoys players in the form of an invisible wall
                        and prevents the player from falling off the map? Here,
                        too, I tried to come up with the most logical situation
                        and decided to make a certain timer during which the
                        player must leave the water, otherwise he will be eaten
                        by a shark that is in the water. This means that I give
                        the player the opportunity to enter the water, but the
                        time allowed in it is calculated so that the player
                        cannot reach the edge of the map. If the player was
                        eaten by a shark, it will of course not lose anything,
                        it will just spawn on the shore near the ocean.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg3}
                            alt="Article Cover"
                        />
                        <ImageDescription>Game World bounds</ImageDescription>
                    </ImageBlock>
                    <br />
                    <br />

                    <BlockHeader>Core Features</BlockHeader>
                    <Text>
                        The game consists of two parts:
                        <br />
                        1. The so-called &quot;mandatory&quot; part, in which
                        the player moves around the main locations and learns
                        basic information about my experience. To do this, for
                        convenience, I divided all locations by countries
                        Ukraine, Poland, Lithuania, Portugal and a special
                        location &quot;About me&quot;, which I will talk about
                        in the second paragraph. In each location, approaching
                        an interactive object, the player will receive
                        notifications on the UI about the opportunity to enter
                        into interaction with the object. After that, a panel
                        will appear that is divided into two parts, a part of
                        the description of the location and a graphic part,
                        where the player can view a gallery of images related to
                        this object.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg4}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            Location UI information
                        </ImageDescription>
                    </ImageBlock>
                    <Text>
                        2. An optional part that serves as a reward for the
                        player for his time dedicated to the game. In the
                        location &quot;About me&quot; the player can get
                        information about my hobbies and hobbies. He can do this
                        by finding special “collectibles” placed on the map, for
                        this you just need to find an object and enter into
                        interaction with it, after which a description of what
                        this object meant will appear in the location
                        &quot;About Me&quot;.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={icv2}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            Special location &quot;About Me&quot;
                        </ImageDescription>
                    </ImageBlock>
                    <Text>
                        The player also has the ability to customize their
                        character. This is a very popular element of RPG games,
                        as well as mobile games, where the player needs to be
                        forced to donate. However, in my game, I decided to make
                        this mechanic a reward for the most diligent and for
                        this the player needs to find all 3 of collectibles. Of
                        course, in order for the player to know his progress and
                        how many such items need to be found, there are 3 gray
                        stars at the top of the screen, which become colored as
                        the items are found, and by clicking on them, a store
                        will open in front of the player, which also describes
                        the requirements for unlocking it.
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg5}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            An additional game mechanic as a reward for player
                            in form of shop customization
                        </ImageDescription>
                    </ImageBlock>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={descriptionimg6}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            Collectibles placement
                        </ImageDescription>
                    </ImageBlock>
                </DescriptionContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

export default InteractiveCV;
