"use client"
import axios from "axios";
import { getCookie } from "../auth";
import { apiKey, prefix, url } from "../domain";

export const getShowCourse = async (id) => {

    const token = getCookie('token')
    try {
      const response = await axios.get(url + prefix + 'courses/' + id,{
        headers:{
          "accept" : "application/json",
          "x-api-key" : apiKey,
          'Authorization' : 'Bearer ' + token,
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
};

export const getCourseFaqs = async (id) => {
  try {
    const response = await axios.get(url + prefix + 'courses/' + id + '/faqs',{
      headers:{
        "accept" : "application/json",
        "x-api-key" : apiKey,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const getAllChapters = async (id) => {

  const token = getCookie("token");



  try {
    const response = await axios.get(url + prefix + 'courses/' + id + '/chapters',{
      headers:{
        "accept" : "application/json",
        "x-api-key" : apiKey,
        'Authorization' : 'Bearer ' + token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};




export const getAllChaptersFiles = async (id , slug) => {

  const token = getCookie("token");


  try {
    const response = await axios.get(url + prefix + 'courses/' + id + '/chapters/' + slug + '/files',{
      headers:{
        "accept" : "application/json",
        "x-api-key" : apiKey,
        'Authorization' : 'Bearer ' + token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const getAllCourseComments = async (id) => {

  const token = getCookie("token");


  try {
    const response = await axios.get(url + prefix + 'courses/' + id + '/comments?limit=4',{
      headers:{
        "accept" : "application/json",
        "x-api-key" : apiKey,
        'Authorization' : 'Bearer ' + token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};




export const getAllSessionChapters = async (id) => {

  const token = getCookie("token");


  try {
    const response = await axios.get(url + prefix + 'courses/' + id + '/session_chapters',{
      headers:{
        "accept" : "application/json",
        "x-api-key" : apiKey,
        'Authorization' : 'Bearer ' + token,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
