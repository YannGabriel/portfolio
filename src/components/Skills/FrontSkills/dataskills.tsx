
//API
import DataSkills from "../../../database/api/skillsBackEnd.json";

//Image
import Data from "../../../../public/images/skillsIcons/data.svg";

//Hooks
import { useEffect, useState } from "react";

//Styles
import { motion } from "framer-motion";
import styles from "../skills.module.scss"

interface SkillsProps {
  name?: string;
  path?: string;
}

export const DatasSkills = () =>{

  const [dataSkills, setDataSkills] = useState<SkillsProps[]>([]);

  useEffect(() => {
    setDataSkills(DataSkills);
  }, []);


  return(
    <div className={styles.skillSection}>
    <div className={styles.skillHeader}>
      <motion.img
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        src={Data}
        alt="Back-End"
        className={styles.skillIcon}
      />
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        className={styles.skillTitle}
      >
        Back<span className={styles.redDetail}>E</span>nd
      </motion.h2>
    </div>
    <div className={styles.skillIcons}>
      {dataSkills.map((skill, index) => (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.4 + index * 0.1,
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
      Bancos de Dados armazenam e organizam dados em aplicações, sejam web
      ou não.
    </p>
  </div>
  )
}