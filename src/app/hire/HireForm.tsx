"use client";

import { FormEvent, useState } from "react";

export default function HireForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const data = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/hire-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
      setError(false);
    }
    if (!response.ok) {
      setSuccess(false);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="px-5 py-3 rounded-lg bg-zinc-900 text-white placeholder-fuchsia-300 border-2 border-fuchsia-400 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400 outline-none transition-all duration-200"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-5 py-3 rounded-lg bg-zinc-900 text-white placeholder-cyan-300 border-2 border-cyan-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200"
      />
      <textarea
        placeholder="Tell me about your project..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        className="px-5 py-3 rounded-lg bg-zinc-900 text-white placeholder-purple-300 border-2 border-purple-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-200"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-bold shadow hover:bg-fuchsia-500 transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {success && (
        <div className="text-green-400 font-semibold text-center">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="text-red-400 font-semibold text-center">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
