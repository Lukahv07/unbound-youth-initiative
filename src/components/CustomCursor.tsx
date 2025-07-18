import { useEffect, useState } from 'react';

interface CursorTrail {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<CursorTrail[]>([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add new trail
      const newTrail: CursorTrail = {
        id: trailId,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: 1,
      };
      
      setTrails(prev => [...prev.slice(-15), newTrail]); // Keep last 15 trails
      setTrailId(prev => prev + 1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, [trailId]);

  // Animate trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => 
        prev.map(trail => ({
          ...trail,
          opacity: trail.opacity * 0.85,
          scale: trail.scale * 0.95,
        })).filter(trail => trail.opacity > 0.05)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: 'scale(1)',
          background: 'radial-gradient(circle, hsl(186, 100%, 70%), hsl(186, 100%, 50%))',
          boxShadow: '0 0 20px hsl(186, 100%, 70%), 0 0 40px hsl(186, 100%, 60%)',
        }}
      />
      
      {/* Trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed rounded-full transition-all duration-200 ease-out"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            width: 12 * trail.scale,
            height: 12 * trail.scale,
            opacity: trail.opacity,
            background: `radial-gradient(circle, 
              hsl(186, 100%, ${70 + trail.opacity * 20}%, ${trail.opacity}), 
              hsl(186, 100%, ${50 + trail.opacity * 30}%, ${trail.opacity * 0.3})
            )`,
            transform: `scale(${trail.scale})`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Wave patterns */}
      {trails.slice(-5).map((trail, index) => (
        <div
          key={`wave-${trail.id}`}
          className="fixed rounded-full border border-cyan-300/30"
          style={{
            left: trail.x - 15,
            top: trail.y - 15,
            width: 30,
            height: 30,
            opacity: trail.opacity * 0.4,
            transform: `scale(${1 + (1 - trail.scale) * 2})`,
            borderColor: `hsl(186, 100%, 60%, ${trail.opacity * 0.3})`,
            animation: `pulse 0.8s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
};