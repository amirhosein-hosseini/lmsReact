import { getAllChapters, getAllChaptersFiles, getAllSessionChapters } from "../../api/course/ShowCourse";
import React, { useEffect, useState } from "react";
import LoadingSvg from "../Loading/loadingSvg";
import styles from "./styles.module.scss";
import moment from "moment";
import 'moment/locale/fa';
import 'moment-jalaali';
import { Link } from "react-router-dom";

const SingleContent = ({ slug }) => {

  const [showSessionFiles, setShowSessionFiles] = useState(null);
  const [showchapterFiles, setShowChapterFiles] = useState({});
  const [loading, setLoading] = useState({});
  const [openTitleId, setOpenTitleId] = useState(null);
  const [chapters , setChapters] = useState(null);
  const [session , setSession] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSessionChapters(slug);
        setSession(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllChapters(slug);
        setChapters(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);




  const handleShowFiles = async (id) => {
    if (openTitleId === id) {
      // If the same title is clicked again, close the previously opened data
      setOpenTitleId(null);
      return;
    }

    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));

    try {
      const data = await getAllChaptersFiles(slug, id);
      setShowChapterFiles((prevData) => ({ ...prevData, [id]: data.data[0].files }));
      setOpenTitleId(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    }
  };


  const handleShowSessionFiles = (id) => {
    showSessionFiles != null ? setShowSessionFiles(null) : setShowSessionFiles(id);
  }



const changingDateFormat = (dateChose) => {
    var date = moment.unix(dateChose).format("MM/DD/YYYY");
    var jalaliDate = moment(date, "MM/DD/YYYY").locale("fa").format("llll");
    return jalaliDate;
}


  return (
    <div className={styles.content}>
      <div className={styles.contentwrapper}>
        <div className={styles.online}>
        {session?.length > 0 ? 
          <>
              <p className={styles.title}>کلاس های آنلاین دوره</p>
              {session?.map((item) => (
                <div className={styles.contentwrapper__item} key={item.id}>
                  <div
                    className={styles.title}
                    onClick={() => handleShowSessionFiles(item.id)}
                  >
                    <div className={styles.title__right}>
                      <p>{item.title}</p>

                    </div>
                    <p className={styles.title__left}>{item.topics_count}فایل</p>
                  </div>
                  {loading[item.id] === true ?
                    <LoadingSvg color={"black"} /> : ""
                  }
                  {showSessionFiles === item.id && (
                    <div className={styles.items}>
                      {!loading[item.id] &&
                        item?.sessions?.map((file) => (
                          <div className={styles.desc} key={file.id}>
                            <p className={styles.name}>{file.title}</p>
                            <div className={styles.detail}>
                              <p className={styles.duration}>{changingDateFormat(file?.date)}</p>
                              {file?.user_has_access == true && file?.can_join == true && file?.join_link ? <a src={file?.join_link}>رفتن به کلاس</a> : <p className="text[#6D7083] text-xs p-2 rounded-lg bg-[#eee]">لینک در دسترس نیست</p>}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
          </> : ""
        }
        </div>
        {chapters?.length > 0 ? 
        <>
            <p className={styles.title}>محتوای آموزشی دوره</p>
            {chapters?.map((item) => (
              <div className={styles.contentwrapper__item} key={item.id}>
                <div
                  className={styles.title}
                  onClick={() => handleShowFiles(item.id)}
                >
                  <div className={styles.title__right}>
                    <p>{item.title}</p>

                  </div>
                  <p className={styles.title__left}>{item.topics_count}فایل</p>
                </div>
                {loading[item.id] === true ?
                  <LoadingSvg color={"black"} /> : ""
                }
                {openTitleId === item.id && (
                  <div className={styles.items}>
                    {!loading[item.id] &&
                      showchapterFiles[item.id]?.map((file) => (
                        <div className={styles.desc} key={file.id}>
                          <p className={styles.name}>{file.title}</p>
                          <div className={styles.detail}>
                            {file?.auth_has_access == true ? <Link to={"/viewer/" + slug + "/film/" + file?.id + "/" + item?.id}>مشاهده ویدیو</Link> : <p className="text[#6D7083] text-xs">مشاهده ویدیو</p>}
                            <p className={styles.duration}>{file.time}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </> : ""
        }
        {session?.length === 0 && chapters?.length === 0 ? 
          <p className="text-center">
            محتوایی برای این دوره وجود ندارد
          </p> : ''
        } 
      </div>
    </div>
  );
};

export default SingleContent;