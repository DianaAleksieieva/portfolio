import styles from './Services.module.css';
import servicesDesign from '../img/services-01.png';
import servicesDevelopment from '../img/services-03.png';
import servicesPrepress from '../img/services-04.png';
import servicesRetouch from '../img/services-02.png';

function Services() {
  return (
    <section className={styles.servicesContainer} >
        <h2 className={styles.sectionHeader}>Services</h2>
        <ul className={styles.servicesList}>
            <li className={styles.servicesItem}>
                <img src={servicesDesign} className={styles.servicesIcon}></img>
                <p className={styles.servicesLable}>Design</p>
            </li>
            <li className={styles.servicesItem}>
                <img src={servicesDevelopment} className={styles.servicesIcon}></img>
                <p className={styles.servicesLable}>Page <br></br> Development</p>
            </li>
            <li className={styles.servicesItem}>
                <img src={servicesPrepress} className={styles.servicesIcon}></img>
                <p className={styles.servicesLable}>Printing <br></br> Preparation</p>
            </li>
            <li className={styles.servicesItem}>
                <img src={servicesRetouch} className={styles.servicesIcon}></img>
                <p className={styles.servicesLable}>Photo  <br></br> Retouch</p>
            </li>
        </ul>
      </section>
  );
}

export default Services;
