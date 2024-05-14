import React from "react";
import { PurpleButton } from "../../Components/button/Button";
import styles from "./styles.module.scss";
import axios from "axios";
import { apiKey, prefix, url } from "../../api/domain";
import { getCookie } from "../../api/auth";

const SignBar = ({data}) => {

  const token = getCookie('token');


  const handleAddToCart = (e) => {

    e.preventDefault();


    axios.post(url + prefix + 'panel/cart', {"item_id" : data?.id , "item_name" : "webinar", "ticket_id": null, "specifications": "", "quantity": ""} , {
      headers : {
        "accept" : "application/json",
        "x-api-key" : apiKey,
        'Authorization' : 'Bearer ' + token,
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {

      });
  }




  return (
    <div className={styles.Signbar + " flex flex-col"}>
      {data?.auth_has_bought !== true ?
        <>
          <div className={styles.Signbar__price + " text-right"}>
           <div className={styles.price + " flex flex-col"}>
             {data?.price ? 
               <p className={styles.RealPrice}>
                 قیمت:<span>{data?.price_string}</span>
               </p>
               : <p className={styles.RealPrice}>رایگان</p>
           }
             {data?.price_with_discount !== data?.price ?  
               <p className={styles.discount}>
                 <span>{data?.price_with_discount}</span>تومان
               </p>
               : ""
             }
           </div>
         </div>
         <div
           className={
             styles.Signbar__buttons + " flex flex-col justify-center items-center"
           }
         >
           <PurpleButton onclick={handleAddToCart}>افزودن به سبد خرید</PurpleButton>
         </div> 
        </> :
          <div className={styles.Signbar__price + " text-right"}>
            <div className={styles.price + " flex flex-col"}>
              <p className={styles.RealPrice}>دوره خریداری شده</p>
            </div>
          </div>
    }
      <div className={styles.Signbar__desc}>
        <ul className={"flex flex-col text-right"}>
          <li>
            <div className={styles.item + " flex text-right items-center"}>
              <img src={"../../Images/sign-user.png"} alt="icon" />
              <p className={styles.item__desc + " text-right"}>
                مدرس دوره : <span>{data?.teacher?.full_name}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.Signbar__teacher + " flex flex-col"}>
        <div className={styles.title}>
          <p>درباره مدرس دوره</p>
        </div>
        <div className={styles.item + " flex items-center"}>
          {data?.teacher?.avatar && 
            <div className={styles.item__image}>
              <img src={data?.teacher?.avatar} alt="image" />
            </div>
          }
          <div className={styles.item__desc + " flex flex-col"}>
            <p className={styles.title}>{data?.teacher?.full_name}</p>
            <p className={styles.desc}>{data?.teacher?.bio}</p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.Signbar__resume + " flex justify-between items-center"
        }
      >
        <div className={styles.stars}>
          <img src={"../../Images/stars.png"} alt="icon" />
        </div>
        <div className={styles.button}>
          <button>مشاهده روزمه</button>
        </div>
      </div>
    </div>
  );
};

export default SignBar;
