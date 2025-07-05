
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const AppHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6 mb-12 fade-in">
      <div className="flex items-center justify-center space-x-6">
        <img 
          src="/lovable-uploads/d419c948-f2e1-4265-99bb-172b8c554ed6.png" 
          alt="Vers3Dynamics Logo"
          className="w-20 h-20 rounded-2xl object-cover professional-shadow-lg"
        />
        <div>
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Non-Local Field State Manipulation</h1>
          <p className="text-muted-foreground text-xl font-medium">QVFR-8000 Quantum Vacuum Field Resonance System</p>
        </div>
      </div>
      <div className="flex justify-center space-x-3">
        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium professional-shadow">
          TRL-7 OPERATIONAL
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-sm font-medium professional-shadow">
          CLASSIFIED: TS//SAR//REL
        </Badge>
        <Badge className="px-4 py-2 text-sm font-medium accent-gradient text-white professional-shadow">
          CODENAME: SHADOW-WEAVER
        </Badge>
      </div>
    </div>
  );
};
