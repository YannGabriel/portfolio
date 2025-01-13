
//API
import WebSkills from "../../../database/api/skillsWeb.json";

//Styles
import styles from "../skills.module.scss"
import {motion} from "framer-motion"

//Image
import WebDev from "../../../assets/images/webDev.svg";

//Hooks
import { useEffect, useState } from "react";


interface SkillsProps {
  name?: string;
  path?: string;
}

export const FrontSkills = () =>{

    const [webSkills, setWebSkills] = useState<SkillsProps[]>([]);

    useEffect(() => {
      setWebSkills(WebSkills);
    }, []);
  
    return (
      <div className={styles.skillSection}>
      <div className={styles.skillHeader}>
        <motion.img
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
          src={WebDev}
          alt="Desenvolvimento Web"
          className={styles.skillIcon}
        />
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
          className={styles.skillTitle}
        >
          Desenvolvimento<span className={styles.redDetail}>W</span>eb
        </motion.h2>
      </div>

      <div className={styles.skillIcons}>
        {webSkills.map((skill, index) => (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: 0.2 + index * 0.1,
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
        Desenvolvimento Web envolve a criação de sites e aplicações online,
        combinando tecnologias
      </p>
    </div>
    )
}