import styles from './Hero.module.css';
import linkedinIMG from '../img/linkedin.svg';
import myPhoto from '../img/my-photo.jpeg';
import myCV from '../img/AleksaCV.pdf';
import arrow from '../img/arrow.png';
import portfolioArrow from '../img/portfolio-arrow.svg';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroDescription} >
        <div className={styles.textDescription}>
          <p className={styles.fullName}> Diana Aleksa </p>
          <p className={styles.myRole}> Graphic Designer
          </p>
          <p className={styles.aboutInfo}>
          I have been working as a designer for 5 years. My main duties were to create a design for printing catalogs, flyers, and envelopes for the cosmetic company Yves Rocher and prepare them for print.
I also have worked with digital products - emails, banners, and web designs and I am dealing well with retouching. 
          </p>
          <div className={styles.myCVandIn}>
            <a className={styles.downloadButton} href={myCV} download>Download my CV</a>
            <a
              className={styles.linkedinIMGLink}
              href="https://www.linkedin.com/in/diana-aleksieieva-0687921b2/"
            >
              <img
              className={styles.linkedinIMG}
                alt="linkedin"
                src={linkedinIMG}
              ></img>
            </a>
          </div>
        </div>
        {/* <div className={styles.myPhotoContainer}> */}
          <img className={styles.myPhoto} src={myPhoto} alt="Diana-main"></img>
          {/* <p>Would you like to get free design from me? </p>
          <a className={styles.freeDesignButton} href="https://forms.gle/mTZsP6Qk7hMcd2Mm8" >Design for FREE</a>
        </div> */}
      </div>
      <div className={styles.arrowContainer}>
      {/* <img className={styles.portfolioArrow} src={portfolioArrow} alt="decorative arrow"></img> */}
      <div>
      {/* <p>Design, Prepress, Retouch</p> */}
      <a className={styles.emailLink} href="mailto:aleksodiana@gmail.com">aleksodiana@gmail.com</a>
      </div>
      </div>
    </div>
  );
}

export default Hero;
