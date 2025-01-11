import { useEffect, useState } from "react";
import menuData from "../../../database/api/menuData.json"
import styles from "./menuMobile.module.scss";


interface SectionProps{
  image?: string;
  name?: string
  text?: string
  closeMenu?: () => void
}

export const MobileMenu = ({closeMenu}: SectionProps) => {

  const [sections, setSection] = useState<SectionProps[]>([])

  useEffect(() => {
    setSection(menuData);
  }, []);

  return (
    <nav className={styles.mobileMenu}>
      <ul className={styles.sectionsList}>
        {sections.map((section, index) => (
          <li className={styles.sections}>
            <div key={index} className={styles.itemsList} onClick={closeMenu}>
              <img src={section.image} alt={section.name} />
              <h2 className={styles.sectionTitle}>{section.text}</h2>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
