
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Power, Shield, Radio } from 'lucide-react';

export const EmergencyControls: React.FC = () => {
  return (
    <Card className="professional-shadow-lg border-destructive/20 bg-destructive/5">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Emergency Protocols
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="destructive" className="professional-shadow hover:shadow-lg">
            <Power className="w-4 h-4 mr-2" />
            Emergency Shutdown
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 professional-shadow">
            <Shield className="w-4 h-4 mr-2" />
            Containment Protocol
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 professional-shadow">
            <Radio className="w-4 h-4 mr-2" />
            Signal DARPA Control
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
