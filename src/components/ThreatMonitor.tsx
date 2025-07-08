import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Shield, Radar, Eye, Lock, Zap } from 'lucide-react';

interface ThreatEvent {
  id: string;
  type: 'INTRUSION' | 'ANOMALY' | 'BREACH' | 'SCAN' | 'UNKNOWN';
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  source: string;
  description: string;
  timestamp: Date;
  coordinates?: { lat: number; lng: number };
  status: 'ACTIVE' | 'CONTAINED' | 'RESOLVED';
}

export const ThreatMonitor: React.FC = () => {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  const [securityLevel, setSecurityLevel] = useState<'GREEN' | 'YELLOW' | 'ORANGE' | 'RED'>('GREEN');
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const threatTypes = [
    { type: 'INTRUSION', sources: ['External Network', 'Physical Perimeter', 'Wireless Signal'], descriptions: ['Unauthorized access attempt detected', 'Perimeter breach at gate 7', 'Unknown device scanning network'] },
    { type: 'ANOMALY', sources: ['Quantum Field', 'Energy Core', 'Metamaterial Matrix'], descriptions: ['Unusual field fluctuation detected', 'Energy spike beyond parameters', 'Material resonance anomaly'] },
    { type: 'BREACH', sources: ['Security System', 'Database', 'Communication'], descriptions: ['Database access violation', 'Encrypted channel compromised', 'Security protocol bypass attempt'] },
    { type: 'SCAN', sources: ['Satellite', 'Ground Radar', 'Electronic'], descriptions: ['Hostile radar sweep detected', 'Surveillance satellite overhead', 'Electronic reconnaissance activity'] }
  ];

  // Generate random threats
  useEffect(() => {
    const generateThreat = () => {
      const threatType = threatTypes[Math.floor(Math.random() * threatTypes.length)];
      const source = threatType.sources[Math.floor(Math.random() * threatType.sources.length)];
      const description = threatType.descriptions[Math.floor(Math.random() * threatType.descriptions.length)];
      const severities: ThreatEvent['severity'][] = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
      const severity = severities[Math.floor(Math.random() * severities.length)];

      const newThreat: ThreatEvent = {
        id: Date.now().toString() + Math.random(),
        type: threatType.type as ThreatEvent['type'],
        severity,
        source,
        description,
        timestamp: new Date(),
        coordinates: {
          lat: 38.7749 + (Math.random() - 0.5) * 0.1,
          lng: -77.4194 + (Math.random() - 0.5) * 0.1
        },
        status: 'ACTIVE'
      };

      setThreats(prev => [newThreat, ...prev.slice(0, 9)]);

      // Update security level based on threats
      const activeCritical = threats.filter(t => t.status === 'ACTIVE' && t.severity === 'CRITICAL').length;
      const activeHigh = threats.filter(t => t.status === 'ACTIVE' && t.severity === 'HIGH').length;
      
      if (activeCritical > 0) setSecurityLevel('RED');
      else if (activeHigh > 1) setSecurityLevel('ORANGE');
      else if (activeHigh > 0) setSecurityLevel('YELLOW');
      else setSecurityLevel('GREEN');
    };

    // Generate initial threats
    for (let i = 0; i < 3; i++) {
      setTimeout(() => generateThreat(), i * 1000);
    }

    // Generate random threats periodically
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every 5 seconds
        generateThreat();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [threats]);

  const resolveThreat = (id: string) => {
    setThreats(prev => prev.map(threat =>
      threat.id === id ? { ...threat, status: 'RESOLVED' } : threat
    ));
  };

  const containThreat = (id: string) => {
    setThreats(prev => prev.map(threat =>
      threat.id === id ? { ...threat, status: 'CONTAINED' } : threat
    ));
  };

  const startPerimeterScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-military-red border-military-red bg-military-red/10';
      case 'HIGH': return 'text-military-amber border-military-amber bg-military-amber/10';
      case 'MEDIUM': return 'text-military-blue border-military-blue bg-military-blue/10';
      default: return 'text-military-green border-military-green bg-military-green/10';
    }
  };

  const getSecurityLevelColor = (level: string) => {
    switch (level) {
      case 'RED': return 'text-military-red border-military-red bg-military-red/20';
      case 'ORANGE': return 'text-military-amber border-military-amber bg-military-amber/20';
      case 'YELLOW': return 'text-yellow-500 border-yellow-500 bg-yellow-500/20';
      default: return 'text-military-green border-military-green bg-military-green/20';
    }
  };

  const activeThreats = threats.filter(t => t.status === 'ACTIVE');

  return (
    <Card className="tactical-shadow-lg border-military-red/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-military-red flex items-center text-base font-mono tracking-wider uppercase">
            <Shield className="w-5 h-5 mr-3 status-indicator" />
            Threat Monitoring System
          </CardTitle>
          <Badge className={`font-mono text-xs tracking-wider ${getSecurityLevelColor(securityLevel)}`}>
            DEFCON {securityLevel}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-steel-gray">
            REAL-TIME SECURITY ANALYSIS • AUTOMATED RESPONSE ENABLED
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-military-green text-military-green text-xs">
              {activeThreats.length} ACTIVE
            </Badge>
            <Badge variant="outline" className="border-military-blue text-military-blue text-xs">
              <Eye className="w-3 h-3 mr-1" />
              MONITORING
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-steel-gray">PERIMETER SCAN</span>
              <Button
                onClick={startPerimeterScan}
                disabled={isScanning}
                size="sm"
                variant="outline"
                className="border-military-blue text-military-blue hover:bg-military-blue/10 text-xs"
              >
                <Radar className="w-3 h-3 mr-1" />
                {isScanning ? 'SCANNING...' : 'SCAN'}
              </Button>
            </div>
            <Progress value={scanProgress} className="h-2" />
            <span className="text-xs font-mono text-military-green">{scanProgress}% COMPLETE</span>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-military-red">
              {activeThreats.filter(t => t.severity === 'CRITICAL').length}
            </div>
            <div className="text-xs font-mono text-steel-gray">CRITICAL THREATS</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-military-amber">
              {activeThreats.filter(t => t.severity === 'HIGH').length}
            </div>
            <div className="text-xs font-mono text-steel-gray">HIGH PRIORITY</div>
          </div>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          <h4 className="text-sm font-mono text-foreground font-semibold">ACTIVE THREATS</h4>
          {threats.slice(0, 6).map((threat) => (
            <div
              key={threat.id}
              className={`p-3 rounded-lg border ${
                threat.status === 'ACTIVE' ? 'border-military-red/30 bg-military-red/5' :
                threat.status === 'CONTAINED' ? 'border-military-amber/30 bg-military-amber/5' :
                'border-military-green/30 bg-military-green/5'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Badge className={`text-xs font-mono ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </Badge>
                  <Badge variant="outline" className="text-xs font-mono text-steel-gray border-steel-gray">
                    {threat.type}
                  </Badge>
                </div>
                <div className="flex space-x-1">
                  {threat.status === 'ACTIVE' && (
                    <>
                      <Button
                        onClick={() => containThreat(threat.id)}
                        size="sm"
                        variant="outline"
                        className="border-military-amber text-military-amber hover:bg-military-amber/10 text-xs px-2 py-1"
                      >
                        <Lock className="w-3 h-3" />
                      </Button>
                      <Button
                        onClick={() => resolveThreat(threat.id)}
                        size="sm"
                        variant="outline"
                        className="border-military-green text-military-green hover:bg-military-green/10 text-xs px-2 py-1"
                      >
                        <Zap className="w-3 h-3" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <div className="text-xs font-mono text-foreground">{threat.description}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-mono text-steel-gray">SOURCE: {threat.source}</span>
                <span className="text-xs font-mono text-steel-gray">
                  {threat.timestamp.toLocaleTimeString()}
                </span>
              </div>
              {threat.coordinates && (
                <div className="text-xs font-mono text-military-blue mt-1">
                  LAT: {threat.coordinates.lat.toFixed(4)} | LNG: {threat.coordinates.lng.toFixed(4)}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};