import { apiSlice } from "../api/apiSlice";


const getPost = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `posts`,
      method: "GET",
    })
  })
});

export const { useGetPostQuery } = getPost;
