import React from "react";
import styles from "./styles.module.scss";
import { BlueButton } from "../../Components/button/Button";


const PaymentPage = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.payment__header}>
        <p>جزییات صورت حساب</p>
      </div>
      <div className={styles.payment__form}>
        <form>
          <div className={styles.formgroup}>
            <div className={styles.formitem}>
              <label>
                نام<span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className={styles.formitem}>
              <label>
                نام خانوادگی<span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.formgroup}>
            <div className={styles.formitem}>
              <label>
                تلفن<span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className={styles.formitem}>
              <label>
                آدرس ایمیل<span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.payment__getway}>
        <p className={styles.title}>انتخاب درگاه</p>
        <div className={styles.itemwrapper}>
          <div className={styles.item}>
            <div className={styles.item__image}>
              <img src={"../../images/zarin.png"} alt="image" />
            </div>
            <div className={styles.item__desc}>
              <p>پرداخت توسط درگاه زرین پال</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item__image}>
              <img src={"../../images/zarin.png"} alt="image" />
            </div>
            <div className={styles.item__desc}>
              <p>پرداخت توسط درگاه زرین پال</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.payment__privacy}>
        <p>
          کاربر گرامی مطابق با قوانین و مقرراتی که توی صفحه حریم خصوصی توضیح
          داده شده سفارش شما ثبت می‌شود و همینطور اطلاعات شخصی شما برای پردازش
          سفارش شما استفاده می‌شود
        </p>
      </div>
      <div className={styles.payment__pay}>
        <BlueButton>ثبت سفارش</BlueButton>
      </div>
    </div>
  );
};

export default PaymentPage;
