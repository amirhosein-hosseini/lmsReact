"use client"
import { getMyCourses } from "../../api/myCourses";
import { useEffect, useState } from "react";
import CourseItem from "../CourseItem/CourseItem";
import styles from "./styles.module.scss";

const MyCourses = () => {

    const [myCourses , setMyCourses] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getMyCourses();
            setMyCourses(data?.data?.webinars);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);



    return(
        <div className={styles.mycourses + " grid grid-cols-3 max-md:grid-cols-1 gap-10"}>
            {myCourses?.map((item) => (
                <CourseItem
                    categories={item?.categories}
                    discount_amount={item?.discount_amount}
                    duration={item?.duration}
                    id={item?.id}
                    image={item?.image}
                    order={item?.order}
                    price={item?.price}
                    price_string={item?.price_string}
                    price_with_discount={item?.price_with_discount}
                    slug={item?.slug}
                    status={item?.status}
                    teacher={item?.teacher}
                    title={item?.title} 
                />
            ))}
        </div>
    )
}

export default MyCourses;