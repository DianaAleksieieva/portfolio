import styles from './Header.module.css';
import logo from '../img/LOGO-DI.svg';

function Header() {
  return (
    <header className={styles.headerContainer} >
      <div className={styles.mainNavigation}>
        <img height={50}  src={logo} alt="logo" />
            <a className={styles.emailLink} href="mailto:aleksodiana@gmail.com">aleksodiana@gmail.com</a>
            </div>
      </header>
  );
}

export default Header;
