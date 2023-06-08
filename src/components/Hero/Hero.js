import styles from "./Hero.module.css";

function Hero() {
    return(
        <div className={styles.container}>
            <div className="left">
                <h2 className={styles.judul}>Covid ID</h2>
                <h5 className={styles.caption}>Monitoring perkembangan covid</h5>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut laudantium similique magni delectus fuga fugit.</p>
                <button className={styles.button}>Vaccine</button>
            </div>
            <div className="right">
                <img className={styles.hero_image} src="https://picsum.photos/536/354" alt="" />
            </div>
        </div>
    )
}

export default Hero;        