import Link from "next/link"

const materials = [
  {
    id: 1,
    title: "Introduction to Data Structures",
    department: "Computer Science",
    type: "PDF",
    downloads: 2341,
    views: 5203,
    uploadDate: "2024-10-15",
  },
  {
    id: 2,
    title: "Business Management Fundamentals",
    department: "Business",
    type: "PPT",
    downloads: 1856,
    views: 4102,
    uploadDate: "2024-10-12",
  },
  {
    id: 3,
    title: "Human Anatomy Overview",
    department: "Medicine",
    type: "PDF",
    downloads: 3124,
    views: 6850,
    uploadDate: "2024-10-10",
  },
  {
    id: 4,
    title: "Circuit Design Principles",
    department: "Engineering",
    type: "PDF",
    downloads: 1632,
    views: 3421,
    uploadDate: "2024-10-08",
  },
]

export default function FeaturedMaterials() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-linear-to-br from-purple-300 via-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-20 -right-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-linear-to-br from-blue-600 to-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Trending{" "}
              <span className="bg-linear-to-br from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent">
                Materials
              </span>
            </h2>
          </div>
          <Link
            href="/materials"
            className="px-8 py-3 bg-linear-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            View All Materials
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {materials.map((material) => (
            <Link
              key={material.id}
              href={`/material/${material.id}`}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex gap-6 group"
            >
              <div className="hidden sm:flex w-24 h-24 bg-linear-to-br from-blue-600 to-cyan-500 rounded-2xl items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-2xl">{material.type.charAt(0)}</span>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2 text-gray-900 dark:text-white">
                  {material.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{material.department}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    {material.downloads} downloads
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    {material.views} views
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="px-4 py-2 bg-linear-to-br from-blue-600 to-cyan-500 text-white rounded-full text-sm font-semibold">
                    {material.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(material.uploadDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
