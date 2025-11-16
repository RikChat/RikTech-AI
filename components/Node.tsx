'use client';
import { NodeType } from '../types';
import { useStore } from '../stores/useStore';
import { motion } from 'framer-motion';

export default function Node({ node }: { node: NodeType }) {
  const setSelected = useStore(s => s.setSelected);
  return (
    <motion.div initial={{scale:0.98}} whileHover={{scale:1.02}} className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-md w-64">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{node.name}</h3>
          <small className="text-xs text-slate-500 dark:text-slate-400">{node.type}</small>
        </div>
        <button onClick={() => setSelected(node.id)} className="text-sm px-2 py-1 border rounded">Edit</button>
      </div>
      <div className="mt-3 text-sm text-slate-700 dark:text-slate-300">
        {node.type === 'text' && <div>{node.content}</div>}
        {node.type === 'ai' && <div>AI Prompt: {node.prompt?.slice(0,80)}</div>}
        {node.type === 'input' && <div>Await user input</div>}
      </div>
    </motion.div>
  );
}
