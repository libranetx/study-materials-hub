import Link from "next/link"

const features = [
  {
    id: 1,
    title: "Smart Search",
    description: "Search by keyword, course code, topic, or lecturer name. Find exactly what you need in seconds.",
    icon: "🔍",
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Advanced Filtering",
    description: "Filter materials by department, year, semester, file type, and upload date for precise discovery.",
    icon: "⚙️",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
    iconColor: "text-cyan-600",
  },
  {
    id: 3,
    title: "Preview Before Download",
    description: "View PDFs and embedded videos directly. Make informed decisions before downloading materials.",
    icon: "👁️",
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Organized by Course",
    description: "Materials categorized by Computer Science, Engineering, Business, Medicine, and more departments.",
    icon: "📚",
    color: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600",
  },
]

export default function Categories() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center">
            <div className="line-dec"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Powerful <span className="gradient-text">Features</span> Built For Students
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our Material Library is designed specifically for engineering and computer science students. Discover,
            filter, and preview thousands of academic resources effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.id} className="service-card group">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl font-bold transition-transform group-hover:scale-110 ${feature.color} ${feature.iconColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
              <Link
                href="/resources"
                className="text-blue-600 hover:text-cyan-500 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Explore
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
