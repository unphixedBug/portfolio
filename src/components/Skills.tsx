import SkillsCard from "./SkillsCard";

import { webSkills, designSkills, diversSkills } from "../constants/constants";

const Skills = () => {
  return (
    <div className="flex flex-col items-center p-5" id="skills">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5">SKILLS</h2>
      <div className="flex flex-col items-center gap-5 pb-10 pt-5">
        <SkillsCard title="WEB" skills={webSkills} />
        <SkillsCard title="OUTILS DIVERS" skills={diversSkills} />
        <SkillsCard title="DESIGN" skills={designSkills} />
      </div>
    </div>
  );
};

export default Skills;
