interface Skill {
  name: string;
  icon: string;
  mainColor: string;
  accentColor: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillsCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className=" flex flex-col items-center border pb-12 bg-custom-bg rounded-md py-5">
      <h2 className="text-3xl my-5">{title}</h2>
      <ul className="flex flex-wrap justify-center gap-5">
        {skills.map((skill, index) => {
          const rgbaColor = skill.mainColor
            .replace("rgb", "rgba")
            .replace(")", ", 0.25)");
          return (
            <li key={index} className="flex flex-col items-center">
              <span
                className="m-3 border border-5 rounded-full w-20 h-20 flex items-center justify-around bg-opacity-50"
                style={{
                  borderColor: skill.mainColor,
                  backgroundColor: rgbaColor,
                }}
              >
                <img src={skill.icon} alt="" className="w-10 h-10" />
              </span>
              <p
                className="tracking-widest font-light"
                style={{ color: skill.mainColor }}
              >
                {skill.name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsCard;
