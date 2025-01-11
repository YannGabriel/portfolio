//Components
import { Typewriter } from "../Typewriter/typewriter";
import { MediasButtons } from "./Medias/mediasButtons";
import { motion } from "framer-motion";
//Styles
import styles from "./intro.module.scss";

export const Intro = () => {
  return (
    <div className={styles.introContainer}>

      <motion.span 
      initial= {{opacity:0}}
      animate= {{ opacity: 1}}
      transition={{duration: 0.15, delay: 0.1, ease: "linear"}}
      className={styles.welcomeContent}>
        Olá, mundo! Eu sou
      </motion.span>

      <div className={styles.textWriter}>
        <Typewriter textInput="Yann Gabriel." />
      </div>

      <span className={styles.prof}>Web Developer</span>

      <p className={styles.introText}>
        Como desenvolvedor web, estou sempre em busca de novos desafios e
        oportunidades para aplicar minha paixão por tecnologia. Acredito no
        poder da inovação para criar soluções que realmente impactem. Explore
        meu trabalho e conecte-se comigo através dos meus perfis e currículo!
      </p>

      <MediasButtons />
    </div>
  );
};
