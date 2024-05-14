import React from "react";
import styles from "./Styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";





const CourseItem = ({categories , discount_amount , duration , id , image, order , price , price_string , price_with_discount , slug , start_date , status , teacher , title}) => {
    

    useEffect(() => {
        AOS.init();
    }, [])


    return(
        <div className={styles.slideritem + " bg-white text-right"} data-aos="zoom-in" data-aos-duration="1500">
            <div className={styles.slideritem__image}>
                {image != "" ? <img src={image} alt="image" /> : <img src="../../images/defaultcourseimage.jpg" alt="image" />}
                {/* <img src={image} alt="image" /> */}
            </div>
            <div className={styles.slideritem__desc}>
                <p className={styles.title + " mt-4 mb-4 text-gray-900"}>
                    {title}
                </p>
            </div>
            <div className={styles.slideritem__footer}>
                <div className={styles.items + " flex justify-between items-center flex-row-reverse pb-4"}>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        {teacher?.avatar ? <img className={styles.teacherimage} src={teacher?.avatar} alt="icon" /> : ""}
                        {/* <img src={teacher?.avatar} alt="icon" /> */}
                        <p className="mr-1">
                            {teacher?.full_name}
                        </p>
                    </div>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        <img src={"../../Images/star.png"} alt="icon" />
                        <p className="mr-1">
                            {teacher?.teachers_count}
                        </p>
                    </div>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        <img src={"../../Images/people.png"} alt="icon" />
                        <p className="mr-1">
                            {order}
                        </p>
                    </div>
                </div>
                <div className={styles.underfooter + " flex justify-between items-center mt-4"}>
                    <div className={styles.price}>
                        <p>
                            {price_string}
                        </p>
                    </div>
                    <div className={styles.button}>
                        <Link to={"/courses/" + slug} className=" bg-indigo-600 text-white">
                            مشاهده
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;