import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Mic, MicOff, Brain, Shield } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  classification?: 'ROUTINE' | 'CLASSIFIED' | 'SECRET';
}

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'SHADOW-WEAVER AI Assistant online. Clearance verified. How may I assist with quantum field operations?',
      isBot: true,
      timestamp: new Date(),
      classification: 'CLASSIFIED'
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    'Quantum coherence is within acceptable parameters. Field strength at 87.3% optimal.',
    'Metamaterial matrix recalibrated. Energy efficiency increased by 12.7%.',
    'DARPA uplink established. All systems show green status.',
    'Security protocols active. No unauthorized access detected.',
    'Orbital synchronization complete. Satellite array aligned.',
    'WARNING: Minor fluctuation detected in chamber 3. Initiating auto-correction.',
    'Energy core operating at peak efficiency. Output: 1,247.8 MW.',
    'Quantum entanglement stable. Non-local field manipulation ready.',
    'Containment protocols verified. All safety systems operational.',
    'Field resonance frequency locked at 432.67 THz.'
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
      classification: 'ROUTINE'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date(),
        classification: Math.random() > 0.7 ? 'SECRET' : 'CLASSIFIED'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setInput('Status report on quantum field coherence');
        setIsListening(false);
      }, 2000);
    }
  };

  const getClassificationColor = (classification?: string) => {
    switch (classification) {
      case 'SECRET': return 'text-military-red border-military-red';
      case 'CLASSIFIED': return 'text-military-amber border-military-amber';
      default: return 'text-military-green border-military-green';
    }
  };

  return (
    <Card className="tactical-shadow-lg border-military-green/30 bg-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-military-green flex items-center text-base font-mono tracking-wider uppercase">
          <Brain className="w-5 h-5 mr-3 status-indicator" />
          AI Command Interface
        </CardTitle>
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono text-steel-gray">
            QUANTUM AI ASSISTANT • CLEARANCE: TS//SAP//REL
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-military-green text-military-green text-xs">
              <Shield className="w-3 h-3 mr-1" />
              SECURE
            </Badge>
            <Badge variant="outline" className="border-military-blue text-military-blue text-xs">
              <Bot className="w-3 h-3 mr-1" />
              ONLINE
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-64 overflow-y-auto space-y-3 bg-background/30 rounded-lg p-3 border border-military-green/20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot
                    ? 'bg-military-green/10 border border-military-green/30'
                    : 'bg-military-blue/10 border border-military-blue/30'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className={`text-xs font-mono font-semibold ${
                    message.isBot ? 'text-military-green' : 'text-military-blue'
                  }`}>
                    {message.isBot ? 'SHADOW-WEAVER AI' : 'OPERATOR'}
                  </span>
                  {message.classification && (
                    <Badge
                      variant="outline"
                      className={`text-xs font-mono ${getClassificationColor(message.classification)}`}
                    >
                      {message.classification}
                    </Badge>
                  )}
                </div>
                <p className="text-sm font-mono text-foreground">{message.text}</p>
                <span className="text-xs text-steel-gray font-mono">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-military-green/10 border border-military-green/30 rounded-lg p-3">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-military-green rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-military-green rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-military-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-xs font-mono text-military-green ml-2">AI processing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter command or query..."
            className="flex-1 bg-background/50 border-military-green/30 text-foreground font-mono text-sm"
          />
          <Button
            onClick={toggleVoice}
            variant="outline"
            size="icon"
            className={`border-military-amber hover:bg-military-amber/10 ${
              isListening ? 'bg-military-amber/20 text-military-amber' : 'text-military-amber'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-military-green hover:bg-military-green/80 text-background"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => setInput('System status report')}
            variant="outline"
            size="sm"
            className="border-military-green/50 text-military-green hover:bg-military-green/10 font-mono text-xs"
          >
            STATUS REPORT
          </Button>
          <Button
            onClick={() => setInput('Emergency protocols')}
            variant="outline"
            size="sm"
            className="border-military-red/50 text-military-red hover:bg-military-red/10 font-mono text-xs"
          >
            EMERGENCY
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};