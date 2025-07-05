
import React, { useState } from 'react';
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
  Power
} from 'lucide-react';

const Index = () => {
  const [systemStatus, setSystemStatus] = useState({
    power: 'standby',
    temperature: -271.5,
    fieldStrength: 0,
    vacuumLevel: 1e-12
  });

  const components = {
    sensors: [
      { name: 'Quantum State Detector Array', model: 'QSD-7000X', sensitivity: '10⁻²¹ J resolution' },
      { name: 'Casimir Force Transducers', model: 'CFT-950', range: '0.1-100 pN' },
      { name: 'Cryogenic Temperature Sensors', model: 'CTS-mK', accuracy: '±0.001 K' },
      { name: 'Vacuum Pressure Gauges', model: 'VPG-UHV', range: '10⁻¹² to 10⁻⁶ Torr' },
      { name: 'Electromagnetic Field Probes', model: 'EFP-QM', bandwidth: 'DC-100 THz' }
    ],
    power: [
      { name: 'Dilution Refrigerator System', model: 'DRS-5000', cooling: '5 mK base temp' },
      { name: 'Superconducting Power Supply', model: 'SPS-QC', output: '±100V, 50A' },
      { name: 'UPS Battery Backup', model: 'UPS-Lab', capacity: '10 kVA, 30 min' },
      { name: 'Isolation Transformers', model: 'IT-Clean', filtering: '<0.01% THD' }
    ],
    materials: [
      { name: 'Niobium Superconductor Plates', purity: '99.99%', thickness: '2.5 mm' },
      { name: 'Sapphire Optical Windows', grade: 'UHV compatible', transmission: '>95%' },
      { name: 'Titanium Vacuum Chamber', grade: 'Grade 2', pressure: '10⁻¹² Torr' },
      { name: 'Copper-Beryllium Springs', type: 'Non-magnetic', temp: '2-300 K' }
    ],
    shielding: [
      { name: 'Mu-Metal Layers', layers: '3x nested', attenuation: '>80 dB @ 1 Hz' },
      { name: 'Faraday Cage Assembly', material: 'Copper mesh', effectiveness: '>100 dB' },
      { name: 'Vibration Isolation', type: 'Active pneumatic', rejection: '>40 dB' },
      { name: 'RF Shielding Enclosure', frequency: '10 Hz - 40 GHz', isolation: '>120 dB' }
    ],
    emitters: [
      { name: 'Quantum Field Modulators', type: 'Superconducting', frequency: '0.1-10 GHz' },
      { name: 'Casimir Plate Actuators', precision: '±1 nm', range: '10 nm - 10 μm' },
      { name: 'EM Field Generators', power: '1-1000 W', coherence: '>99%' },
      { name: 'Entanglement State Projectors', fidelity: '>95%', rate: '10⁶ Hz' }
    ],
    control: [
      { name: 'Quantum Control Processor', type: 'FPGA-based', latency: '<100 ns' },
      { name: 'Real-time Data Acquisition', channels: '256', sampling: '10⁹ samples/s' },
      { name: 'Feedback Control System', stability: '±0.001%', bandwidth: '1 MHz' },
      { name: 'Safety Interlock Matrix', redundancy: 'Triple', response: '<1 ms' }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                QVFR-8000 Quantum Vacuum Field Resonator
              </h1>
              <p className="text-muted-foreground mt-2">
                Advanced Cryogenic Quantum State Manipulation Apparatus • Vers3Dynamics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-accent border-accent">
                Lab-Grade Certified
              </Badge>
              <Badge variant="outline" className="text-primary border-primary">
                Modular Design
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="schematics">Schematics</TabsTrigger>
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="specifications">Specs</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Atom className="h-5 w-5 text-primary" />
                    <span>System Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The QVFR-8000 is a state-of-the-art experimental apparatus designed to manipulate quantum vacuum 
                    fluctuations through controlled Casimir effect modulation and localized field resonance. Operating 
                    at cryogenic temperatures (5 mK), the system enables precise quantum state displacement through 
                    zero-point energy symmetry disruption.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Thermometer className="h-4 w-4 text-blue-400" />
                        <span>Operating Temperature</span>
                      </div>
                      <p className="text-2xl font-mono text-blue-400">5 mK</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Radio className="h-4 w-4 text-green-400" />
                        <span>Field Precision</span>
                      </div>
                      <p className="text-2xl font-mono text-green-400">±1 nm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <span>Protection Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Faraday Shielding</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Vibration Isolation</span>
                    <Badge variant="secondary">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">RF Suppression</span>
                    <Badge variant="secondary">120 dB</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Magnetic Shielding</span>
                    <Badge variant="secondary">80 dB</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border border-border rounded-lg">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold">Quantum Field Control</h3>
                    <p className="text-sm text-muted-foreground mt-1">Precise vacuum fluctuation manipulation</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <Thermometer className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                    <h3 className="font-semibold">Cryogenic Operation</h3>
                    <p className="text-sm text-muted-foreground mt-1">Dilution refrigerator cooling</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <Database className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <h3 className="font-semibold">Modular Design</h3>
                    <p className="text-sm text-muted-foreground mt-1">Reconfigurable apparatus</p>
                  </div>
                  <div className="text-center p-4 border border-border rounded-lg">
                    <Eye className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-semibold">Real-time Monitoring</h3>
                    <p className="text-sm text-muted-foreground mt-1">High-resolution quantum state detection</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(components).map(([category, items]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="capitalize flex items-center space-x-2">
                      {category === 'sensors' && <Eye className="h-5 w-5" />}
                      {category === 'power' && <Power className="h-5 w-5" />}
                      {category === 'materials' && <Database className="h-5 w-5" />}
                      {category === 'shielding' && <Shield className="h-5 w-5" />}
                      {category === 'emitters' && <Radio className="h-5 w-5" />}
                      {category === 'control' && <Cpu className="h-5 w-5" />}
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((item, index) => (
                        <div key={index} className="border border-border rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.model || item.type || item.grade || item.material || item.layers}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.sensitivity || item.cooling || item.purity || item.attenuation || item.frequency || item.latency || 
                             item.range || item.output || item.thickness || item.effectiveness || item.precision || item.channels ||
                             item.accuracy || item.capacity || item.transmission || item.rejection || item.power || item.stability}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schematics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Chamber Layout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-card border-2 border-dashed border-border rounded-lg p-8 h-80">
                    {/* Main Chamber */}
                    <div className="absolute inset-4 border-2 border-primary rounded-lg bg-primary/5">
                      <div className="absolute top-2 left-2 text-xs font-mono text-primary">MAIN CHAMBER</div>
                      
                      {/* Casimir Plates */}
                      <div className="absolute top-1/2 left-1/4 w-1 h-16 bg-accent transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-accent transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-8 text-xs text-accent">Casimir Plates</div>
                      
                      {/* Field Emitters */}
                      <div className="absolute top-4 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 quantum-pulse"></div>
                      <div className="absolute bottom-4 left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-1/2 quantum-pulse"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-500">Field Emitters</div>
                      
                      {/* Sensors */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400 rounded"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-400 rounded"></div>
                    </div>
                    
                    {/* Shielding Layers */}
                    <div className="absolute inset-2 border border-yellow-600 rounded-lg opacity-50">
                      <div className="absolute -top-4 left-2 text-xs text-yellow-600">Faraday Shield</div>
                    </div>
                    <div className="absolute inset-1 border border-purple-600 rounded-lg opacity-30">
                      <div className="absolute -top-4 left-2 text-xs text-purple-600">Mu-Metal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Control Circuit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-card border-2 border-dashed border-border rounded-lg p-8 h-80">
                    {/* Control Processor */}
                    <div className="absolute top-4 left-4 w-16 h-12 bg-blue-500 rounded flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute top-2 left-4 text-xs text-blue-500">FPGA Controller</div>
                    
                    {/* Data Acquisition */}
                    <div className="absolute top-4 right-4 w-16 h-12 bg-green-500 rounded flex items-center justify-center">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute top-2 right-4 text-xs text-green-500">Data Acq</div>
                    
                    {/* Power Systems */}
                    <div className="absolute bottom-4 left-4 w-16 h-12 bg-red-500 rounded flex items-center justify-center">
                      <Power className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-4 text-xs text-red-500">Power Supply</div>
                    
                    {/* Safety Interlocks */}
                    <div className="absolute bottom-4 right-4 w-16 h-12 bg-yellow-500 rounded flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-4 text-xs text-yellow-500">Safety</div>
                    
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="80" y1="40" x2="240" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <line x1="80" y1="40" x2="80" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <line x1="240" y1="40" x2="240" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <line x1="80" y1="240" x2="240" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                      <line x1="160" y1="40" x2="160" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary rounded quantum-pulse"></div>
                      <span className="font-medium">Quantum Vacuum Chamber</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Primary interaction volume</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-400 rounded"></div>
                      <span className="font-medium">Cryogenic System</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Temperature stabilization</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-accent rounded field-resonance"></div>
                      <span className="font-medium">Field Generation Array</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Electromagnetic field control</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-400 rounded"></div>
                      <span className="font-medium">Detection & Monitoring</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Real-time quantum state analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Theoretical Foundation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Casimir Effect Modulation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The QVFR-8000 exploits the quantum Casimir effect by precisely controlling the boundary conditions 
                    between parallel superconducting plates. By modulating the plate separation at nanometer precision, 
                    we can manipulate the zero-point energy density between the plates, creating controllable regions 
                    of negative energy density.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-accent">
                      F_Casimir = -ℏcπ²A / (240d⁴) × η(λ,T,μ)
                    </code>
                    <p className="text-xs text-muted-foreground mt-2">
                      Where η represents the material-dependent correction factor for superconducting boundaries
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent">Zero-Point Energy Symmetry Disruption</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    By introducing controlled electromagnetic field gradients perpendicular to the Casimir plates, 
                    the system breaks the translational symmetry of the quantum vacuum. This symmetry breaking 
                    allows for directional manipulation of virtual particle pair creation and annihilation processes.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-primary">
                      ⟨T_μν⟩ = ⟨0|T_μν|0⟩ + δT_μν[E_ext, B_ext]
                    </code>
                    <p className="text-xs text-muted-foreground mt-2">
                      Modified stress-energy tensor under external field influence
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Entangled State Mapping</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The apparatus maintains quantum coherence through active environmental decoupling and employs 
                    entangled photon pairs to map the local quantum field state. This enables real-time monitoring 
                    of quantum vacuum modifications and provides feedback for closed-loop field control.
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <code className="text-sm font-mono text-purple-400">
                      |ψ⟩_sys = Σᵢ αᵢ|vac⟩ ⊗ |field⟩ᵢ ⊗ |detector⟩ᵢ
                    </code>
                    <p className="text-xs text-muted-foreground mt-2">
                      Tripartite entangled state for quantum field sensing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operating Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Phase 1: Initialization</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Achieve ultra-high vacuum (10⁻¹² Torr)</li>
                      <li>• Cool system to 5 mK base temperature</li>
                      <li>• Establish superconducting plate separation</li>
                      <li>• Calibrate sensor arrays and field generators</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-accent">Phase 2: Field Modulation</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Apply controlled electromagnetic fields</li>
                      <li>• Modulate Casimir plate separation</li>
                      <li>• Monitor quantum field fluctuations</li>
                      <li>• Maintain thermal and vibrational isolation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
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
