import styles from "./styles.module.scss";


const Achievement = () => {
    return(
        <div className={styles.achievement + " flex justify-between mt-16"}>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <img src={"../../Images/video.png"} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-indigo-700"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <img src={"../../Images/video.png"} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-green-500"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <img src={"../../Images/video.png"} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-orange-500"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <img src={"../../Images/video.png"} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-purple-400"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Achievement;