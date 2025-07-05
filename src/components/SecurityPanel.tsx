
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock } from 'lucide-react';

export const SecurityPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Physical Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Facility Access</span>
              <Badge className="bg-red-900/50 text-red-300">Restricted</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Biometric Auth</span>
              <Badge className="bg-green-900/50 text-green-300">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Tamper Detection</span>
              <Badge className="bg-green-900/50 text-green-300">Armed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Cyber Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Encryption</span>
              <span className="text-green-400">AES-256-GCM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Network Isolation</span>
              <Badge className="bg-green-900/50 text-green-300">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Intrusion Detection</span>
              <Badge className="bg-green-900/50 text-green-300">Monitoring</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-cyan-300">Classification Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center">
            <Badge className="bg-red-900/50 text-red-300 text-lg p-2">
              TOP SECRET//SAR//REL
            </Badge>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Compartment</span>
              <span className="text-red-400">SHADOW-WEAVER</span>
            </div>
            <div className="flex justify-between">
              <span>Authority</span>
              <span className="text-red-400">DARPA/DSO</span>
            </div>
            <div className="flex justify-between">
              <span>Clearance Req</span>
              <span className="text-red-400">TS/SCI</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
