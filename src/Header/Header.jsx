import styles from './Header.module.css';
import logo from '../img/LOGO-DI.svg';

function Header() {
  return (
    <header className={styles.headerContainer} >
        <img height={50}  src={logo} alt="logo" />
        {/* <nav className={styles.mainNavigation}>
            <p className={styles.mainNavigationItem}>me</p>
            <p className={styles.mainNavigationItem}>design</p>
            <p className={styles.mainNavigationItem}>dev</p>
        </nav> */}
      </header>
  );
}

export default Header;
