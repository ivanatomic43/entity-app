import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeesApi } from "./apis/employeesApi";
import { productsApi } from "./apis/productsApi";
import { tasksApi } from "./apis/tasksApi";
import { ordersApi } from "./apis/ordersApi";

export const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
       .concat(employeesApi.middleware)
       .concat(tasksApi.middleware)
       .concat(productsApi.middleware)
       .concat(ordersApi.middleware)
 }
})

setupListeners(store.dispatch);

export { useFetchEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation, useFetchEmployeeQuery, useUpdateEmployeeMutation} from './apis/employeesApi';
export { useFetchTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useFetchTaskQuery, useUpdateTaskMutation } from './apis/tasksApi';
export { useFetchProductsQuery, useAddProductMutation, useDeleteProductMutation} from './apis/productsApi'
export { useFetchOrdersQuery } from './apis/ordersApi'

