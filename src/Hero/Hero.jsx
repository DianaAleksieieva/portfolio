import styles from './Hero.module.css';
import linkedinIMG from '../img/linkedin.svg';
import myPhoto from '../img/my-photo.jpeg';
import myCV from '../img/AleksaCV.pdf';
import arrow from '../img/arrow.png';
import portfolioArrow from '../img/portfolio-arrow.svg';

function Hero() {
  return (
    <div>
      <div className={styles.heroDescription} >
        <div className={styles.textDescription}>
          <p className={styles.fullName}> Diana Aleksa </p>
          <p>
            Frontend Developer <br></br> Graphic Designer{' '}
          </p>
          <p>
            I am creating web pages with the modern JS framework - REACT, using
            HTML, CSS, and principles of responsive design. Moreover, I am
            working with API, Redux, and Mongoose. I have skills in graphic
            programs such as Figma, Photoshop, and Illustrator and may create
            designs, and icons and change image sizes and formats as well as
            proficiently retouch photos.
          </p>
          <div className={styles.myCVandIn}>
            <a className={styles.downloadButton} href={myCV} download>Download my CV</a>
            <a
              className={styles.linkedinIMG}
              href="https://www.linkedin.com/in/diana-aleksieieva-0687921b2/"
            >
              <img
                className={styles.linkedinIMG}
                height="65px"
                alt="linkedin"
                src={linkedinIMG}
              ></img>
            </a>
          </div>
        </div>
        <div className={styles.myPhotoContainer}>
          <img className={styles.myPhoto} src={myPhoto} alt="Diana-main"></img>
          <p>Would you like to get free design from me? </p>
          <a className={styles.freeDesignButton} href="https://forms.gle/mTZsP6Qk7hMcd2Mm8" >Design for FREE</a>
        </div>
      </div>
      <div className={styles.arrowContainer}>
      {/* <img className={styles.portfolioArrow} src={portfolioArrow} alt="decorative arrow"></img> */}
      <div>
      <p>Design, Development, Prepress, Retouch</p>
      <a className={styles.emailLink} href="mailto:aleksodiana@gmail.com">aleksodiana@gmail.com</a>
      </div>
      </div>
    </div>
  );
}

export default Hero;
