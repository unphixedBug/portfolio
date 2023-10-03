import SkillsCard from "./SkillsCard";
import HTML from "../assets/logo/html.svg";
import CSS from "../assets/logo/css.svg";
import Tailwind from "../assets/logo/tailwind.svg";
import SASS from "../assets/logo/sass.svg";
import JavaScript from "../assets/logo/javascript.svg";
import TypeScript from "../assets/logo/typescript.svg";
import React from "../assets/logo/react.svg";
import InDesign from "../assets/logo/indesign.svg";
import Illustrator from "../assets/logo/illustrator.svg";
import Photoshop from "../assets/logo/photoshop.svg";
import Figma from "../assets/logo/figma.svg";

const Skills = () => {
  const webSkills = [
    {
      name: "HTML",
      icon: HTML,
      mainColor: "rgb(240, 101, 41)",
      accentColor: "rgb(227, 76, 38)",
    },
    {
      name: "CSS",
      icon: CSS,
      mainColor: "rgb(41, 101, 241)",
      accentColor: "rgb(38, 77, 228)",
    },
    {
      name: "Tailwind",
      icon: Tailwind,
      mainColor: "rgb(53, 190, 248)",
      accentColor: "rgb(255, 255, 255)",
    },
    {
      name: "SASS",
      icon: SASS,
      mainColor: "rgb(206, 103, 154)",
      accentColor: "rgb(255, 255, 255)",
    },
    {
      name: "JavaScript",
      icon: JavaScript,
      mainColor: "rgb(247, 223, 30)",
      accentColor: "rgb(0, 0, 0)",
    },
    {
      name: "TypeScript",
      icon: TypeScript,
      mainColor: "rgb(45, 121, 199)",
      accentColor: "rgb(255, 255, 255)",
    },
    {
      name: "React",
      icon: React,
      mainColor: "rgb(97, 218, 251)",
      accentColor: "rgb(255, 255, 255)",
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
    {
      name: "Figma",
      icon: Figma,
      mainColor: "rgb(255, 255, 255)",
      accentColor: "rgb(30, 30, 30)",
    },
  ];

  return (
    <div className="flex flex-col items-center p-5" id="skills">
      <h2 className="text-2xl md:text-4xl lg:text-5xl p-5 text-bleu-cv">
        Skills
      </h2>
      <div className="flex flex-col gap-5 ">
        <SkillsCard title="Web" skills={webSkills} />
        <SkillsCard title="Design" skills={designSkills} />
      </div>
    </div>
  );
};

export default Skills;
