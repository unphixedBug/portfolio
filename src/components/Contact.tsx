import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const iconSize = "2x";

  return (
    <footer className="fixed bottom-0 h-16 w-full p-5 flex flex-row justify-center bg-[rgb(36, 39, 47),0.5)] backdrop-blur">
      <ul className="flex flex-row justify-around md:justify-center w-full items-center gap-10 ">
        <li>
          <a href="mailto:delcroixphilippe73@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size={iconSize}
              className="hover:text-bleu-cv transition duration-300"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/philouLeF" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size={iconSize}
              className="hover:text-bleu-cv transition duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/delcroix-philippe/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size={iconSize}
              className="hover:text-bleu-cv transition duration-300"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
