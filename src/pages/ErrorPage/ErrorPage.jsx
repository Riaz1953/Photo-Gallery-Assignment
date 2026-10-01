import React from "react";

const ErrorPage = () => {
  const handleGoHome = () => {
    // React Router ব্যবহার করলে: navigate('/')
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Glow Effect / Backdrop Decoration */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 animate-pulse"></div>

          {/* Main Card */}
          <div className="relative card bg-base-100 shadow-2xl border border-base-300 p-8 md:p-12 backdrop-blur-sm">
            {/* Badge / Indicator */}
            <div className="mx-auto mb-4">
              <span className="badge badge-error badge-outline gap-2 px-4 py-3 text-sm font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Error 404
              </span>
            </div>

            {/* Large Glowing 404 Text */}
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent tracking-widest my-2">
              404
            </h1>

            {/* Heading & Description */}
            <h2 className="text-2xl md:text-3xl font-bold text-base-content mt-2">
              পৃষ্ঠাটি পাওয়া যায়নি!
            </h2>
            <p className="text-base-content/70 mt-3 text-sm md:text-base leading-relaxed">
              আপনি যে লিঙ্কটিতে প্রবেশ করার চেষ্টা করছেন তা হয়তো মুছে ফেলা
              হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <button
                onClick={handleGoBack}
                className="btn btn-outline btn-secondary w-full sm:w-auto gap-2 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                পিছনে যান
              </button>

              <button
                onClick={handleGoHome}
                className="btn btn-primary w-full sm:w-auto gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                হোম পেজে যান
              </button>
            </div>

            {/* Footer Quick Link / Help */}
            <div className="mt-8 pt-6 border-t border-base-200 text-xs text-base-content/50">
              কোনো সাহায্য প্রয়োজন?{" "}
              <a
                href="/contact"
                className="link link-primary no-underline hover:underline font-semibold"
              >
                আমাদের সাথে যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
