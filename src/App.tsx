import FuturisticPlatform from './components/FuturisticPlatform';
import UIPanel from './components/UIPanel';
import { Building,  Settings, RefreshCw } from 'lucide-react';

function App() {
  console.log('App rendering with positions:', {
    matrics: 'left-48 top-[40%] -translate-y-1/2',
    erp: 'left-[calc(60%)] top-[28.5%] -translate-y-1/2',
    ai: 'right-48 top-[33%] -translate-y-1/2',
    footer: 'bottom-[25%] left-1/2 -translate-x-1/2',
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-matrics-dark text-gray-200">
      <FuturisticPlatform />

      {/* --- Panel 1: MATRICS CORPORATION (Left Side) --- */}
      <UIPanel
        title="MATRICS CORPORATION"
        positionClasses="left-48 top-[40%] -translate-y-1/2"
        className="w-62 h-auto min-h-[28rem] shadow-glow-cyan-md"
        initialDelay={0.0}
      >
        <div className="flex items-center mb-2">
          <Building size={18} className="mr-2 text-matrics-cyan" />
          <p className="font-semibold text-matrics-blue">Innovative Data Solutions for the Future</p>
        </div>
        <p className="text-xs text-gray-400 mt-2">Placeholder: 253 Clients, Up 17%</p>
        <button className="mt-4 px-4 py-1 bg-matrics-cyan/20 text-matrics-cyan rounded hover:bg-matrics-cyan/30 transition">
          Explore Our Services
        </button>
        <ul className="mt-4 text-xs text-gray-300 space-y-1">
          <li>ERP Modules</li>
          <li>AI Integration</li>
          <li>Blockchain Security</li>
          <li>TPS System</li>
          <li>Extra Line for Height</li>
        </ul>
      </UIPanel>

      {/* --- Panel 2: ERP INTELLIGENCE (Just Left of AI-Powered) --- */}
      <UIPanel
        key="erp-intelligence-panel-v9"
        title="ERP INTELLIGENCE"
        positionClasses="left-[calc(63%)] top-[28.5%] -translate-y-1/2"
        className="w-40 h-[17.6rem] overflow-hidden text-matrics-orange"
        initialDelay={0.3}
        onMount={() => console.log('ERP Intelligence panel mounted with position: left-[calc(60%)] top-[28.5%] -translate-y-1/2')}
      >
        <p className="text-sm mb-1">AI Uptime:</p>
        <div className="relative w-full h-3 bg-gray-700 rounded mb-2">
          <span className="absolute left-0 top-0 h-full bg-green-500 rounded" style={{ width: '98%' }}></span>
          <span className="absolute right-1 text-xs text-gray-300">98%</span>
        </div>
        <p className="text-sm mb-1">Predictive Load:</p>
        <div className="relative w-full h-3 bg-gray-700 rounded mb-2">
          <span className="absolute left-0 top-0 h-full bg-yellow-500 rounded" style={{ width: '75%' }}></span>
          <span className="absolute right-1 text-xs text-gray-300">75%</span>
        </div>
        <p className="text-sm mb-1">Model Accuracy:</p>
        <div className="relative w-full h-3 bg-gray-700 rounded mb-2">
          <span className="absolute left-0 top-0 h-full bg-blue-500 rounded" style={{ width: '92%' }}></span>
          <span className="absolute right-1 text-xs text-gray-300">92%</span>
        </div>
        <ul className="mt-2 text-xs text-gray-400 space-y-0.5">
          <li>Smart Queries: 1,234</li>
          <li>Errors (24h): 5</li>
          <li>Active Modules: 3</li>
        </ul>
        <div className="flex justify-between mt-3 pt-2 border-t border-matrics-cyan/10">
          <Settings size={14} className="text-matrics-cyan hover:text-white cursor-pointer" />
          <RefreshCw size={14} className="text-matrics-orange hover:text-white cursor-pointer" />
        </div>
      </UIPanel>

      {/* --- Panel 3: AI-Powered Solutions (Right Side) --- */}
      <UIPanel
        title="AI-Powered Solutions"
        positionClasses="right-48 top-[33%] -translate-y-1/2"
        className="w-50 h-auto min-h-[22rem]"
        initialDelay={0.4}
      >
        <ul className="mt-2 text-xs text-gray-300 space-y-1 border-b border-matrics-cyan/20 pb-2 mb-2">
          <li>Smart Query Engine </li>
          <li>Predictive Analytics</li>
          <li>RPA</li>
          <li>NLP Chatbot</li>
          <li>Cyber Threat Detection</li>
        </ul>
        <p className="mt-2 text-xs text-gray-400">Module Usage: 85% (Placeholder)</p>
      </UIPanel>

      {/* --- Panel 4: Footer (Bottom Center) --- */}
      <UIPanel
        title=""
        positionClasses="bottom-[11%] left-1/2 -translate-x-1/2" // Lowered further to 25% from bottom
        className="w-auto max-w-7xl bg-transparent border-none shadow-none backdrop-blur-none flex flex-col items-center gap-y-4 px-6 py-4"
        initialDelay={0.6}
      >
        <div className="flex justify-center items-start gap-x-12">
          <div className="flex flex-col text-left">
            <span className="font-semibold text-lg">SERVICES:</span>
            <span className="text-gray-400 text-sm mt-1">SynapseCore | AI Processing</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-lg">ABOUT US:</span>
            <span className="text-gray-400 text-sm mt-1">Mission: Innovate Globally</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-lg">CONTACT:</span>
            <span className="text-gray-400 text-sm mt-1">support@matrics.com</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-lg">GET STARTED:</span>
            <span className="text-gray-400 text-sm mt-1">Launch ERP | Book a Demo</span>
          </div>
        </div>
        <div className="w-full text-center mt-2 text-sm text-gray-500">
          Terms | Privacy | Licenses
        </div>
      </UIPanel>
    </div>
  );
}

export default App;