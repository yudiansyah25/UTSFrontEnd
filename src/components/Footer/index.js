import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
       <div className={styles.container}>
    <div className={styles.logo}>
      <h2>Covid ID</h2>
      <p>Developed by Yudiansyah</p>
    </div>
     <ul className={styles.list}>
      <li className={styles.item}>Global</li>
      <li className={styles.item}>Indonesia</li>
      <li className={styles.item}>Provinsi</li>
      <li className={styles.item}>About</li>
      
    </ul> 
    </div>
    </>
  );
}

export default Footer;
