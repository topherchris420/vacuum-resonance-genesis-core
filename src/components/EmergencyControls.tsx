
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Power, Shield, Radio } from 'lucide-react';

export const EmergencyControls: React.FC = () => {
  return (
    <Card className="tactical-shadow-lg border-military-red/30 bg-military-red/5 tactical-hover">
      <CardHeader className="pb-4">
        <CardTitle className="text-military-red flex items-center text-sm sm:text-base font-mono tracking-wider uppercase">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 status-indicator" />
          ⚠ Emergency Protocols
        </CardTitle>
        <p className="text-xs font-mono text-steel-gray mt-2">
          AUTHORIZED PERSONNEL ONLY - LEVEL 5 CLEARANCE REQUIRED
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <Button 
            variant="destructive" 
            className="tactical-shadow tactical-hover text-xs sm:text-sm font-mono tracking-wider bg-military-red hover:bg-military-red/80"
          >
            <Power className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            EMERGENCY SHUTDOWN
          </Button>
          <Button 
            variant="outline" 
            className="border-military-amber text-military-amber hover:bg-military-amber/10 tactical-shadow tactical-hover text-xs sm:text-sm font-mono tracking-wider"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            CONTAINMENT PROTOCOL
          </Button>
          <Button 
            variant="outline" 
            className="border-military-blue text-military-blue hover:bg-military-blue/10 tactical-shadow tactical-hover text-xs sm:text-sm font-mono tracking-wider sm:col-span-2 lg:col-span-1"
          >
            <Radio className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            SIGNAL DARPA CONTROL
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
