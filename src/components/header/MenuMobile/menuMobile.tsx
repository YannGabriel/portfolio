import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import menuData from "../../../database/api/menuData.json";
import styles from "./menuMobile.module.scss";

interface SectionProps {
  image?: string;
  name?: string;
  text?: string;
  path?: string
  closeMenu?: () => void;
}

export const MobileMenu = ({ closeMenu }: SectionProps) => {

  const [sections, setSections] = useState<SectionProps[]>([]);

  useEffect(() => {
    setSections(menuData);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.overlay}
      />
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={styles.mobileMenu}
      >
        <ul className={styles.sectionsList}>
          {sections.map((section, index) => (
            <motion.li 
              key={index} 
              className={styles.sections}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={section.path}>
                <div
                  className={styles.itemsList}
                  onClick={closeMenu}
                >
                  {section.image && <img src={section.image} alt={section.name || 'Section'} />}
                  {section.text && <h2 className={styles.sectionTitle}>{section.text}</h2>}
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};