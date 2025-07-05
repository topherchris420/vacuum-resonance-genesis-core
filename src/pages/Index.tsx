
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <AppHeader />
        
        <SystemStatusCards 
          quantumCoherence={quantumCoherence}
          fieldStrength={fieldStrength}
          temperature={temperature}
        />

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-8 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="chamber" className="text-xs">Chamber</TabsTrigger>
            <TabsTrigger value="metamaterials" className="text-xs">Metamaterials</TabsTrigger>
            <TabsTrigger value="energy" className="text-xs">Energy Core</TabsTrigger>
            <TabsTrigger value="quantum" className="text-xs">Quantum AI</TabsTrigger>
            <TabsTrigger value="orbital" className="text-xs">Orbital Sync</TabsTrigger>
            <TabsTrigger value="security" className="text-xs">Security</TabsTrigger>
            <TabsTrigger value="diagnostics" className="text-xs">Diagnostics</TabsTrigger>
          </TabsList>

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

        <EmergencyControls />
      </div>
    </div>
  );
};

export default Index;
