//Styles
import styles from "./projects.module.scss";
import { motion } from "framer-motion";

//Components
import { Project } from "./project.tsx/project";

export const Projects = () => {
  return (
    <motion.section
    id="projects"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
      className={styles.projectsSection}
    >
      <h1 className={styles.sectionTitle}>
        Projetos<span className={styles.blackDetail}>:</span>
      </h1>

      <p className={styles.projectsIntro}>
        Veja sobre os projetos que desenvolvi!
      </p>
      <Project />
    </motion.section>
  );
};
