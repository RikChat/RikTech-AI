'use client';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { NodeType } from '../types';
import { nanoid } from 'nanoid';

type State = {
  nodes: NodeType[];
  selectedId: string | null;
  addNode: (type: NodeType['type']) => void;
  updateNode: (id: string, patch: Partial<NodeType>) => void;
  removeNode: (id: string) => void;
  setSelected: (id: string | null) => void;
  moveNode: (id:string, x:number,y:number) => void;
};

export const useStore = create<State>()(persist((set, get) => ({
  nodes: [
    { id: 'n1', name: 'Welcome', type: 'text', content: 'Halo! Saya adalah RikTech AI', x: 40, y: 40 },
    { id: 'n2', name: 'Tanyakan Nama', type: 'input', x: 320, y: 40 }
  ],
  selectedId: null,
  addNode: (type) => {
    const id = nanoid();
    const node: NodeType = { id, name: 'New Node', type, x: 100, y: 100, content: '', prompt: '', branches: 2 };
    set(state => ({ nodes: [...state.nodes, node] }));
  },
  updateNode: (id, patch) => set(state => ({ nodes: state.nodes.map(n => n.id === id ? { ...n, ...patch } : n) })),
  removeNode: (id) => set(state => ({ nodes: state.nodes.filter(n => n.id !== id), selectedId: null })),
  setSelected: (id) => set({ selectedId: id }),
  moveNode: (id,x,y) => set(state => ({ nodes: state.nodes.map(n => n.id === id ? { ...n, x, y } : n) }))
}), { name: 'riktech-store' }));
export const useStoreRef = useStore;
