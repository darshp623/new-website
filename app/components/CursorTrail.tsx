'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code } from 'lucide-react';

interface Note {
  id: number;
  x: number;
  y: number;
  time: number;
  speed: number;
  acceleration: number;
  velocity: { x: number; y: number };
  icon: any;
  color: string;
  size: number;
  rotation: number;
  scale: number;
  life: number;
  decay: number;
}
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  color: string;
  type: string;
  rotation: number;
}
interface Wave {
  id: number;
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  opacity: number;
  color: string;
  thickness: number;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [soundWaves, setSoundWaves] = useState<Wave[]>([]);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  // for position tracking
  const rawPos = useRef({ x: 0, y: 0 });
  const displayPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const acceleration = useRef({ x: 0, y: 0 });

  const particleId = useRef(0);
  const waveId = useRef(0);
  
  const SMOOTHING_FACTOR = 0.92;
  const VELOCITY_DECAY = 0.95;
  const MAX_PARTICLES = 30;
  const MAX_WAVES = 4;


  // desktop detection
  useEffect(() => {
    const check = () => setIsDesktop(window.matchMedia('(hover: hover)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // input handling physics
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if(isDesktop && isEnabled) {
        const newX = e.clientX;
        const newY = e.clientY;
        
        // calc velocity and acceleration
        const newVx = newX - lastPos.current.x;
        const newVy = newY - lastPos.current.y;
        
        acceleration.current.x = newVx - velocity.current.x;
        acceleration.current.y = newVy - velocity.current.y;
        
        velocity.current.x = newVx;
        velocity.current.y = newVy;
        
        rawPos.current.x = newX;
        rawPos.current.y = newY;
        lastPos.current.x = newX;
        lastPos.current.y = newY;
      }
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      const newX = t.clientX;
      const newY = t.clientY;
      
      const newVx = newX - lastPos.current.x;
      const newVy = newY - lastPos.current.y;
      
      acceleration.current.x = newVx - velocity.current.x;
      acceleration.current.y = newVy - velocity.current.y;
      
      velocity.current.x = newVx;
      velocity.current.y = newVy;
      
      rawPos.current.x = newX;
      rawPos.current.y = newY;
      lastPos.current.x = newX;
      lastPos.current.y = newY;
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
    };
  }, [isDesktop, isEnabled]);

  // animation loop w/ tech icons
  useEffect(() => {
    let frameId: number;
    let time = 0;

      
    const loop = () => {
      if(isEnabled && isDesktop) {
        time += 0.016;
        
        // physics to display position
        const dx = rawPos.current.x - displayPos.current.x;
        const dy = rawPos.current.y - displayPos.current.y;
        
        displayPos.current.x += dx * SMOOTHING_FACTOR;
        displayPos.current.y += dy * SMOOTHING_FACTOR;
        
        // decay velocity
        velocity.current.x *= VELOCITY_DECAY;
        velocity.current.y *= VELOCITY_DECAY;
        
        const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
        const accel = Math.sqrt(acceleration.current.x ** 2 + acceleration.current.y ** 2);

        // enhanced particle generation
        if(speed > 2) {
          setParticles(prev => {
            const newParticles = [...prev];
            if (Math.random() < 0.3) {
              const angle = Math.atan2(velocity.current.y, velocity.current.x);
              const spread = (Math.random() - 0.5) * Math.PI / 2;
              const finalAngle = angle + spread;
              const particleSpeed = 3 + Math.random() * 5;
              
              newParticles.push({
                id: particleId.current++,
                x: displayPos.current.x + Math.cos(finalAngle) * 15,
                y: displayPos.current.y + Math.sin(finalAngle) * 15,
                vx: Math.cos(finalAngle) * particleSpeed,
                vy: Math.sin(finalAngle) * particleSpeed,
                life: 1,
                decay: 0.02 + Math.random() * 0.02,
                size: 4 + Math.random() * 8,
                color: `hsl(${200 + Math.random() * 40}, 80%, ${60 + Math.random() * 20}%)`, // blue/cyan only
                type: 'sparkle',
                rotation: Math.random() * 360
              });
            }
            return newParticles
              .map(p => ({ ...p, life: p.life - p.decay }))
              .filter(p => p.life > 0)
              .slice(0, MAX_PARTICLES);
          });
        }

        // dynamic sound wave generation
        if(Math.random() < 0.005 + (speed * 0.002)) {
          setSoundWaves(prev => {
            const newWaves = [...prev];
            newWaves.push({
              id: waveId.current++,
              x: displayPos.current.x,
              y: displayPos.current.y,
              radius: 0,
              maxRadius: 1 + Math.random() * 0.02 + speed / 10,
              speed: 1 + Math.random() * 0.25 + speed * 0.04,
              opacity: .7,
              color: `hsl(${200 + Math.random() * 40}, 80%, 60%)`, // blue/cyan only
              thickness: 1 + Math.random() * 2
            });
            return newWaves.slice(0, MAX_WAVES);
          });
        }

        // update sound waves
        setSoundWaves(prev => 
          prev.map(wave => ({
            ...wave,
            radius: wave.radius + wave.speed,
            opacity: wave.opacity - 0.01
          })).filter(wave => wave.opacity > 0)
        );
      }
      frameId = requestAnimationFrame(loop);
    };
    
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isDesktop, isEnabled]);

  if(!isDesktop) return null;

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
              {/* sound waves with enhanced visuals */}
              {soundWaves.map(wave => (
                <motion.circle
                  key={wave.id}
                  cx={wave.x}
                  cy={wave.y}
                  r={wave.radius}
                  fill="none"
                  stroke={wave.color}
                  strokeWidth={wave.thickness}
                  opacity={wave.opacity}
                  className="drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                />
              ))}
            </svg>

            {/* enhanced particles with better physics */}
            {particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute pointer-events-none"
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.life,
                  transform: `rotate(${particle.rotation}deg)`
                }}
                animate={{
                  x: particle.vx * 50,
                  y: particle.vy * 50,
                  scale: [1, 1.5, 0],
                  rotate: [particle.rotation, particle.rotation + 360],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${particle.color} 0%, transparent 60%)`,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
                  }}
                />
              </motion.div>
            ))}

            {/* enhanced cursor highlight */}
            <motion.div
              className="absolute w-8 h-8 pointer-events-none"
              style={{
                left: displayPos.current.x - 16,
                top: displayPos.current.y - 16,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 opacity-90 blur-sm" />
              <div className="absolute inset-2 rounded-full bg-white opacity-70" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* enhanced toggle button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50 bg-black/95 backdrop-blur-lg border border-cyan-400/60 rounded-2xl px-5 py-3 text-cyan-400 hover:bg-gray-900/95 hover:border-cyan-300/80 transition-all duration-300 hidden md:flex items-center gap-3 shadow-2xl shadow-cyan-400/30"
        onClick={() => setIsEnabled(!isEnabled)}
        aria-label={isEnabled ? "Disable tech trail" : "Enable tech trail"}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {isEnabled ? (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <Code className="w-5 h-5" />
        )}
        <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
          {isEnabled ? 'Disable Tech Trail' : 'Enable Tech Trail'}
        </span>
      </motion.button>
    </>
  );
}
