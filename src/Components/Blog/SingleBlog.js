import React from "react";
import { getShowBlog } from "../../api/Blog/ShowBlog";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import moment from 'moment-jalaali';
import { useParams } from "react-router-dom";

const SingleBlog = () => {

    const params = useParams()
    const [blogData , setBlogData] = useState(null);



    // get all favorite teachers
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getShowBlog(params.slug);
          setBlogData(data.data.blog);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);




    const timestampFromAPI = blogData?.created_at;
    const persianFormattedDate = moment.unix(timestampFromAPI).format('jYYYY/jMM/jDD');




    

    return(
        <div className={styles.singleblog}>
            <div className={styles.singleblog__bar}>
                <div className={styles.title}>
                    <p>
                        {blogData?.title}
                    </p>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <img src="../../images/commenticon.png" alt="icon" />
                        <p>
                            {blogData?.comment_count}
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src="../../images/eyeicon.png" alt="icon" />
                        <p>
                            ۱۲ دیدگاه
                        </p>
                    </div>
                    <div className={styles.item}>
                        <img src="../../images/calendericon.png" alt="icon" />
                        <p>
                            {persianFormattedDate}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.singleblog__desc}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={blogData?.image} alt="image" />
                    </div>
                    <div className={styles.desc}>
                        <p>
                            {blogData?.description}
                        </p>
                    </div>
                </div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: blogData?.content }}></div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;