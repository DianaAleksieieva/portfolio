import styles from './DesignPortfolio.module.css';
import CosmetiquesIMG from '../img/Cosmetiques.jpeg';
import CalendarIMG from '../img/portfolio-calendar.jpeg';
import RetouchIMG from '../img/portfolio-retouch.jpeg';
import TranaIMG from '../img/portfolio-trana.jpeg';
import MokaIMG from '../img/portfolio-moka.jpeg';
import Modal from '../Modal/Modal.jsx';
import useModal from '../Modal/useModal.jsx';
import { useState } from 'react';

function Design() {
  const { isShowing, toggle } = useModal();
  const { contentType, handleContent } = useModal();

  const handleClick = e => {
    handleContent(e.currentTarget.name);
    toggle();
  };
  return (
    <div className={styles.portfolioSection}>
      <h2>Portfolio Design</h2>
      <ul className={styles.galleryList}>
        <li className={styles.galleryItem}>
          <button
            name="Cosmetic"
            onClick={handleClick}
            className={styles.galleryButton}
            type="button"
          >
            <img
              className={styles.galleryIMG}
              alt="cosmetic"
              src={CosmetiquesIMG}
            ></img>
            <p className={styles.itemName}>Lumière Cosmetiques</p>
            <p className={styles.itemDescription}>
              Email design for cosmetic company
            </p>
          </button>
        </li>

        <li className={styles.galleryItem}>
          <button
            name="Calendar"
            onClick={handleClick}
            className={styles.galleryButton}
            type="button"
          >
            <img
              className={styles.galleryIMG}
              alt="calendar"
              src={CalendarIMG}
            ></img>
            <p className={styles.itemName}>Calendar Planer</p>
            <p className={styles.itemDescription}>
            Calendar for print 
            </p>
          </button>
        </li>

        <li className={styles.galleryItem}>
          <button
            name="Retouch"
            onClick={handleClick}
            className={styles.galleryButton}
            type="button"
          >
            <img
              className={styles.galleryIMG}
              alt="retouch"
              src={RetouchIMG}
            ></img>
            <p className={styles.itemName}>Retouch Promo</p>
            <p className={styles.itemDescription}>
            Promo banner for email promo
            </p>
          </button>
        </li>

        <li className={styles.galleryItem}>
          <button
            name="Moka"
            onClick={handleClick}
            className={styles.galleryButton}
            type="button"
          >
            <img
              className={styles.galleryIMG}
              alt="moka"
              src={MokaIMG}
            ></img>
            <p className={styles.itemName}>Moka Apparel Lookbook</p>
            <p className={styles.itemDescription}>
            Interactive web catalog
            </p>
          </button>
        </li>

        <li className={styles.galleryItem}>
          <button
            name="Trana"
            onClick={handleClick}
            className={styles.galleryButton}
            type="button"
          >
            <img
              className={styles.galleryIMG}
              alt="moka"
              src={TranaIMG}
            ></img>
            <p className={styles.itemName}>Trana charity organization</p>
            <p className={styles.itemDescription}>
            Web site design 
            </p>
          </button>
        </li>
        
      </ul>
      <Modal isShowing={isShowing} hide={toggle} contentType={contentType} />
    </div>
  );
}
export default Design;
