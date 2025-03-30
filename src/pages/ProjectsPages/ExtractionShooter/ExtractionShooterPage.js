import { FormattedMessage } from "react-intl";
import {
    PageContainer,
    TitleStyled,
    GalleryContainer,
    ImageStyled,
    DescriptionContainer,
    Text,
    BlockHeader,
    ImageBlock,
    Image,
    ImageDescription,
    ListContainer,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
} from "../ProjectInfo.styles";
import {
    GridContainer,
    GridItem,
    GridImage,
    GridImageCaption,
} from "./ExtractionShooterPage.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import gallery1 from "../../../assets/ProjectsAssets/ExtractionShooter/gallery1.png";
import gallery2 from "../../../assets/ProjectsAssets/ExtractionShooter/gallery2.png";
import gallery3 from "../../../assets/ProjectsAssets/ExtractionShooter/gallery3.png";
import gallery4 from "../../../assets/ProjectsAssets/ExtractionShooter/gallery4.png";
import gallery5 from "../../../assets/ProjectsAssets/ExtractionShooter/gallery5.png";

import entrance from "../../../assets/ProjectsAssets/ExtractionShooter/entrance.png";
import exploration from "../../../assets/ProjectsAssets/ExtractionShooter/choice.png";
import twostesploot from "../../../assets/ProjectsAssets/ExtractionShooter/twostepsloot.png";
import securitygate from "../../../assets/ProjectsAssets/ExtractionShooter/securitygate.png";
import brokenglass from "../../../assets/ProjectsAssets/ExtractionShooter/glass.png";

import gridImg1 from "../../../assets/ProjectsAssets/ExtractionShooter/lion.png";
import gridImg2 from "../../../assets/ProjectsAssets/ExtractionShooter/fountain.png";
import gridImg3 from "../../../assets/ProjectsAssets/ExtractionShooter/museum.png";
import gridImg4 from "../../../assets/ProjectsAssets/ExtractionShooter/callcenter.png";
import gridImg5 from "../../../assets/ProjectsAssets/ExtractionShooter/printers.png";
import gridImg6 from "../../../assets/ProjectsAssets/ExtractionShooter/vault.png";
import gridImg7 from "../../../assets/ProjectsAssets/ExtractionShooter/kitchen.png";
import gridImg8 from "../../../assets/ProjectsAssets/ExtractionShooter/waitingroom.png";
import gridImg9 from "../../../assets/ProjectsAssets/ExtractionShooter/bossroom.png";
import gridImg10 from "../../../assets/ProjectsAssets/ExtractionShooter/itdepartament.png";
import gridImg11 from "../../../assets/ProjectsAssets/ExtractionShooter/conferenceroom.png";
import gridImg12 from "../../../assets/ProjectsAssets/ExtractionShooter/clock.png";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];
const gridImages = [
    { src: gridImg1, caption: "Lion" },
    { src: gridImg2, caption: "Fountain" },
    { src: gridImg3, caption: "Museum" },
    { src: gridImg4, caption: "Call center" },
    { src: gridImg5, caption: "Office/printers" },
    { src: gridImg6, caption: "Vault" },
    { src: gridImg7, caption: "Kitchen" },
    { src: gridImg8, caption: "Waiting Room" },
    { src: gridImg9, caption: "CEO Room" },
    { src: gridImg10, caption: "IT Department" },
    { src: gridImg11, caption: "Conference Room" },
    { src: gridImg12, caption: "Clock/VIP Room" },
];

