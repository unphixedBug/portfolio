const Profil = () => {
  return (
    <div
      className="flex flex-col justify-around items-center lg:px-56 lg:pt-32 pt-32 p-5 "
      id="profil"
    >
      <p className="text-xl md:text-3xl lg:text-4xl">Hello ! Moi c'est</p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl my-1 lg:my-3 font-bold text-center">
        Philippe Delcroix
      </h1>
      <p className="text-2xl md:text-4xl lg:text-5xl font-light text-center">
        Développeur React junior
      </p>
      <p className="m-2 text-center sm:w-2/4 md:m-5">
        Attiré par ce milieu grâce à ses promesses de crativité, d'évolutivité
        et d'impact potentiel, j'y ai découvert plus que ça.
        <br /> Mes missions actuelles sont principalement d'accroître mes
        connaissances en accessibilité et en éco-conception afin d'offrir la
        meilleure version du web à tout le monde !
      </p>
      <a
        href="./cvWebDev.pdf"
        target="_blank"
        className="text-xs md:text-sm lg:text-base my-7 lg:my-14 inline-block w-auto p-1 md:p-2 rounded-lg border border-transparent hover:border-textCustom text-darkBG hover:text-textCustom hover:bg-secondColor  bg-bleu-cv transition duration-300"
      >
        Mon CV juste ici !
      </a>
    </div>
  );
};

export default Profil;
