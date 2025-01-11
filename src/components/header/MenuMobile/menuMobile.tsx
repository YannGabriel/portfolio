import { useEffect, useState } from "react";
import menuData from "../../../database/api/menuData.json"
import styles from "./menuMobile.module.scss";


interface SectionProps{
  image?: string;
  name?: string
  text?: string
}

export const MobileMenu = () => {

  const [sections, setSection] = useState<SectionProps[]>([])

  useEffect(() => {
    setSection(menuData);
  }, []);

  return (
    <>
      {sections.map((section, index) => (
        <div key={index}>
          <img src={section.image} alt={section.name} />
          <h2 className={styles.sectionTitle}>{section.text}</h2>
        </div>
      ))}
    </>
  );
};
