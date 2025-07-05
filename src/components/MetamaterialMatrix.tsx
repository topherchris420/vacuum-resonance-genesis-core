
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const MetamaterialMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Adaptive Metamaterial Matrix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="aspect-square bg-slate-700 rounded border border-cyan-500/30 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-green-400 quantum-pulse' : 'bg-blue-400'}`}></div>
              </div>
            ))}
          </div>
          <div className="text-xs text-slate-400 text-center">
            16-segment programmable matter array
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Material Properties</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Refractive Index</span>
              <span className="text-green-400">-1.73 (negative)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Permeability</span>
              <span className="text-blue-400">Variable μ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Response Time</span>
              <span className="text-purple-400">12.3 ps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Topology State</span>
              <span className="text-orange-400">Adaptive</span>
            </div>
          </div>
          <Separator className="bg-slate-600" />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Reconfigure Matrix
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
