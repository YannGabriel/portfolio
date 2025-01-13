import ProjectsData from "../../../database/api/projectsData.json";
import { useState, useEffect } from "react";
import styles from "../projects.module.scss";
import { motion } from "framer-motion";
import Github from "/public/images/projectsImages/ButtonImage/github.svg";
import View from "/public/images/projectsImages/ButtonImage/view.svg";

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
          className={styles.project}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.3 + index * 0.1,
            ease: "linear",
          }}
        >
          <motion.img
            className={styles.projectImage}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              ease: "linear",
            }}
            src={project.path}
            alt={project.name}
          />

          <div className={styles.projectContent}>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: "linear",
              }}
              className={styles.projectTitle}
            >
              {project.name}
            </motion.h2>
            <div className={styles.projectTecs}>
              {project.tecs?.map((tec, index) => (
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: 0.4 + index * 0.1,
                    ease: "linear",
                  }}
                  className={styles.logoDiv}
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
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 0.4,
                ease: "linear",
              }}
              className={styles.aboutProject}
            >
              {project.description}
            </motion.p>

            <div className={styles.projectButtons}>
              <motion.a
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: 0.3,
                  ease: "linear",
                }}
                href={project.linkGithub}
                rel="noopener noreferrer"
                className={styles.targetButton}
                target="blank"
              >
                <button className={styles.gitRepository}>
                  <img
                    src={Github}
                    alt="Website Image"
                    className={styles.githubImage}
                  />
                  <span className={styles.gitTextButton}>Github</span>
                </button>
              </motion.a>

              <motion.a
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  delay: 0.3,
                  ease: "linear",
                }}
                href={project.linkView}
                rel="noopener noreferrer"
                className={styles.targetButton}
                target="blank"
              >
                <button className={styles.viewWeb}>
                  <img src={View} alt="Botão Web" className={styles.webImage} />
                  <span className={styles.webButtonText}>View</span>
                </button>
              </motion.a>

            </div>
          </div>
        </motion.div>
      ))}

    </div>
  );
};
