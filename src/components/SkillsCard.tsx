interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillsCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="border">
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="flex">
            <img src={skill.icon} alt="" className="w-6 h-6" /> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsCard;
