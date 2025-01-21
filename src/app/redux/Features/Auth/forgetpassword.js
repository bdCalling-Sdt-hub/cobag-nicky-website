import { apiSlice } from "../../api/apiSlice.js";

const forgotpassword = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotpassword: builder.mutation({
      query: ({ email }) => ({
        url: `/reset-password/send-verification`,
        method: "POST",
        body: { email: email } ,
      }),
    }),
  }),
});

export const { useForgotpasswordMutation } = forgotpassword;