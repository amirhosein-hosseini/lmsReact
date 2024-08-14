import React from "react";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/authContext";
import UserDropDown from "./userDropDown";
import { getUserQuickInfo } from "../../api/user/user";
import { url } from "../../api/domain";
import { getCookie } from "../../api/auth";
import { getAllHeaderCategories } from "../../api/categories/categories";
import { Link } from "react-router-dom";

const Header = () => {

  const token = getCookie('token')
  const {isLoggedIn} = useAuth();
  const [openCategory, setOpenCategory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu , setOpenMobileMenu] = useState(false);
  const [userDetail , setUserDetail] = useState(null);
  const [showUserDetail , setShowUserDetail] = useState(false);
  const userMenuRef = useRef(null);
  const [categories , setCategories] = useState(null);
  const menuRef = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllHeaderCategories();
        setCategories(data.data?.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside of the mega menu, close it
        setOpenCategory(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        // Click occurred outside of the user menu, close it
        setShowUserDetail(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleShowUserDetail = () => {
    setShowUserDetail(!showUserDetail);
  };


  const checkIsMobile = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleMobileMenu = () => {
    openMobileMenu == false ? setOpenMobileMenu(true) : setOpenMobileMenu(false);
  }

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserQuickInfo();
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);





  return (
    <>
      <div className={styles.top}>
        <div className={styles.listcontainer + " flex gap-10"}>
          <ul className={styles.top__list + " w-full"} style={isMobile ? {transform: openMobileMenu ? "translateX(0%)" : "translateX(-100%)",} : {}}>
            {/* <div className={styles.navclose} onClick={handleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div> */}
            <li
              className={styles.top__list__category}
              ref={menuRef}
              style={isMobile ? {display : "none"} : {}}
              onClick={handleOpenCategory}
            >
              <div className="p-2 rounded-lg bg-[#eee] flex gap-2 items-center">
                <span>دسته بندی ها</span>   
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-[#000000]" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg> 
              </div>
            </li>
            <li
                className={styles.top__list__category__categories}
                style={isMobile ? { display: openCategory ? "grid" : "none" } : { display: openCategory ? "grid" : "none" }}
              >
                {categories?.map((item) => (
                  <div className={styles.top__list__category__categories__item}>
                    <div
                      className={
                        styles.top__list__category__categories__item__title
                      }
                    >
                      <Link onClick={handleOpenCategory} to={"/course/" + item?.slug}>
                        <p>{item?.title}</p>
                      </Link>
                    </div>
                    <ul
                      className={styles.top__list__category__categories__item__list}
                    >
                      {item?.sub_categories?.map((sub) => (
                        <Link onClick={handleOpenCategory} to={"/course/" + sub?.slug}>
                          <li>{sub?.title}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </li>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/course">دوره ها</Link>
            </li>
            <li>
              <Link to="/blog">وبلاگ</Link>
            </li>
            <li>
              <Link to="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
          </ul>
          <div className={styles.top__logo}>
            <img src={"../../Images/logo.png"} alt="logo" />
          </div>
        </div>
        <div>
        <div className={styles.top__sign} style={isMobile ? {display: "none"} : {}}>
          <div className={styles.signbutton} style={isMobile ? {display: "none"} : {}}>
            {isLoggedIn == false ?<Link className={styles.signbuttonbutton} to="/login">ورود / عضویت</Link>:
              <div className={styles.usersignwrapper}>
                <button onClick={handleShowUserDetail} ref={userMenuRef}>
                  {userDetail?.full_name}
                  {showUserDetail == true ?
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"></path>
                    </svg> : 
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  }
                </button>
                {showUserDetail == true ? <UserDropDown data={userDetail} /> : ""}
              </div>
            }
          </div>

          {isLoggedIn === true ? 
              <div className={styles.basket} style={isMobile ? { display: "none" } : {}}>
                <Link to={"/cart"}>
                  <img src={"../../Images/basket.png"} alt="" />
                </Link>
                <div className={styles.basketnumber}>
                  <span>{userDetail?.count_cart_items}</span>
                </div>
              </div> : ""
          }
        </div>
        </div>
      </div>
      {isMobile == true ? 
          <div className={styles.topMobile + " bg-white p-3 w-11/12 rounded-xl mb-2 flex z-50 items-center justify-between"}>
            {isLoggedIn == false ? 
              <Link to={"/login"}>
                <div className={styles.mitem + " flex flex-col justify-between items-center gap-1"}>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="fill-[#00129A]" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>    
                  <p className="text-xs text-[#00129A]">حساب کاربری</p>    
                </div>
                
              </Link>
              : isLoggedIn == true ? 
              <a target="__blank" to={url + 'login-to-panel?token=' + token} className={styles.link}>
                <div className={styles.mitem + " flex flex-col justify-between items-center gap-1"}>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="fill-[#00129A]" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>       
                  <p className="text-xs text-[#00129A]">حساب</p> 
                </div>
              </a>
              : ""
            }
            <Link to={"/cart"}>
              <div className={styles.mitem + " flex flex-col justify-between items-center gap-1"}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className="fill-[#00129A]" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>        
                <p className="text-xs text-[#00129A]">سبد خرید</p>
              </div>
            </Link>
            <div className={styles.mitem + " flex flex-col justify-between items-center gap-1"}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="fill-[#00129A]" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>    
              <p className="text-xs text-[#00129A]">دسته بندی</p>    
            </div>
            <Link to={"/"}>
              <div className={styles.mitem + " flex flex-col justify-between items-center gap-1"}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className="fill-[#00129A]" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                <p className="text-xs text-[#00129A]">خانه</p>
              </div>
            </Link>
          </div> : ""
      }
    </>
  );
};

export default Header;
