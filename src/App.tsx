// src/App.tsx
import FuturisticPlatform from './components/FuturisticPlatform';
// import UIPanel from './components/UIPanel'; // Uncomment when UIPanel is added

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FuturisticPlatform />
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-4xl font-bold text-matrics-cyan border-4 border-matrics-orange p-4 bg-black/50 rounded-lg">
          Matrics - Platform Test
        </h1>
      </div>
      {/* Placeholder for UI Panel - uncomment and add UIPanel when ready */}
      {/* <UIPanel
        title="MATRICS CORPORATION"
        positionClasses="top-16 left-10"
        className="w-96"
        initialDelay={0.3}
      >
        <p className="text-matrics-blue">INNOVATIVE DATA SOLUTIONS</p>
        <p>SOLUTIONS FOR THE FUTURE</p>
        <p className="text-xs text-gray-400 mt-2">
          Leveraging SynapseCore and BharatLense to redefine Platform-as-a-Service paradigms globally. Driving efficiency through advanced transaction processing and AI governance.
        </p>
      </UIPanel> */}
    </div>
  );
}

export default App;