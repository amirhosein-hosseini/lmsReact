"use client"
import axios from "axios";
import { getCookie } from "../auth";
import { apiKey, prefix, url } from "../domain";

export const getAllHeaderCategories = async () => {
    try {
      const response = await axios.get(url + prefix + 'categories',{
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
  