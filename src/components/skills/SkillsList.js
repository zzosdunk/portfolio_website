import { useState, useEffect } from "react";

import BlockTitle from "../BlockTitle/BlockTitle";
import useHttp from "../../hooks/use-http";
import "./SkillsList.css";
import SkillItem from "./SkillItem";

function SkillsList() {
  const [skills, setSkills] = useState([]);

  const { sendRequest: fetchSkills } = useHttp();

  useEffect(() => {
    const transformSkills = (skillObj) => {
      const loadedSkills = Object.entries(skillObj).map(([key, value]) => ({
        id: key,
        name: value.name,
        icon: value.iconUrl,
      }));

      setSkills(loadedSkills);
    };

    fetchSkills(
      {
        url: "https://react-http-bcb91-default-rtdb.europe-west1.firebasedatabase.app/skills.json",
      },
      transformSkills,
    );
  }, [fetchSkills]);

  return (
    <div className="dz__skills section__padding" id="skills">
      <BlockTitle translationID="skillsBlockTitle" title="SKILLS" />
      <div className="dz__skillsList">
        {skills.map((skill) => (
          <div key={skill.id}>
            <SkillItem skillName={skill.name} skillIconPath={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsList;
