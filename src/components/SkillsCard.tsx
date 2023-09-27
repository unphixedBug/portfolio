interface Skill {
  name: string;
  icon: IconDefinition;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const SkillsCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={skill.icon} /> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsCard;
