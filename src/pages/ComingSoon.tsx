const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">

        {/* Logo */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">RunCommerce</h1>
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
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Notify Me
          </button>
        </form>

        {/* Footer note */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} RunCommerce. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
