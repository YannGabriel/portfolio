

import styles from "../header.module.scss"


export const NavBar = () =>{
  return(
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#about" className={styles.itemTarget}>Sobre mim</a>
          </li>
        <li className={styles.navItem}>
          <a href="#Skills" className={styles.itemTarget}>Habilidades</a>
          </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.itemTarget}>Projetos</a>
          </li>
        <li className={styles.navItem}>
          <a href="#contacts" className={styles.itemTarget}>Contatos</a>
          </li>
      </ul>
    </nav>
  )
}