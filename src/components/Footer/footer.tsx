import styles from "./footer.module.scss";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      animate={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
      className={styles.footerContent}
    >
      <motion.span
        animate={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.4, ease: "linear" }}
        className={styles.websiteDev}
      >
        Website feito por:
      </motion.span>

      <motion.h1
        animate={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.4, ease: "linear" }}
        className={styles.devName}
      >
        Yann Gabriel
      </motion.h1>

      <motion.article
        animate={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.4, ease: "linear" }}
        className={styles.footerTexts}
      >
        <p className={styles.aboutProject}>
          Website feito para uso pessoal para portfolio, utilizando tecnologias
          webs como React e TypeScript.
        </p>
      </motion.article>
    </motion.footer>
  );
};
