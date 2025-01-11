import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import menuData from "../../../database/api/menuData.json";
import styles from "./menuMobile.module.scss";

interface SectionProps {
  image?: string;
  name?: string;
  text?: string;
  closeMenu?: () => void;
}

export const MobileMenu = ({ closeMenu }: SectionProps) => {

  const [sections, setSections] = useState<SectionProps[]>([]);

  useEffect(() => {
    setSections(menuData);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <nav className={styles.mobileMenu}>
        <ul className={styles.sectionsList}>
          {sections.map((section, index) => (
            <li key={index} className={styles.sections}>
              <motion.div 
              className={styles.itemsList} 
              onClick={closeMenu}
              initial = {{y: -30 , opacity: 0}}
              animate = {{y: 0, opacity: 1}}
              transition={{duration: 0.3, delay:0.2 + (index * 0.1), ease: "linear"}}>
                {section.image && <img src={section.image} alt={section.name || 'Section'} />}
                {section.text && <h2 className={styles.sectionTitle}>{section.text}</h2>}
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
