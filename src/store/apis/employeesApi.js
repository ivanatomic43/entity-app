import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchEmployees: builder.query({
        query: () => {
          return {
            url: '/employees',
            method: "GET"
          }
        }
      }),
      addEmployee: builder.mutation({
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