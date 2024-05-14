import React from "react";
import styles from "./styles.module.scss";

const LoadingSvg = ({color}) => {
    return (
      <div className={styles.loading}>
        <svg
          className={styles.spinner}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <circle
            className={styles.path}
            style={{stroke: color}}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
      </div>
      );
}

export default LoadingSvg;