//Icons
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

//Style
import styles from "./mediasButtons.module.scss";

const mediasLinks = [
  {
    href: "https://github.com/YannGabriel",
    icon: <LuGithub />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yann-gabriel-dev",
    icon: <IoLogoLinkedin />,
    label: "LinkedIn",
  },
];

const curriculo = {
  href: "../../database/download/curriculo.pdf",
  icon: <FaFileDownload />,
  label: "Curriculo",
};

export const MediasButtons = () => {
  return (
    <div className={styles.mediasIntro}>
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

      <div className={styles.curriculoButton}>
        <a href={curriculo.href} className={curriculo.label}>
          <div className={styles.curriculoIcon}>{curriculo.icon}</div>
          <div className={styles.curriculoContent}>
            <h3 className={styles.curriculoTitle}>Curriculo</h3>
            <span className={styles.curriculoDetail}>Virtual</span>
          </div>
        </a>
      </div>
    </div>
  );
};
