"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-purple-200 text-white">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center text-gray-800">
        <h1 className="text-5xl font-extrabold mb-8 text-black">
          NextAuthGoogleログイン
        </h1>
        <p className="text-lg mb-6 text-gray-600">使いまわせ</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/home" })}
          className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
