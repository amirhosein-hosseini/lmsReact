import Slider5 from "../Slider/slider5";
import FavoriteTeacherItem from "./FavoriteTeacherItem/FavoriteTeacherItem";
import styles from "./styles.module.scss";

const FavoriteTeachers = ({data}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header + " mb-8"}>
                <p className="text-center text-gray-800">
                    محبوب ترین اساتید   
                </p>
            </div>
            <div className={styles.wrapper__items}>
                <Slider5>
                    {data?.map((item) => (
                        <FavoriteTeacherItem
                            avatar={item?.avatar}
                            courses_count={item?.courses_count}
                            full_name={item?.full_name}
                            user_group={item?.user_group}
                        />
                    ))}
                </Slider5>
            </div>
        </div>
    )
}

export default FavoriteTeachers;