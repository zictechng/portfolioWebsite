import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";

// method without using persist storage format with redux toolkit

const store = configureStore({
    reducer: {
        contact: contactSlice,
       }
})

export default store;