
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const AppHeader: React.FC = () => {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="flex items-center justify-center space-x-4">
        <img 
          src="/lovable-uploads/d419c948-f2e1-4265-99bb-172b8c554ed6.png" 
          alt="Vers3Dynamics Logo"
          className="w-16 h-16 rounded-lg object-cover border-2 border-cyan-400/30"
        />
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Non-Local Field State Manipulation</h1>
          <p className="text-cyan-300 text-lg">QVFR-8000 Quantum Vacuum Field Resonance System</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Badge variant="outline" className="bg-green-900/50 text-green-300 border-green-500">
          TRL-7 OPERATIONAL
        </Badge>
        <Badge variant="outline" className="bg-blue-900/50 text-blue-300 border-blue-500">
          CLASSIFIED: TS//SAR//REL
        </Badge>
        <Badge variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-500">
          CODENAME: SHADOW-WEAVER
        </Badge>
      </div>
    </div>
  );
};
