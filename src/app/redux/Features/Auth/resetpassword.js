import { apiSlice } from "../../api/apiSlice.js";

const resetPassword = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: ({body , email}) => ({
        url: `/auth/change-passs/${email}`,
        method: "POST",
        body: body, 
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = resetPassword;