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

import cf1 from "../../../assets/ProjectsAssets/CastleFlipper/cf1.jpg";
import cf2 from "../../../assets/ProjectsAssets/CastleFlipper/cf2.jpg";
import cf3 from "../../../assets/ProjectsAssets/CastleFlipper/cf3.jpg";
import cf4 from "../../../assets/ProjectsAssets/CastleFlipper/cf4.jpg";

function CastleFlipperPage() {
    const projectImages = [cf1, cf2, cf3, cf4];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Название проекта */}
                <TitleStyled variant="h3" color="text.primary">
                    Castle Flipper
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
                        My first project that marked the beginning of my journey
                        in game development. In this project, I primarily
                        handled programming tasks; however, due to the small
                        size of the team working on it, I had the opportunity to
                        take on design-related assignments as well. For example,
                        I worked on the following tasks:
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Designing and programming the game&apos;s
                                    architecture
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Designing and programming core mechanics
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Programming UI behaviors and animations
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Designing level blockouts</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Designing and creating the trailer</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Game optimization</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>Scene lighting design</Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    Designing and creating cinematic gameplay
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

export default CastleFlipperPage;
