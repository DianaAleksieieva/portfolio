import React, { useState } from 'react';
import styles from "./Content.module.css"
import cosmeticIMG from "../../img/Cosmetiques-content.jpeg"
import calendarIMG from "../../img/CalendarIMG.jpg"
import tranaIMG from "../../img/TranaIMG.jpeg"
import mokaIMG from "../../img/MokaIMG.jpg"
import retouchIMG from "../../img/RetouchIMG.jpeg"

function Content({content}) {
    
    const showIMG = () => {
        switch (content) {
            case 'Cosmetic':
              return cosmeticIMG
              break;
              case 'Retouch':
              return retouchIMG
              break;
              case 'Trana':
              return tranaIMG
              break;
              case 'Calendar':
              return calendarIMG
              break;
              case 'Moka':
              return mokaIMG
              break;
            default:
              return
    }}

    return (
        <div>
      <p className={styles.capture}>{content}</p>
      <img className={styles.contentIMG} alt={content} src={showIMG()}/>
      </div>
    );
  }
  
  export default Content;
  