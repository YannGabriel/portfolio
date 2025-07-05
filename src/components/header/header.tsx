//Icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png"
import {motion} from "motion/react"

//Style
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MenuMobile/menuMobile";
import { NavBar } from "./NavBar/navbar";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () =>{
    setMenu(!menu)
    document.body.classList.toggle("menuActive", !menu)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.containerTop} ${scrolled ? styles.scrolled : ""}`}
    >
      <motion.img 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        src={Logo} 
        alt="Logo Pessoal" 
        className={styles.imageLogo}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <motion.button
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        onClick={toggleMenu}
        className={`${styles.menuButton} ${menu ? styles.active : ""}`}
        whileTap={{ scale: 0.95 }}
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
    </motion.header>
  );
};