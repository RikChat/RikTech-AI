'use client';
import { useEffect, useState } from 'react';
export default function DarkToggle() {
  const [dark, setDark] = useState<boolean>(false);
  useEffect(() => {
    const v = localStorage.getItem('theme') || 'dark';
    setDark(v === 'dark');
    document.documentElement.classList.toggle('dark', v === 'dark');
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  return (
    <button onClick={toggle} className="px-3 py-1 border rounded">
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
