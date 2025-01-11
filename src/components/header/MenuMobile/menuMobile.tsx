import { useEffect, useState } from "react";
import styles from "./menuMobile.module.scss";


interface SectionProps{
  image?: string;
  name?: string
  text?: string
}

export const MobileMenu = () => {

  const [sections, setSection] = useState<SectionProps[]>([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/YannGabriel/portfolio/refs/heads/main/src/database/api/menuData.json",{
      method: "GET",
      headers:{
        "Content-Type": "ap0lication/json"
      }
    }).then((resp) => resp.json())
    .then((data) =>{
      setSection(data)
    })
    .catch((err) => console.log(err))
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
