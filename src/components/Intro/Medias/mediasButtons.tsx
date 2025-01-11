//Icons
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import Curriculo from "../../../assets/images/introIcons/curriculo.svg";

//Animation
import { motion } from "framer-motion";

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
  label: "Curriculo",
};

export const MediasButtons = () => {
  return (
    <div className={styles.mediasIntro}>
      <div className={styles.mediasContent}>
        {mediasLinks.map(({ href, icon, label }, index) => (
          <motion.a
            initial= {{y: 40, opacity: -1}}
            animate= {{y: 0, opacity: 1}}
            transition={{duration: 0.75, delay: 0.45, ease: "linear" }}
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaTarget}
            aria-label={label}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      <motion.div
      initial= {{y: 60, opacity:-1}}
      animate= {{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 1, ease: "linear"}}
      className={styles.curriculoButton}>
        <a href={curriculo.href} className={curriculo.label}>
          <img
            src={Curriculo}
            alt="Curriculo"
            className={styles.curriculoIcon}
          />
          <div className={styles.curriculoContent}>
            <h3 className={styles.curriculoTitle}>Curriculo</h3>
            <span className={styles.curriculoDetail}>Virtual</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};
