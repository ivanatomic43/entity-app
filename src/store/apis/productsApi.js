import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints(builder){
    return {
      fetchProducts: builder.query({
        providesTags: (result, error) => {
          const tags = result.map(product => {
            return { type: 'Product', id: product.id }
          });

          return tags;
        },
        query: () => {
          return {
            url: '/products',
            method: "GET"
          }
        }
      }),
      addProduct: builder.mutation({
        invalidatesTags: (result, error, product) => {
          return [{type: 'Product', id: product.id}]
        },
        query: (product) => {
          return {
            url: '/products',
            method: "POST",
            body: product
          }
        }
      }),
      deleteProduct: builder.mutation({
        invalidatesTags: (result, error, product) => {
          return [{type: 'Product', id: product.id}]
        },
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "DELETE"
          }
        }
      }),
    }
  }
})

export const { useFetchProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;
export { productsApi }