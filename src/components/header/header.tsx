//Icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png"

//Style
import styles from "./header.module.scss";
import { useState } from "react";
import { MobileMenu } from "./MenuMobile/menuMobile";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(!menu)
    document.body.classList.toggle("menuActive", !menu)
  }

  return (
    <header className={styles.containerTop}>
      <img 
      src={Logo} 
      alt="Logo Pessoal" 
      className={styles.imageLogo}/>
      <button
        onClick={toggleMenu}
        className={`${styles.menuButton} ${menu ? styles.active : ""}`}
      >
        {menu ? 
        <IoMdClose className={styles.icon} /> 
        : <CiMenuFries  className={styles.icon}/>
        }
      </button>

      {menu &&(
        <>
        <MobileMenu closeMenu={() => setMenu(false)}/>
        <div className={`${styles.overlay} ${menu ? styles.active : ""}`} onClick={() => setMenu(false)} />
        </>
      ) }
    </header>
  );
};
