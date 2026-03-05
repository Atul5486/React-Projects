import { createSlice } from "@reduxjs/toolkit";
import { deleteEmployee, getEmployee, postEmployee, updateEmployee } from "../employee/employeeThunk";

const initialState = {
  employees: [],
  loading: false,
  error: null
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch employees";
      });

    // Post employee

    builder
      .addCase(postEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postEmployee.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to set employees data";
      });

    builder
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEmployee.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to set employees data";
      });
      
    builder
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployee.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to set employees data";
      });
  },
});

export default employeeSlice.reducer;
