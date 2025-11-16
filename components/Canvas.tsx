'use client';
import { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { useStore } from '../stores/useStore';
import Node from './Node';
import { Plus } from 'lucide-react';

export default function Canvas() {
  const nodes = useStore(state => state.nodes);
  const addNode = useStore(state => state.addNode);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={canvasRef} className="flex-1 bg-slate-100 dark:bg-gray-900 p-6 overflow-auto">
      <div className="relative min-h-[600px]">
        {nodes.map(node => (
          <Draggable key={node.id} defaultPosition={{x: node.x, y: node.y}} onStop={(e, data) => useStore.getState().moveNode(node.id, data.x, data.y)}>
            <div className="absolute node">
              <Node node={node} />
            </div>
          </Draggable>
        ))}
      </div>
      <div className="fixed bottom-6 left-6">
        <button onClick={() => addNode('text')} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow">
          <Plus size={16}/> Tambah Block
        </button>
      </div>
    </div>
  );
}
