import { apiSlice } from "../../api/apiSlice";



const widthraw = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        widthraw: builder.mutation({
            query: (data) => ({
                url: `/withdraw/create`,
                method: "POST",
                body: data,
            }),
        }),
    })
})

export const { useWidthrawMutation } = widthraw;



// /withdraw/create