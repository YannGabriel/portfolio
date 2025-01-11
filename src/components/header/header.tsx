//Icons
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png"

//Style
import styles from "./header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.containerTop}>
      <img 
      src={Logo} 
      alt="Logo Pessoal" 
      className={styles.imageLogo}/>
      <button
        onClick={() => setMenu(!menu)}
        className={`${styles.menuButton} ${menu ? styles.active : ""}`}
      >
        {menu ? 
        <IoMdClose className={styles.icon} /> 
        : <CiMenuFries  className={styles.icon}/>
        }
      </button>
    </header>
  );
};
