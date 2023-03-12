import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchEmployees: builder.query({
        providesTags: (result, error) => {
          const tags = result.map(employee => {
            return { type: 'Employee', id: employee.id }
          });

          return tags;
        },
        query: () => {
          return {
            url: '/employees',
            method: "GET"
          }
        }
      }),
      addEmployee: builder.mutation({
        invalidatesTags: (result, error, employee) => {
          return [{type: 'Employee', id: employee.id}]
        },
        query: (employee) => {
          return {
            url: '/employees',
            method: "POST",
            body: {
              firstName: employee.firstName,
              lastName: employee.lastName,
              dateOfBirth: employee.dateOfBirth,
              email: employee.email,
              phoneNumber: employee.phoneNumber,
              salary: employee.salary
            }
          }
        }
      }),
      deleteEmployee: builder.mutation({
        invalidatesTags: (result, error, employee) => {
          return [{type: 'Employee', id: employee.id}]
        },
        query: (id) => {
          return {
            url: `/employees/${id}`,
            method: "DELETE"
          }
        }
      })
    }
  }
})

export const { useFetchEmployeesQuery, useAddEmployeeMutation, useDeleteEmployeeMutation } = employeesApi;
export { employeesApi }