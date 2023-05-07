import styles from './PortfolioChoice.module.css';
import { Outlet, Link } from "react-router-dom";
import designIMG from '../img/design.jpg';
import devIMG from '../img/dev.jpg';

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioCards}>
        <div className={styles.portfolioItems}>
        <Link className={styles.portfolioLink} to="/design">
            <img width="400px" alt="design" src={designIMG}></img>
            <p className={styles.portfolioName}>Design</p>
          </Link>
        </div>
        <div className={styles.portfolioItems}>
        <Link className={styles.portfolioLink} to="/development">
            <img width="400px" alt="dev" src={devIMG}></img>
            <p className={styles.portfolioName}>Development</p>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Portfolio;
