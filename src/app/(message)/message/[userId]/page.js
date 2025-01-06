'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams(); // Retrieve all route parameters
    const userId = params?.userId; // Extract the `userId` parameter if it exists

    console.log(userId);

    return (
        <div>
            <h1 className="text-2xl font-semibold">User ID: {userId || 'No User ID Found'}</h1>
        </div>
    );
};

export default Page;
