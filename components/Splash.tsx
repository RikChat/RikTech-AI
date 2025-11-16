'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Splash() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} className="max-w-2xl w-full text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12">
          <h1 className="text-4xl font-bold mb-4">RikTech AI</h1>
          <p className="mb-6 text-slate-600 dark:text-slate-300">Visual AI Chatbot Builder — buat chatbot tanpa menulis server.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/builder" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">Buka Builder</Link>
            <Link href="/docs" className="px-6 py-3 border rounded-lg">Dokumentasi</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
