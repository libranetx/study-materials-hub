"use client";

import type React from "react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsLoading(false);
  };

  const faqs = [
    {
      question: "How long does it take to receive a response?",
      answer:
        "We typically respond to all inquiries within 24-48 hours during business days.",
    },
    {
      question: "Can I request materials that aren't on the platform?",
      answer:
        "Yes! You can submit resource requests through our Request Resource page, and our team will review them.",
    },
    {
      question: "Is there a way to report content issues?",
      answer:
        "Absolutely. Please use the contact form to report any issues, and include as much detail as possible.",
    },
    {
      question: "Do you have a phone support line?",
      answer:
        "Currently, we support inquiries via email and contact form. Phone support is coming soon!",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-20">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-linear-to-br from-blue-500 via-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-linear-to-br from-purple-300 via-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="line-dec mb-4 mx-auto"></div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="service-card text-center">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Email</h4>
            <p className="text-gray-600 dark:text-gray-400">
              contact@studyhub.com
            </p>
          </div>

          <div className="service-card text-center">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Phone</h4>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (555) 123-4567
            </p>
          </div>

          <div className="service-card text-center">
            <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg mb-4 flex items-center justify-center mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">Location</h4>
            <p className="text-gray-600 dark:text-gray-400">
              123 Education St, Learning City, LC 12345
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="card-item">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-700 dark:text-green-400 font-medium">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <Input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="What is this about?"
                required
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <Button
              variant="outline"
              disabled={isLoading}
              type="submit"
              className=" mt-6 disabled:opacity-50 disabled:cursor-not-allowed text-blue-700"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card-item cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <span>{faq.question}</span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
