// Styles
import styles from "./skills.module.scss";
import { motion } from "framer-motion";

//Components
import { FrontSkills } from "./FrontSkills/frontskills";
import { DatasSkills } from "./FrontSkills/dataskills";
import { DesignsSkills } from "./FrontSkills/designskills";

export const Skills = () => {
  return (
    <section className={styles.skillsContent} id="Skills">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        className={styles.skillsTitle}
      >
        Skills<span className={styles.redDetail}>:</span>
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        className={styles.skillsIntro}
      >
        Confira as tecnologias que utilizo em meus projetos!
      </motion.p>

      <section className={styles.skillsSections}>
        <DesignsSkills />

        <FrontSkills />

        <DatasSkills />
      </section>
    </section>
  );
};
