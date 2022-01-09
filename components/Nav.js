import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <input id="navi-toggle" type="checkbox" className={styles.navigationCheckbox} />
      <label htmlFor="navi-toggle" className={styles.navigationButton}>
        <span className={styles.navigationIcon}>&nbsp;</span>
      </label>
      <div className={styles.navigationBackground}>&nbsp;</div>
      <nav className={styles.navigationNav}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link href="/">
              <a className={styles.navigationLink}>Studio</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/works">
              <a className={styles.navigationLink}>Works</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/services">
              <a className={styles.navigationLink}>Services</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/contacts">
              <a className={styles.navigationLink}>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
