
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
import { QuantumFieldVisualizer } from '@/components/QuantumFieldVisualizer';
import { AIAssistant } from '@/components/AIAssistant';
import { ThreatMonitor } from '@/components/ThreatMonitor';
import { VoiceControl } from '@/components/VoiceControl';

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
    <div className="min-h-screen bg-background p-3 sm:p-6 grid-pattern">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Military Status Header */}
        <div className="tactical-shadow-lg bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-military-green/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-military-green rounded-full status-indicator"></div>
              <span className="text-xs font-mono text-military-green tracking-wider">SYSTEM ONLINE</span>
            </div>
            <div className="text-xs font-mono text-steel-gray">
              LAST UPDATE: {new Date().toLocaleTimeString()} UTC
            </div>
          </div>
        </div>
        
        <AppHeader />
        
        <div className="slide-up-tactical">
          <SystemStatusCards 
            quantumCoherence={quantumCoherence}
            fieldStrength={fieldStrength}
            temperature={temperature}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6 scale-in-tactical">
          <div className="overflow-x-auto">
            <TabsList className="flex w-max min-w-full md:grid md:grid-cols-10 bg-muted border border-border tactical-shadow font-mono">
              <TabsTrigger value="overview" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">OVERVIEW</TabsTrigger>
              <TabsTrigger value="chamber" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">CHAMBER</TabsTrigger>
              <TabsTrigger value="quantum-viz" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">QUANTUM VIZ</TabsTrigger>
              <TabsTrigger value="ai-assistant" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">AI COMMAND</TabsTrigger>
              <TabsTrigger value="threat-monitor" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">THREATS</TabsTrigger>
              <TabsTrigger value="voice-control" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">VOICE</TabsTrigger>
              <TabsTrigger value="energy" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">ENERGY</TabsTrigger>
              <TabsTrigger value="orbital" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">ORBITAL</TabsTrigger>
              <TabsTrigger value="security" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">SECURITY</TabsTrigger>
              <TabsTrigger value="diagnostics" className="text-xs sm:text-sm whitespace-nowrap tracking-wider">DIAGNOSTICS</TabsTrigger>
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

          <TabsContent value="quantum-viz" className="space-y-4">
            <QuantumFieldVisualizer />
          </TabsContent>

          <TabsContent value="ai-assistant" className="space-y-4">
            <AIAssistant />
          </TabsContent>

          <TabsContent value="threat-monitor" className="space-y-4">
            <ThreatMonitor />
          </TabsContent>

          <TabsContent value="voice-control" className="space-y-4">
            <VoiceControl />
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

        <div className="slide-up-tactical">
          <EmergencyControls />
        </div>
      </div>
    </div>
  );
};

export default Index;
