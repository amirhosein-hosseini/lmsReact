import React from "react";
import styles from "./styles.module.scss";
import SingleDescItem from "./SingleDescItem";

const SingleDesc = ({data , faqs}) => {


    return(
        <div className={styles.SingleDesc + " p-6"}>
            {data?.image && 
                <div className={styles.SingleDesc__image}>
                    <img src={data?.image} alt="image" />
                </div>
            }

            {data?.description ? 
                <div className={styles.SingleDesc__desc}>
                    <p className={styles.title}>
                        {data?.title}
                    </p>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                </div> : ''
            }

            {data?.video_demo && 
                <div className={styles.SingleDesc__video}>
                    <p className={styles.title}>
                        ویدیو معرفی دوره
                    </p>
                    <div className={styles.videoWrapper}>
                        <video controls>
                            <source src={data?.video_demo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            }

            {faqs ? 
                <div className={styles.SingleDesc__items}>
                    <p className={styles.title}>
                        سوالات متداول
                    </p>
                    {faqs?.map((item) => (
                        <SingleDescItem data={item} />
                    ))}
                </div> : ""
            }

        </div>
    )
}

export default SingleDesc;