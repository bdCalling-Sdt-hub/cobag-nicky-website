import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// Define a base query that accesses the Redux state for the token
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://s8080.sobhoy.com',
  prepareHeaders: (headers, { getState }) => {
    // const token = getState()?.auth?.token;
    const token = localStorage.getItem('token');

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    // headers.delete("Content-Type");
    
    return headers;

  },
});

// Enhanced base query with token refresh logic
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle various error statuses
  if (result?.error?.status === 404) {
    // console.log(result.error);
  }
  if (result?.error?.status === 403) {
    console.log(result.error);
  }
  if (result?.error?.status === 409) {
    console.log(result.error);
  }
  if (result?.error?.status === 401) {
    window.location.href = "/login";
    //i want to dispatch logout action
  }

  return result;
};

// Create the base API
export const apiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ['language', 'updateUser'],
  endpoints: () => ({}),
});
