//LocalApis
import DesignSkills from "../../../database/api/skillsDesign.json";

//images
import UIUX from "../../../../public/images/skillsIcons/UiUX.svg";

//Styles
import { motion } from "framer-motion";
import styles from "../skills.module.scss";

// Hooks
import { useEffect, useState } from "react";

interface SkillsProps {
  name?: string;
  path?: string;
}

export const DesignsSkills = () => {
  const [designSkills, setDesignSkills] = useState<SkillsProps[]>([]);

  useEffect(() => {
    setDesignSkills(DesignSkills);
  }, []);

  return (
    <div className={styles.skillSection}>
      <div className={styles.skillHeader}>
        <motion.img
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
          src={UIUX}
          alt="UI e UX"
          className={styles.skillIcon}
        />

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
          className={styles.skillTitle}
        >
          UI<span className={styles.redDetail}>&</span>UX
        </motion.h2>
      </div>

      <div className={styles.skillIcons}>
        {designSkills.map((skill, index) => (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: 0.1 + index * 0.1,
              ease: "linear",
            }}
            key={skill.name}
            className={styles.skillIconItem}
          >
            <img src={skill.path} alt={skill.name} />
          </motion.div>
        ))}
      </div>
      <p className={styles.skillDescription}>
        UI & UX são técnicas essenciais para criar layouts funcionais e
        atraentes para os usuários.
      </p>
    </div>
  );
};
