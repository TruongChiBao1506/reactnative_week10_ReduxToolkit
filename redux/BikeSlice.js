import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBikes = createAsyncThunk(
    'bikes/fetchBikes',
    async()=>{
        const res = await fetch('https://670b36dcac6860a6c2cb6921.mockapi.io/food');
        return res.json();
    }
)
export const addBikes = createAsyncThunk(
    'bikes/addBikes',
    async(bikesData)=>{
        console.log(bikesData);
        const res = await axios.post('https://670b36dcac6860a6c2cb6921.mockapi.io/food', bikesData)
        return res.data;
    }
)

const bikesSlice = createSlice({
    name:'bikes',
    initialState:{
        data:[],
        error:''
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchBikes.pending,(state)=>{
            console.log("pending");
            state.error = '';
        })
        .addCase(fetchBikes.fulfilled, (state,action)=>{
            console.log("success");
            state.data = action.payload;
            console.log(state.data);
            state.error = '';
        })
        .addCase(fetchBikes.rejected, (state,action)=>{
            console.log("error");
            state.error = action.error.message;
        })
        .addCase(addBikes.fulfilled, (state,action)=>{
            state.data.push(action.payload);
        })
    }
})
export default bikesSlice.reducer;