import { apiSlice } from "../../api/apiSlice.js";

const createPlane = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPlane: builder.mutation({
      query: (formData) => ({
        url: `/sell-kg/create`,
        method: "POST",
        body: formData ,
      }),
    }),
  }),
});

export const { useCreatePlaneMutation } = createPlane;