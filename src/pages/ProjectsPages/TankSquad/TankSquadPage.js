import { FormattedMessage } from "react-intl";
import {
    PageContainer,
    TitleStyled,
    GalleryContainer,
    ImageStyled,
    DescriptionContainer,
    Text,
    ListContainer,
    ListItemStyled,
    ListMarkerStyled,
    ListTextStyled,
} from "../ProjectInfo.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import ts1 from "../../../assets/ProjectsAssets/TankSquad/ts1.jpg";
import ts2 from "../../../assets/ProjectsAssets/TankSquad/ts2.jpg";
import ts3 from "../../../assets/ProjectsAssets/TankSquad/ts3.jpg";
import ts4 from "../../../assets/ProjectsAssets/TankSquad/ts4.jpg";
import ts5 from "../../../assets/ProjectsAssets/TankSquad/ts2bl.png";
import ts6 from "../../../assets/ProjectsAssets/TankSquad/ts5bl.png";

function TankSquadPage() {
    const projectImages = [ts1, ts2, ts5, ts3, ts4, ts6];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    <FormattedMessage
                        id="tsdescription10.text"
                        defaultMessage="Tank Squad"
                        description="Tank Squad project"
                    />
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
                    <Text>
                        <FormattedMessage
                            id="tsdescription1.text"
                            defaultMessage="My first project entirely in the role of a level designer. During my work on this project, I had the opportunity to conceptualize and create the majority of the levels for the main campaign. Additionally, I fully designed the player hub, from the functionalities available to the player to the placement of all its key locations. I was also actively involved in developing level design patterns and rules within the company, which significantly reduced the time required to create new levels. For example, I created templates for prefabs of recurring objects that enhanced the 'realism' of locations. I also defined the color policy for blockouts, enabling level artists to quickly identify which zones and objects were critical for gameplay, secondary, or merely served as props. Since this project was a cooperative multiplayer game, I also focused on designing levels optimized for cooperative gameplay. Overall, my responsibilities included:"
                            description="Tank Squad project"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription2.text"
                                        defaultMessage="Designing coop gameplay pillars"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription3.text"
                                        defaultMessage="Working on level blockouts"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription4.text"
                                        defaultMessage="Designing player hub"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription5.text"
                                        defaultMessage="Level design playtests"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription6.text"
                                        defaultMessage="Designing game economy"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription7.text"
                                        defaultMessage="Designing gameplay mechanics"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription8.text"
                                        defaultMessage="Gameplay mechanics balance"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tsdescription9.text"
                                        defaultMessage="Working with project documentation, development of game design documentation"
                                        description="Tank Squad project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>
                </DescriptionContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

export default TankSquadPage;
