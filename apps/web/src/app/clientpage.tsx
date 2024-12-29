'use client';
import { api } from "@/trpc/react";

export default function PopulateButton() {
    const { mutate } = api.server.populate.useMutation();

    return (
        <button
            onClick={() => mutate()}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
            dummy data
        </button>
    );
}
