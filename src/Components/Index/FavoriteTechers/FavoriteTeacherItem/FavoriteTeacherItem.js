import teacherimage from "../../../../Public/Images/teacherimage.png";
import blackvideo from "../../../../Public/Images/blackvideo.png";
import award from "../../../../Public/Images/award.png";
import Image from 'next/image';
import styles from "../styles.module.scss";

const FavoriteTeacherItem = ({avatar , courses_count , full_name , user_group}) =>{
    return(
        <div className={styles.favoriteteacheritem + " bg-white flex flex-col p-4 justify-center items-center"}>
            <div className={styles.favoriteteacheritem__image}>
                <img src={avatar} alt="image" />
            </div>
            <div className={styles.favoriteteacheritem__desc + " mt-2 text-gray-800"}>
                <p>
                    {full_name}
                </p>
            </div>
            <div className={styles.favoriteteacheritem__footer + " mt-5 flex flex-row-reverse justify-between items-center"}>
                <div className={styles.item + " flex flex-col justify-center items-center"}>
                    <Image src={blackvideo} alt="icon" />
                    <p className="text-center text-gray-600">
                        {courses_count}
                    </p>
                </div>
                {/* <div className={styles.item + " flex flex-col justify-center items-center"}>
                    <Image src={award} alt="icon" />
                    <p className="text-center text-gray-600">
                        مهندسی برق
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default FavoriteTeacherItem;