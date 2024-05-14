'use client'
import styles from "./styles.module.scss";
import Achievement from "../Index/Achievement/Achievement";

const AboutPage = () => {
    return(
        <div className={styles.about}>
            <div className={styles.about__desc}>
                <p>
                    گروه آموزشی لایو آموز از سال ۹۰ فعالیت خودش را با مدیریت استاد توسلی شروع کرد و در طی این چند سال با بهره گیری از اساتید به نام موسسات برتر کشور که همگی مولفین و مدرسین برتر ایران هستند به ارایه فیلم های آموزشی و کلاس های آنلاین در زمینه کنکور ارشد و نرم افزار پرداخته اند. نقطه تمایز ما با سایت های آموزشی دیگر استفاده از اساتید برند که در کلاس های حضوری تدریس دارند و به هیچ عنوان از افراد بی تجربه برای آموزش کمک نگرفته ایم.                
                </p>
            </div>
            <Achievement />
        </div>
    )
}

export default AboutPage;