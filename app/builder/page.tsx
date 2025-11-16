'use client';
import Canvas from '../../components/Canvas';
import PropertiesPanel from '../../components/PropertiesPanel';
import ChatPreview from '../../components/ChatPreview';
import TopBar from '../../components/TopBar';

export default function BuilderPage() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Canvas />
        <PropertiesPanel />
        <ChatPreview />
      </div>
    </div>
  );
}
