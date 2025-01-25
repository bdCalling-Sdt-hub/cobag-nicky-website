import { apiSlice } from "../../api/apiSlice.js";

const resetPassword = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: ({body , userId}) => ({
        url: `/auth/reset-passs/${userId}`,
        method: "POST",
        body: body, 
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = resetPassword;