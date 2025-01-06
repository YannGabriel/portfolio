import { Typewriter } from "../Typewriter/typewriter";
import styles from "./intro.module.scss";

export const Intro = () => {
  return (
    <div className={styles.introContainer}>

      <span className={styles.welcomeContent}>Olá, mundo! Eu sou</span>

      <div className={styles.textWriter}>
        <Typewriter
        textInput="Yann Gabriel."
        />
      </div>

      <span className={styles.prof}>Web Developer</span>
    </div>
  );
};
