//Components
import { Typewriter } from "../Typewriter/typewriter";
import { MediasButtons } from "./Medias/mediasButtons";
import { motion } from "motion/react";
//Styles
import styles from "./intro.module.scss";

export const Intro = () => {
  return (
    <section className={styles.introContainer} id="home">

      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className={styles.welcomeContent}
      >
        Olá, mundo! Eu sou
      </motion.span>

      <motion.div 
        className={styles.textWriter}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        <Typewriter textInput="Yann Gabriel." />
      </motion.div>

      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }} 
        className={styles.prof}
      >
        Web Developer
      </motion.span>

      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        className={styles.introText}
      >
        Como desenvolvedor web, estou sempre em busca de novos desafios e
        oportunidades para aplicar minha paixão por tecnologia. Acredito no
        poder da inovação para criar soluções que realmente impactem. Explore
        meu trabalho e conecte-se comigo através dos meus perfis e currículo!
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
      >
        <MediasButtons />
      </motion.div>

    </section>
  );
};