import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
    return(
        <div className={styles.footer + " mt-20 pt-12 pb-12"}>
                <div className={styles.footer__wrapper + " flex flex-row-reverse justify-between text-right"}>
                    <div className={styles.footer__about + " flex-col"}>
                        <img className="ml-auto mb-6" src={"../../Images/footerlogo.png"} alt="logo" />
                        <p className="mb-4 text-white">
                            مرجع برگزاری کلاس‌آنلاین و وبینار
                        </p>
                        <div className={styles.footer__social + " flex flex-row-reverse justify-start"}>
                            <div className={styles.link + " flex bg-gray-900"}>
                                <img src={"../../Images/instagram.png"} alt="icon" />
                            </div>
                            <div className={styles.link + " flex bg-gray-900"}>
                                <img src={"../../Images/telegram.png"} alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__services}>
                        <p className={styles.title + " mb-2 text-white"}>
                            خدمات کلاس‌ آنلاین
                        </p>
                        <ul className={styles.items}>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                برگزاری کلاس آنلاین
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                برگزاری کلاس آنلاین
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                برگزاری کلاس آنلاین
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <p className={styles.title + " mb-2 text-white"}>
                            لینک های مهم
                        </p>
                        <ul className={styles.items}>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                درباره ما                    
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                تماس باما                    
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                حریم خصوصی                    
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                سوالات رایج                    
                            </li>
                            <li className={styles.item + " text-gray-300 mt-2"}>
                                وبلاگ                    
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__sign}>
                        <p className={styles.title + " mb-2 text-white"}>
                            ثبت نام در خبرنامه
                        </p>
                        <p className={styles.desc + " mb-4 text-gray-300"}>
                            جهت دریافت جدیدترین اخبار عضو خبرنامه لایوآموز شوید.
                        </p>
                        <form>
                            <div className={styles.input}>
                                <input type="email" placeholder="آدرس ایمیل" />
                                <button className="bg-gray-900 text-white">
                                    ثبت نام
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Footer;