"use client"
import axios from "axios";
import { getCookie } from "../auth";
import { apiKey, prefix, url } from "../domain";

export const getAllCartList = async (id) => {

    const token = getCookie("token");
  
  
  
    try {
      const response = await axios.get(url + prefix + 'panel/cart/list',{
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
  