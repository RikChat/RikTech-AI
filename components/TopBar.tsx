'use client';
import { Sun, Moon, Plus } from 'lucide-react';
import DarkToggle from './DarkToggle';
import { useRouter } from 'next/navigation';
export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur border-b">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">RikTech AI — Builder</h2>
      </div>
      <div className="flex items-center gap-3">
        <DarkToggle />
      </div>
    </div>
  );
}
