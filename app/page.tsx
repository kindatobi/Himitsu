"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("mikey");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">
                Your identity{" "}
              </label>
              <div className="flex items-center gap-3 ">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono ">
                  {username}
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-100 hover:scale-[0.97] transition-all text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black  mt-2 cursor-pointer disabled:opacity-50 uppercase">
              create secure room
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
