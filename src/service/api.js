import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "products",
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetDataQuery, useAddProductMutation } = addApi;
