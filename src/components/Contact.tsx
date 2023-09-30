import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const iconSize = "2x";
  const iconColor = "rgb(36, 39, 47)";

  return (
    <footer className="fixed bottom-0 h-16 w-full p-5 flex flex-row justify-center border border-2 text-slate-950 bg-[rgba(255,255,255,0.5)] backdrop-blur border border-gray-200">
      <ul className="flex flex-row justify-around w-full items-center gap-5">
        <li>
          <a href="mailto:delcroixphilippe73@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size={iconSize}
              color={iconColor}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/philouLeF" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size={iconSize}
              color={iconColor}
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
              color={iconColor}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
