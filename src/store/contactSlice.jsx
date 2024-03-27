import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utility/StatusCode";
import client from "../component/client";

const initialState = {
    loading: false,
    data:{},
    error: null,
    status:StatusCode.IDLE,
    success: false, // Add a success flag to track successful POST requests
  };
  
  const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
      builder
        .addCase(postData.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false; // Reset success flag when POST request starts
        })
        .addCase(postData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload
          state.status = StatusCode.SUCCESS;
          state.success = true; // Set success flag when POST request is successful
        })
        .addCase(postData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.status = StatusCode.ERROR;
          state.errorMessage = action.error.message
          state.status = false; 
          state.success = false; // Reset success flag when POST request fails
        });
    },
  });
  
  export default contactSlice.reducer;

  export const postData = createAsyncThunk('api/postContact', async (postData) => {
    try {
      const response = await client.post('/api/submit_ticketWebsite', postData);
      //const result_data = response.data;
      //console.log('API Result ', result_data)
      return response.data;
    } catch (error) {
      throw Error('Failed to post data');
    }
  });
  