function ExtractionShooterPage() {
    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    <FormattedMessage
                        id="esdescription1.text"
                        defaultMessage="Bank in Extraction Shooter"
                        description="Extraction Shooter"
                    />
                </TitleStyled>

                {/* Галерея */}
                <GalleryContainer>
                    {galleryImages.map((src) => (
                        <ImageStyled
                            key={src}
                            src={src}
                            alt={`Project Image ${src}`}
                        />
                    ))}
                </GalleryContainer>

                {/* Описание проекта */}
                <DescriptionContainer>
                    <Text>
                        <FormattedMessage
                            id="esdescription2.text"
                            defaultMessage="I constantly strive to grow and create personal projects in genres that are new to me. This helps me stay updated on overall market trends, not just those I encounter daily at work. In this case, I would like to present to you an analysis of my blockout for one of the locations in an Extraction Shooter game set in a bank. Key gameplay elements featured in my location:"
                            description="Extraction Shooter"
                        />
                    </Text>
                    <BlockHeader>
                        <FormattedMessage
                            id="esdescription3.text"
                            defaultMessage="Path Variability and Diverse Playstyles"
                            description="Extraction Shooter"
                        />
                    </BlockHeader>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={entrance}
                            alt="Article Cover"
                        />
                        <ImageDescription>
                            <FormattedMessage
                                id="esimgdescription1.text"
                                defaultMessage="Location entries"
                                description="Extraction Shooter"
                            />
                        </ImageDescription>
                    </ImageBlock>
                    <Text>
                        <FormattedMessage
                            id="esdescription4.text"
                            defaultMessage="The player should have multiple options for entering the main location as well as navigating through it afterward. Overall, there are three possible entrances to the location, each offering a different combat style against enemies."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription5.text"
                                            defaultMessage="Central Entrance"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription6.text"
                                        defaultMessage="The most open and assault-focused. Here, the player might find themselves surrounded by positions already taken by other players or AI, but this choice provides the most dynamic action."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription7.text"
                                            defaultMessage="Right Entrance"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription8.text"
                                        defaultMessage="Features close-quarters combat with numerous corners and spots for campers."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription9.text"
                                            defaultMessage="Left Entrance"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription10.text"
                                        defaultMessage="Designed for long-range engagements, ideal for players who prefer sniper rifles or scopes. The player can immediately access the bank's second floor from here, giving them a tactical advantage by offering better angles for engaging players or AI who have already secured positions inside the bank."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>
                    <Text>
                        <FormattedMessage
                            id="esdescription11.text"
                            defaultMessage="Beyond long-range shootouts, the map also features several spots for lurkers, creating tense scenarios that often require additional items, such as grenades, to clear and secure these areas. Standard locations are also included for close-quarters combat, with thoughtfully placed cover that facilitates progression through the level. Once inside, the player faces numerous choices about where to go next. Do they head straight to the vault to complete the main objective, or do they explore the map for extra loot? This variability is closely tied to another essential aspect of the location: exploration."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <BlockHeader>
                        <FormattedMessage
                            id="esdescription12.text"
                            defaultMessage="Exploration"
                            description="Extraction Shooter"
                        />
                    </BlockHeader>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={exploration}
                            alt="Exploration"
                        />
                        <ImageDescription>
                            <FormattedMessage
                                id="esimgdescription2.text"
                                defaultMessage="Exploration and player choises"
                                description="Extraction Shooter"
                            />
                        </ImageDescription>
                    </ImageBlock>
                    <Text>
                        <FormattedMessage
                            id="esdescription13.text"
                            defaultMessage="Since this is an extraction shooter and loot plays a critical role, I paid special attention to loot placement and designing spaces that encourage exploration. I divided the location into three levels:"
                            description="Extraction Shooter"
                        />
                    </Text>
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription14.text"
                                            defaultMessage="Mandatory Level"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription15.text"
                                        defaultMessage="The main floor, which the player must navigate to reach the vault containing the most valuable loot and return through the same floor."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription16.text"
                                            defaultMessage="Optional Level"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription17.text"
                                        defaultMessage="This level contains the majority of bonuses and additional loot, which can either enhance the player's capabilities for future missions or serve as valuable rewards and assistance for completing the current mission."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <b>
                                        <FormattedMessage
                                            id="esdescription18.text"
                                            defaultMessage="Third Level"
                                            description="Extraction Shooter"
                                        />
                                    </b>
                                </Text>
                                <Text>
                                    <FormattedMessage
                                        id="esdescription19.text"
                                        defaultMessage="This leads to an additional extraction point. This point offers fewer potential attack angles for enemies during extraction but requires more effort and involves more encounters with enemies along the way."
                                        description="Extraction Shooter"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>
                    <Text>
                        <FormattedMessage
                            id="esdescription20.text"
                            defaultMessage="I used a 'two-step' method for distributing most of the loot. This method begins with the 'first step,' where I allow the player to visually spot the loot (e.g., a chest) in a specific location. The 'second step' involves the player figuring out how to physically reach that chest. This teaser approach sparks the player's curiosity, excitement, and drive to retrieve the loot, as they have already found its location. All they need to do is reach it."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={twostesploot}
                            alt="Exploration"
                        />
                        <ImageDescription>
                            <FormattedMessage
                                id="esimgdescription3.text"
                                defaultMessage="'Two-step' loot placement method"
                                description="Extraction Shooter"
                            />
                        </ImageDescription>
                    </ImageBlock>

                    <Text>
                        <FormattedMessage
                            id="esdescription21.text"
                            defaultMessage="However, the path to the loot often involves risks, as other players or AI may be lying in wait. This element taps into the player's sense of risk-taking (driven by excitement), while simultaneously amplifying the satisfaction and enjoyment they experience upon successfully acquiring the reward. This combination of anticipation and payoff enhances the thrill and satisfaction of looting."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <BlockHeader>
                        <FormattedMessage
                            id="esdescription22.text"
                            defaultMessage="Naming"
                            description="Extraction Shooter"
                        />
                    </BlockHeader>
                    <Text>
                        <FormattedMessage
                            id="esdescription23.text"
                            defaultMessage="In multiplayer games, naming and creating unique locations with recognizable local landmarks are crucial. These elements enable players to easily exchange information, strategize, and memorize areas within the game. Below are a few examples of rooms or spaces that can be easily named for better communication or memorization of the location"
                            description="Extraction Shooter"
                        />
                    </Text>
                    <GridContainer>
                        {gridImages.map((image, index) => (
                            <GridItem key={image.src}>
                                <GridImage
                                    src={image.src}
                                    alt={image.caption}
                                />
                                <GridImageCaption>
                                    <FormattedMessage
                                        id={`esnaming${index}.text`}
                                        defaultMessage="Naming"
                                        description="Extraction Shooter"
                                    />
                                </GridImageCaption>
                            </GridItem>
                        ))}
                    </GridContainer>
                    <BlockHeader>
                        <FormattedMessage
                            id="esdescription24.text"
                            defaultMessage="Dynamic Environments"
                            description="Extraction Shooter"
                        />
                    </BlockHeader>
                    <Text>
                        <FormattedMessage
                            id="esdescription25.text"
                            defaultMessage="It was essential for me to breathe “life” into the locations, ensuring that gameplay evolves through interaction with various objects on the map. Both mechanics focus on leveraging sound to reveal player positions, adding an auditory layer of strategy."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <br />
                    <br />
                    <Text>
                        <b>
                            <FormattedMessage
                                id="esdescription26.text"
                                defaultMessage="Security Gate"
                                description="Extraction Shooter"
                            />
                        </b>
                    </Text>
                    <br />
                    <Text>
                        <FormattedMessage
                            id="esdescription27.text"
                            defaultMessage="When a player passes through a metal detector, it emits a distinct sound audible to other nearby players. This creates an opportunity for clear information about the opponent's presence and their current location."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <Text>
                        <FormattedMessage
                            id="esdescription28.text"
                            defaultMessage="It adds a tactical element to the choice of entry points—players must decide whether to risk exposure by taking a faster route or opt for a quieter, more time-consuming path."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <ImageBlock>
                        <Image
                            component="img"
                            image={securitygate}
                            alt="Security Gate"
                        />
                        <ImageDescription>
                            <FormattedMessage
                                id="esimgdescription4.text"
                                defaultMessage="Security gate emits sound when Player pass"
                                description="Extraction Shooter"
                            />
                        </ImageDescription>
                    </ImageBlock>
                    <br />
                    <br />
                    <Text>
                        <b>
                            <FormattedMessage
                                id="esdescription29.text"
                                defaultMessage="Broken Glass"
                                description="Extraction Shooter"
                            />
                        </b>
                    </Text>
                    <br />
                    <Text>
                        <FormattedMessage
                            id="esdescription30.text"
                            defaultMessage="Certain areas on the second floor are equipped with breakable glass panels."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <Text>
                        <FormattedMessage
                            id="esdescription31.text"
                            defaultMessage="When shattered, the glass falls to the floor, creating debris that players may step on. Walking over the broken glass produces unique footsteps that can be heard by nearby opponents."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <Text>
                        <FormattedMessage
                            id="esdescription32.text"
                            defaultMessage="This mechanic reduces the ability to ambush others, as the sound serves as a warning and forces players to reconsider their movement strategies."
                            description="Extraction Shooter"
                        />
                    </Text>
                    <br />
                    <br />
                    <ImageBlock>
                        <Image
                            component="img"
                            image={brokenglass}
                            alt="Broken Glass"
                        />
                        <ImageDescription>
                            <FormattedMessage
                                id="esimgdescription5.text"
                                defaultMessage="Broken glass emits sound on Player's steps"
                                description="Extraction Shooter"
                            />
                        </ImageDescription>
                    </ImageBlock>
                    <Text>
                        <FormattedMessage
                            id="esdescription33.text"
                            defaultMessage="These mechanics introduce layers of unpredictability, immersion, and tactical depth, transforming the environment into an active participant in the gameplay. They also encourage strategic thinking and adaptive playstyles, making each encounter feel dynamic and engaging."
                            description="Extraction Shooter"
                        />
                    </Text>
                </DescriptionContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

export default ExtractionShooterPage;
