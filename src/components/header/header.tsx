

import video from "../../assets/video/startVideoDesk.mp4"
import styles from "./header.module.scss"

export const Header = () =>{
  return(
    <header>
      <video 
      src={video}
      autoPlay
      muted
      className={styles.video}
      >
      </video>
    </header>
  )
}