import SkillsCard from "./SkillsCard";
import HTML from "../assets/logo/html.svg";
import CSS from "../assets/logo/css.svg";
import JavaScript from "../assets/logo/javascript.svg";
import InDesign from "../assets/logo/indesign.svg";
import Illustrator from "../assets/logo/illustrator.svg";
import Photoshop from "../assets/logo/photoshop.svg";

const Skills = () => {
  const webSkills = [
    { name: "HTML", icon: HTML, mainColor: "#e34c26", accentColor: "#f06529" },
    { name: "CSS", icon: CSS, mainColor: "#264de4", accentColor: "#2965f1" },
    {
      name: "JavaScript",
      icon: JavaScript,
      mainColor: "#F7DF1E",
      accentColor: "#000000",
    },
  ];

  const designSkills = [
    {
      name: "InDesign",
      icon: InDesign,
      mainColor: "#49021F",
      accentColor: "#FF3366",
    },
    {
      name: "Photoshop",
      icon: Photoshop,
      mainColor: "#001E36",
      accentColor: "#31A8FF",
    },
    {
      name: "Illustrator",
      icon: Illustrator,
      mainColor: "#330000",
      accentColor: "#FE9900",
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
