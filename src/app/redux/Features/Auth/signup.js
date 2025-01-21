import { apiSlice } from "../../api/apiSlice.js";

const userSignup = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body: body, 
      }),
    }),
  }),
});

export const { useUserSignupMutation } = userSignup;