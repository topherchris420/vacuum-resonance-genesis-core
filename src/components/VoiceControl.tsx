import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2, VolumeX, Radio, Headphones } from 'lucide-react';

interface VoiceCommand {
  command: string;
  action: string;
  timestamp: Date;
  confidence: number;
  status: 'PROCESSING' | 'EXECUTED' | 'FAILED';
}

export const VoiceControl: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [recentCommands, setRecentCommands] = useState<VoiceCommand[]>([]);
  const [waveform, setWaveform] = useState<number[]>(new Array(20).fill(0));

  const voiceCommands = [
    { pattern: 'status report', action: 'Display system status' },
    { pattern: 'emergency shutdown', action: 'Initiate emergency protocols' },
    { pattern: 'field strength', action: 'Show quantum field parameters' },
    { pattern: 'security scan', action: 'Perform security sweep' },
    { pattern: 'energy core', action: 'Open energy management' },
    { pattern: 'containment protocol', action: 'Activate containment systems' },
    { pattern: 'orbital sync', action: 'Synchronize with satellites' },
    { pattern: 'threat assessment', action: 'Display threat analysis' }
  ];

  // Simulate audio waveform when listening
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isListening) {
      interval = setInterval(() => {
        setWaveform(prev => prev.map(() => Math.random() * 100));
      }, 100);
    } else {
      setWaveform(new Array(20).fill(0));
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isListening]);

  // Simulate voice recognition
  useEffect(() => {
    if (isListening) {
      const timeout = setTimeout(() => {
        const commands = [
          'System status report',
          'Emergency protocols check',
          'Field strength analysis',
          'Security perimeter scan',
          'Energy core diagnostics'
        ];
        
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        setCurrentCommand(randomCommand);
        
        // Process command after a delay
        setTimeout(() => {
          const newCommand: VoiceCommand = {
            command: randomCommand,
            action: voiceCommands.find(cmd => 
              randomCommand.toLowerCase().includes(cmd.pattern)
            )?.action || 'Unknown action',
            timestamp: new Date(),
            confidence: 85 + Math.random() * 15,
            status: Math.random() > 0.1 ? 'EXECUTED' : 'FAILED'
          };
          
          setRecentCommands(prev => [newCommand, ...prev.slice(0, 4)]);
          setCurrentCommand('');
          setIsListening(false);
        }, 1500);
      }, 2000 + Math.random() * 2000);

      return () => clearTimeout(timeout);
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setCurrentCommand('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'EXECUTED': return 'text-military-green border-military-green';
      case 'PROCESSING': return 'text-military-amber border-military-amber';
      case 'FAILED': return 'text-military-red border-military-red';
      default: return 'text-steel-gray border-steel-gray';
    }
  };

  return (
    <Card className="tactical-shadow-lg border-military-blue/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-military-blue flex items-center text-base font-mono tracking-wider uppercase">
          <Radio className="w-5 h-5 mr-3 status-indicator" />
          Voice Command Interface
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-steel-gray">
            NEURAL PATTERN RECOGNITION • MILITARY-GRADE ENCRYPTION
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-military-green text-military-green text-xs">
              <Headphones className="w-3 h-3 mr-1" />
              {isListening ? 'LISTENING' : 'STANDBY'}
            </Badge>
            <Badge variant="outline" className="border-military-blue text-military-blue text-xs">
              SECURE CHANNEL
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-4">
          <div className="relative">
            <Button
              onClick={toggleListening}
              size="lg"
              className={`w-20 h-20 rounded-full ${
                isListening
                  ? 'bg-military-red hover:bg-military-red/80 text-white'
                  : 'bg-military-green hover:bg-military-green/80 text-background'
              } transition-all duration-300`}
            >
              {isListening ? (
                <MicOff className="w-8 h-8" />
              ) : (
                <Mic className="w-8 h-8" />
              )}
            </Button>
            {isListening && (
              <div className="absolute inset-0 rounded-full border-2 border-military-red animate-ping"></div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="text-sm font-mono text-foreground font-semibold">
              {isListening ? 'VOICE RECOGNITION ACTIVE' : 'PRESS TO ACTIVATE VOICE CONTROL'}
            </div>
            {currentCommand && (
              <div className="text-military-amber font-mono text-sm">
                Recognized: "{currentCommand}"
              </div>
            )}
          </div>

          {/* Audio Waveform Visualization */}
          <div className="flex items-center justify-center space-x-1 h-16">
            {waveform.map((amplitude, index) => (
              <div
                key={index}
                className="bg-military-green rounded-full transition-all duration-100"
                style={{
                  width: '3px',
                  height: `${Math.max(2, amplitude * 0.5)}px`,
                  opacity: isListening ? 0.7 + (amplitude / 100) * 0.3 : 0.3
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-steel-gray">AUDIO OUTPUT</span>
          <Button
            onClick={() => setAudioEnabled(!audioEnabled)}
            variant="outline"
            size="sm"
            className={`${
              audioEnabled
                ? 'border-military-green text-military-green hover:bg-military-green/10'
                : 'border-steel-gray text-steel-gray hover:bg-steel-gray/10'
            }`}
          >
            {audioEnabled ? (
              <Volume2 className="w-4 h-4 mr-2" />
            ) : (
              <VolumeX className="w-4 h-4 mr-2" />
            )}
            {audioEnabled ? 'ENABLED' : 'MUTED'}
          </Button>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-mono text-foreground font-semibold">RECENT COMMANDS</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {recentCommands.map((cmd, index) => (
              <div
                key={index}
                className="p-2 rounded border border-military-blue/20 bg-military-blue/5"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-foreground">{cmd.command}</span>
                  <Badge className={`text-xs font-mono ${getStatusColor(cmd.status)}`}>
                    {cmd.status}
                  </Badge>
                </div>
                <div className="text-xs font-mono text-steel-gray">
                  {cmd.action} • {Math.round(cmd.confidence)}% confidence
                </div>
                <div className="text-xs font-mono text-steel-gray">
                  {cmd.timestamp.toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="text-center p-2 border border-military-green/20 rounded bg-military-green/5">
            <div className="text-lg font-mono font-bold text-military-green">
              {recentCommands.filter(cmd => cmd.status === 'EXECUTED').length}
            </div>
            <div className="text-xs font-mono text-steel-gray">EXECUTED</div>
          </div>
          <div className="text-center p-2 border border-military-red/20 rounded bg-military-red/5">
            <div className="text-lg font-mono font-bold text-military-red">
              {recentCommands.filter(cmd => cmd.status === 'FAILED').length}
            </div>
            <div className="text-xs font-mono text-steel-gray">FAILED</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};