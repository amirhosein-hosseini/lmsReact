import React from "react";
import styles from "./styles.module.scss";
import { BlueButton } from "../../Components/button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, prefix, url } from "../../api/domain";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../context/authContext";

const SigninPage = () => {

  const {signIn} = useAuth();
  const [loading , setLoading] = useState(false);
  const [level , setLevel] = useState(1);
  const [userData , setUserData] = useState({
    "mobile" : "",
    "password" : "",
    "password_confirmation" : "",
  });
  const [userId , setUserId] = useState(null); 
  const [userCodeData , setUserCodeData] = useState({
    "code" : "",
  });
  const [userFullData , setUserFullData] = useState({
    "user_id" : userId,
    "full_name" : "",
    "referral_code" : "",
  })



  // first step sign in functionality 
  const handleInputChage = (e) => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  }


  const handleFirstSign = (e) => {

    e.preventDefault();


    axios.post(url + prefix + 'register/step/1', userData , {
      headers : {
        "accept" : "application/json",
        "x-api-key" : apiKey,
      }
    })
      .then((response) => {
          setUserId(response?.data?.data?.user_id);
          if(response?.data?.status == "stored"){
            setLevel(2)
          }else{
            toast.error(response?.data?.message)
          }
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {
          setLoading(false);
      });
  }


  // second step sign in functionality
  useEffect(() => {
    setUserCodeData(prevUserCodeData => ({
      ...prevUserCodeData,
      ["user_id"]: userId
    }));
  } , [userId])



  const handleSecondInputChange = (e) => {
    const { name, value } = e.target;
    setUserCodeData(prevUserCodeData => ({
      ...prevUserCodeData,
      [name]: value
    }));
  }

  const handleSecondSign = (e) => {

    e.preventDefault();

    axios.post(url + prefix + 'register/step/2', userCodeData , {
      headers : {
        "accept" : "application/json",
        "x-api-key" : apiKey,
      }
    })
      .then((response) => {
          if(response?.data?.status == "verified"){
            setLevel(3)
          }else{
            toast.error(response?.data?.message)
          }
      })
      .catch((error) => {
          console.log(error)
      })
      .finally(() => {
          setLoading(false);
      });

  }



  // third step sign in functionality
  useEffect(() => {
    setUserFullData(prevUserFullData => ({
      ...prevUserFullData,
      ["user_id"]: userId
    }));
  } , [userId])



  const handleThirdInputChange = (e) => {
    const { name, value } = e.target;
    setUserFullData(prevUserFullData => ({
      ...prevUserFullData,
      [name]: value
    }));
  }

  const handleThirdSign = (e) => {

    e.preventDefault();

    axios.post(url + prefix + 'register/step/3', userFullData , {
      headers : {
        "accept" : "application/json",
        "x-api-key" : apiKey,
      }
    })
      .then((response) => {
          if(response.data.status == "login"){
            signIn(response?.data?.data?.token);
          }else{
            toast.error(response?.data?.message)
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
    <>

    <ToastContainer />


    {level === 1 || level === 2 ? 
        <div className={styles.signin}>
          <div className={styles.signin__wrapper}>
            <div className={styles.signin__wrapper__header}>
              <p className={styles.title}>ثبت نام در لایوآموز</p>
              <p className={styles.desc}>
                جهت ثبت نام در لایوآموز اطلاعات زیر را وارد کنید
              </p>
            </div>
            <div className={styles.signin__wrapper__form}>
              <form>
                <div className={styles.formgroup}>
                  <label>تلفن همراه</label>
                  <input type="text" name="mobile" onChange={handleInputChage}></input>
                </div>
                <div className={styles.formtwogroup}>
                  <div className={styles.formgroup}>
                    <label>رمزعبور</label>
                    <input type="text" name="password" onChange={handleInputChage}></input>
                  </div>
                  <div className={styles.formgroup}>
                    <label>تکرار رمزعبور</label>
                    <input type="text" name="password_confirmation" onChange={handleInputChage}></input>
                  </div>
                </div>
                <div className={styles.formbutton} onClick={handleFirstSign}>
                  <BlueButton>ثبت نام</BlueButton>
                </div>
              </form>
            </div>
          </div>
        </div> : ""
    }


    {level === 2 ? 
        <div className={styles.codemodal}>
          <div className={styles.codemodalwrapper}>
            <div className={styles.codemodal__title}>
              <p>
                کد یکبارمصرف را وارد کنید
              </p>
            </div>
            <div className={styles.formgroup}>
              <input type="text" name="code" onChange={handleSecondInputChange} />
            </div>
            <div className={styles.formbutton} onClick={handleSecondSign}>
              <BlueButton>تایید</BlueButton>
            </div>
          </div>
        </div> : ""
    }


    {level === 3 ? 
        <div className={styles.signin}>
          <div className={styles.signin__wrapper}>
            <div className={styles.signin__wrapper__header}>
              <p className={styles.title}>ثبت نام در لایوآموز</p>
              <p className={styles.desc}>
                جهت ثبت نام در لایوآموز اطلاعات زیر را وارد کنید
              </p>
            </div>
            <div className={styles.signin__wrapper__form}>
              <form>
                <div className={styles.formgroup}>
                  <label>نام و نام خانوادگی</label>
                  <input type="text" name="full_name" onChange={handleThirdInputChange}></input>
                </div>
                <div className={styles.formgroup}>
                  <div className={styles.labelwrapper}>
                    <label>کد معرف</label>
                    <p>
                      در صورت داشتن کد معرف آن را وارد کنید
                    </p>
                  </div>
                  <input type="text" name="referral_code" onChange={handleThirdInputChange}></input>
                </div>
                <div className={styles.formbutton} onClick={handleThirdSign}>
                  <BlueButton>تکمیل ثبت نام و ورود</BlueButton>
                </div>
              </form>
            </div>
          </div>
        </div> : ""
    }
    </>
  );
};

export default SigninPage;
