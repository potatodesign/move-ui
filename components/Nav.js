import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className={styles.navigation}>
      <input checked={isChecked} onChange={handleClick} id="navi-toggle" type="checkbox" className={styles.navigationCheckbox} />
      <label htmlFor="navi-toggle" className={styles.navigationButton}>
        <span className={styles.navigationIcon}>&nbsp;</span>
      </label>
      <div className={styles.navigationBackground}>&nbsp;</div>
      <nav className={styles.navigationNav}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link href="/">
              <a onClick={handleClick} className={styles.navigationLink}>Studio</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/works">
              <a onClick={handleClick} className={styles.navigationLink}>Works</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/services">
              <a onClick={handleClick} className={styles.navigationLink}>Services</a>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link href="/contacts">
              <a onClick={handleClick} className={styles.navigationLink}>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
