//Icons
import { LuGithub } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import Curriculo from "../../../assets/images/introIcons/curriculo.svg";

//Animation
import { motion } from "motion/react";

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
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaTarget}
            aria-label={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2 + (index * 0.1),
              ease: "easeOut"
            }}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      <motion.div
        className={styles.curriculoButton}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.5,
          ease: "easeOut"
        }}
      >
        <a href={curriculo.href} className={curriculo.label}>
          <img
            src={Curriculo}
            alt="Curriculo"
            className={styles.curriculoIcon}
          />
          <div className={styles.curriculoContent}>
            <h3 className={styles.curriculoTitle}>Currículo</h3>
            <span className={styles.curriculoDetail}>Virtual</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};