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
    <div className=" flex flex-col items-center pb-10 pt-5 px-5 md:px-7 bg-secondColor rounded-md md:w-3/4 ">
      <h2 className="text-xl md:text-3xl lg:text-4xl m-2 sm:m-3 md:m-4 ">
        {title}
      </h2>
      <ul className="flex flex-wrap justify-center gap-5">
        {skills.map((skill, index) => {
          const rgbaColor = skill.mainColor
            .replace("rgb", "rgba")
            .replace(")", ", 0.25)");
          return (
            <li key={index} className="flex flex-col items-center">
              <span
                className="m-3 border border-5 rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-around bg-opacity-50 "
                style={{
                  borderColor: skill.mainColor,
                  backgroundColor: rgbaColor,
                  boxShadow: `0 0 30px -15px ${skill.mainColor}`,
                }}
              >
                <img
                  src={skill.icon}
                  alt=""
                  className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10"
                />
              </span>
              <p
                className="tracking-widest font-light text-base md:text-xl lg:text-2xl"
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
