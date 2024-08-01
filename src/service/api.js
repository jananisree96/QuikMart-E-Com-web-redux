import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66ab0aaa636a4840d7c92580.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "data",
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "data",
        method: "POST",
        body: newProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `data/${id}`,
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `data/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = addApi;
