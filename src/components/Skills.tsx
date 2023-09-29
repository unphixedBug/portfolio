import SkillsCard from "./SkillsCard";
import HTML from "../assets/logo/html.svg";
import CSS from "../assets/logo/css.svg";
import JavaScript from "../assets/logo/javascript.svg";
import InDesign from "../assets/logo/indesign.svg";
import Illustrator from "../assets/logo/illustrator.svg";
import Photoshop from "../assets/logo/photoshop.svg";

const Skills = () => {
  const webSkills = [
    {
      name: "HTML",
      icon: HTML,
      mainColor: "rgb(227, 76, 38)",
      accentColor: "rgb(240, 101, 41)",
    },
    {
      name: "CSS",
      icon: CSS,
      mainColor: "rgb(38, 77, 228)",
      accentColor: "rgb(41, 101, 241)",
    },
    {
      name: "JavaScript",
      icon: JavaScript,
      mainColor: "rgb(247, 223, 30)",
      accentColor: "rgb(0, 0, 0)",
    },
  ];

  const designSkills = [
    {
      name: "InDesign",
      icon: InDesign,
      mainColor: "rgb(255, 51, 102)",
      accentColor: "rgb(73, 2, 31)",
    },
    {
      name: "Photoshop",
      icon: Photoshop,
      mainColor: "rgb(49, 168, 255)",
      accentColor: "rgb(0, 30, 54)",
    },
    {
      name: "Illustrator",
      icon: Illustrator,
      mainColor: "rgb(254, 153, 0)",
      accentColor: "rgb(51, 0, 0)",
    },
  ];

  return (
    <div className="flex flex-col items-center  rounded p-5 text-rose-custom">
      <h2 className="text-3xl p-5">Skills</h2>
      <div className="flex flex-col lg:flex-row gap-5">
        <SkillsCard title="Web" skills={webSkills} />
        <SkillsCard title="Design" skills={designSkills} />
      </div>
    </div>
  );
};

export default Skills;
