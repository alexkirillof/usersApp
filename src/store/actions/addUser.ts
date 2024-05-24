import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../slices/usersSlice.ts";

export const addUser = createAsyncThunk(
    "user/addDate",
    async (data:IUser) => {
        console.log("newDATA",data)
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}`,data
            )

            return res.data
        } catch (error) {
            console.log(error)
        }
    }
);




