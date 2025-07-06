
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Power, Shield, Radio } from 'lucide-react';

export const EmergencyControls: React.FC = () => {
  return (
    <Card className="professional-shadow-lg border-destructive/20 bg-destructive/5 hover-lift">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center text-sm sm:text-base">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 status-pulse" />
          Emergency Protocols
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <Button variant="destructive" className="professional-shadow hover-lift text-xs sm:text-sm">
            <Power className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Emergency Shutdown
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 professional-shadow hover-lift text-xs sm:text-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Containment Protocol
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 professional-shadow hover-lift text-xs sm:text-sm sm:col-span-2 lg:col-span-1">
            <Radio className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Signal DARPA Control
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
