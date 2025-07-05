//Styles
import styles from "./projects.module.scss";
import { motion } from "motion/react";

//Components
import { Project } from "./project.tsx/project";

export const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsHeader}>
        <motion.h1 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projetos<span className={styles.blackDetail}>:</span>
        </motion.h1>

        <motion.p 
          className={styles.projectsIntro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Veja sobre os projetos que desenvolvi!
        </motion.p>
      </div>
      
      <Project />
    </section>
  );
};