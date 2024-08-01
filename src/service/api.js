import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "products", 
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});


export const { useGetDataQuery } = addApi;
