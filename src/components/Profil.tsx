const Profil = () => {
  return (
    <div className="flex flex-col justify-around items-center lg:px-56 lg:pt-32 pt-32 p-5 text-bleu-cv">
      <p className="text-xl md:text-3xl lg:text-4xl">Hello ! Moi c'est</p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl my-1 lg:my-3 font-bold">
        Philippe Delcroix
      </h1>
      <p className="text-2xl md:text-4xl lg:text-5xl font-light">
        Développeur React junior
      </p>
      <a
        href="\portfolio\src\assets\cvWebDev2.pdf"
        target="_blank"
        className="text-xs md:text-sm lg:text-base my-7 lg:my-14 inline-block w-auto p-1 md:p-2 rounded-lg border border-bleu-cv text-bleu-cv hover:text-custom-bg  hover:bg-bleu-cv transition duration-300"
      >
        Pour voir mon CV, ça se passe ici
      </a>
    </div>
  );
};

export default Profil;
