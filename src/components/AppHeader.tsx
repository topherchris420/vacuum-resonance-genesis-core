
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const AppHeader: React.FC = () => {
  return (
    <div className="text-center space-y-8 mb-8 sm:mb-12 fade-in-tactical border-b border-border pb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="relative">
          <img 
            src="/lovable-uploads/d419c948-f2e1-4265-99bb-172b8c554ed6.png" 
            alt="Classification Badge"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover tactical-shadow tactical-glow"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-military-green rounded-full status-indicator"></div>
        </div>
        <div className="text-center sm:text-left space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-wider monospace">
            NON-LOCAL FIELD STATE MANIPULATION
          </h1>
          <p className="text-steel-gray text-sm sm:text-base lg:text-lg font-mono tracking-wide">
            QVFR-8000 QUANTUM VACUUM FIELD RESONANCE SYSTEM
          </p>
          <p className="text-xs text-military-amber font-mono">
            SYSTEM STATUS: ACTIVE | CLEARANCE: TS//SAP//REL
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <Badge variant="secondary" className="px-4 py-2 text-xs font-mono tracking-wider tactical-shadow border-military-green/30">
          ● TRL-7 OPERATIONAL
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-xs font-mono tracking-wider tactical-shadow border-military-amber text-military-amber">
          ⚠ CLASSIFIED: TS//SAR//REL
        </Badge>
        <Badge className="px-4 py-2 text-xs font-mono tracking-wider military-gradient tactical-shadow">
          🔒 CODENAME: SHADOW-WEAVER
        </Badge>
      </div>
    </div>
  );
};
