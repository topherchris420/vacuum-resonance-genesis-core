
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Atom } from 'lucide-react';

export const SystemSchematic: React.FC = () => {
  return (
    <Card className="bg-slate-800/80 border-slate-700">
      <CardHeader>
        <CardTitle className="text-cyan-300 flex items-center">
          <Target className="w-5 h-5 mr-2" />
          QVFR-8000 System Architecture
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-slate-900/50 rounded-lg p-4 h-80 border border-slate-600">
          <div className="absolute inset-4 border-2 border-cyan-500/50 rounded-lg">
            <div className="text-center text-cyan-300 text-xs mt-2">VACUUM CHAMBER</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center quantum-pulse">
                <Atom className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-2 left-2 text-xs text-slate-400">Field Emitters: 4x Active</div>
          <div className="absolute bottom-2 right-2 text-xs text-slate-400">Metamaterial Walls: Adaptive</div>
        </div>
      </CardContent>
    </Card>
  );
};
