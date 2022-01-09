import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <input id="navi-toggle" type="checkbox" className={styles.navigationCheckbox} />
      <label htmlFor="navi-toggle" className={styles.navigationButton}>
        <span className={styles.navigationIcon}>&nbsp;</span>
      </label>
      <div className={styles.navigationBackground}>&nbsp;</div>
    </div>
  );
};

export default Nav;
