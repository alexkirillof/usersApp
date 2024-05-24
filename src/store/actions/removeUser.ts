import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk(
    "user/delete",
    async (id: string) => {
        try {
            const res = await axios(
                `${import.meta.env.VITE_API_URL}/${id}`,
                {
                    method: "DELETE",
                }
            )
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
);




