import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'RikTech AI',
  description: 'AI Chatbot Builder'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
