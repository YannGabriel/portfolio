
import YannPhoto from "../../assets/images/YannGabrielPhoto.svg"
import styles from "./about.module.scss"

export const About = () =>{
  return(
    <section className={styles.aboutContent}>
      <img 
      src={YannPhoto} 
      alt="Foto do Yann Gabriel mais novo" 
      className={styles.aboutImage}
      />
    </section>
  )
}