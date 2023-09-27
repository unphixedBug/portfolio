import SkillsCard from "./SkillsCard";
import HTML from "./assets/logo/html.svg";
import CSS from "./assets/logo/css.svg";
import JavaScript from "./assets/logo/javascript.svg";
import InDesign from "./assets/logo/indesign.svg";
import Illustrator from "./assets/logo/illustrator.svg";
import Photoshop from "./assets/logo/photoshop.svg";

const Skills = () => {
  const webSkills = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JavaScript },
  ];

  const designSkills = [
    { name: "Photoshop", icon: Photoshop },
    { name: "Illustrator", icon: Illustrator },
    { name: "Figma", icon: InDesign },
  ];

  return (
    <>
      <h2>Skills</h2>
      <SkillsCard title="Web" skills={webSkills} />
      <SkillsCard title="Design" skills={designSkills} />
    </>
  );
};

export default Skills;
