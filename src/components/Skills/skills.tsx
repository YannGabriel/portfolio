// Styles
import styles from "./skills.module.scss";
import { motion } from "motion/react";

//Components
import { FrontSkills } from "./Skills/frontskills";
import { DatasSkills } from "./Skills/dataskills";
import { DesignsSkills } from "./Skills/designskills";

export const Skills = () => {
  return (
    <section className={styles.skillsContent} id="Skills">
      <div className={styles.skillsHeader}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.skillsTitle}
        >
          Skills<span className={styles.redDetail}>:</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={styles.skillsIntro}
        >
          Confira as tecnologias que utilizo em meus projetos!
        </motion.p>
      </div>

      <div className={styles.skillsSections}>
        <DesignsSkills />
        <FrontSkills />
        <DatasSkills />
      </div>
    </section>
  );
};