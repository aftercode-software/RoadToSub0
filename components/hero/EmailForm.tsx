"use client";

import { createClient } from "@/utils/supabase/client";
import { FormEvent, useState } from "react";

export default function EmailForm() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
      const { data, error } = await supabase.functions.invoke("subscribe", {
        body: { email: email.trim() },
      });

      if (error) throw error;

      setEmail("");
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`w-full max-w-3xl rounded-2xl p-2 backdrop-blur
                  bg-white/5 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,.25)]
                  `}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <label
          className="group relative flex min-h-12 flex-1 items-center gap-3
                     rounded-xl px-4 ring-1 ring-white/10 bg-black/20"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 opacity-70"
          >
            <path
              d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Zm1.8-.7 6.88 5.16a2 2 0 0 0 2.64 0L21.2 6.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="nerd@cool.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full bg-transparent outline-none placeholder:text-white/50"
            aria-label="Email"
            required
            disabled={loading}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="select-none rounded-xl px-6 py-3 font-semibold
                     bg-pink-600 text-white shadow-lg ring-1 ring-black/10
                     hover:bg-pink-500 transition
                     disabled:opacity-60 disabled:cursor-not-allowed
                     sm:min-w-[220px]"
        >
          {loading ? "Enviando..." : "Claim Your Spot"}
        </button>
      </div>
    </form>
  );
}
