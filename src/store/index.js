import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./apis/employeesApi";

export const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
       .concat(employeesApi.middleware)
 }
})

export { useFetchEmployeesQuery, useAddEmployeeMutation } from './apis/employeesApi';


