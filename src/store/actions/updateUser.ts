



import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../slices/usersSlice.ts";

export const updateUser = createAsyncThunk(
    "user/update",
    async (data:IUser) => {

        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API_URL}/${data.id}`,data
            )

            return res.data
        } catch (error) {
            console.log(error)
        }
    }
);




