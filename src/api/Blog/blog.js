"use client"
import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getAllBlogs = async () => {
    try {
      const response = await axios.get(url + prefix + 'blogs?limit=9',{
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