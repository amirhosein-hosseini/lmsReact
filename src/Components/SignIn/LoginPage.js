import React from "react";
import styles from "./styles.module.scss";
import { BlueButton, OutlineButton } from "../../Components/button/Button";
import { useState } from "react";
import axios from "axios";
import { apiKey, prefix, url } from "../../api/domain";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const LoginPage = () => {


  const {signIn} = useAuth();
  const [loading , setLoading] = useState(false);
  const [userData , setUserData] = useState({
    "username" : "",
    "password" : "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  }


  const handleLognIn = (e) => {

    e.preventDefault();


    axios.post(url + prefix + 'login', userData , {
      headers : {
        "accept" : "application/json",
        "x-api-key" : apiKey,
      }
    })
      .then((response) => {
        if(response.data.status == "login"){
          signIn(response?.data?.data?.token);
        }else{
          console.log(response?.data?.message)
        }
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {
          setLoading(false);
      });
  }


  return (
    <div className={styles.signin}>
      <div className={styles.signin__wrapper}>
        <div className={styles.signin__wrapper__header}>
          <p className={styles.title}>ورود به حساب کاربری</p>
          <p className={styles.desc}>
            جهت ورود به حساب کاربری لایوآموز خود اطلاعات زیر را وارد کنید.
          </p>
        </div>
        <div className={styles.signin__wrapper__form}>
          <form>
            <div className={styles.formgroup}>
              <label>تلفن همراه</label>
              <input type="text" name="username" onChange={handleInputChange}></input>
            </div>
            <div className={styles.formgroup}>
              <label>گذرواژه</label>
              <input type="text" name="password" onChange={handleInputChange}></input>
            </div>
            <div className={styles.formbutton} onClick={handleLognIn}>
              <BlueButton>ورود</BlueButton>
            </div>
            <div className={styles.formbutton}>
              <p>گذرواژه خود را فراموش کرده اید؟</p>
              <BlueButton>ورود با گذرواژه یکبار مصرف</BlueButton>
            </div>
            <div className={styles.formgotosign}>
              <p>آیا حساب کاربری ندارید؟</p>
              <Link to={"/signin"}>
                <OutlineButton>ثبت نام</OutlineButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
