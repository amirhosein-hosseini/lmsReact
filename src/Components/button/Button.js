'use client'
import styles from "./styles.module.scss";

export const BlueButton = ({children}) => {
    return(
        <button className={styles.bluebutton}>
            {children}
        </button>
    )
}

export const OutlineButton = ({children}) => {
    return(
        <button className={styles.outlinebutton}>
            {children}
        </button>
    )
}

export const PurpleButton = ({children , onclick}) => {
    return(
        <button className={styles.purplebutton} onClick={onclick}>
            {children}
        </button>
    )
}

export const GreenButton = ({children}) => {
    return(
        <button className={styles.greentbutton}>
            {children}
        </button>
    )
}

export const Tag = ({children}) => {
    return(
        <button className={styles.tag}>
            {children}
        </button>
    )
}