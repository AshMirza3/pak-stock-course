// pages/index.js
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-20 bg-indigo-50 rounded-lg">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6">
          Master Investing in Pakistan’s Stock Market
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          A comprehensive, frontend-only course that teaches you everything about PSX, mutual funds, brokerages (like Lakson Investments), risk management, and more—designed for beginners and intermediate investors alike.
        </p>
        <Link
          href="/curriculum"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          View Curriculum
        </Link>
      </section>

      {/* Features / Highlights */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Pakistan-Specific Content</h2>
          <p className="text-gray-600">
            Learn about PSX structure, SECP regulations, and local brokerages (including Lakson Investments, Pakistan’s largest independent asset manager).
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Beginner→Advanced</h2>
          <p className="text-gray-600">
            Start with the basics of stock markets, then move on to fundamental & technical analysis, mutual funds, portfolio management, and real-world case studies.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Modern, Slick UI</h2>
          <p className="text-gray-600">
            Built with Next.js + React + Tailwind CSS for a responsive, clean experience—accessible on mobile, tablet, and desktop.
          </p>
        </div>
      </section>
    </Layout>
  );
}
