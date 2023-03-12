import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./apis/employeesApi";
import { tasksApi } from "./apis/tasksApi";

export const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
       .concat(employeesApi.middleware)
       .concat(tasksApi.middleware)
 }
})

export { useFetchEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation} from './apis/employeesApi';
export { useFetchTasksQuery, useAddTaskMutation } from './apis/tasksApi';


