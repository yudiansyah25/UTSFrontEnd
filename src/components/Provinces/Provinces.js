import styles from "./Provinces.module.css";

function Provinces(props) {
    const { provinces } = props;
    return(
        <div className={styles.container}>
            <h2 className={styles.judul}>Provinsi</h2>
            <h5 className={styles.caption}>Data covid berdasarkan Provinsi</h5>
            <table class={styles.table}>
                <thead>
                    <tr>
                        <th>Provinsi</th>
                        <th>Positive</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {provinces.map((item)=>{
                        return(
                            <tr key={item.kota}>
                                <td>{item.kota}</td>
                                <td>{item.kasus}</td>
                                <td>{item.sembuh}</td>
                                <td>{item.dirawat}</td>
                                <td>{item.meninggal}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}

export default Provinces;