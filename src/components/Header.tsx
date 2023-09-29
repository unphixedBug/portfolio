const Header = () => {
  return (
    <header className="fixed top-2 lg:right-2 h-16 w-auto p-5   rounded-full flex flex-row justify-center border border-2 border-rose-custom text-slate-950">
      <ul className="flex flex-row justify-around items-center gap-5">
        <li>PROFIL</li>
        <li>SKILLS</li>
        <li>PROJETS</li>
      </ul>
    </header>
  );
};

export default Header;
