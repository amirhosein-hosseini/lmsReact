import { useEffect, useState } from "react";
import { getAllBestSellers, getAllDiscountCourses, getAllFavoriteCategories, getAllFavoriteTeachers, getAllIndexBlogs, getAllNewestCourses } from "../api/index";
import HomeHero from "../Components/Index/HomeHero/HomeHero";
import Achievement from "../Components/Index/Achievement/Achievement";
import HomeSlider from "../Components/Index/HomeSlider/HomeSlider";
import FavoriteCategory from "../Components/Index/FavoriteCategory/FavoriteCategory";
import BecomTeacher from "../Components/Index/HomeBanner/BecomeTeacher";
import BlogSlider from "../Components/Index/HomeSlider/BlogSlider";

const HomePage = () => {

    const [newCourses , setNewCourses] = useState(null);
    const [bestSellers , setBestSellers] = useState(null);
    const [discountCourses , setDiscountCourses] = useState(null);
    const [indexBlogs , setIndexBlogs] = useState(null);
    const [favoriteTeachers , setFavoriteTeachers] = useState(null);



    // get all new courses 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllNewestCourses();
            setNewCourses(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);


    // get all bestsellers courses
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllBestSellers();
          setBestSellers(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    // get all discount courses
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllDiscountCourses();
          setDiscountCourses(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    // get all index blogs
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllIndexBlogs();
          setIndexBlogs(data.data.blogs);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    // get all favorite teachers
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllFavoriteTeachers();
          setFavoriteTeachers(data.data.users);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);




    return(
        <div className="home">
            <div className="mb-10">
              <HomeHero />
            </div>
            
            <Achievement />
            {newCourses ? <HomeSlider data={newCourses} title={"جدیدترین دوره ها"} cat={"newest"} /> : ""}
            <FavoriteCategory />
            {bestSellers ? <HomeSlider data={bestSellers} title={"پر فروش ترین ها"} cat={"bestsellers"} /> : ""}
            <BecomTeacher />
            {discountCourses ? <HomeSlider data={discountCourses} title={"تخفیف دار ها"} cat={"discount"} /> : ""}
            {favoriteTeachers ? <favoriteTeachers data={favoriteTeachers} /> : ""}
            {indexBlogs ? <BlogSlider data={indexBlogs} /> : ""}
        </div>
    )
}

export default HomePage;