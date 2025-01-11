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
      transition={{duration: 0.15, delay: 0.5, ease: "linear"}}
      className={styles.welcomeContent}>
        Olá, mundo! Eu sou
      </motion.span>

      <div className={styles.textWriter}>
        <Typewriter textInput="Yann Gabriel." />
      </div>

      <motion.span
      initial= {{y: -20, opacity:0}}
      animate= {{y:0, opacity: 1}}
      transition={{duration: 0.2, delay: 0.75, ease: "linear"}} 
      className={styles.prof}>Web Developer</motion.span>

      <motion.p 
      initial= {{x: -20, opacity:0}}
      animate= {{x: 0, opacity: 1}}
      transition={{duration: 0.25, delay: 1, ease: "linear"}}
      className={styles.introText}>
        Como desenvolvedor web, estou sempre em busca de novos desafios e
        oportunidades para aplicar minha paixão por tecnologia. Acredito no
        poder da inovação para criar soluções que realmente impactem. Explore
        meu trabalho e conecte-se comigo através dos meus perfis e currículo!
      </motion.p>

      <MediasButtons />

    </div>
  );
};
