"use client"

import type React from "react"
import { useState } from "react"

import { Input } from "@/components/ui/input"

export default function RequestResourcePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    department: "",
    priority: "medium",
    email: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Resource request submitted:", formData)
    setIsSubmitted(true)
    setFormData({ title: "", description: "", department: "", priority: "medium", email: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
    setIsLoading(false)
  }

  const departments = [
    { value: "cs", label: "Computer Science" },
    { value: "math", label: "Mathematics" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "engineering", label: "Engineering" },
  ]

  return (

      <section className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-20">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-linear-to-br from-blue-500 via-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-linear-to-br from-purple-300 via-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-20 right-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center">
              <div className="line-dec mb-4 mx-auto"></div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Request a <span className="gradient-text">Resource</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Can't find what you're looking for? Submit a request and our team will work to add it to our platform.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="service-card text-center">
                <div className="text-3xl mb-3">📋</div>
                <h4 className="font-bold mb-2">Submit Request</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tell us what resource you need</p>
              </div>
              <div className="service-card text-center">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="font-bold mb-2">We Review</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Our team evaluates your request</p>
              </div>
              <div className="service-card text-center">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="font-bold mb-2">Resource Added</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Resource is published on StudyHub</p>
              </div>
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="card-item">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    Thank you for your request! We've received it and will review it soon. You'll be notified via email
                    when the resource is added.
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">Resource Title</label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Advanced Python Programming"
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Describe the resource you're looking for... (e.g., textbook, lecture notes, practice problems)"
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Priority Level</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="low">Low - When available</option>
                    <option value="medium">Medium - Standard priority</option>
                    <option value="high">High - Important for studies</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary mt-8 w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            {/* Guidelines Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>
              <div className="space-y-4">
                <div className="card-item flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Be Specific</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Provide as much detail as possible about the resource you're looking for, including the topic,
                      difficulty level, and type.
                    </p>
                  </div>
                </div>
                <div className="card-item flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Correct Department</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Select the appropriate department so our team can prioritize your request correctly.
                    </p>
                  </div>
                </div>
                <div className="card-item flex gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900">
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Valid Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Provide a valid email address so we can notify you when the resource has been added to our
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}
