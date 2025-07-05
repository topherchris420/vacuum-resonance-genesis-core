
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity, Atom, Zap, Thermometer } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <Card className="bg-slate-800/80 border-cyan-500/30 quantum-glow">
        <CardHeader className="pb-2">
          <CardTitle className="text-cyan-300 text-sm flex items-center">
            <Activity className="w-4 h-4 mr-2" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-400 mb-1">OPERATIONAL</div>
          <div className="text-xs text-slate-400">All systems nominal</div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-blue-500/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-blue-300 text-sm flex items-center">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Coherence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-400 mb-1">{quantumCoherence.toFixed(1)}%</div>
          <Progress value={quantumCoherence} className="h-2" />
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-green-500/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-green-300 text-sm flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Field Strength
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-400 mb-1">{fieldStrength.toFixed(1)} T</div>
          <div className="text-xs text-slate-400">Tesla units</div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-orange-500/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-orange-300 text-sm flex items-center">
            <Thermometer className="w-4 h-4 mr-2" />
            Core Temp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-400 mb-1">{temperature}°C</div>
          <div className="text-xs text-slate-400">Near absolute zero</div>
        </CardContent>
      </Card>
    </div>
  );
};
