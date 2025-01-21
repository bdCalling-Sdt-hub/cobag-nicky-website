import { apiSlice } from "../../api/apiSlice.js";

const otpVerify = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    otpVerify: builder.mutation({
      query: (body) => ({
        url: `/reset-password/proses-verification`,
        method: "POST",
        body: body, 
      }),
    }),
  }),
});

export const { useOtpVerifyMutation } = otpVerify;