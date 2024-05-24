import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    "user/get",
    async (id: string) => {
        try {
            const res = await axios(
                `${import.meta.env.VITE_API_URL}/${id}`
            )
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
);