import { apiSlice } from "../../api/apiSlice";

const getUser = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            queryFn: async () => {
                // Fetching user and token from localStorage
                const token = localStorage.getItem("token");
                const user = localStorage.getItem("user");

                // Return user and token if found, or an error message
                if (token && user) {
                    return { data: { token, user: JSON.parse(user) } };
                } else {
                    return { error: { message: "User not found or token missing" } };
                }

            },
            method: "GET",
            providesTags: ["updateUser"]
        }),
        getSingleUser: builder.query({
            query: (id) => ({
                url: `/auth/get-user/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetUserQuery,useGetSingleUserQuery } = getUser;
