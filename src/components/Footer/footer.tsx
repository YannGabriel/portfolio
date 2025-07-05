import styles from "./footer.module.scss";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <motion.footer
      className={styles.footerContent}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.footerGrid}>
        <div className={styles.footerInfo}>
          <motion.span
            className={styles.websiteDev}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Website feito por:
          </motion.span>

          <motion.h1
            className={styles.devName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Yann Gabriel
          </motion.h1>
        </div>

        <motion.div
          className={styles.footerTexts}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className={styles.aboutProject}>
            Website feito para uso pessoal para portfolio, utilizando tecnologias
            webs como React e TypeScript com animações modernas e design responsivo.
          </p>
        </motion.div>
      </div>

      <motion.div
        className={styles.footerBottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        © 2024 Yann Gabriel. Todos os direitos reservados.
      </motion.div>
    </motion.footer>
  );
};