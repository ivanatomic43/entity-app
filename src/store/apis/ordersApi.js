import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const ordersApi = createApi({
  reducerPath: 'orders',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchOrders: builder.query({
        query: () => {
          return {
            url: '/orders',
            method: "GET"
          }
        }
      })
    }
  }
})

export const { useFetchOrdersQuery } = ordersApi;
export { ordersApi }