
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
      <Card className="professional-shadow-lg border-border bg-card hover-lift hover:glow-effect transition-all duration-300 cursor-pointer">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Quantum Coherence</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{quantumCoherence.toFixed(1)}%</p>
            </div>
            <div className="p-2 sm:p-3 bg-accent/10 rounded-full pulse-glow">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
          </div>
          <div className="mt-4 bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500 status-pulse" 
              style={{ width: `${quantumCoherence}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="professional-shadow-lg border-border bg-card hover-lift hover:glow-effect transition-all duration-300 cursor-pointer">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Field Strength</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{fieldStrength.toFixed(1)} Tesla</p>
            </div>
            <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full pulse-glow">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4 bg-muted rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${(fieldStrength / 50) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="professional-shadow-lg border-border bg-card hover-lift hover:glow-effect transition-all duration-300 cursor-pointer">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Core Temperature</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{temperature.toFixed(2)}°C</p>
            </div>
            <div className="p-2 sm:p-3 bg-green-500/10 rounded-full pulse-glow">
              <Thermometer className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </div>
          </div>
          <div className="mt-4 bg-muted rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${Math.abs(temperature / -273.15) * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
