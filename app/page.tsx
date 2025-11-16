import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">RikTech AI Chatbot Builder</h1>
      <Link href="/builder" className="px-4 py-2 bg-blue-600 rounded">Buat Chatbot Baru</Link>
    </div>
  );
}