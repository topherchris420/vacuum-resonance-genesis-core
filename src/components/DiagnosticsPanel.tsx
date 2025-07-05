
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Settings } from 'lucide-react';

export const DiagnosticsPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Self-Diagnostics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">System Health</span>
              <Badge className="bg-green-900/50 text-green-300">Optimal</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Component Status</span>
              <span className="text-green-400">47/47 Nominal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Last Full Scan</span>
              <span className="text-blue-400">14:20:33</span>
            </div>
          </div>
          <Separator className="bg-slate-600" />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Run Full Diagnostics
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">TRL Progression</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {[
              { level: 'TRL-4', name: 'Lab Validation', status: 'Complete', color: 'green' },
              { level: 'TRL-5', name: 'Relevant Environment', status: 'Complete', color: 'green' },
              { level: 'TRL-6', name: 'Prototype Demo', status: 'Complete', color: 'green' },
              { level: 'TRL-7', name: 'System Prototype', status: 'Current', color: 'blue' },
              { level: 'TRL-8', name: 'System Complete', status: 'In Progress', color: 'yellow' },
              { level: 'TRL-9', name: 'System Proven', status: 'Planned', color: 'gray' }
            ].map((trl, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm">{trl.level}: {trl.name}</span>
                <Badge className={`bg-${trl.color}-900/50 text-${trl.color}-300`}>
                  {trl.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
