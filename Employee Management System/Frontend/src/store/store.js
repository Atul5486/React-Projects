import { configureStore } from "@reduxjs/toolkit";
import  popUpReducer from "./feature/popupSlice";
import employees from './employee/employeeSlice'
const store=configureStore({
    reducer:{
        popUpReducer,
        employees
    }

})

export default store;