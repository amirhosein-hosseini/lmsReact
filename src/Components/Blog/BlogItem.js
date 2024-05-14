import React from "react";
import styles from "./styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogItem = ({author , category , category_slug , comment_count , commetns, content , created_at , description , id , image , locale , meta_description , slug , tags , title}) => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    
    return(
        <div className={styles.blogitem + " bg-white flex flex-col justify-between items-center p-3 text-right"} data-aos="zoom-in" data-aos-duration="1500">
            <div>
                <div className={styles.blogitem__image}>
                    <img src={image} alt="image" />
                </div>
                <div className={styles.blogitem__desc + " mt-3"}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    {/* <div className={styles.desc + " text-gray-700"}>
                        <p>
                            {description}
                        </p>
                    </div> */}
                </div>
            </div>
            <div className={styles.blogitem__footer + " flex flex-row-reverse justify-between w-full items-center mt-3"}>
                <div className={styles.person + " flex flex-row-reverse items-center"}>
                    <img src={"../../Images/usergray.png"} alt="icon" />
                    <p className="mr-2 text-gray-500">
                        {author?.full_name}
                    </p>
                </div>
                <div className={styles.button}>
                    <Link to={"/blog/" + id}>
                        مشاهده 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;