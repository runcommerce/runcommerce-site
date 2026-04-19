import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PreviewGateProps {
  onUnlock: () => void;
}

const PreviewGate = ({ onUnlock }: PreviewGateProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_PREVIEW_PASSWORD;

    if (password === expected) {
      sessionStorage.setItem("preview-unlocked", "true");
      onUnlock();
      navigate("/");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-sm w-full space-y-6 text-center">
        <img src="/logo.svg" alt="RunCommerce" className="h-10 mx-auto" />
        <h2 className="text-2xl font-semibold">Preview Access</h2>
        <p className="text-gray-400 text-sm">Enter the password to preview the site.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            autoFocus
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Unlock
          </button>
          {error && (
            <p className="text-red-400 text-xs">Incorrect password.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PreviewGate;
