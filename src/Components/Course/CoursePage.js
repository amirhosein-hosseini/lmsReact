import React from "react";
import styles from "./styles.module.scss";
import CourseItem from "../CourseItem/CourseItem";
import { useEffect, useState } from "react";
import { getAllCourse } from "../../api/course/Course";
import LoadingSvg from "../Loading/loadingSvg";
import { useParams } from "react-router-dom";

const CoursePage = () => {

    const params = useParams()
    let cat = null;
    params.slug === null ? cat = null : cat = params.slug;


    const [courses , setCourses] = useState(null);
    const [loading , setLoading] = useState(false);
    const [filterLoading , setFilterLoading] = useState(false);
    const [offSet , setOffSet] = useState(0);
    const [filter , setFilter] = useState({
      "free" : false,
      "discount" : false,
      "type" : null,
      "sort" : null,
      "cat" : cat,
      "limit" : 9,
    });
    const [sortHeaderShow , setSortHeaderShow] = useState(false);
    const [sortHeaderValue , setSortHeaderValue] = useState("جدید ترین");
    const [typeHeaderShow , setTypeHeaderShow] = useState(false);



    useEffect(() => {
        fetchData();
    }, [filter , offSet]);
      
    const fetchData = async () => {
        
        offSet == 0 ? setLoading(true) : setFilterLoading(true);
        try {
          const data = await getAllCourse({
            ...filter,
            offset: offSet
          });
      
          if (offSet === 0) {
            // If offset is 0, replace existing data with new data
            setCourses(data.data);
            setLoading(false);
            setFilterLoading(false);
          } else {
            // If offset is not 0, append new data to existing data
            setCourses(prevCourses => [...prevCourses, ...data.data]);
            setLoading(false);
            setFilterLoading(false);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
          setFilterLoading(false);
        }
    };
      


    const handleSortHeader = () => {
        setSortHeaderShow(!sortHeaderShow);
    }

    const handleTypeHeader = () => {
        setTypeHeaderShow(!typeHeaderShow);
    }


    const handleSort = (place , value , name) => {
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        [place]: value,
      }))
      setSortHeaderValue(name)
      setOffSet(0)
    }

    const handleCheckboxChange = (event) => {
      const isChecked = event.target.checked;
      const name = event.target.name;
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        [name]: isChecked,
      }))
      setOffSet(0)
    };

    const handleRadioChange = (event) => {
      const name = event.target.value;
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        ["type"]: name,
      }))
      setOffSet(0)
    }

    const handleOffSet = () => {
        setOffSet(offSet + 9);
    };




    

    return(
        <div className={styles.coursePage + " flex"}>
            <div className={styles.coursepagewrapper}>
                <div className={styles.coursePage__wrapper + " grid"}>
                    {courses?.map((item) => (
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
                <div className={styles.loadMore + " w-full flex items-center justify-center"}>
                    {loading == true ? 
                        <LoadingSvg color={'white'} /> :
                        <p className="text-white text-center mt-5 cursor-pointer" onClick={handleOffSet}>
                            مشاهده بیشتر
                        </p>
                    }

                </div>
            </div>
            <div className={styles.courseFilter + " flex flex-col"}>
              <div className={styles.courseFilter__topic + " flex flex-col p-4 text-right"}>
                  <div className={styles.header + " flex justify-between items-center flex-row-reverse cursor-pointer"} onClick={handleSortHeader}>
                      <p>
                          {sortHeaderValue}
                      </p>
                      {sortHeaderShow === false ?<img src={"../../Images/down.png"} alt="icon" /> : <img src={"../../Images/top.png"} alt="icon" />}
                      
                  </div>
                  {sortHeaderShow === true ? 
                    <div className={styles.items + " flex flex-col"}>
                        <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "newest" , "جدید ترین")}>
                            جدید ترین
                        </p>
                        <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "expensive" , "گران ترین")}>
                            گران ترین
                        </p>
                        <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "inexpensive" , "ارزان ترین")}>
                            ارزان ترین
                        </p>
                    </div>
                  : ""
                  }
              </div>
              <div className={styles.courseFilter__options + " flex flex-col p-4 text-right"}>
                  <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                      <p>
                          رایگان
                      </p>
                      <label class="switch">
                          <input type="checkbox" name="free" onChange={handleCheckboxChange} />
                          <span class="slider round" />
                      </label>
                  </div>
                  <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                      <p>
                          تخفیف دار
                      </p>
                      <label class="switch">
                          <input type="checkbox" name="discount" onChange={handleCheckboxChange}/>
                          <span class="slider round" />
                      </label>
                  </div>
                  <div className={styles.radioOption}>
                      <div className={styles.radioOption__header + " flex justify-between items-center flex-row-reverse cursor-pointer"} onClick={handleTypeHeader}>
                          <p>
                              نوع محتوا
                          </p>
                          {typeHeaderShow === false ? <img src={"../../Images/down.png"} alt="icon" /> : <img src={"../../Images/top.png"} alt="icon" />}
                      </div>
                      {typeHeaderShow === true ? 
                        <div className={styles.radioOption__items}>
                            <form className={styles.item + " flex flex-col"}>
                                <div className={styles.formGroup + " flex items-center"}>
                                    <input type="radio" id="video" value="course" name="type" onChange={handleRadioChange} />
                                    <label for="video">ویدیویی</label>
                                </div>
                                <div className={styles.formGroup + " flex items-center"}>
                                    <input type="radio" id="webinar" value="webinar" name="type" onChange={handleRadioChange} />
                                    <label for="webinar">وبینار</label>
                                </div>
                                <div className={styles.formGroup + " flex items-center"}>
                                    <input type="radio" id="text" value="text_lesson" name="type" onChange={handleRadioChange} />
                                    <label for="text">دوره متنی</label>
                                </div>
                            </form>
                        </div>
                        : ""
                      }
                  </div>
              </div>
          </div>
        </div>
    )
}




export default CoursePage;