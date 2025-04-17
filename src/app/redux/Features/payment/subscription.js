import { apiSlice } from "../../api/apiSlice.js";

const subscription = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createSubscription: builder.mutation({
            query: (data) => ({
                url: `/payment/create-checkout-session-for-sub`,
                method: "POST",
                body: data,
            }),
        })
    })
})

export const { useCreateSubscriptionMutation } = subscription