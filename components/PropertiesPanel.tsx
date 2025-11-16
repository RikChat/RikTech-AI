'use client';
import { useStore } from '../stores/useStore';
import { Trash2 } from 'lucide-react';

export default function PropertiesPanel() {
  const selectedId = useStore(s => s.selectedId);
  const nodes = useStore(s => s.nodes);
  const updateNode = useStore(s => s.updateNode);
  const removeNode = useStore(s => s.removeNode);

  const node = nodes.find(n => n.id === selectedId) || null;
  if (!node) {
    return <div className="w-80 bg-white/50 dark:bg-gray-800 p-4 border-l">No node selected</div>;
  }

  return (
    <div className="w-80 bg-white/50 dark:bg-gray-800 p-4 border-l overflow-auto">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Properties</h4>
        <button onClick={() => removeNode(node.id)} className="text-red-500"><Trash2 /></button>
      </div>

      <div className="mt-3">
        <label className="block text-sm">Name</label>
        <input value={node.name} onChange={e => updateNode(node.id, { name: e.target.value })} className="w-full mt-1 p-2 rounded border bg-white/80 dark:bg-gray-900"/>
      </div>

      <div className="mt-3">
        <label className="block text-sm">Type</label>
        <select value={node.type} onChange={e => updateNode(node.id, { type: e.target.value as any })} className="w-full mt-1 p-2 rounded border bg-white/80 dark:bg-gray-900">
          <option value="text">Text Response</option>
          <option value="ai">AI Response</option>
          <option value="condition">Condition</option>
          <option value="delay">Delay</option>
          <option value="input">Input User</option>
        </select>
      </div>

      {node.type === 'text' && (
        <div className="mt-3">
          <label className="block text-sm">Content</label>
          <textarea value={node.content} onChange={e => updateNode(node.id, { content: e.target.value })} className="w-full mt-1 p-2 rounded border bg-white/80 dark:bg-gray-900" rows={4}/>
        </div>
      )}

      {node.type === 'ai' && (
        <>
          <div className="mt-3">
            <label className="block text-sm">AI Prompt</label>
            <textarea value={node.prompt} onChange={e => updateNode(node.id, { prompt: e.target.value })} className="w-full mt-1 p-2 rounded border bg-white/80 dark:bg-gray-900" rows={4}/>
          </div>
        </>
      )}

      {node.type === 'condition' && (
        <div className="mt-3">
          <label className="block text-sm">Branches</label>
          <input type="number" value={node.branches || 2} onChange={e => updateNode(node.id, { branches: parseInt(e.target.value||'2') })} className="w-full mt-1 p-2 rounded border bg-white/80 dark:bg-gray-900"/>
        </div>
      )}
    </div>
  );
}
