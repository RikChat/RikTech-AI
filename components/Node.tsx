'use client';

import Draggable from 'react-draggable';
import { useEditorStore } from '@/store/editorStore';
import { Card } from '@/components/ui/card';

export default function NodeBlock({ node }) {
  const setSelectedNode = useEditorStore((s) => s.setSelectedNode);
  const updateNodePosition = useEditorStore((s) => s.updateNodePosition);

  return (
    <Draggable
      defaultPosition={{ x: node.x, y: node.y }}
      onStop={(e, data) => updateNodePosition(node.id, data.x, data.y)}
    >
      <Card
        className="absolute w-64 p-4 cursor-pointer shadow-xl border dark:border-gray-700"
        onClick={() => setSelectedNode(node.id)}
      >
        <h3 className="font-bold mb-2">{node.name}</h3>
        <p className="text-sm opacity-70">{node.type}</p>
      </Card>
    </Draggable>
  );
}
