import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchTasks: builder.query({
        providesTags: (result, error) => {
          const tags = result.map(task => {
            return { type: 'Task', id: task.id }
          });

          return tags;
        },
        query: () => {
          return {
            url: '/tasks',
            method: "GET"
          }
        }
      }),
      fetchTask: builder.query({
        query: (id) => {
          return {
            url: `/tasks/${id}`,
            method: "GET"
          }
        }
      }),
      addTask: builder.mutation({
        invalidatesTags: (result, error, task) => {
          return [{type: 'Task', id: task.id}]
        },
        query: (task) => {
          return {
            url: '/tasks',
            method: "POST",
            body: {
              title: task.title,
              description: task.description,
              employeeId: task.employeeId,
              dueDate: JSON.stringify(task.dueDate)
            }
          }
        }
      }),
      deleteTask: builder.mutation({
        invalidatesTags: (result, error, task) => {
          return [{type: 'Task', id: task.id}]
        },
        query: (id) => {
          return {
            url: `/tasks/${id}`,
            method: "DELETE"
          }
        }
      }),
      updateTask: builder.mutation({
        invalidatesTags: (result, error, task) => {
          return [{type: 'Task', id: task.id}]
        },
        query: (task) => {
          return {
            url: `/tasks/${task.id}`,
            method: "PATCH",
            body: task
          }
        }
      })
    }
  }
});

export const { useFetchTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useFetchTaskQuery, useUpdateTaskMutation } = tasksApi;
export { tasksApi }