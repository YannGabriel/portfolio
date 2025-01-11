import { useEffect } from "react";
import styles from "./menuMobile.module.scss";

export const MobileMenu = () => {
  useEffect(() => {
    fetch("")
  }, []);

  return (
    <>
      {menuSections.map((section, index) => (
        <div key={index}>
          <img src={section.image} alt={section.name} />
          <h2 className={styles.sectionTitle}>{section.text}</h2>
        </div>
      ))}
    </>
  );
};
