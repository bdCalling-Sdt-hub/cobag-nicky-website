'use client'

import { useGetUserQuery } from "@/app/redux/Features/Auth/getUser";

const useUser = () => {
    const { data } = useGetUserQuery();
    const user = data?.user;
    return user || null
}
export default useUser