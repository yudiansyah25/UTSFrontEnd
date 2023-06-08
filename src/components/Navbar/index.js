import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
    <div className={styles.logo}>
      <h2>Covid ID</h2>
    </div>
     <ul className={styles.list}>
      <li className={styles.item}>Global</li>
      <li className={styles.item}>Indonesia</li>
      <li className={styles.item}>Provinsi</li>
      <li className={styles.item}>About</li>
      
    </ul> 
    </div>
  );
}

export default Navbar;
