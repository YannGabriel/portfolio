//DataBase
import SkillsData from "../../database/api/skillsData.json"

//Hooks
import { useEffect, useState } from "react"

//Styles
import styles from "./skills.module.scss"

export const Skills = () =>{

  const [skill, setSkill] = useState([])

  useEffect(() =>{
    setSkill(SkillsData)
  }, [])

  return(
    <section className={styles.skillsContent}>
      <h1 className={styles.skillsTitle}>
        Skills
      </h1>
    </section>
  )
}