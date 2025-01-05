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
                    Others
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
                    <BlockHeader>Airline Technician</BlockHeader>
                    <Text>
                        Providing pre-production stage of the project as a lead
                        level designer. During this stage, my responsibilities
                        were: game design, levels block-out, scenes lighting,
                        animations, trailer production.
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Designing the main concept of the game
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Designing locations for the trailer</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Designing and animating all in-game
                                    scenarios
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Video production of the trailer</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>

                    <br />
                    <br />
                    <BlockHeader>
                        Business application for the National Polish Bank
                    </BlockHeader>
                    <Text>
                        For the anniversary of John Paul II, the National Bank
                        of Poland commissioned our company to create a business
                        application for their exhibition, allowing users to
                        examine ancient coins and learn information about them.
                        My responsibilities included:
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Communication with the client</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Developing the application with all the
                                    provided content
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Ensuring compatibility with the required
                                    software
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                    </ListContainer>

                    <br />
                    <br />

                    <BlockHeader>
                        Interactive medicine exhibition in polish city Rybnik
                    </BlockHeader>
                    <Text>
                        An interactive exhibition business project in the
                        medical field, located in the Polish city of Rybnik.
                        This was my first project in the role of a leader, so I
                        consider it important to highlight, even though there
                        were almost no level design tasks involved—apart from
                        managing the overall UX of the application. Initially,
                        my team consisted of three people, but as the project
                        neared completion, the number of team members grew to
                        eight. My main responsibilities included organizing the
                        work for all team members, planning their tasks,
                        monitoring their execution, and developing the
                        application itself in addition to handling all
                        organizational duties. Overall, my responsibilities were
                        as follows:
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Development and maintenance of the project
                                    architecture
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Providing team meetings</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Creating end goals for team</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Cooperation with partners in the
                                    implementation of external software in the
                                    project
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Project testing at the exhibition venue
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Checking the quality of development, holding
                                    retrospective meetings
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
