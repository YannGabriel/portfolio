//LocalApis
import WebSkills from "../../database/api/skillsWeb.json";
import DesignSkills from "../../database/api/skillsDesign.json";
import DataSkills from "../../database/api/skillsBackEnd.json";

//images
import UIUX from "../../../public/images/skillsIcons/UiUX.svg";
import WebDev from "../../../public/images/skillsIcons/webDev.svg";
import Data from "../../../public/images/skillsIcons/data.svg";

// Hooks
import { useEffect, useState } from "react";

// Styles
import styles from "./skills.module.scss";
import { motion } from "framer-motion";

interface SkillsProps {
  name?: string;
  path?: string;
}

export const Skills = () => {
  const [designSkills, setDesignSkills] = useState<SkillsProps[]>([]);
  const [webSkills, setWebSkills] = useState<SkillsProps[]>([]);
  const [dataSkills, setDataSkills] = useState<SkillsProps[]>([]);

  useEffect(() => {
    setWebSkills(WebSkills);
    setDesignSkills(DesignSkills);
    setDataSkills(DataSkills);
  }, []);

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
        className={styles.skillsIntro}>
        Confira as tecnologias que utilizo em meus projetos!
      </motion.p>

      <section className={styles.skillsSections}>
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
              Back-End
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
      </section>
    </section>
  );
};
