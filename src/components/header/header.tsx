//Icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png"
import {motion} from "framer-motion"

//Style
import styles from "./header.module.scss";
import { useState } from "react";
import { MobileMenu } from "./MenuMobile/menuMobile";
import { NavBar } from "./NavBar/navbar";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(!menu)
    document.body.classList.toggle("menuActive", !menu)
  }

  return (
    <header className={styles.containerTop}>
      <motion.img 
      initial = {{x: -20, opacity:0}}
      animate= {{x: 0, opacity:1}}
      transition={{duration: 0.25, delay: 0.1, ease: "easeIn"}}
      src={Logo} 
      alt="Logo Pessoal" 
      className={styles.imageLogo}/>

      <motion.button
      initial= {{x: 10, opacity:0}}
      animate = {{x: 0, opacity: 1}}
      transition={{duration: 0.15, delay: 0.05, ease: "easeIn"}}
        onClick={toggleMenu}
        className={`${styles.menuButton} ${menu ? styles.active : ""}`}
      >
        {menu ? 
        <IoMdClose className={styles.icon} /> 
        : <CiMenuFries  className={styles.icon}/>
        }
      </motion.button>

      {menu &&(
        <>
        <MobileMenu closeMenu={() => setMenu(false)}/>
        <div className={`${styles.overlay} ${menu ? styles.active : ""}`} onClick={() => setMenu(false)} />
        </>
      ) }

      <NavBar/>
    </header>
  );
};
