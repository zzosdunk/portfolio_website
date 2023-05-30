/* eslint-disable */

import { FormattedMessage } from "react-intl";
import { Typography } from "@mui/material";

import BlockTitle from "../../components/BlockTitle/BlockTitle";

import {
    ExperienceStyled,
    ExpListElement,
    TimelineContent,
    Timeline,
    Container,
    ResponsibilityList,
    ResponsibilityListElement,
} from "./Experience.styles";

function Experience() {
    const DEGENERALS = [
        { id: "dg1", text: "Developing gameplay mechanics" },
        { id: "dg2", text: "Level blockout" },
        { id: "dg3", text: "Level design testing" },
        { id: "dg4", text: "Designing and developing game economy" },
        { id: "dg5", text: "Designing gameplay mechanics" },
        { id: "dg6", text: "Gameplay mechanics balance" },
    ];
    const JUGGLER = [
        {
            id: "jg1",
            text: "Development and maintenance of the project architecture",
        },
        { id: "jg2", text: "Providing team meetings" },
        { id: "jg3", text: "Creating end goals for team" },
        {
            id: "jg4",
            text: "Cooperation with partners in the implementation of external software in the project",
        },
        { id: "jg5", text: "Project testing at the exhibition venue" },
        {
            id: "jg6",
            text: "Checking the quality of development, holding retrospective meetings",
        },
        {
            id: "jg7",
            text: "Developing business application for exhibition by National Bank order",
        },
        { id: "jg8", text: "Designing and creating game's prototype" },
        {
            id: "jg9",
            text: "Developing interactive project for museum exhibition",
        },
    ];
    const PYRAMID = [
        {
            id: "pg1",
            text: "Designing and programming the architecture of games",
        },
        { id: "pg2", text: "Designing and programming core mechanics" },
        { id: "pg3", text: "Programming UI behaviours and animations" },
        {
            id: "pg4",
            text: "Designing and creating visual style of game (logo, wallpapers, graphics for the Steam)",
        },
        { id: "pg5", text: "Coordinating level blockouts" },
        { id: "pg6", text: "Designing and creating of game worlds" },
        { id: "pg7", text: "Designing and creating trailer" },
        { id: "pg8", text: "Game optimization" },
        { id: "pg9", text: "Scene's lighting design" },
        { id: "pg10", text: "Designing and creating cinematic gameplay" },
    ];

    return (
        <ExperienceStyled id="experience">
            <div className="dz__whatdz-feature">
                <BlockTitle
                    translationID="experienceBlockTitle"
                    title="EXPERIENCE"
                />
            </div>

            <Container>
                <Timeline>
                    <ul>
                        <ExpListElement>
                            <TimelineContent>
                                <h3 className="date">04.2022-Present</h3>
                                <Typography variant="h1" component="h2">
                                    DeGenerals
                                </Typography>
                                <ResponsibilityList>
                                    {DEGENERALS.map((responsibility) => (
                                        <ResponsibilityListElement
                                            key={responsibility.id}
                                        >
                                            <p>
                                                <FormattedMessage
                                                    id={`${responsibility.id}Responsibility.text`}
                                                    defaultMessage="{responsibilityData}"
                                                    description="DG Responsibility"
                                                    values={{
                                                        responsibilityData:
                                                            responsibility.text,
                                                    }}
                                                />
                                            </p>
                                        </ResponsibilityListElement>
                                    ))}
                                </ResponsibilityList>
                            </TimelineContent>
                        </ExpListElement>
                        <ExpListElement>
                            <TimelineContent>
                                <h3 className="date">06.2020-04.2022</h3>
                                <Typography variant="h1" component="h2">
                                    Juggler Games
                                </Typography>
                                <ResponsibilityList>
                                    {JUGGLER.map((responsibility) => (
                                        <ResponsibilityListElement
                                            key={responsibility.id}
                                        >
                                            <p>
                                                <FormattedMessage
                                                    id={`${responsibility.id}Responsibility.text`}
                                                    defaultMessage="{responsibilityData}"
                                                    description="Navbar Element"
                                                    values={{
                                                        responsibilityData:
                                                            responsibility.text,
                                                    }}
                                                />
                                            </p>
                                        </ResponsibilityListElement>
                                    ))}
                                </ResponsibilityList>
                            </TimelineContent>
                        </ExpListElement>
                        <ExpListElement>
                            <TimelineContent>
                                <h3 className="date">06.2019-12.2020</h3>
                                <Typography variant="h1" component="h2">
                                    Pyramid Games
                                </Typography>
                                <ResponsibilityList>
                                    {PYRAMID.map((responsibility) => (
                                        <ResponsibilityListElement
                                            key={responsibility.id}
                                        >
                                            <p>
                                                <FormattedMessage
                                                    id={`${responsibility.id}Responsibility.text`}
                                                    defaultMessage="{responsibilityData}"
                                                    description="Navbar Element"
                                                    values={{
                                                        responsibilityData:
                                                            responsibility.text,
                                                    }}
                                                />
                                            </p>
                                        </ResponsibilityListElement>
                                    ))}
                                </ResponsibilityList>
                            </TimelineContent>
                        </ExpListElement>
                    </ul>
                </Timeline>
            </Container>
        </ExperienceStyled>
    );
}

export default Experience;
