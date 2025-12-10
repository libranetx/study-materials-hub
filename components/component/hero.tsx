export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-linear-to-br from-blue-500 via-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-linear-to-br from-cyan-300 via-blue-300 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-20 -right-40 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="space-y-8">
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight  text-gray-900 dark:text-white">
                Material Library For<br/>{" "}
                <span className="bg-linear-to-br from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text  text-transparent">
                IOT  Universty Students
                </span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              Browse, preview, and download comprehensive learning materials including PDFs, slides, notes, eBooks, past
              exams, and more. Organized by department, course code, year, and file type for easy discovery.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 shrink mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Smart search by keyword, course code, topic, or lecturer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 shrink mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Filter by department, year, type, and upload date</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 shrink mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Preview materials before download with PDF and video viewers</span>
              </li>
            </ul>
    
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="px-8 py-3 bg-linear-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full transition-all font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                <span>Explore Materials</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-cyan-400 dark:border-cyan-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950 transition-all font-semibold inline-flex items-center gap-2">
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-200 via-blue-200 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <svg
              className="w-150 h-150 relative z-10"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stack of books representing materials library */}
              <rect x="60" y="150" width="100" height="120" rx="4" fill="#3b82f6" opacity="0.8" />
              <rect x="70" y="145" width="100" height="120" rx="4" fill="#06b6d4" opacity="0.7" />
              <rect x="80" y="140" width="100" height="120" rx="4" fill="#0ea5e9" opacity="0.6" />

              {/* Search symbol */}
              <circle cx="260" cy="200" r="25" fill="none" stroke="#3b82f6" strokeWidth="3" />
              <line x1="280" y1="220" x2="310" y2="250" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />

              {/* Filter symbols */}
              <rect x="240" y="280" width="8" height="40" fill="#3b82f6" rx="4" />
              <rect x="260" y="270" width="8" height="50" fill="#06b6d4" rx="4" />
              <rect x="280" y="260" width="8" height="60" fill="#0ea5e9" rx="4" />

              {/* Document with checkmark */}
              <rect x="140" y="280" width="80" height="100" rx="4" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="165" cy="310" r="12" fill="#10b981" />
              <path d="M160 310 L163 313 L170 306" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Decorative elements */}
              <circle cx="320" cy="120" r="15" fill="#f97316" opacity="0.6" />
              <circle cx="50" cy="350" r="12" fill="#8b5cf6" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
