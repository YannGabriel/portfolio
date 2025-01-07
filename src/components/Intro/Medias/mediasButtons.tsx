//Icons
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";

//Style
import styles from "./mediasButtons.module.scss";

const mediasLinks = [
  { href: "https://github.com/YannGabriel", icon: <LuGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/yann-gabriel-dev", icon: <IoLogoLinkedin />, label: "LinkedIn" },
]

export const MediasButtons = () => {
  return (
    <div className={styles.mediasContent}>
      {mediasLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mediaTarget}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
