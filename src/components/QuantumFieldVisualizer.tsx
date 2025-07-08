import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Atom, Zap, Activity, RotateCcw } from 'lucide-react';

export const QuantumFieldVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [fieldIntensity, setFieldIntensity] = useState(0.75);
  const [particleCount, setParticleCount] = useState(150);
  const [isActive, setIsActive] = useState(true);

  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: Math.random() * 60 + 30,
          maxLife: Math.random() * 60 + 30,
          size: Math.random() * 3 + 1,
          hue: Math.random() * 60 + 120 // Green to cyan range
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const drawQuantumField = (time: number) => {
      ctx.fillStyle = 'rgba(8, 12, 16, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum field waves
      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          const wave = Math.sin(time * 0.002 + x * 0.01 + y * 0.01) * fieldIntensity;
          const intensity = (wave + 1) * 0.5;
          
          ctx.fillStyle = `hsla(142, 76%, 36%, ${intensity * 0.1})`;
          ctx.fillRect(x, y, 2, 2);
        }
      }

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Update position with quantum fluctuations
        const fluctuation = Math.sin(time * 0.003 + particle.x * 0.02) * fieldIntensity;
        particle.x += particle.vx + fluctuation;
        particle.y += particle.vy + Math.sin(time * 0.001 + particle.y * 0.01) * 0.5;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Update life
        particle.life--;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Draw particle with quantum glow
        const alpha = particle.life / particle.maxLife;
        const glowSize = particle.size * (1 + fluctuation * 0.5);

        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 40%, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 80%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw quantum entanglement lines
      particles.current.forEach((particle, i) => {
        particles.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const alpha = (1 - distance / 80) * 0.3 * fieldIntensity;
            ctx.strokeStyle = `hsla(142, 76%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const animate = (time: number) => {
      if (isActive) {
        drawQuantumField(time);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [fieldIntensity, particleCount, isActive]);

  const resetField = () => {
    setFieldIntensity(0.75);
    setParticleCount(150);
  };

  return (
    <Card className="tactical-shadow-lg border-military-green/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-military-green flex items-center text-base font-mono tracking-wider uppercase">
            <Atom className="w-5 h-5 mr-3 status-indicator" />
            Quantum Field Visualization
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-military-green text-military-green text-xs">
              {isActive ? 'ACTIVE' : 'PAUSED'}
            </Badge>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsActive(!isActive)}
              className="border-military-green text-military-green hover:bg-military-green/10"
            >
              {isActive ? 'PAUSE' : 'RESUME'}
            </Button>
          </div>
        </div>
        <p className="text-xs font-mono text-steel-gray mt-2">
          REAL-TIME QUANTUM VACUUM FLUCTUATION MONITORING
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative h-64 sm:h-80 bg-background/50 rounded-lg border border-military-green/20 overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute top-2 left-2 space-y-1">
            <Badge variant="secondary" className="text-xs font-mono bg-military-green/20 text-military-green">
              <Activity className="w-3 h-3 mr-1" />
              {Math.round(fieldIntensity * 100)}% INTENSITY
            </Badge>
            <Badge variant="secondary" className="text-xs font-mono bg-military-blue/20 text-military-blue">
              <Zap className="w-3 h-3 mr-1" />
              {particleCount} PARTICLES
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-steel-gray mb-2 block">FIELD INTENSITY</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={fieldIntensity}
              onChange={(e) => setFieldIntensity(parseFloat(e.target.value))}
              className="w-full accent-military-green"
            />
            <span className="text-xs font-mono text-military-green">{Math.round(fieldIntensity * 100)}%</span>
          </div>
          <div>
            <label className="text-xs font-mono text-steel-gray mb-2 block">PARTICLE DENSITY</label>
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={particleCount}
              onChange={(e) => setParticleCount(parseInt(e.target.value))}
              className="w-full accent-military-green"
            />
            <span className="text-xs font-mono text-military-green">{particleCount}</span>
          </div>
        </div>

        <Button
          onClick={resetField}
          variant="outline"
          size="sm"
          className="w-full border-military-green text-military-green hover:bg-military-green/10 font-mono text-xs tracking-wider"
        >
          <RotateCcw className="w-3 h-3 mr-2" />
          RESET FIELD PARAMETERS
        </Button>
      </CardContent>
    </Card>
  );
};