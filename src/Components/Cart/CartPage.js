import React from "react";
import styles from "./styles.module.scss";
import { BlueButton } from "../button/Button";
import { useEffect, useState } from "react";
import { getAllCartList } from "../../api/cart/cart";
import axios from "axios";
import { apiKey, prefix, url } from "../../api/domain";
import { getCookie } from "../../api/auth";
import { Link } from "react-router-dom";

const CartPage = () => {

  const [cartList , setCartList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCartList();
        setCartList(data?.data?.cart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  

  const reloadPage = () => {
    window.location.reload(true);
  };

  const deleteData = async (id, reloadPage) => {
    const token = getCookie('token');
    
    try {
      // Send a DELETE request to the API endpoint with the specified ID
      const response = await axios.delete(url + prefix + "panel/cart/" + id, {
        headers: {
          "accept": "application/json",
          "x-api-key": apiKey,
          'Authorization': 'Bearer ' + token,
        }
      });
  
      reloadPage();
    } catch (error) {
      // If there's an error, you can handle it here
      console.error('Error deleting data:', error);
    }
  };


  const handleDelete = (id) => {
    deleteData(id, reloadPage);
  }





  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <p>سبد خرید شما</p>
      </div>
      <div className={styles.cart__items}>
        {cartList?.items?.map((item) => (
          <div className={styles.item}>
            <div className={styles.item__right}>
              <div className={styles.item__right__image}>
                <img src={item?.image} alt="image" />
              </div>
              <div className={styles.item__right__desc}>
                <p>{item?.title}</p>
              </div>
            </div>
            <div className={styles.item__left}>
              <div className={styles.item__left__price}>
                <p>{item?.price}</p>
              </div>
              <div className={styles.item__left__delete} onClick={() => handleDelete(item?.id)}>
                <img src="../../images/delete.png" alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cart__discount}>
        <input type="text" placeholder="کد تخفیف خود را وارد کنید"></input>
        <button>اعمال کردن</button>
      </div>
      <div className={styles.cart__pay}>
        <div className={styles.title}>
          <p>جمع کل سبد خرید</p>
        </div>
        <div className={styles.price}>
          <p>{cartList?.amounts?.total} تومان</p>
        </div>
        <div className={styles.button}>
          <Link to={"/payment"}>
            <BlueButton>ادامه جهت تسویه</BlueButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
