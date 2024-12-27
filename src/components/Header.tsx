"use client";

import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">My App</h1>
      {session ? (
        <div>
          <span className="mr-4">こんにちは, {session.user?.name}</span>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-700"
          >
            ログアウト
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
