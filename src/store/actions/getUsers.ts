import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getUsers = createAsyncThunk('users/get', async () => {
  try {
    const res = await axios(
      `${import.meta.env.VITE_API_URL}`
    )
    return res.data
  } catch (err) {
    console.log(err)
  }
})




