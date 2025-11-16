'use client';

import { useEditorStore } from '@/store/editorStore';

export default function PropertiesPanel() {
  const selectedNode = useEditorStore((s) => s.selectedNode);
  const nodes = useEditorStore((s) => s.nodes);
  const updateNode = useEditorStore((s) => s.updateNode);

  const node = nodes.find((n) => n.id === selectedNode);

  if (!node)
    return (
      <div className="p-4 text-gray-500 dark:text-gray-300">
        Pilih sebuah blok untuk mengedit.
      </div>
    );

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">Properties</h2>

      <div>
        <label className="font-semibold">Nama</label>
        <input
          className="w-full p-2 border dark:bg-gray-800"
          value={node.name}
          onChange={(e) => updateNode(node.id, { name: e.target.value })}
        />
      </div>

      {node.type === 'text' && (
        <div>
          <label className="font-semibold">Konten Teks</label>
          <textarea
            className="w-full p-2 border h-24 dark:bg-gray-800"
            value={node.content}
            onChange={(e) => updateNode(node.id, { content: e.target.value })}
          />
        </div>
      )}

      {node.type === 'ai' && (
        <div>
          <label className="font-semibold">Prompt AI</label>
          <textarea
            className="w-full p-2 border h-24 dark:bg-gray-800"
            value={node.prompt}
            onChange={(e) => updateNode(node.id, { prompt: e.target.value })}
          />
        </div>
      )}

      {node.type === 'condition' && (
        <div>
          <label className="font-semibold">Jumlah Branch</label>
          <input
            type="number"
            min="2"
            max="5"
            className="w-full p-2 border dark:bg-gray-800"
            value={node.branches || 2}
            onChange={(e) =>
              updateNode(node.id, { branches: Number(e.target.value) })
            }
          />
        </div>
      )}
    </div>
  );
                                                  }
