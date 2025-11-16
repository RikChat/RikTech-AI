'use client';

import ThemeToggle from './ThemeToggle';

export default function TopBar() {
  return (
    <div className="w-full flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      <h1 className="font-bold text-xl">RikTech AI Builder</h1>

      <ThemeToggle />
    </div>
  );
}
