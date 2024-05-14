import React from "react";
import styles from "./styles.module.scss";



const HomeHero = () => {
    return(
        <div className={styles.wrapper + " flex mt-16"}>
            <div className={styles.wrapper__left + " mr-8"}>
                <p className={styles.desc + " font-bold text-justify text-right"}>
                    خـــودآموزی ، کســــب تجربه ،
                    ورود به بازار کار با تـــــاپ لــرن            
                    با کـــمـــتــــــرین هـــزیـــــنه 
                    خودت حرفه ایــــ یاد بگیـر
                    <img src={"../../Images/herosdescshape.png"} alt="icon" className="inline-block"/>
                </p>
                <div className={styles.input + " text-right ml-auto"}>
                    <input type="text" placeholder="چی میخوای یاد بگیری؟" className="text-right ml-auto"></input>
                    <img src={"../../Images/herosearchicon.png"} alt="icon" width={56} height={56}/>
                </div>
                <div className={styles.vector + " flex justify-center"}>
                    <img src={"../../Images/homeherovector.png"} alt="vector" />
                </div>
            </div>
            <div className={styles.wrapper__right + " w-full overflow-hidden"}>
                <img src={"../../Images/homeheroimage.png"} alt="image" className="w-full" />
            </div>
        </div>
    )
}

export default HomeHero;