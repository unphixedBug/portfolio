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
    <div className="border border-rose-custom flex flex-col items-center">
      <h2 className="text-lg">{title}</h2>
      <ul className="flex">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center">
            <span
              className="m-3 border border-5 rounded-full w-20 h-20 flex items-center justify-around bg-opacity-50"
              style={{
                borderColor: skill.mainColor,
                backgroundColor: skill.mainColor,
              }}
            >
              <img src={skill.icon} alt="" className=" w-10 h-10 " />
            </span>
            <p className="font-medium" style={{ color: skill.mainColor }}>
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsCard;
