import React from "react";
import styles from "./styles.module.scss";
import Mail from "./Mail";
import Social from "./Social";

const ContactPage = () => {
    return(
        <div className={styles.contactpage}>
            <Social />
            <Mail />
        </div>
    )
}

export default ContactPage;