// pages/curriculum.js
import Layout from "../components/layout";
import Link from "next/link";
import courseData from "../data/course.json";

export default function Curriculum() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Curriculum</h1>

      {courseData.modules.map((mod) => (
        <section key={mod.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            {mod.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mod.lessons.map((lesson) => (
              <Link
                href={`/lessons/${lesson.slug}`}
                key={lesson.slug}
                className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-medium mb-2">{lesson.title}</h3>
                <p className="text-gray-500">Go to lesson →</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
