"use client";
import { useEffect } from "react";
export default function error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mt-10">
            <h1>Something went wrong. Please try again later.</h1>
            <button
                className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
