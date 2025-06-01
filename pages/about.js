// pages/about.js
import Layout from "../components/templayout";

export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">About This Course</h1>

      <p className="mb-4 text-gray-700">
        This course was built to help Pakistani investors—complete beginners to intermediates—understand exactly how the Pakistan Stock Exchange (PSX) works, how to pick stocks, mutual funds, and how to use leading brokerage houses and asset managers.
      </p>

      <p className="mb-4 text-gray-700">
        <strong>About Lakson Investments:</strong><br />
        Lakson Investments is Pakistan’s largest independent asset manager, managing Private Equity, Venture Capital, and seven open-ended mutual funds—both conventional and Shariah-compliant. As of March 31, 2025, they managed assets worth PKR 58.3 billion across those funds, serving individuals, family offices, NGOs, and corporates.
      </p>

      <p className="mb-4 text-gray-700">
        We reference Lakson Investments throughout Modules 2 and 5 (Regulatory Environment, Brokerage Houses & Mutual Funds), since they are a benchmark for Pakistani asset management.
      </p>

      <p className="mb-4 text-gray-700">
        <strong>Other brokerage houses & asset managers covered:</strong><br />
        JS Global, AKD Securities, MCB Arif Habib Savings & Investments, UBL Fund Managers, and Alfalah GHP Investment Management.
      </p>

      <p className="text-gray-500 text-sm mt-8">
        © 2025 Pakistan Stock Course. Powered by Next.js, React, and Tailwind CSS.
      </p>
    </Layout>
  );
}
