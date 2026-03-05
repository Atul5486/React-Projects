import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../config/axios'

export const getEmployee=createAsyncThunk(
    'employee/getEmployees',
    async (_,{rejectWithValue})=> {
        try{
            const response=await api.get('employee');
            return response.data;
        }catch(e){
            console.log(e);
            return rejectWithValue("Something went wrong ");
        }
    }
)
export const postEmployee=createAsyncThunk(
    'employee/postEmployees',
    async (details,{dispatch,rejectWithValue})=> {
        try{
            const response=await api.post('employee',details);
            dispatch(getEmployee())
            return response.data;
        }catch(e){
            console.log(e)
            return rejectWithValue("Something went wrong ");
        }
    }
)
export const deleteEmployee=createAsyncThunk(
    'employee/deleteEmployees',
    async (_id,{dispatch,rejectWithValue})=> {
        try{
            const response=await api.delete(`employee/${_id}`);
            dispatch(getEmployee())
            return response.data;
        }catch(e){
            console.log(e)
            return rejectWithValue("Something went wrong ");
        }
    }
)
export const updateEmployee=createAsyncThunk(
    'employee/updateEmployees',
    async ({_id,details},{dispatch,rejectWithValue})=> {
        try{
            const response=await api.put(`employee/${_id}`,details);
            dispatch(getEmployee())
            return response.data;
        }catch(e){
            console.log(e)
            return rejectWithValue("Something went wrong ");
        }
    }
)