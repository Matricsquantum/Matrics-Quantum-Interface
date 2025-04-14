// src/components/UIPanel.tsx
import React, { ReactNode, useRef, useEffect } from 'react';
import { gsap } from 'gsap'; // <-- Uncomment this

interface UIPanelProps {
  title: string;
  positionClasses: string;
  className?: string;
  children: ReactNode;
  initialDelay?: number;
  style?: React.CSSProperties;
  onMount?: () => void;
}

const UIPanel: React.FC<UIPanelProps> = ({
  title,
  positionClasses,
  className = '',
  children,
  initialDelay = 0,
  style,
  onMount,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onMount) onMount();

    // --- Re-enable GSAP ---
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20 }, // Start invisible and slightly down
        {
          opacity: 1,         // End visible
          y: 0,               // End at original position
          duration: 0.8,
          delay: initialDelay,
          ease: 'power2.out',
        }
      );
    }
    // --- End GSAP block ---

  }, [initialDelay, onMount]);

  return (
    <div
      ref={panelRef}
      className={`
        absolute
        ${positionClasses}
        bg-panel-bg
        backdrop-blur-sm
        border border-matrics-cyan/30
        rounded-lg
        p-4
        text-gray-200
        shadow-lg
        ${className}
        pointer-events-auto
        z-20
        opacity-0  // <--- CHANGE THIS BACK TO 0 for the animation start
      `}
      style={style}
    >
      {/* Panel Header */}
      {title && (
        <h3 className="text-lg font-semibold text-matrics-cyan mb-3 border-b border-matrics-cyan/20 pb-2">
          {title}
        </h3>
      )}

      {/* Panel Content */}
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
};

export default UIPanel;