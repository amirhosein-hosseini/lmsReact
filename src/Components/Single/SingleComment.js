import React from "react";
import styles from "./styles.module.scss";

const SingleComment = ({data}) => {
    return(
        <div className={styles.comment}>
            <div className={styles.comments}>
            {data?.map((item) => (
                <div className={styles.item}>
                    <div className={styles.message}>
                        <div className={styles.userinfo}>
                            <div className={styles.image}>
                                <img src={item?.user?.avatar} alt="vector" />
                            </div>
                            <div className={styles.desc}>
                                <p>
                                    {item?.user?.full_name}
                                </p>
                            </div>
                        </div>
                        <div className={styles.data}>
                            <p>
                                {item?.comment}
                            </p>
                        </div>
                    </div>
                    <div className={styles.reply}>
                        <p className={styles.replyanswer}>پاسخ:</p>
                        <div className={styles.message}>
                            <div className={styles.userinfo}>
                                <div className={styles.image}>
                                    <img src="../../images/user.png" alt="vector" />
                                </div>
                                <div className={styles.desc}>
                                    <p>
                                        سید امیرحسین حسینی
                                    </p>
                                </div>
                            </div>
                            <div className={styles.data}>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                                </p>
                            </div>
                        </div>
                    </div>
                </div>         
            ))}
            </div>
        </div>
    )
}

export default SingleComment;