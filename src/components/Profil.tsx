const Profil = () => {
  return (
    <div className="flex flex-col justify-around items-left lg:w-full lg:px-56 lg:py-40 pt-32 p-5 text-bleu-cv bg-custom-gradient">
      <p className="text-xl lg:text-4xl">Hello !</p>
      <h1 className="text-3xl lg:text-6xl my-1 lg:my-3 font-bold">
        Philippe Delcroix
      </h1>
      <p className="text-2xl lg:text-5xl font-light">
        Développeur React junior
      </p>
      <a
        href="src\assets\cvWebDev2.pdf"
        target="_blank"
        className="my-7 lg:my-14  border p-2 rounded-lg bg-bleu-cv w-auto text-white"
      >
        Pour voir mon CV, ça se passe ici
      </a>
    </div>
  );
};

export default Profil;
