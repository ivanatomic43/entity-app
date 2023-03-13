import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
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

setupListeners(store.dispatch);

export { useFetchEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation, useFetchEmployeeQuery, useUpdateEmployeeMutation} from './apis/employeesApi';
export { useFetchTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useFetchTaskQuery, useUpdateTaskMutation } from './apis/tasksApi';


