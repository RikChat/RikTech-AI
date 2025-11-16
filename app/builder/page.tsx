import Canvas from '../../components/Canvas';
import PropertiesPanel from '../../components/PropertiesPanel';
import ChatPreview from '../../components/ChatPreview';

export default function BuilderPage() {
  return (
    <div className="flex h-screen">
      <Canvas />
      <PropertiesPanel />
      <ChatPreview />
    </div>
  );
}