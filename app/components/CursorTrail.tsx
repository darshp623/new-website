'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(hover: hover)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    let pointId = 0;
    const maxPoints = 20;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDesktop || !isEnabled) return;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setPoints(prevPoints => {
        const newPoints = [
          { x: e.clientX, y: e.clientY, id: pointId },
          ...prevPoints
        ].slice(0, maxPoints);
        
        pointId = (pointId + 1) % 1000;
        return newPoints;
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setMousePosition({ x: touch.clientX, y: touch.clientY });
      
      setPoints(prevPoints => {
        const newPoints = [
          { x: touch.clientX, y: touch.clientY, id: pointId },
          ...prevPoints
        ].slice(0, maxPoints);
        
        pointId = (pointId + 1) % 1000;
        return newPoints;
      });
    };

    // Add both mouse and touch event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Clean up both event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', checkDesktop);
    };
  }, [isDesktop, isEnabled]);

  const generateSmoothPath = (points: Point[]): string => {
    if (points.length < 2) return '';

    const firstPoint = points[0];
    let path = `M ${firstPoint.x} ${firstPoint.y}`;

    for (let i = 1; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      
      // Calculate control points for smooth curve
      const xc = (current.x + next.x) / 2;
      const yc = (current.y + next.y) / 2;
      
      path += ` Q ${current.x} ${current.y}, ${xc} ${yc}`;
    }

    return path;
  };

  if (!isDesktop) return null;

  return (
    <>
      <AnimatePresence>
        {isEnabled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <svg className="absolute inset-0 w-full h-full">
              <path
                d={generateSmoothPath(points)}
                fill="none"
                stroke="#00e1ff"
                strokeWidth="2"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(0,225,255,0.5)]"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50 bg-background-medium/80 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 text-primary hover:bg-background-light/80 transition-colors duration-300 hidden md:flex items-center gap-2"
        onClick={() => setIsEnabled(!isEnabled)}
        aria-label={isEnabled ? "Disable cursor trail" : "Enable cursor trail"}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          {isEnabled ? (
            <>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M15 9l-6 6" />
              <path d="M9 9l6 6" />
            </>
          ) : (
            <>
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </>
          )}
        </svg>
        <span className="text-sm font-medium">
          {isEnabled ? 'Disable Trail' : 'Enable Trail'}
        </span>
      </motion.button>
    </>
  );
} 