
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Satellite, CheckCircle } from 'lucide-react';

export const OrbitalSync: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300 flex items-center">
            <Satellite className="w-5 h-5 mr-2" />
            Orbital Quantum Sensors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">QSAT-Alpha</span>
              <Badge className="bg-green-900/50 text-green-300">Linked</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">QSAT-Beta</span>
              <Badge className="bg-green-900/50 text-green-300">Linked</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">QSAT-Gamma</span>
              <Badge className="bg-yellow-900/50 text-yellow-300">Sync</Badge>
            </div>
          </div>
          <Separator className="bg-slate-600" />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Orbital Altitude</span>
              <span className="text-blue-400">550 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Link Quality</span>
              <span className="text-green-400">97.3%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Data Rate</span>
              <span className="text-purple-400">1.2 Gbps</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Non-Local Entanglement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Entanglement Distance</span>
              <span className="text-green-400">550.7 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Fidelity</span>
              <span className="text-blue-400">99.7%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Decoherence Time</span>
              <span className="text-purple-400">47.3 ms</span>
            </div>
          </div>
          <Alert className="bg-green-900/20 border-green-500/30">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <AlertDescription className="text-green-300">
              Non-local correlation confirmed across orbital distance
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};
