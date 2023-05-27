import { BallTriangle } from "react-loader-spinner";
import { useState, useEffect } from "react";

import BlockTitle from "../BlockTitle/BlockTitle";
import useHttp from "../../hooks/use-http";
import SkillItem from "./SkillItem";

import { SkillsStyled, SkillsListStyled } from "./SkillsList.styles";

function SkillsList() {
    const [skills, setSkills] = useState([]);

    const { sendRequest: fetchSkills, isLoading } = useHttp();
    useEffect(() => {
        const transformSkills = (skillObj) => {
            const loadedSkills = Object.entries(skillObj).map(
                ([key, value]) => ({
                    id: key,
                    name: value.name,
                    icon: value.iconUrl,
                })
            );

            setSkills(loadedSkills);
        };

        fetchSkills(
            {
                url: `${process.env.REACT_APP_DB_LINK}/skills.json`,
            },
            transformSkills
        );
    }, [fetchSkills]);

    return (
        <SkillsStyled id="skills">
            <BlockTitle translationID="skillsBlockTitle" title="SKILLS" />
            {!isLoading && (
                <SkillsListStyled>
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            <SkillItem
                                skillName={skill.name}
                                skillIconPath={skill.icon}
                            />
                        </div>
                    ))}
                </SkillsListStyled>
            )}
            {isLoading && (
                <div className="dz__skillsList">
                    <p>Loading...</p>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#ff4d71"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        // eslint-disable-next-line react/jsx-boolean-value
                        visible={true}
                    />
                </div>
            )}
        </SkillsStyled>
    );
}

export default SkillsList;
