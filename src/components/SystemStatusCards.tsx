
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Zap, Thermometer } from 'lucide-react';

interface SystemStatusCardsProps {
  quantumCoherence: number;
  fieldStrength: number;
  temperature: number;
}

export const SystemStatusCards: React.FC<SystemStatusCardsProps> = ({
  quantumCoherence,
  fieldStrength,
  temperature,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      <Card className="tactical-shadow-lg bg-card tactical-hover">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <p className="text-steel-gray text-xs font-mono tracking-wider uppercase">Quantum Coherence</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground font-mono">{quantumCoherence.toFixed(1)}%</p>
              <p className="text-xs text-military-green font-mono">NOMINAL</p>
            </div>
            <div className="relative">
              <div className="p-3 bg-military-green/10 rounded-lg tactical-glow">
                <Zap className="w-6 h-6 text-military-green status-indicator" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-steel-gray">
              <span>MIN: 80.0%</span>
              <span>MAX: 95.0%</span>
            </div>
            <div className="bg-muted rounded-sm h-1.5 border border-border">
              <div 
                className="bg-military-green h-full rounded-sm transition-all duration-500 status-indicator" 
                style={{ width: `${quantumCoherence}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="tactical-shadow-lg bg-card tactical-hover">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <p className="text-steel-gray text-xs font-mono tracking-wider uppercase">Field Strength</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground font-mono">{fieldStrength.toFixed(1)} T</p>
              <p className="text-xs text-military-blue font-mono">STABLE</p>
            </div>
            <div className="relative">
              <div className="p-3 bg-military-blue/10 rounded-lg tactical-glow">
                <Activity className="w-6 h-6 text-military-blue status-indicator" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-steel-gray">
              <span>MIN: 35.0T</span>
              <span>MAX: 50.0T</span>
            </div>
            <div className="bg-muted rounded-sm h-1.5 border border-border">
              <div 
                className="bg-military-blue h-full rounded-sm transition-all duration-500" 
                style={{ width: `${(fieldStrength / 50) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="tactical-shadow-lg bg-card tactical-hover">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <p className="text-steel-gray text-xs font-mono tracking-wider uppercase">Core Temperature</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground font-mono">{temperature.toFixed(2)}°C</p>
              <p className="text-xs text-military-amber font-mono">CRITICAL</p>
            </div>
            <div className="relative">
              <div className="p-3 bg-military-amber/10 rounded-lg tactical-glow">
                <Thermometer className="w-6 h-6 text-military-amber status-indicator" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-steel-gray">
              <span>ABS ZERO</span>
              <span>-268.0°C</span>
            </div>
            <div className="bg-muted rounded-sm h-1.5 border border-border">
              <div 
                className="bg-military-amber h-full rounded-sm transition-all duration-500" 
                style={{ width: `${Math.abs(temperature / -273.15) * 100}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
