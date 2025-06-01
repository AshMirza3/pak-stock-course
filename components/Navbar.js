// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          PSX Course
        </Link>
        <div className="space-x-6">
          <Link href="/curriculum" className="hover:text-indigo-500">
            Curriculum
          </Link>
          <Link href="/about" className="hover:text-indigo-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
