const Header = () => {
  return (
    <header className="fixed h-16 w-full p-5 flex flex-row justify-center text-slate-950 bg-[rgba(255,255,255,0.5)] backdrop-blur border border-gray-200 text-sm md:text-base lg:text-lg">
      <ul className="text-slate-950 font-medium flex flex-row justify-around items-center gap-5 md:gap-10 lg:gap-20">
        <li>PROFIL</li>
        <li>SKILLS</li>
        <li>PROJETS</li>
      </ul>
    </header>
  );
};

export default Header;
