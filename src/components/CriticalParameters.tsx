
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Gauge, CheckCircle } from 'lucide-react';

export const CriticalParameters: React.FC = () => {
  return (
    <Card className="bg-slate-800/80 border-slate-700">
      <CardHeader>
        <CardTitle className="text-cyan-300 flex items-center">
          <Gauge className="w-5 h-5 mr-2" />
          Critical Parameters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Casimir Pressure</span>
            <span className="text-green-400 font-mono">-8.74e-12 Pa</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Zero-Point Modulation</span>
            <span className="text-blue-400 font-mono">127.3 Hz</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Entanglement Fidelity</span>
            <span className="text-purple-400 font-mono">99.7%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Field Topology</span>
            <span className="text-orange-400 font-mono">Dynamic</span>
          </div>
        </div>
        <Separator className="bg-slate-600" />
        <Alert className="bg-green-900/20 border-green-500/30">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <AlertDescription className="text-green-300">
            All quantum states within acceptable coherence thresholds
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
