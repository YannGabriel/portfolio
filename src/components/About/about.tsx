//Image
import YannPhoto from "../../assets/images/YannGabrielPhoto.svg"

//Style
import styles from "./about.module.scss"

//Animations
import {motion} from "motion/react"

export const About = () =>{
  return(
    <section className={styles.aboutContent} id="about">
      <motion.div
        className={styles.aboutImageContainer}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          src={YannPhoto} 
          alt="Foto do Yann Gabriel" 
          className={styles.aboutImage}
        />
      </motion.div>

      <div className={styles.aboutTextContainer}>
        <motion.h1
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Sobre Mim
        </motion.h1>
        
        <motion.p
          className={styles.aboutText}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Me chamo <span className={styles.textDetails}>Yann Gabriel</span>, sou estudante de
          <span className={styles.textDetails}> Ciências da Computação</span>, e sou apaixonado na área
          da tecnologia desde meu primeiro contato com
          video games, desde que eu tinha seis anos de idade!
          Hoje sou um <span className={styles.textDetails}>programador web</span>,
          que abrange a área
          <span className={styles.textDetails}> Front-End </span>
          e
          <span className={styles.textDetails}> Back-End!</span>
        </motion.p>
      </div>
    </section>
  )
}