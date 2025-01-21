import { apiSlice } from "../../api/apiSlice.js";

const userlogin = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userlogin: builder.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body: body, 
      }),
    }),
  }),
});

export const { useUserloginMutation } = userlogin;