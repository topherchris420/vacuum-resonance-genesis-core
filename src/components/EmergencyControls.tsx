
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Power, Shield, Radio } from 'lucide-react';

export const EmergencyControls: React.FC = () => {
  return (
    <Card className="bg-red-900/20 border-red-500/30">
      <CardHeader>
        <CardTitle className="text-red-300 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Emergency Protocols
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            <Power className="w-4 h-4 mr-2" />
            Emergency Shutdown
          </Button>
          <Button variant="outline" className="border-yellow-500 text-yellow-300 hover:bg-yellow-900/20">
            <Shield className="w-4 h-4 mr-2" />
            Containment Protocol
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-900/20">
            <Radio className="w-4 h-4 mr-2" />
            Signal DARPA Control
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
