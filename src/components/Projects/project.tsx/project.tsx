import ProjectsData from "../../../database/api/projectsData.json";
import { useState, useEffect } from "react";
import styles from "../projects.module.scss";
import { motion } from "motion/react";
import Github from "../../../assets/images/ButtonImage/github.svg";
import View from "../../../assets/images/ButtonImage/view.svg";

interface TecsProps {
  name?: string;
  logo?: string;
}

interface ProjectsProps {
  name?: string;
  description?: string;
  tecs?: TecsProps[];
  path?: string;
  linkView?: string;
  linkGithub?: string;
}

export const Project = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.project}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            className={styles.projectImage}
            src={project.path}
            alt={project.name}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className={styles.projectContent}>
            <motion.h2
              className={styles.projectTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              {project.name}
            </motion.h2>

            <div className={styles.projectTecs}>
              {project.tecs?.map((tec, tecIndex) => (
                <motion.div
                  key={tecIndex}
                  className={styles.logoDiv}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + tecIndex * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <img
                    src={tec.logo}
                    className={styles.projectTec}
                    alt={tec.name}
                  />
                </motion.div>
              ))}
            </div>

            <motion.p
              className={styles.aboutProject}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              {project.description}
            </motion.p>

            <motion.div 
              className={styles.projectButtons}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href={project.linkGithub}
                rel="noopener noreferrer"
                className={styles.targetButton}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className={styles.gitRepository}>
                  <img src={Github} alt="GitHub" />
                  <span>GitHub</span>
                </button>
              </motion.a>

              <motion.a
                href={project.linkView}
                rel="noopener noreferrer"
                className={styles.targetButton}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className={styles.viewWeb}>
                  <img src={View} alt="View" />
                  <span>View</span>
                </button>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};