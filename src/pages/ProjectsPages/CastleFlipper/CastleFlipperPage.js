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
                    <FormattedMessage
                        id="cfdescription10.text"
                        defaultMessage="Castle Flipper"
                        description="Castle Fliper project"
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
                            id="cfdescription1.text"
                            defaultMessage="My first project that marked the beginning of my journey in game development. In this project, I primarily handled programming tasks; however, due to the small size of the team working on it, I had the opportunity to take on design-related assignments as well. For example, I worked on the following tasks:"
                            description="Castle Fliper project"
                        />
                    </Text>
                    <br />
                    <ListContainer>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription2.text"
                                        defaultMessage="Designing and programming the game's architecture"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription3.text"
                                        defaultMessage="Designing and programming core mechanics"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription4.text"
                                        defaultMessage="Programming UI behaviors and animations"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription5.text"
                                        defaultMessage="Designing level blockouts"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription6.text"
                                        defaultMessage="Designing and creating the trailer"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription7.text"
                                        defaultMessage="Game optimization"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription8.text"
                                        defaultMessage="Scene lighting design"
                                        description="Castle Fliper project"
                                    />
                                </Text>
                            </ListTextStyled>
                        </ListItemStyled>
                        <ListItemStyled>
                            <ListMarkerStyled />
                            <ListTextStyled>
                                <Text>
                                    <FormattedMessage
                                        id="cfdescription9.text"
                                        defaultMessage="Designing and creating cinematic gameplay"
                                        description="Castle Fliper project"
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

export default CastleFlipperPage;
