import data from "../../utils/constants/indonesia"
import styles from "./Indonesia.module.css";

function Indonesia() {
    const indonesia = data.indonesia
    return(
        <div className={styles.container}>
            <h2 className={styles.judul}>Indonesia</h2>
            <h5 className={styles.caption}>Data covid berdasarkan Indonesia</h5>
            <div className={styles.box_container}>
                {indonesia.map((indo) => {
                    return (
                        <div className={styles.box}>
                            <h1 style={{color: indo.color}}>{indo.status}</h1>
                            <br/>
                            <p className={styles.total}>{indo.total}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Indonesia;