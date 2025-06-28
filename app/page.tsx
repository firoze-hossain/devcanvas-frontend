import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg" // Replace with your logo
            alt="DevCanvas Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-gray-800">DevCanvas</span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your Developer Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Showcase your projects, skills, and experience with a beautiful,
            customizable portfolio.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-lg font-medium"
            >
              Create Your Portfolio
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Feature Preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Projects Showcase",
              description: "Display your best work with images and details",
              icon: "💻",
            },
            {
              title: "Skills Dashboard",
              description: "Highlight your technical skills visually",
              icon: "📊",
            },
            {
              title: "Admin Panel",
              description: "Easily manage your content",
              icon: "🔧",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} DevCanvas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
