//Image
import YannPhoto from "../../assets/images/YannGabrielPhoto.svg"

//Style
import styles from "./about.module.scss"

//Animations
import {motion} from "framer-motion"

export const About = () =>{
  return(
    <section className={styles.aboutContent}>
      <motion.img 
       initial= {{opacity: 0, y: 50}}
       whileInView={{ opacity: 1, y: 0 }} 
       viewport={{ once: true }}
       transition={{ duration: 0.8, ease: "easeOut" }}
      src={YannPhoto} 
      alt="Foto do Yann Gabriel mais novo" 
      className={styles.aboutImage}
      />

      <motion.h1 
      className={styles.aboutTitle}
      initial= {{opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Sobre Mim
      </motion.h1>

      <motion.p 
      className={styles.aboutText}
      initial= {{opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
      Me chamo <span className={styles.textDetails}>Yann Gabriel</span>, sou estudante de
      <span className={styles.textDetails}> Ciências da Computação</span>, e sou apaixonado na área 
      da tecnologia desde meu primeiro contato com 
      video games, desde que eu tinha seis anos de idade!
      Hoje sou um <span className={styles.textDetails}>programador web</span>, 
      que abrange a área
      <br/>
      <span className={styles.textDetails}> Front-End </span> 
       e  
      <span className={styles.textDetails}> Back-End!</span>
      </motion.p>
    </section>
  )
}