'use client'
import styles from "./styles.module.scss";

const Mail = () => {
    return(
        <div className={styles.socialwrapper}>
            <div className={styles.soicla}>
                <p className={styles.social__title}>
                    ارسال پیام
                </p>
                <p className={styles.social__desc}>
                    جهت ارسال پیام فرم را پر نمایید
                </p>
                <div className={styles.social__formwrapper}>
                    <form>
                        <div className={styles.social__twoform}>
                            <div className={styles.social__formwrapper__formgroup}>
                                <label>
                                    نام و نام خانوادگی 
                                </label>
                                <input type="text"></input>
                            </div>
                            <div className={styles.social__formwrapper__formgroup}>
                                <label>
                                    نام و نام خانوادگی 
                                </label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <textarea placeholder="متن پیام"></textarea>
                        <button>
                            ارسال
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Mail;
