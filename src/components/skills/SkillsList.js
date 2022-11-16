import { BallTriangle } from "react-loader-spinner";
import { useState, useEffect } from "react";

import BlockTitle from "../BlockTitle/BlockTitle";
import useHttp from "../../hooks/use-http";
import "./SkillsList.css";
import SkillItem from "./SkillItem";

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
        <div className="dz__skills section__padding" id="skills">
            <BlockTitle translationID="skillsBlockTitle" title="SKILLS" />
            {!isLoading && (
                <div className="dz__skillsList">
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            <SkillItem
                                skillName={skill.name}
                                skillIconPath={skill.icon}
                            />
                        </div>
                    ))}
                </div>
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
        </div>
    );
}

export default SkillsList;
