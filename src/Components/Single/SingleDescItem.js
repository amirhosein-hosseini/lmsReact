import React from "react";
import styles from "./styles.module.scss";
import { useState } from "react";

const SingleDescItem = ({data}) => {

    const [showAnswer , setShowAnswer] = useState(false);
    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    }


    return(
        <div className={styles.singleDescItem}>
            <div className={styles.singleDescItem__header} onClick={handleShowAnswer}>
                <p>
                    {data?.title}
                </p>
                {showAnswer == true ? <img src={"../../Images/top.png"} alt="icon" /> : <img src={"../../Images/down.png"} alt="icon" />}
                
            </div>
            <div className={styles.singleDescItem__items}>
                <div className={styles.item}>
                    {showAnswer == true ? <p>{data?.answer}</p> : ""}
                </div>
            </div>
        </div>
    )
}

export default SingleDescItem;