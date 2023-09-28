import SkillsCard from "./SkillsCard";
import HTML from "../assets/logo/html.svg";
import CSS from "../assets/logo/css.svg";
import JavaScript from "../assets/logo/javascript.svg";
import InDesign from "../assets/logo/indesign.svg";
import Illustrator from "../assets/logo/illustrator.svg";
import Photoshop from "../assets/logo/photoshop.svg";

const Skills = () => {
  const webSkills = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JavaScript },
  ];

  const designSkills = [
    { name: "InDesign", icon: InDesign },
    { name: "Photoshop", icon: Photoshop },
    { name: "Illustrator", icon: Illustrator },
  ];

  return (
    <div className="flex flex-col items-center bg-slate-950  rounded p-5 ">
      <h2>Skills</h2>
      <div className="flex flex-row gap-5">
        <SkillsCard title="Web" skills={webSkills} />
        <SkillsCard title="Design" skills={designSkills} />
      </div>
    </div>
  );
};

export default Skills;
