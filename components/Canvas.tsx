'use client';

import { useEditorStore } from '@/store/editorStore';
import NodeBlock from './NodeBlock';

export default function Canvas() {
  const nodes = useEditorStore((s) => s.nodes);

  return (
    <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 overflow-auto p-10">
      {nodes.map((node) => (
        <NodeBlock key={node.id} node={node} />
      ))}
    </div>
  );
}
