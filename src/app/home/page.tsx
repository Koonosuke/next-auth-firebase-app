"use client";

import { signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {session.user?.name}!
      </h1>
      <p className="mb-4">Email: {session.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
