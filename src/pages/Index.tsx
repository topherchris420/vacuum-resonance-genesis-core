
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppHeader } from '@/components/AppHeader';
import { SystemStatusCards } from '@/components/SystemStatusCards';
import { SystemSchematic } from '@/components/SystemSchematic';
import { CriticalParameters } from '@/components/CriticalParameters';
import { ChamberControls } from '@/components/ChamberControls';
import { MetamaterialMatrix } from '@/components/MetamaterialMatrix';
import { EnergyCore } from '@/components/EnergyCore';
import { QuantumAI } from '@/components/QuantumAI';
import { OrbitalSync } from '@/components/OrbitalSync';
import { SecurityPanel } from '@/components/SecurityPanel';
import { DiagnosticsPanel } from '@/components/DiagnosticsPanel';
import { EmergencyControls } from '@/components/EmergencyControls';

const Index = () => {
  const [quantumCoherence, setQuantumCoherence] = useState(87.3);
  const [fieldStrength, setFieldStrength] = useState(42.7);
  const [temperature, setTemperature] = useState(-271.15);
  const [energyOutput, setEnergyOutput] = useState(1247.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumCoherence(prev => Math.max(80, Math.min(95, prev + (Math.random() - 0.5) * 2)));
      setFieldStrength(prev => Math.max(35, Math.min(50, prev + (Math.random() - 0.5) * 3)));
      setEnergyOutput(prev => Math.max(1000, Math.min(1500, prev + (Math.random() - 0.5) * 50)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background p-3 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <AppHeader />
        
        <div className="slide-up">
          <SystemStatusCards 
            quantumCoherence={quantumCoherence}
            fieldStrength={fieldStrength}
            temperature={temperature}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6 scale-in">
          <div className="overflow-x-auto">
            <TabsList className="flex w-max min-w-full md:grid md:grid-cols-8 bg-muted border border-border professional-shadow">
              <TabsTrigger value="overview" className="text-xs sm:text-sm whitespace-nowrap">Overview</TabsTrigger>
              <TabsTrigger value="chamber" className="text-xs sm:text-sm whitespace-nowrap">Chamber</TabsTrigger>
              <TabsTrigger value="metamaterials" className="text-xs sm:text-sm whitespace-nowrap">Metamaterials</TabsTrigger>
              <TabsTrigger value="energy" className="text-xs sm:text-sm whitespace-nowrap">Energy Core</TabsTrigger>
              <TabsTrigger value="quantum" className="text-xs sm:text-sm whitespace-nowrap">Quantum AI</TabsTrigger>
              <TabsTrigger value="orbital" className="text-xs sm:text-sm whitespace-nowrap">Orbital Sync</TabsTrigger>
              <TabsTrigger value="security" className="text-xs sm:text-sm whitespace-nowrap">Security</TabsTrigger>
              <TabsTrigger value="diagnostics" className="text-xs sm:text-sm whitespace-nowrap">Diagnostics</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SystemSchematic />
              <CriticalParameters />
            </div>
          </TabsContent>

          <TabsContent value="chamber" className="space-y-4">
            <ChamberControls />
          </TabsContent>

          <TabsContent value="metamaterials" className="space-y-4">
            <MetamaterialMatrix />
          </TabsContent>

          <TabsContent value="energy" className="space-y-4">
            <EnergyCore energyOutput={energyOutput} />
          </TabsContent>

          <TabsContent value="quantum" className="space-y-4">
            <QuantumAI />
          </TabsContent>

          <TabsContent value="orbital" className="space-y-4">
            <OrbitalSync />
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <SecurityPanel />
          </TabsContent>

          <TabsContent value="diagnostics" className="space-y-4">
            <DiagnosticsPanel />
          </TabsContent>
        </Tabs>

        <div className="slide-up">
          <EmergencyControls />
        </div>
      </div>
    </div>
  );
};

export default Index;
