import { apiSlice } from "../../api/apiSlice";


const getMessage = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessage: builder.query({
            query: ({ resiverId , senderId }) => ({
                url: `/chat/messages/${resiverId}/${senderId}`,
                method: "GET",
            }),
        })
    })
});

export const { useGetMessageQuery } = getMessage;
