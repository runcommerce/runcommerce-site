import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Logo */}
        <div className="space-y-6">
          <img
            src="/logo.svg"
            alt="RunCommerce"
            className="h-10 mx-auto"
          />
          <p className="text-gray-400 text-lg">The AI Operating System for eCommerce</p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gray-700 mx-auto" />

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-5xl font-bold tracking-tight">Coming Soon</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            We're putting the finishing touches on something that will change how
            eCommerce businesses operate. Stay tuned.
          </p>
        </div>

        {/* Email capture */}
        {status === "success" ? (
          <p className="text-green-400 text-sm">You're on the list — we'll be in touch.</p>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs -mt-4">Something went wrong. Please try again.</p>
        )}

        {/* Footer note */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} RunCommerce. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
