import { useEffect, useState } from 'react';

interface CursorTrail {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  age: number;
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
        age: 0,
      };
      
      setTrails(prev => [...prev.slice(-20), newTrail]); // Keep last 20 trails
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

  // Animate trails more smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => 
        prev.map(trail => ({
          ...trail,
          opacity: trail.opacity * 0.92,
          scale: trail.scale * 0.98,
          age: trail.age + 1,
        })).filter(trail => trail.opacity > 0.02)
      );
    }, 30); // Smoother animation with 30ms intervals

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="fixed w-5 h-5 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          background: 'radial-gradient(circle, hsl(186, 100%, 75%), hsl(186, 100%, 55%))',
          boxShadow: '0 0 25px hsl(186, 100%, 70%), 0 0 50px hsl(186, 100%, 60%)',
        }}
      />
      
      {/* Main trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed rounded-full transition-all duration-150 ease-out"
          style={{
            left: trail.x - 8,
            top: trail.y - 8,
            width: 16 * trail.scale,
            height: 16 * trail.scale,
            opacity: trail.opacity * 0.7,
            background: `radial-gradient(circle, 
              hsl(186, 100%, ${75 + trail.opacity * 15}%, ${trail.opacity * 0.6}), 
              hsl(186, 100%, ${55 + trail.opacity * 20}%, ${trail.opacity * 0.2})
            )`,
            filter: 'blur(1px)',
          }}
        />
      ))}
      
      {/* Ocean wave patterns - multiple layers for depth */}
      {trails.slice(-8).map((trail, index) => (
        <div key={`wave1-${trail.id}`}>
          {/* Primary wave ring */}
          <div
            className="fixed rounded-full border"
            style={{
              left: trail.x - 20 - index * 3,
              top: trail.y - 20 - index * 3,
              width: 40 + index * 6,
              height: 40 + index * 6,
              opacity: trail.opacity * 0.3,
              borderWidth: '1px',
              borderColor: `hsl(186, 100%, ${65 + index * 5}%, ${trail.opacity * 0.4})`,
              transform: `scale(${1 + (trail.age * 0.05)})`,
              animation: `pulse 1.2s ease-out infinite`,
            }}
          />
          
          {/* Secondary wave ring */}
          <div
            className="fixed rounded-full border"
            style={{
              left: trail.x - 15 - index * 2,
              top: trail.y - 15 - index * 2,
              width: 30 + index * 4,
              height: 30 + index * 4,
              opacity: trail.opacity * 0.2,
              borderWidth: '0.5px',
              borderColor: `hsl(186, 100%, ${70 + index * 3}%, ${trail.opacity * 0.3})`,
              transform: `scale(${1 + (trail.age * 0.08)})`,
              animation: `pulse 1.5s ease-out infinite`,
              animationDelay: '0.2s',
            }}
          />
          
          {/* Ripple effect */}
          <div
            className="fixed rounded-full"
            style={{
              left: trail.x - 12,
              top: trail.y - 12,
              width: 24,
              height: 24,
              opacity: trail.opacity * 0.15,
              background: `radial-gradient(circle, 
                transparent 60%, 
                hsl(186, 100%, 75%, ${trail.opacity * 0.2}) 70%, 
                transparent 80%
              )`,
              transform: `scale(${1 + (trail.age * 0.1)})`,
            }}
          />
        </div>
      ))}
      
      {/* Flowing water effect */}
      {trails.slice(-12).map((trail, index) => (
        index % 3 === 0 && (
          <div
            key={`flow-${trail.id}`}
            className="fixed"
            style={{
              left: trail.x - 5,
              top: trail.y - 5,
              width: 10,
              height: 10,
              opacity: trail.opacity * 0.1,
              background: `linear-gradient(45deg, 
                hsl(186, 100%, 80%, ${trail.opacity * 0.1}), 
                transparent 70%
              )`,
              borderRadius: '50% 0 50% 0',
              transform: `rotate(${trail.age * 10}deg) scale(${1 + trail.age * 0.03})`,
              transition: 'all 0.1s ease-out',
            }}
          />
        )
      ))}
    </div>
  );
};