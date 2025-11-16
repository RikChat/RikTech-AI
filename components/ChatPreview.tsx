'use client';

import { useEditorStore } from '@/store/editorStore';

export default function ChatPreview() {
  const preview = useEditorStore((s) => s.previewMessages);

  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 p-4 overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Chat Preview</h2>

      {preview.map((msg, i) => (
        <div
          key={i}
          className={`max-w-sm p-3 rounded-xl mb-3 ${
            msg.sender === 'bot'
              ? 'bg-blue-600 text-white ml-auto'
              : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white mr-auto'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
