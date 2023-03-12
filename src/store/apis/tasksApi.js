import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchTasks: builder.query({
        query: () => {
          return {
            url: '/tasks',
            method: "GET"
          }
        }
      }),
      addTask: builder.mutation({
        query: (task) => {
          return {
            url: '/tasks',
            method: "POST",
            body: {
              title: task.title,
              description: task.description,
              employeeId: task.employeeId
            }
          }
        }
      })
    }
  }
});

export const { useFetchTasksQuery, useAddTaskMutation } = tasksApi;
export { tasksApi }