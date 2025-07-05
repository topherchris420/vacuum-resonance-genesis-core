import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Atom, 
  Zap, 
  Shield, 
  Thermometer,
  Activity,
  Radio,
  Cpu,
  Eye,
  Lock,
  Satellite,
  AlertTriangle,
  CheckCircle,
  Settings,
  Power,
  Target,
  Waves,
  Gauge
} from 'lucide-react';

const Index = () => {
  const [systemStatus, setSystemStatus] = useState('standby');
  const [quantumCoherence, setQuantumCoherence] = useState(87.3);
  const [fieldStrength, setFieldStrength] = useState(42.7);
  const [temperature, setTemperature] = useState(-271.15);
  const [energyOutput, setEnergyOutput] = useState(1247.8);
  const [securityLevel, setSecurityLevel] = useState('MAXIMUM');
  const [orbitalSync, setOrbitalSync] = useState(true);
  const [metamaterialState, setMetamaterialState] = useState('adaptive');

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
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/lovable-uploads/d419c948-f2e1-4265-99bb-172b8c554ed6.png" 
              alt="Vers3Dynamics Logo"
              className="w-16 h-16 rounded-lg object-cover border-2 border-cyan-400/30"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Non-Local Field State Manipulation</h1>
              <p className="text-cyan-300 text-lg">QVFR-8000 Quantum Vacuum Field Resonance System</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="bg-green-900/50 text-green-300 border-green-500">
              TRL-7 OPERATIONAL
            </Badge>
            <Badge variant="outline" className="bg-blue-900/50 text-blue-300 border-blue-500">
              CLASSIFIED: TS//SAR//REL
            </Badge>
            <Badge variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-500">
              CODENAME: SHADOW-WEAVER
            </Badge>
          </div>
        </div>

        {/* System Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/80 border-cyan-500/30 quantum-glow">
            <CardHeader className="pb-2">
              <CardTitle className="text-cyan-300 text-sm flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400 mb-1">OPERATIONAL</div>
              <div className="text-xs text-slate-400">All systems nominal</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-blue-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-300 text-sm flex items-center">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Coherence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400 mb-1">{quantumCoherence.toFixed(1)}%</div>
              <Progress value={quantumCoherence} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-green-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-green-300 text-sm flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Field Strength
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400 mb-1">{fieldStrength.toFixed(1)} T</div>
              <div className="text-xs text-slate-400">Tesla units</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/80 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-300 text-sm flex items-center">
                <Thermometer className="w-4 h-4 mr-2" />
                Core Temp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400 mb-1">{temperature}°C</div>
              <div className="text-xs text-slate-400">Near absolute zero</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Control Interface */}
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
              {/* System Schematic */}
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    QVFR-8000 System Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-slate-900/50 rounded-lg p-4 h-80 border border-slate-600">
                    <div className="absolute inset-4 border-2 border-cyan-500/50 rounded-lg">
                      <div className="text-center text-cyan-300 text-xs mt-2">VACUUM CHAMBER</div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center quantum-pulse">
                          <Atom className="w-8 h-8 text-green-400" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-slate-400">Field Emitters: 4x Active</div>
                    <div className="absolute bottom-2 right-2 text-xs text-slate-400">Metamaterial Walls: Adaptive</div>
                  </div>
                </CardContent>
              </Card>

              {/* Critical Parameters */}
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Gauge className="w-5 h-5 mr-2" />
                    Critical Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Casimir Pressure</span>
                      <span className="text-green-400 font-mono">-8.74e-12 Pa</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Zero-Point Modulation</span>
                      <span className="text-blue-400 font-mono">127.3 Hz</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Entanglement Fidelity</span>
                      <span className="text-purple-400 font-mono">99.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-300">Field Topology</span>
                      <span className="text-orange-400 font-mono">Dynamic</span>
                    </div>
                  </div>
                  <Separator className="bg-slate-600" />
                  <Alert className="bg-green-900/20 border-green-500/30">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">
                      All quantum states within acceptable coherence thresholds
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chamber" className="space-y-4">
            {/* Chamber controls and monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Vacuum Chamber Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Pressure</span>
                      <span className="text-green-400">1.2e-12 Torr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Wall Material</span>
                      <span className="text-blue-400">Graphene-CNT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Shielding</span>
                      <span className="text-green-400">Faraday Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Field Emitters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
                      <div className="text-green-400 font-bold">NE</div>
                      <div className="text-xs">Active</div>
                    </div>
                    <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
                      <div className="text-green-400 font-bold">NW</div>
                      <div className="text-xs">Active</div>
                    </div>
                    <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
                      <div className="text-green-400 font-bold">SE</div>
                      <div className="text-xs">Active</div>
                    </div>
                    <div className="text-center p-2 bg-green-900/30 rounded border border-green-500/30">
                      <div className="text-green-400 font-bold">SW</div>
                      <div className="text-xs">Active</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Environmental</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Vibration</span>
                      <span className="text-green-400">Isolated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">EMI Shielding</span>
                      <span className="text-green-400">-120 dB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Thermal Noise</span>
                      <span className="text-green-400">Minimal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="metamaterials" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Adaptive Metamaterial Matrix</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="aspect-square bg-slate-700 rounded border border-cyan-500/30 flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-green-400 quantum-pulse' : 'bg-blue-400'}`}></div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 text-center">
                    16-segment programmable matter array
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Material Properties</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Refractive Index</span>
                      <span className="text-green-400">-1.73 (negative)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Permeability</span>
                      <span className="text-blue-400">Variable μ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="text-purple-400">12.3 ps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Topology State</span>
                      <span className="text-orange-400">Adaptive</span>
                    </div>
                  </div>
                  <Separator className="bg-slate-600" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Reconfigure Matrix
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="energy" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Photonic Core
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Output Power</span>
                      <span className="text-green-400">{energyOutput.toFixed(1)} kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Efficiency</span>
                      <span className="text-blue-400">97.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Wavelength</span>
                      <span className="text-purple-400">1550 nm</span>
                    </div>
                  </div>
                  <Progress value={energyOutput / 15} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Ionic Subsystem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Ion Density</span>
                      <span className="text-green-400">1.2e15 cm⁻³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Plasma Temp</span>
                      <span className="text-orange-400">8.7 keV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Confinement</span>
                      <span className="text-blue-400">Magnetic</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Superconductors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Critical Temp</span>
                      <span className="text-green-400">295 K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Current Density</span>
                      <span className="text-blue-400">1.2 MA/cm²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Resistance</span>
                      <span className="text-green-400">0.00 Ω</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quantum" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    AI Control Heuristics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Neural Network</span>
                      <Badge className="bg-green-900/50 text-green-300">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Learning Rate</span>
                      <span className="text-blue-400">0.001</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prediction Accuracy</span>
                      <span className="text-green-400">94.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Optimization Cycles</span>
                      <span className="text-purple-400">1,247,392</span>
                    </div>
                  </div>
                  <Separator className="bg-slate-600" />
                  <Alert className="bg-blue-900/20 border-blue-500/30">
                    <Activity className="h-4 w-4 text-blue-400" />
                    <AlertDescription className="text-blue-300">
                      AI continuously optimizing field parameters for maximum coherence
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Quantum State Logging</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-slate-900/50 rounded p-3 text-xs font-mono space-y-1">
                    <div className="text-green-400">[2024-07-05 14:23:17] Coherence: 89.2% → 91.4%</div>
                    <div className="text-blue-400">[2024-07-05 14:23:15] Field adjustment: +2.3T</div>
                    <div className="text-purple-400">[2024-07-05 14:23:12] Entanglement verified</div>
                    <div className="text-orange-400">[2024-07-05 14:23:09] Topology reshape complete</div>
                    <div className="text-green-400">[2024-07-05 14:23:06] AI optimization cycle 1247392</div>
                  </div>
                  <Button className="w-full bg-slate-600 hover:bg-slate-700 text-sm">
                    Export Log Archive
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orbital" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Satellite className="w-5 h-5 mr-2" />
                    Orbital Quantum Sensors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">QSAT-Alpha</span>
                      <Badge className="bg-green-900/50 text-green-300">Linked</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">QSAT-Beta</span>
                      <Badge className="bg-green-900/50 text-green-300">Linked</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">QSAT-Gamma</span>
                      <Badge className="bg-yellow-900/50 text-yellow-300">Sync</Badge>
                    </div>
                  </div>
                  <Separator className="bg-slate-600" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Orbital Altitude</span>
                      <span className="text-blue-400">550 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Link Quality</span>
                      <span className="text-green-400">97.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Data Rate</span>
                      <span className="text-purple-400">1.2 Gbps</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Non-Local Entanglement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Entanglement Distance</span>
                      <span className="text-green-400">550.7 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Fidelity</span>
                      <span className="text-blue-400">99.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Decoherence Time</span>
                      <span className="text-purple-400">47.3 ms</span>
                    </div>
                  </div>
                  <Alert className="bg-green-900/20 border-green-500/30">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">
                      Non-local correlation confirmed across orbital distance
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Physical Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Facility Access</span>
                      <Badge className="bg-red-900/50 text-red-300">Restricted</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Biometric Auth</span>
                      <Badge className="bg-green-900/50 text-green-300">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tamper Detection</span>
                      <Badge className="bg-green-900/50 text-green-300">Armed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Cyber Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Encryption</span>
                      <span className="text-green-400">AES-256-GCM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Network Isolation</span>
                      <Badge className="bg-green-900/50 text-green-300">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Intrusion Detection</span>
                      <Badge className="bg-green-900/50 text-green-300">Monitoring</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Classification Level</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <Badge className="bg-red-900/50 text-red-300 text-lg p-2">
                      TOP SECRET//SAR//REL
                    </Badge>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Compartment</span>
                      <span className="text-red-400">SHADOW-WEAVER</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Authority</span>
                      <span className="text-red-400">DARPA/DSO</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clearance Req</span>
                      <span className="text-red-400">TS/SCI</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diagnostics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Self-Diagnostics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Health</span>
                      <Badge className="bg-green-900/50 text-green-300">Optimal</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Component Status</span>
                      <span className="text-green-400">47/47 Nominal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Full Scan</span>
                      <span className="text-blue-400">14:20:33</span>
                    </div>
                  </div>
                  <Separator className="bg-slate-600" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Run Full Diagnostics
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-300">TRL Progression</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { level: 'TRL-4', name: 'Lab Validation', status: 'Complete', color: 'green' },
                      { level: 'TRL-5', name: 'Relevant Environment', status: 'Complete', color: 'green' },
                      { level: 'TRL-6', name: 'Prototype Demo', status: 'Complete', color: 'green' },
                      { level: 'TRL-7', name: 'System Prototype', status: 'Current', color: 'blue' },
                      { level: 'TRL-8', name: 'System Complete', status: 'In Progress', color: 'yellow' },
                      { level: 'TRL-9', name: 'System Proven', status: 'Planned', color: 'gray' }
                    ].map((trl, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm">{trl.level}: {trl.name}</span>
                        <Badge className={`bg-${trl.color}-900/50 text-${trl.color}-300`}>
                          {trl.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Emergency Controls */}
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
      </div>
    </div>
  );
};

export default Index;
