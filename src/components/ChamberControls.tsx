
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ChamberControls: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Vacuum Chamber Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Pressure</span>
              <span className="text-green-400">1.2e-12 Torr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Wall Material</span>
              <span className="text-blue-400">Graphene-CNT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Shielding</span>
              <span className="text-green-400">Faraday Active</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Field Emitters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
              <div className="text-green-400 font-bold">NE</div>
              <div className="text-xs">Active</div>
            </div>
            <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
              <div className="text-green-400 font-bold">NW</div>
              <div className="text-xs">Active</div>
            </div>
            <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
              <div className="text-green-400 font-bold">SE</div>
              <div className="text-xs">Active</div>
            </div>
            <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
              <div className="text-green-400 font-bold">SW</div>
              <div className="text-xs">Active</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Environmental</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Vibration</span>
              <span className="text-green-400">Isolated</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">EMI Shielding</span>
              <span className="text-green-400">-120 dB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Thermal Noise</span>
              <span className="text-green-400">Minimal</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
