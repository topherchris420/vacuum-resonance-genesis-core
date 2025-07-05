
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap } from 'lucide-react';

interface EnergyCoreProps {
  energyOutput: number;
}

export const EnergyCore: React.FC<EnergyCoreProps> = ({ energyOutput }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Photonic Core
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Output Power</span>
              <span className="text-green-400">{energyOutput.toFixed(1)} kW</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Efficiency</span>
              <span className="text-blue-400">97.3%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Wavelength</span>
              <span className="text-purple-400">1550 nm</span>
            </div>
          </div>
          <Progress value={energyOutput / 15} className="h-2" />
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Ionic Subsystem</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Ion Density</span>
              <span className="text-green-400">1.2e15 cm⁻³</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Plasma Temp</span>
              <span className="text-orange-400">8.7 keV</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Confinement</span>
              <span className="text-blue-400">Magnetic</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Superconductors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Critical Temp</span>
              <span className="text-green-400">295 K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Current Density</span>
              <span className="text-blue-400">1.2 MA/cm²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Resistance</span>
              <span className="text-green-400">0.00 Ω</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
