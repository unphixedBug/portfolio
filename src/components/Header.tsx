const Header = () => {
  return (
    <header className="fixed h-16 w-full p-5 flex flex-row justify-center bg-[rgb(36, 39, 47)] backdrop-blur text-sm md:text-base lg:text-lg">
      <ul className="flex flex-row justify-around md:justify-center w-full items-center gap-10 text-white ">
        <li className="hover:text-bleu-cv transition duration-300">
          <a>PROFIL</a>
        </li>
        <li className="hover:text-bleu-cv transition duration-300">
          <a>SKILLS</a>
        </li>
        <li className="hover:text-bleu-cv transition duration-300">
          <a>PROJETS</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
