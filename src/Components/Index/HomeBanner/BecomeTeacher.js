import React from "react";
import styles from "./styles.module.scss";

const BecomTeacher = () => {
    return(
        <div className={styles.wrapper + " flex justify-center items-center text-right pr-10 pt-3"}>
            <div className={styles.wrapper__left}>
                <img src={"../../Images/becometeacherimage.png"} alt="image"/>
            </div>
            <div className={styles.wrapper__right}>
                <p className={styles.title + " text-white mb-8"}>
                    مدرس شوید   
                </p>
                <p className={styles.desc + " text-white mb-8"}>
                    آیا شما علاقه مند هستید که بخشی از مدرسان ما باشید؟ شما می توانید با ثبت نام به عنوان یک مربی یا سازمان بخشی از جامعه ما باشید.
                </p>
                <button className={styles.button + " bg-black text-white flex ml-auto flex-row-reverse itmes-center"}>
                    مشاهده جزییات
                    <img className="mr-1" src={"../../Images/buttonarrow.png"} alt="icon"/>
                </button>
            </div>
            <img className={styles.wrapper__becomebacgroundvector} src={"../../Images/becometeacherbackgroundvector.png"} alt="vector"/>
        </div>
    )
}

export default BecomTeacher;