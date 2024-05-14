import React from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { apiKey, prefix, url } from "../../api/domain";
import { getCookie } from "../../api/auth";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const UserDropDown = ({data}) => {


    const token = getCookie('token');
    const {signOut} = useAuth();


    const handleSignOut = () => {
        signOut();
    }


    
    return(
        <div className={styles.userdropdown}>
            <div className={styles.userdropdown__header}>
                <div className={styles.image}>
                    <img src="../../images/userimage.png" alt="profile" />
                </div>
                <div className={styles.desc}>
                    <p className={styles.name}>
                        {data?.full_name}
                    </p>
                    <a target="__blank" href={url + 'login-to-panel?token=' + token} className={styles.link}>
                        ورود به حساب کاربری
                    </a>
                </div>
            </div>
            <div className={styles.userdropdown__body}>
                <div className={styles.item}>
                    <div className={styles.item__pre}>
                        <div className={styles.image}>
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.728,4.419H2.273c-0.236,0-0.429,0.193-0.429,0.429v10.304c0,0.234,0.193,0.428,0.429,0.428h15.455c0.235,0,0.429-0.193,0.429-0.428V4.849C18.156,4.613,17.963,4.419,17.728,4.419 M17.298,14.721H2.702V9.57h14.596V14.721zM17.298,8.712H2.702V7.424h14.596V8.712z M17.298,6.566H2.702V5.278h14.596V6.566z M9.142,13.005c0,0.235-0.193,0.43-0.43,0.43H4.419c-0.236,0-0.429-0.194-0.429-0.43c0-0.236,0.193-0.429,0.429-0.429h4.292C8.948,12.576,9.142,12.769,9.142,13.005"></path>
                            </svg>
                        </div>
                        <div className={styles.descwrapper}>
                            <p className={styles.desc}>
                                موجوزی کیف پول
                            </p>
                            <p className={styles.predesc}>
                                {data?.balance}تومن
                            </p>
                        </div>
                    </div>
                    <div className={styles.item__next + " cursor-pointer"}>
                        <p className={styles.link}>
                            شارژ کیف پول
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <Link to={"/my-courses"}>
                        <div className={styles.item__pre + " cursor-pointer"}>
                            <div className={styles.image}>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path d="M17.919,4.633l-3.833,2.48V6.371c0-1-0.815-1.815-1.816-1.815H3.191c-1.001,0-1.816,0.814-1.816,1.815v7.261c0,1.001,0.815,1.815,1.816,1.815h9.079c1.001,0,1.816-0.814,1.816-1.815v-0.739l3.833,2.478c0.428,0.226,0.706-0.157,0.706-0.377V5.01C18.625,4.787,18.374,4.378,17.919,4.633 M13.178,13.632c0,0.501-0.406,0.907-0.908,0.907H3.191c-0.501,0-0.908-0.406-0.908-0.907V6.371c0-0.501,0.407-0.907,0.908-0.907h9.079c0.502,0,0.908,0.406,0.908,0.907V13.632zM17.717,14.158l-3.631-2.348V8.193l3.631-2.348V14.158z"></path>
                                </svg>
                            </div>
                            <div className={styles.descwrapper}>
                                <p className={styles.desc}>
                                    دوره های من
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__pre + " cursor-pointer"}>
                        <div className={styles.image}>
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                            </svg>
                        </div>
                        <div className={styles.descwrapper}>
                            <p className={styles.desc} onClick={handleSignOut}>
                                خروج
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDropDown;