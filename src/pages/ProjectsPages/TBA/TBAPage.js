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

import sti1 from "../../../assets/ProjectsAssets/TBA/sti1.jpg";
import sti2 from "../../../assets/ProjectsAssets/TBA/sti2.jpg";
import sti3 from "../../../assets/ProjectsAssets/TBA/sti3.jpg";

function TBAPage() {
    const projectImages = [sti1, sti2, sti3];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    Star Trek: Infection
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
                            id="tbadescription1.text"
                            defaultMessage="For the past two years, I have been working on the largest project of my career, which has not yet been announced. In this project, I held the position of Lead Level Designer, and my responsibilities and tasks significantly expanded. Here's what I've been working on:"
                            description="TBA project"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        {/* <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription2.text"
                                        defaultMessage="Based on the IP and reverse engineering practices, I built the entire game world and adapted most of its locations to fit the game's needs"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled> */}
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription3.text"
                                        defaultMessage="Developed standards for blockout creation, defined all metrics, and established the core level design principles for the game"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        {/* <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription4.text"
                                        defaultMessage="Designed the foundations and exploration locations"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled> */}
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription5.text"
                                        defaultMessage="In addition to creating blockouts, I coordinated and conceptualized all quests for the game"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription6.text"
                                        defaultMessage="Led the level design and level art teams and closely collaborated with other departments to ensure proper implementation of quest ideas"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>

                        {/* <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription8.text"
                                        defaultMessage="Designed mechanics, gameplay, and all boss fight locations"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled> */}
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription9.text"
                                        defaultMessage="Defined the game's overall pacing and player progression"
                                        description="TBA project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="tbadescription10.text"
                                        defaultMessage="Besides level design duties, I planned and monitored tasks across various teams as part of production milestones"
                                        description="TBA project"
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

export default TBAPage;
