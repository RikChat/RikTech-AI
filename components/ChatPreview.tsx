'use client';
import { useEffect, useState } from 'react';
import { useStore } from '../stores/useStore';

export default function ChatPreview() {
  const nodes = useStore(s => s.nodes);
  const [messages, setMessages] = useState<{role:string, text:string}[]>([]);

  useEffect(() => {
    // simple simulation: find start nodes (no incoming) and render sequentially
    const run = async () => {
      const msgs:any[] = [];
      for (const n of nodes) {
        if (n.type === 'text') msgs.push({role:'bot', text: n.content});
        if (n.type === 'ai') msgs.push({role:'bot', text: `[AI] ${n.prompt?.slice(0,80)}`});
        if (n.type === 'input') msgs.push({role:'user', text: '...user input...'});
      }
      setMessages(msgs);
    };
    run();
  }, [nodes]);

  return (
    <div className="w-96 bg-white/60 dark:bg-gray-800 p-4 border-l overflow-auto">
      <h4 className="font-semibold mb-3">Chat Preview</h4>
      <div className="flex flex-col gap-3">
        {messages.map((m,i)=>(
          <div key={i} className={`p-3 rounded ${m.role==='user' ? 'self-end bg-blue-600 text-white' : 'bg-slate-200 dark:bg-gray-700'}`}>
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}
