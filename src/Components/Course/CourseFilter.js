'use client'
import styles from "./styles.module.scss";
import top from "../../public/Images/top.png";
import down from "../../public/Images/down.png";
import Image from 'next/image';

const CourseFilter = () => {
    return(
        <div className={styles.courseFilter + " flex flex-col"}>
            <div className={styles.courseFilter__topic + " flex flex-col p-4 text-right"}>
                <div className={styles.header + " flex justify-between items-center flex-row-reverse cursor-pointer"}>
                    <p>
                        جدید ترین
                    </p>
                    <Image src={down} alt="icon" />
                </div>
                <div className={styles.items + " flex flex-col"}>
                    <p className={styles.item + " cursor-pointer"}>
                        جدید ترین
                    </p>
                    <p className={styles.item + " cursor-pointer"}>
                        گران ترین
                    </p>
                    <p className={styles.item + " cursor-pointer"}>
                        ارزان ترین
                    </p>
                </div>
            </div>
            <div className={styles.courseFilter__options + " flex flex-col p-4 text-right"}>
                <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                    <p>
                        رایگان
                    </p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round" />
                    </label>
                </div>
                <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                    <p>
                        تخفیف دار
                    </p>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round" />
                    </label>
                </div>
                <div className={styles.radioOption}>
                    <div className={styles.radioOption__header + " flex justify-between items-center flex-row-reverse cursor-pointer"}>
                        <p>
                            نوع محتوا
                        </p>
                        <Image src={down} alt="icon" />
                    </div>
                    <div className={styles.radioOption__items}>
                        <form className={styles.item + " flex flex-col"}>
                            <div className={styles.formGroup + " flex items-center"}>
                                <input type="radio" id="video" value="video" name="type" />
                                <label for="video">ویدیویی</label>
                            </div>
                            <div className={styles.formGroup + " flex items-center"}>
                                <input type="radio" id="webinar" value="webinar" name="type" />
                                <label for="webinar">وبینار</label>
                            </div>
                            <div className={styles.formGroup + " flex items-center"}>
                                <input type="radio" id="text" value="text" name="type" />
                                <label for="text">دوره متنی</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFilter;
