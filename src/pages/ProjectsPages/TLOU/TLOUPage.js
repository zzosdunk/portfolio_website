import {
    PageContainer,
    TitleStyled,
    GalleryContainer,
    ImageStyled,
    DescriptionContainer,
    Text,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
} from "../ProjectInfo.styles";

import {
    BlockHeader,
    Image,
    ImageBlock,
    ImageDescription,
    StyledLink,
} from "../../../components/Articles/Articles.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import tlouImg1 from "../../../assets/ProjectsAssets/TLOU2/tlou_img1.png";
import tlouImg2 from "../../../assets/ProjectsAssets/TLOU2/tlou_img2.png";
import tlouImg3 from "../../../assets/ProjectsAssets/TLOU2/tlou_img3.png";

import references1 from "../../../assets/ProjectsAssets/TLOU2/references1.png";
import references2 from "../../../assets/ProjectsAssets/TLOU2/references2.png";
import references3 from "../../../assets/ProjectsAssets/TLOU2/references3.png";

import puzzle1 from "../../../assets/ProjectsAssets/TLOU2/puzzle1-2.png";
import puzzle2 from "../../../assets/ProjectsAssets/TLOU2/puzzle1-3.png";

import arena1 from "../../../assets/ProjectsAssets/TLOU2/arena1-1-1.png";
import arena2 from "../../../assets/ProjectsAssets/TLOU2/arena1-1-3.png";
import arena3 from "../../../assets/ProjectsAssets/TLOU2/arena1-2-1.png";
import arena4 from "../../../assets/ProjectsAssets/TLOU2/arena1-3-1.png";

import pacing from "../../../assets/ProjectsAssets/TLOU2/pacing_website.png";

function TLOUPage() {
    const projectImages = [tlouImg1, tlouImg2, tlouImg3];
    const referenceImages = [references1, references2, references3];
    const puzzleImages = [puzzle2, puzzle1];
    const arenaImages = [arena1, arena2, arena3, arena4];

    return (
        <>
            <Navbar />
            <PageContainer>
                <TitleStyled variant="h3" color="text.primary">
                    The Last of Us Part II: Level Design Project
                </TitleStyled>

                <GalleryContainer>
                    {projectImages.map((src) => (
                        <ImageStyled
                            key={src}
                            src={src}
                            alt={`Project Image ${src}`}
                        />
                    ))}
                </GalleryContainer>

                <DescriptionContainer>
                    <Text>
                        Here, I will talk about the key aspects of the level and
                        explain how I approached its design. You can find a full
                        and detailed level breakdown in the{" "}
                        <StyledLink
                            href="https://docs.google.com/presentation/d/1lGO705Vwt0o5hFm6-pW-gwQ08ubIJsj0yYtzQxiKzAU/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            presentation
                        </StyledLink>{" "}
                        , and here we’ll focus on its main highlights.
                    </Text>
                    <br />
                    <BlockHeader>Design Pillars</BlockHeader>

                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>Setting</Text>
                        </ListTextStyled>
                    </ListItemStyled>
                    <Text>
                        Post apocalypse, grounded, decayed world where nature
                        overtakes civilization, creating environments that feel
                        both beautiful and hostile. Every location reinforces
                        themes of loss, fragility, and the remnants of human
                        stories
                    </Text>

                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>Stealth</Text>
                        </ListTextStyled>
                    </ListItemStyled>
                    <Text>
                        Prioritizes tension and vulnerability, rewarding players
                        for observation, patience, and careful movement
                    </Text>
                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>Combat</Text>
                        </ListTextStyled>
                    </ListItemStyled>
                    <Text>
                        Raw, intimate, and desperate, emphasizing physicality
                        and emotional weight in every confrontation
                    </Text>

                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>Survival</Text>
                        </ListTextStyled>
                    </ListItemStyled>
                    <Text>
                        Resource scarcity drives constant decision-making,
                        forcing players to weigh risk against reward.
                        Exploration rewarded with resources, lore details and
                        additional tension and danger
                    </Text>
                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>Narrative</Text>
                        </ListTextStyled>
                    </ListItemStyled>
                    <Text>
                        Mostly comes from chronological searching for the right
                        people while getting into various troubles
                    </Text>
                    <BlockHeader>Reference Gathering</BlockHeader>
                    <GalleryContainer>
                        {referenceImages.map((src) => (
                            <ImageStyled
                                key={src}
                                src={src}
                                alt={`Refegerence Image ${src}`}
                            />
                        ))}
                    </GalleryContainer>

                    <Text>
                        An important part of developing this level was
                        researching and gathering all the references. While
                        building a level set in the world of The Last of Us Part
                        II, it was important for me to meet the following
                        standards:
                    </Text>

                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>
                                The game itself. My locations, arenas, and
                                puzzles should match the game’s metrics, style,
                                possibilities, and overall design approach.
                            </Text>
                        </ListTextStyled>
                    </ListItemStyled>

                    <ListItemStyled>
                        <ListMarkerStyled />
                        <ListTextStyled>
                            <Text>
                                Seattle. Since most of the game’s events take
                                place in the city of Seattle, I also wanted to
                                choose key locations that actually exist in this
                                city.
                            </Text>
                        </ListTextStyled>
                    </ListItemStyled>

                    <BlockHeader>Pacing</BlockHeader>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={pacing}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            Pacing flow of the level
                        </ImageDescription>
                    </ImageBlock>

                    <BlockHeader>Puzzle Breakdown</BlockHeader>
                    <GalleryContainer>
                        {puzzleImages.map((src) => (
                            <ImageStyled
                                key={src}
                                src={src}
                                alt={`Puzzle Image ${src}`}
                            />
                        ))}
                    </GalleryContainer>
                    <Text>
                        The player moves through the level in a way that allows
                        them to see a passage in the wall that draws their
                        attention, but they also notice that they are missing an
                        object they could use to reach that passage
                    </Text>
                    <Text>
                        The player needs to search for such an object, and after
                        a bit of exploration, they can spot a movable object,
                        similar to the one seen at the very beginning of the
                        level
                    </Text>
                    <Text>
                        The player places the object in a way that allows them
                        to climb up and continue through the level via the
                        passage they noticed earlier while approaching this area
                    </Text>

                    <BlockHeader>Arena Breakdown</BlockHeader>
                    <GalleryContainer>
                        {arenaImages.map((src) => (
                            <ImageStyled
                                key={src}
                                src={src}
                                alt={`Arena Image ${src}`}
                            />
                        ))}
                    </GalleryContainer>
                    <Text>
                        The player enters a stealth arena, indicated by the
                        number of low cover spots. They need to move carefully
                        and pay attention to the different enemy patrol
                        patterns. The arena offers multiple paths, giving the
                        player several routes to progress through it.
                    </Text>
                    <Text>
                        Taking the left path provides an easier and safer entry,
                        but the player will need to remain on edge longer and
                        adjust their position to navigate the different enemy
                        patrol patterns.
                    </Text>
                    <Text>
                        The other path, on the right side of the arena, is more
                        enclosed and leads through a private office and a shared
                        kitchen. It’s harder for the player to reach this area,
                        but once inside, they are in greater safety compared to
                        the open space.
                    </Text>
                    <Text>
                        The exit from the first part of the arena should
                        immediately catch the player’s attention. This area of
                        the building is the most damaged, with a collapsed
                        ceiling, creating a path to the next section of the
                        arena. After spending a long time in a confined, poorly
                        lit space, the player reaches the end of the arena and
                        sees bright light and a large, collapsed exit from the
                        building.
                    </Text>
                </DescriptionContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

export default TLOUPage;
