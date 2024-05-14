import React from "react";
import "./BlogSlider.css";
import Slideri from "../Slider/Slider";
import BlogItem from "../../Blog/BlogItem";

const BlogSlider = ({data}) =>{



    return(
        <div className="container blog-slider-wrapper">
            <div className="home-slider-header flex justify-between">
                <p className="home-slider-title">
                    وبلاگ
                </p>
                <p className="home-slider-button">
                    مشاهده همه
                </p>
            </div>
            <Slideri>
                {data?.map((item) => (
                    <BlogItem
                        author={item?.author}
                        category={item?.category}
                        category_slug={item?.category_slug}
                        comment_count={item?.comment_count}
                        commetns={item?.commetns}
                        content={item?.content}
                        created_at={item?.created_at}
                        description={item?.description}
                        id={item?.id}
                        image={item?.image}
                        locale={item?.locale}
                        meta_description={item?.meta_description}
                        slug={item?.slug}
                        tags={item?.tags}
                        title={item?.title}
                    />
                ))}
            </Slideri>
        </div>
    )
}

export default BlogSlider;