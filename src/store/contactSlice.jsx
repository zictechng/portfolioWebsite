import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utility/StatusCode";
import client from "../component/client";

const initialState ={
    data: '',
    status:StatusCode.IDLE,
    errorMessage:'',
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,

        extraReducers: (builder) =>{
         
        // creating contact information
            builder.addCase(createContact.pending, (state, action) =>{
                state.status = StatusCode.LOADING;
            })

            builder.addCase(createContact.fulfilled, (state, action) =>{
                state.data = action.payload
                state.status = StatusCode.SUCCESS;
            })

            builder.addCase(createContact.rejected, (state, action) =>{
                state.status = StatusCode.ERROR;
                state.data = action.payload
                state.errorMessage = action.error.message || '' /// this help to
            })
        }
})

export const {fetchProducts} = contactSlice.actions;
export default contactSlice.reducer;

// custom method to handle create api call
export const createContact = createAsyncThunk('create/contact', async (values) =>{
    const res = await client.post(`/api/submit_ticketWebsite`, values)
    const result_data = res.data;
    console.log('API Result ', result_data)
    return result_data;
})

