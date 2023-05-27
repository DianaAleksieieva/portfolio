import styles from './Skills.module.css';
import inDesign from '../img/skills/Adobe_InDesign.png';
import Illustrator from '../img/skills/Adobe_Illustrator.png';
import Photoshop from '../img/skills/Adobe_Photoshop.png';
import Figma from '../img/skills/Figma.png';
import Acrobat from '../img/skills/pdf-acrobat.png';
import CSS from '../img/skills/css.png';
import HTML from '../img/skills/html.png';
import JS from '../img/skills/js.png';
import React from '../img/skills/react.png';
import GitHub from '../img/skills/git-hub.png';

function Skills() {
  return (
    <section className={styles.skillsContainer} >
        <h2>Technical Skills</h2>
        <ul className={styles.skillsList}>
            <li className={styles.skillsItem}>
                <img  className={styles.skillsIcon} src={inDesign}></img>
                <p>inDesign</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={Illustrator}></img>
                <p>illustrator</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={Photoshop}></img>
                <p>Photoshop</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={Figma}></img>
                <p>Figma</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={Acrobat}></img>
                <p>Acrobat</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={CSS}></img>
                <p>CSS</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={HTML}></img>
                <p>HTML</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={JS}></img>
                <p>JavaScript</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={React}></img>
                <p>React</p>
            </li>
            <li className={styles.skillsItem}>
                <img className={styles.skillsIcon} src={GitHub}></img>
                <p>GitHub</p>
            </li>
        </ul>
      </section>
  );
}

export default Skills;
