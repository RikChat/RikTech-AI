export type NodeType = {
  id: string;
  name: string;
  type: 'text'|'ai'|'condition'|'delay'|'input';
  content?: string;
  prompt?: string;
  branches?: number;
  x: number;
  y: number;
};
