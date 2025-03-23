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
    BlockHeader,
} from "../ProjectInfo.styles";

import Footer from "../../../containers/Footer/Footer";
import Navbar from "../../../components/navbar/navbar";

import airline from "../../../assets/ProjectsAssets/Others/Airline.png";
import NBP from "../../../assets/ProjectsAssets/Others/NBP.png";
import Rybnik from "../../../assets/ProjectsAssets/Others/Rybnik.png";

function OtherProjectsPage() {
    const projectImages = [airline, NBP, Rybnik];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    <FormattedMessage
                        id="othersdescription20.text"
                        defaultMessage="Other Projects"
                        description="Other projects"
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
                    <BlockHeader>
                        <FormattedMessage
                            id="othersdescription1.text"
                            defaultMessage="Airline Technician"
                            description="Other projects"
                        />
                    </BlockHeader>
                    <Text>
                        <FormattedMessage
                            id="othersdescription2.text"
                            defaultMessage="Providing pre-production stage of the project as a lead level designer. During this stage, my responsibilities were: game design, levels block-out, scenes lighting, animations, trailer production."
                            description="Other projects"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription3.text"
                                        defaultMessage="Designing the main concept of the game"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription4.text"
                                        defaultMessage="Designing locations for the trailer"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription5.text"
                                        defaultMessage="Designing and animating all in-game scenarios"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription6.text"
                                        defaultMessage="Video production of the trailer"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>

                    <br />
                    <br />
                    <BlockHeader>
                        <FormattedMessage
                            id="othersdescription7.text"
                            defaultMessage="Business application for the National Polish Bank"
                            description="Other projects"
                        />
                    </BlockHeader>
                    <Text>
                        <FormattedMessage
                            id="othersdescription8.text"
                            defaultMessage="For the anniversary of John Paul II, the National Bank of Poland commissioned our company to create a business application for their exhibition, allowing users to examine ancient coins and learn information about them. My responsibilities included:"
                            description="Other projects"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription9.text"
                                        defaultMessage="Communication with the client"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription10.text"
                                        defaultMessage="Developing the application with all the provided content"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription11.text"
                                        defaultMessage="Ensuring compatibility with the required software"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>

                    <br />
                    <br />

                    <BlockHeader>
                        <FormattedMessage
                            id="othersdescription12.text"
                            defaultMessage="Interactive medicine exhibition in polish city Rybnik"
                            description="Other projects"
                        />
                    </BlockHeader>
                    <Text>
                        <FormattedMessage
                            id="othersdescription13.text"
                            defaultMessage="An interactive exhibition business project in the medical field, located in the Polish city of Rybnik. This was my first project in the role of a leader, so I consider it important to highlight, even though there were almost no level design tasks involved—apart from managing the overall UX of the application. Initially, my team consisted of three people, but as the project neared completion, the number of team members grew to eight. My main responsibilities included organizing the work for all team members, planning their tasks, monitoring their execution, and developing the application itself in addition to handling all organizational duties. Overall, my responsibilities were as follows:"
                            description="Other projects"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription14.text"
                                        defaultMessage="Development and maintenance of the project architecture"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription15.text"
                                        defaultMessage="Providing team meetings"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription16.text"
                                        defaultMessage="Creating end goals for team"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription17.text"
                                        defaultMessage="Cooperation with partners in the implementation of external software in the project"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription18.text"
                                        defaultMessage="Project testing at the exhibition venue"
                                        description="Other projects"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="othersdescription19.text"
                                        defaultMessage="Checking the quality of development, holding retrospective meetings"
                                        description="Other projects"
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

export default OtherProjectsPage;
