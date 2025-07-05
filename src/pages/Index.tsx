import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Atom, 
  Zap, 
  Thermometer, 
  Shield, 
  Cpu, 
  Radio,
  Database,
  Settings,
  Eye,
  Power,
  Lock,
  Satellite,
  Brain,
  Activity,
  AlertTriangle,
  Radar,
  Globe,
  Fingerprint,
  Layers,
  Target
} from 'lucide-react';

const Index = () => {
  const [systemStatus, setSystemStatus] = useState({
    power: 'standby',
    temperature: -271.5,
    fieldStrength: 0,
    vacuumLevel: 1e-12,
    securityLevel: 'ALPHA-7',
    metamaterialState: 'adaptive',
    quantumCoherence: 98.7,
    orbitalSync: 'synchronized',
    aiHeuristics: 'learning'
  });

  const [classificationLevel] = useState('SECRET//NOFORN');
  const [operationCodename] = useState('QUANTUM NEXUS');
  
  const [realTimeData, setRealTimeData] = useState({
    energyCore: 87.3,
    ionosphericResonance: 94.2,
    metamaterialAdaptivity: 91.8,
    quantumEntanglement: 96.4
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        energyCore: prev.energyCore + (Math.random() - 0.5) * 2,
        ionosphericResonance: prev.ionosphericResonance + (Math.random() - 0.5) * 1.5,
        metamaterialAdaptivity: prev.metamaterialAdaptivity + (Math.random() - 0.5) * 1.8,
        quantumEntanglement: prev.quantumEntanglement + (Math.random() - 0.5) * 1.2
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const advancedComponents = {
    metamaterials: [
      { name: 'Adaptive Meta-Surface Array', model: 'AMS-X9', capability: 'Real-time topology reshaping', trl: 6 },
      { name: 'Programmable Matter Core', model: 'PMC-2500', function: 'Dynamic wall reconfiguration', trl: 5 },
      { name: 'Metamaterial Field Modulators', model: 'MFM-QX', bandwidth: '0.1 Hz - 100 THz', trl: 7 },
      { name: 'Smart Composite Actuators', model: 'SCA-Nano', resolution: '10 pm positioning', trl: 6 }
    ],
    energySystems: [
      { name: 'Hybrid Photonic-Ionic Core', model: 'HPIC-5000', output: '50 MW continuous', trl: 4 },
      { name: 'Room-Temp Superconductors', model: 'RTS-Cu3', efficiency: '99.97% transfer', trl: 5 },
      { name: 'Quantum Battery Array', model: 'QBA-X12', capacity: '1.2 TJ storage', trl: 6 },
      { name: 'Zero-Point Energy Harvester', model: 'ZPEH-7', yield: '10 kW baseline', trl: 4 }
    ],
    aiSystems: [
      { name: 'Quantum-Classical AI Bridge', model: 'QCAB-Ω', processing: '10^18 FLOPS', trl: 5 },
      { name: 'Autonomous Diagnostics Engine', model: 'ADE-Prime', coverage: '99.99% fault detection', trl: 7 },
      { name: 'Adaptive Control Heuristics', model: 'ACH-Neural', learning: 'Real-time optimization', trl: 6 },
      { name: 'Predictive Failure Analysis', model: 'PFA-Quantum', accuracy: '98.7% prediction', trl: 8 }
    ],
    communications: [
      { name: 'Orbital Quantum Sensor Link', model: 'OQSL-Sat7', range: 'LEO-GEO coverage', trl: 6 },
      { name: 'Ionospheric Calibration Port', model: 'ICP-HF', frequency: '3-30 MHz adaptive', trl: 8 },
      { name: 'Entanglement Feedback Loop', model: 'EFL-Instant', latency: '<1 Planck time', trl: 4 },
      { name: 'Cross-Domain Modulator', model: 'CDM-Secure', encryption: 'Post-quantum crypto', trl: 7 }
    ],
    security: [
      { name: 'Cyber-Physical Shield Matrix', model: 'CPSM-Aegis', layers: 'Multi-domain protection', trl: 8 },
      { name: 'Quantum Encryption Gateway', model: 'QEG-Fortress', strength: 'Unbreakable QKD', trl: 7 },
      { name: 'Biometric Access Control', model: 'BAC-DNA', accuracy: '99.9999% verification', trl: 9 },
      { name: 'EM Signature Masking', model: 'ESM-Ghost', stealth: 'Full spectrum invisibility', trl: 6 }
    ],
    ruggedization: [
      { name: 'Battlefield-Grade Chassis', model: 'BGC-Titan', protection: 'EMP/NBC resistant', trl: 9 },
      { name: 'Adaptive Thermal Management', model: 'ATM-Phoenix', range: '-40°C to +85°C', trl: 8 },
      { name: 'Shock Absorption Matrix', model: 'SAM-Flex', tolerance: '50G impact survival', trl: 8 },
      { name: 'Self-Repair Mechanisms', model: 'SRM-Heal', capability: 'Autonomous restoration', trl: 5 }
    ]
  };

  const trlDescriptions = {
    4: 'Component validation in laboratory environment',
    5: 'Component validation in relevant environment',
    6: 'System/subsystem model demonstration',
    7: 'System prototype demonstration',
    8: 'System complete and qualified',
    9: 'Actual system proven in operational environment'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Classified Header */}
      <div className="border-b-2 border-red-600 bg-red-900/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="text-lg font-bold px-4 py-2">
                {classificationLevel}
              </Badge>
              <div className="text-red-400 font-mono text-sm">
                OPERATION: {operationCodename}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-red-400" />
              <span className="text-red-400 font-mono text-sm">DARPA CLASSIFIED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                QVFR-8000-X Adaptive Quantum Field Resonator
              </h1>
              <p className="text-muted-foreground mt-2">
                Advanced Metamaterial-Enhanced Quantum Manipulation Platform • Vers3Dynamics Defense Division
              </p>
              <div className="flex items-center space-x-4 mt-3">
                <Badge variant="outline" className="text-accent border-accent">
                  Programmable Matter Enabled
                </Badge>
                <Badge variant="outline" className="text-primary border-primary">
                  AI-Augmented Control
                </Badge>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  Orbital-Synchronized
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-primary">{systemStatus.securityLevel}</div>
              <div className="text-sm text-muted-foreground">Security Clearance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8 bg-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metamaterials">Metamaterials</TabsTrigger>
            <TabsTrigger value="energy">Energy Core</TabsTrigger>
            <TabsTrigger value="ai-control">AI Control</TabsTrigger>
            <TabsTrigger value="communications">Comms</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="trl-matrix">TRL Matrix</TabsTrigger>
            <TabsTrigger value="status">Live Status</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Alert className="border-yellow-600 bg-yellow-900/20">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-yellow-200">
                <strong>DARPA CLASSIFICATION NOTICE:</strong> This system incorporates breakthrough technologies 
                under multiple Special Access Programs. Unauthorized disclosure is prohibited under 18 USC 798.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>Advanced Capabilities Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The QVFR-8000-X represents a quantum leap in field manipulation technology, incorporating 
                    adaptive metamaterials that can reshape chamber topology in real-time. The system features 
                    programmable matter walls that dynamically reconfigure based on quantum field requirements, 
                    while AI-augmented control heuristics optimize performance through continuous learning algorithms.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Layers className="h-4 w-4 text-purple-400" />
                        <span>Metamaterial Layers</span>
                      </div>
                      <p className="text-2xl font-mono text-purple-400">12 Active</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Satellite className="h-4 w-4 text-green-400" />
                        <span>Orbital Sync Status</span>
                      </div>
                      <p className="text-2xl font-mono text-green-400">LOCKED</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-accent" />
                    <span>Mission-Critical Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Quantum Coherence</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{systemStatus.quantumCoherence}%</Badge>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Heuristics</span>
                    <Badge variant="secondary" className="capitalize">{systemStatus.aiHeuristics}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Metamaterial State</span>
                    <Badge variant="secondary" className="capitalize">{systemStatus.metamaterialState}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Orbital Synchronization</span>
                    <Badge variant="secondary" className="capitalize">{systemStatus.orbitalSync}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Real-Time Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-mono text-primary mb-2">
                      {realTimeData.energyCore.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Energy Core Output</div>
                    <Progress value={realTimeData.energyCore} className="h-2" />
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-mono text-accent mb-2">
                      {realTimeData.ionosphericResonance.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Ionospheric Resonance</div>
                    <Progress value={realTimeData.ionosphericResonance} className="h-2" />
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-mono text-purple-400 mb-2">
                      {realTimeData.metamaterialAdaptivity.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Metamaterial Adaptivity</div>
                    <Progress value={realTimeData.metamaterialAdaptivity} className="h-2" />
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <div className="text-3xl font-mono text-green-400 mb-2">
                      {realTimeData.quantumEntanglement.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Quantum Entanglement</div>
                    <Progress value={realTimeData.quantumEntanglement} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metamaterials" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(advancedComponents).slice(0, 2).map(([category, items]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="capitalize flex items-center space-x-2">
                      {category === 'metamaterials' && <Layers className="h-5 w-5 text-purple-400" />}
                      {category === 'energySystems' && <Zap className="h-5 w-5 text-orange-400" />}
                      <span>{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((item, index) => (
                        <div key={index} className="border border-border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <div className="flex space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {item.model}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                TRL {item.trl}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.capability || item.function || item.output || item.efficiency}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Programmable Matter Control Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-card border-2 border-dashed border-purple-600 rounded-lg p-8 h-80">
                  {/* Adaptive Chamber Walls */}
                  <div className="absolute inset-4 border-2 border-purple-400 rounded-lg bg-purple-400/10">
                    <div className="absolute top-2 left-2 text-xs font-mono text-purple-400">ADAPTIVE CHAMBER</div>
                    
                    {/* Metamaterial Nodes */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full field-resonance"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full field-resonance"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full field-resonance"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-400 rounded-full field-resonance"></div>
                    
                    {/* Dynamic Field Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      <path d="M 20 20 Q 100 50 180 20" stroke="url(#fieldGradient)" strokeWidth="2" fill="none" className="quantum-pulse" />
                      <path d="M 20 160 Q 100 130 180 160" stroke="url(#fieldGradient)" strokeWidth="2" fill="none" className="quantum-pulse" />
                      <path d="M 20 60 Q 50 100 20 140" stroke="url(#fieldGradient)" strokeWidth="2" fill="none" className="quantum-pulse" />
                      <path d="M 180 60 Q 150 100 180 140" stroke="url(#fieldGradient)" strokeWidth="2" fill="none" className="quantum-pulse" />
                    </svg>
                    
                    {/* Central Quantum Core */}
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 quantum-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Energy Core Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Operating Temperature</h4>
                      <p className="text-2xl font-mono text-blue-400">5 mK</p>
                      <p className="text-xs text-muted-foreground">Base temperature</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Vacuum Level</h4>
                      <p className="text-xl font-mono text-green-400">10⁻¹² Torr</p>
                      <p className="text-xs text-muted-foreground">Ultra-high vacuum</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Field Precision</h4>
                      <p className="text-xl font-mono text-accent">±1 nm</p>
                      <p className="text-xs text-muted-foreground">Plate positioning</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Detection Sensitivity</h4>
                      <p className="text-lg font-mono text-purple-400">10⁻²¹ J</p>
                      <p className="text-xs text-muted-foreground">Energy resolution</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium">Physical Dimensions</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-muted rounded">
                        <p className="font-mono">2.5m</p>
                        <p className="text-xs text-muted-foreground">Width</p>
                      </div>
                      <div className="text-center p-2 bg-muted rounded">
                        <p className="font-mono">3.0m</p>
                        <p className="text-xs text-muted-foreground">Height</p>
                      </div>
                      <div className="text-center p-2 bg-muted rounded">
                        <p className="font-mono">2.0m</p>
                        <p className="text-xs text-muted-foreground">Depth</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Quantum Coherence Time</span>
                        <span>10 ms</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Field Stability</span>
                        <span>99.9%</span>
                      </div>
                      <Progress value={99} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Measurement Precision</span>
                        <span>±0.001%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>System Uptime</span>
                        <span>99.8%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">ISO 9001</Badge>
                      <Badge variant="outline">CE Marked</Badge>
                      <Badge variant="outline">FCC Class A</Badge>
                      <Badge variant="outline">UL Listed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Facility Requirements</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Clean room environment (Class 100)</li>
                      <li>• Vibration-isolated foundation</li>
                      <li>• Dedicated 480V, 3-phase power</li>
                      <li>• Helium supply and recovery system</li>
                      <li>• Emergency shutdown systems</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Safety Systems</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Oxygen monitoring systems</li>
                      <li>• Magnetic field warning systems</li>
                      <li>• Emergency quench protection</li>
                      <li>• Personnel safety interlocks</li>
                      <li>• Fire suppression (clean agent)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Maintenance Schedule</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Daily: System status checks</li>
                      <li>• Weekly: Sensor calibration</li>
                      <li>• Monthly: Vacuum system service</li>
                      <li>• Quarterly: Cryogen system maintenance</li>
                      <li>• Annual: Full system recertification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-control" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-blue-400" />
                  <span>AI-Augmented Control Heuristics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {advancedComponents.aiSystems.map((system, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium">{system.name}</h4>
                        <Badge variant="secondary">TRL {system.trl}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{system.model}</p>
                      <p className="text-xs text-accent">
                        {system.processing || system.coverage || system.learning || system.accuracy}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Autonomous System Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-green-600 rounded-lg bg-green-900/20">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-5 w-5 text-green-400" />
                      <span>Quantum State Coherence Monitoring</span>
                    </div>
                    <Badge variant="secondary">ACTIVE</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-blue-600 rounded-lg bg-blue-900/20">
                    <div className="flex items-center space-x-3">
                      <Cpu className="h-5 w-5 text-blue-400" />
                      <span>Predictive Failure Analysis</span>
                    </div>
                    <Badge variant="secondary">LEARNING</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-purple-600 rounded-lg bg-purple-900/20">
                    <div className="flex items-center space-x-3">
                      <Eye className="h-5 w-5 text-purple-400" />
                      <span>Real-time Performance Optimization</span>
                    </div>
                    <Badge variant="secondary">OPTIMIZING</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Satellite className="h-5 w-5 text-green-400" />
                    <span>Orbital Quantum Sensor Network</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {advancedComponents.communications.map((comm, index) => (
                      <div key={index} className="border border-border rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{comm.name}</h4>
                          <Badge variant="secondary" className="text-xs">TRL {comm.trl}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {comm.range || comm.frequency || comm.latency || comm.encryption}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span>Ionospheric Calibration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-card border-2 border-dashed border-blue-600 rounded-lg p-6 h-60">
                    <div className="absolute top-2 left-2 text-xs font-mono text-blue-400">IONOSPHERE INTERFACE</div>
                    
                    {/* Ionospheric Layers */}
                    <div className="absolute inset-x-4 top-8 h-8 border border-blue-400 rounded bg-blue-400/10">
                      <div className="text-xs text-blue-400 p-1">F2 Layer (300-400 km)</div>
                    </div>
                    <div className="absolute inset-x-4 top-20 h-6 border border-blue-300 rounded bg-blue-300/10">
                      <div className="text-xs text-blue-300 p-1">F1 Layer (200-300 km)</div>
                    </div>
                    <div className="absolute inset-x-4 top-28 h-4 border border-cyan-400 rounded bg-cyan-400/10">
                      <div className="text-xs text-cyan-400 p-1">E Layer (90-120 km)</div>
                    </div>
                    
                    {/* Communication Beams */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="20" y1="200" x2="100" y2="50" stroke="rgb(34, 197, 94)" strokeWidth="2" className="quantum-pulse" />
                      <line x1="180" y1="200" x2="100" y2="50" stroke="rgb(34, 197, 94)" strokeWidth="2" className="quantum-pulse" />
                      <circle cx="100" cy="50" r="4" fill="rgb(34, 197, 94)" className="field-resonance" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Alert className="border-red-600 bg-red-900/20">
              <Lock className="h-4 w-4" />
              <AlertDescription className="text-red-200">
                <strong>SECURITY CLASSIFICATION:</strong> Multi-layered cyber-physical protection with post-quantum 
                cryptography and biometric access control. Unauthorized access triggers automatic data destruction.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-400" />
                    <span>Cyber-Physical Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {advancedComponents.security.map((security, index) => (
                      <div key={index} className="border border-red-600/30 rounded-lg p-3 bg-red-900/10">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{security.name}</h4>
                          <Badge variant="destructive" className="text-xs">TRL {security.trl}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {security.layers || security.strength || security.accuracy || security.stealth}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Fingerprint className="h-5 w-5 text-purple-400" />
                    <span>Access Control Matrix</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-red-900/20 border border-red-600 rounded">
                        <div className="font-mono text-red-400">ALPHA</div>
                        <div className="text-muted-foreground">System Admin</div>
                      </div>
                      <div className="text-center p-2 bg-orange-900/20 border border-orange-600 rounded">
                        <div className="font-mono text-orange-400">BETA</div>
                        <div className="text-muted-foreground">Operator</div>
                      </div>
                      <div className="text-center p-2 bg-yellow-900/20 border border-yellow-600 rounded">
                        <div className="font-mono text-yellow-400">GAMMA</div>
                        <div className="text-muted-foreground">Observer</div>
                      </div>
                    </div>
                    <Separator />
                    <div className="text-center">
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        CURRENT: {systemStatus.securityLevel}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trl-matrix" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technology Readiness Level Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(trlDescriptions).map(([level, description]) => {
                    const componentsAtTRL = Object.values(advancedComponents)
                      .flat()
                      .filter(comp => comp.trl === parseInt(level));
                    
                    return (
                      <div key={level} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold">TRL {level}</h3>
                          <Badge variant="outline">{componentsAtTRL.length} Components</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {componentsAtTRL.map((comp, index) => (
                            <div key={index} className="text-sm p-2 bg-muted rounded">
                              <div className="font-medium">{comp.name}</div>
                              <div className="text-xs text-muted-foreground">{comp.model}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="text-2xl font-mono text-blue-400 mb-1">
                        {systemStatus.temperature}°C
                      </div>
                      <div className="text-sm text-muted-foreground">Temperature</div>
                    </div>
                    
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="text-2xl font-mono text-green-400 mb-1">
                        {systemStatus.vacuumLevel}
                      </div>
                      <div className="text-sm text-muted-foreground">Vacuum (Torr)</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Power System</span>
                        <Badge variant="secondary">Standby</Badge>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cooling System</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Field Generation</span>
                        <Badge variant="outline">Offline</Badge>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Control Panel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-16 flex-col space-y-1"
                      onClick={() => setSystemStatus(prev => ({
                        ...prev,
                        power: prev.power === 'standby' ? 'active' : 'standby'
                      }))}
                    >
                      <Power className="h-6 w-6" />
                      <span className="text-xs">System Power</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex-col space-y-1">
                      <Thermometer className="h-6 w-6" />
                      <span className="text-xs">Cooldown</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex-col space-y-1">
                      <Radio className="h-6 w-6" />
                      <span className="text-xs">Field Control</span>
                    </Button>
                    
                    <Button variant="outline" className="h-16 flex-col space-y-1">
                      <Eye className="h-6 w-6" />
                      <span className="text-xs">Monitoring</span>
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recent Events</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center p-2 bg-muted rounded">
                        <span>System initialized</span>
                        <span className="text-muted-foreground">12:34:56</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted rounded">
                        <span>Vacuum achieved</span>
                        <span className="text-muted-foreground">12:35:12</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted rounded">
                        <span>Cooling cycle started</span>
                        <span className="text-muted-foreground">12:35:45</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
