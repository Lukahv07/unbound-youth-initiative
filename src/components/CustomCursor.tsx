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
      
      setTrails(prev => [...prev.slice(-12), newTrail]); // Keep last 12 trails
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
    <div className="fixed inset-0 pointer-events-none z-[9999]">
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
      
      {/* Ocean wave patterns - subtle and less frequent */}
      {trails.slice(-4).map((trail, index) => (
        index % 2 === 0 && (
          <div key={`wave1-${trail.id}`}>
            {/* Primary wave ring */}
            <div
              className="fixed rounded-full border"
              style={{
                left: trail.x - 18,
                top: trail.y - 18,
                width: 36,
                height: 36,
                opacity: trail.opacity * 0.15,
                borderWidth: '0.5px',
                borderColor: `hsl(186, 100%, 70%, ${trail.opacity * 0.2})`,
                transform: `scale(${1 + (trail.age * 0.03)})`,
                animation: `pulse 2s ease-out infinite`,
              }}
            />
          </div>
        )
      ))}
      
      {/* Subtle ripple effect */}
      {trails.slice(-6).map((trail, index) => (
        index % 3 === 0 && (
          <div
            key={`ripple-${trail.id}`}
            className="fixed rounded-full"
            style={{
              left: trail.x - 10,
              top: trail.y - 10,
              width: 20,
              height: 20,
              opacity: trail.opacity * 0.08,
              background: `radial-gradient(circle, 
                transparent 70%, 
                hsl(186, 100%, 75%, ${trail.opacity * 0.1}) 80%, 
                transparent 90%
              )`,
              transform: `scale(${1 + (trail.age * 0.05)})`,
            }}
          />
        )
      ))}
    </div>
  );
};

