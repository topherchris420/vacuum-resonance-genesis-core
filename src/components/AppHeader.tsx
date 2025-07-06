
import React from 'react';
import { Badge } from '@/components/ui/badge';

export const AppHeader: React.FC = () => {
  return (
    <div className="text-center space-y-6 mb-8 sm:mb-12 fade-in">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img 
          src="/lovable-uploads/d419c948-f2e1-4265-99bb-172b8c554ed6.png" 
          alt="Vers3Dynamics Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover professional-shadow-lg hover-lift pulse-glow"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 tracking-tight">
            Non-Local Field State Manipulation
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg lg:text-xl font-medium">
            QVFR-8000 Quantum Vacuum Field Resonance System
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <Badge variant="secondary" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium professional-shadow hover-lift">
          TRL-7 OPERATIONAL
        </Badge>
        <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium professional-shadow hover-lift">
          CLASSIFIED: TS//SAR//REL
        </Badge>
        <Badge className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium accent-gradient text-white professional-shadow hover-lift glow-effect">
          CODENAME: SHADOW-WEAVER
        </Badge>
      </div>
    </div>
  );
};
