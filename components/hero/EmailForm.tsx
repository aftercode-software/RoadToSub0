"use client";

import { createClient } from "@/utils/supabase/client";
import { FormEvent, useState } from "react";

export default function EmailForm({ className }: { className?: string }) {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email.trim().toLowerCase()
    );
    if (!isEmail) {
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("subscribe", {
        body: { email: email.trim() },
      });

      if (error) throw error;

      setEmailSent(true);
      setEmail("");
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-3xl rounded-2xl p-2 backdrop-blur ${className}
                  bg-green-800/40 border-2 border-green/20 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,.25)]
                  `}
    >
      {!emailSent ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
          <label
            className="group relative flex min-h-12 flex-1 items-center gap-3
                     rounded-xl px-4 ring-1 ring-white/10 bg-black/20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 opacity-70"
              // fill="white"
            >
              <path
                d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Zm1.8-.7 6.88 5.16a2 2 0 0 0 2.64 0L21.2 6.8"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="gavin@wood.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full bg-transparent border-none outline-none text-white placeholder-white/50 focus:text-white"
              aria-label="Email"
              required
              disabled={loading}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="select-none rounded-xl px-6 py-3 font-semibold
                     bg-radical-red text-white shadow-lg ring-1 ring-black/10
                     transition
                     cursor-pointer
                     hover:ring-2
                     hover:bg-radical-red/60
                     hover:ring-radical-red
                     disabled:opacity-60 disabled:cursor-not-allowed
                     sm:min-w-[220px]"
          >
            {loading ? "Sending..." : "Discover"}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center p-2 text-white">
          <p className="font-bold text-center">
            Email sent 🥳 <br /> Check your inbox for the latest updates.
          </p>
        </div>
      )}
      <p className="text-xs text-white/70 pt-2 pb-1 text-center">
        Your data will only be used to inform you about the 2025 Road to Sub0
        campaign
      </p>
    </form>
  );
}
