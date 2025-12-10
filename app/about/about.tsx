
import Link from "next/link"

export const metadata = {
  title: "About Us - StudyHub",
  description: "Learn about StudyHub and our mission to provide quality learning materials",
}

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Resources Available", value: "10K+" },
    { label: "Downloads", value: "500K+" },
    { label: "Countries", value: "120+" },
  ]

  const values = [
    {
      title: "Accessibility",
      description: "Learning should be available to everyone, everywhere, regardless of background or circumstance.",
      icon: "🎓",
    },
    {
      title: "Quality",
      description: "We curate only the best materials from trusted educators and institutions worldwide.",
      icon: "⭐",
    },
    {
      title: "Community",
      description: "We build a supportive community where students and educators collaborate and grow together.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology and user feedback.",
      icon: "💡",
    },
  ]

  return (

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 pt-20">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-300 via-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-20 right-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16">
              <div className="line-dec mb-4"></div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                About <span className="gradient-text">StudyHub</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Empowering learners worldwide through accessible, high-quality educational resources.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="card-item text-center">
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="card-item">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To democratize access to high-quality educational materials and create a community where learning is
                  seamless, enjoyable, and accessible to everyone, regardless of their background or location.
                </p>
              </div>
              <div className="card-item">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To become the world's most trusted platform for educational resources, empowering millions of learners
                  to achieve their academic goals and unlock their full potential.
                </p>
              </div>
            </div>

            {/* Why Choose StudyHub */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Why Choose StudyHub?</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Curated Collection</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Carefully selected materials from trusted educators and institutions.
                  </p>
                </div>

                <div className="service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Easy Access</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Simple search, filtering, and instant downloads for all your needs.
                  </p>
                </div>

                <div className="service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Free & Premium</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Free access to essential materials with premium options available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="card-item">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
              <p className="text-lg mb-8 opacity-95">
                Start exploring thousands of resources and join learners from around the world.
              </p>
              <Link href="/resources" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

  )
}
