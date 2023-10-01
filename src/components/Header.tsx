const Header = () => {
  return (
    <header className="fixed h-16 w-full p-5 flex flex-row justify-center bg-[rgb(36, 39, 47)] backdrop-blur text-sm md:text-base lg:text-lg">
      <ul className="text-white font-medium flex flex-row justify-around items-center gap-5 md:gap-10 lg:gap-20">
        <li className="hover:text-bleu-cv">
          <a>PROFIL</a>
        </li>
        <li className="hover:text-bleu-cv">
          <a>SKILLS</a>
        </li>
        <li className="hover:text-bleu-cv">
          <a>PROJETS</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
