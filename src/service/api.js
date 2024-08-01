import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "products", // Simplified URL query
    }),
  }),
});

// Export the auto-generated hook for the `getData` query
export const { useGetDataQuery } = addApi;
