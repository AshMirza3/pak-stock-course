// pages/lessons/[slug].js
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import courseData from "../../data/course.json";
import fs from "fs";
import path from "path";

export default function Lesson({ lesson }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading…</div>;
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        {lesson.title}
      </h1>
      <div
        className="text-gray-900 max-w-none space-y-4"
        dangerouslySetInnerHTML={{ __html: lesson.contentHtml }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [];
  courseData.modules.forEach((mod) => {
    mod.lessons.forEach((l) => {
      paths.push({ params: { slug: l.slug } });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let foundLesson = null;
  courseData.modules.forEach((mod) => {
    mod.lessons.forEach((l) => {
      if (l.slug === params.slug) {
        foundLesson = l;
      }
    });
  });

  if (!foundLesson) {
    return { notFound: true };
  }

  const contentPath = path.join(
    process.cwd(),
    "public",
    "lessons",
    foundLesson.contentFile
  );
  const contentHtml = fs.readFileSync(contentPath, "utf8");

  return {
    props: {
      lesson: {
        ...foundLesson,
        contentHtml,
      },
    },
  };
}
