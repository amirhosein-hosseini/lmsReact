import React from "react";
import "./HomeSlider.css";
import Slideri from "../Slider/Slider";
import CourseItem from "../../CourseItem/CourseItem";
import { Link } from "react-router-dom";

const HomeSlider = ({data , title , cat}) => {

    return(
        <div className="container home-slider-wrapper">
            <div className="home-slider-header flex justify-between">
                <p className="home-slider-title">
                    {title}
                </p>
                <p className="home-slider-button">
                    <Link to={'/course'}>
                        مشاهده همه  
                    </Link>
                </p>
            </div>
            <div className="home-slider-items">
                <Slideri>
                    {data?.map((item) =>(
                       <CourseItem
                            categories={item.categories}
                            discount_amount={item.discount_amount}
                            duration={item.duration}
                            id={item.id}
                            image={item.image}
                            order={item.order}
                            price={item.price}
                            price_string={item.price_string}
                            price_with_discount={item.price_with_discount}
                            slug={item.slug}
                            start_date={item.start_date}
                            status={item.status}
                            teacher={item.teacher}
                            title={item.title}    
                        /> 
                    ))}
                </Slideri>
            </div>
        </div>
    )
}

export default HomeSlider;