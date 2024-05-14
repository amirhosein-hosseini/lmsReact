import React from "react";
import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getAllCourse = async (filter) => {
    let uri = url + prefix + `courses?`;

    if (filter.cat != null) uri += "cat=" + filter.cat;
    if (filter.type != null) uri += "&type=" + filter.type;
    if (filter.limit != null) uri += "&limit=" + filter.limit;
    if (filter.sort != null) uri += "&sort=" + filter.sort;
    if (filter.free !== false) uri += "&free";
    if (filter.discount !== false) uri += "&discount";
    uri += "&offset=" + filter.offset;

    try {
        const response = await axios.get(uri, {
            headers: {
                "accept": "application/json",
                "x-api-key": apiKey,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};