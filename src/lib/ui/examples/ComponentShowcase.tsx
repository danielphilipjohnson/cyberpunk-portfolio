"use client"

import React, { useState } from 'react';
import {
  CyberpunkButton,
  CyberpunkInput,
  CyberpunkTextArea,
  CyberpunkCard,
  CyberpunkBadge,
  ScanningEffect,
  CornerDecorations,
  useCyberpunkEffect
} from '../index';

const ComponentShowcase: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const effects = useCyberpunkEffect({
    scanningEnabled: true,
    glowEnabled: true,
    hoverEffects: true,
    autoPlay: false,
    duration: 2000,
    direction: 'vertical',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Neural transmission complete!');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Cyberpunk UI Design System
          </h1>
          <p className="text-gray-400 font-mono">
            Neural interface components for the future of web development
          </p>
        </div>

        {/* Button Showcase */}
        <CyberpunkCard
          title="CyberpunkButton Components"
          subtitle="Multiple variants and color schemes"
          colorScheme="cyan"
          hoverable
          withAccent
          scanningEffect
        >
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Primary Variants</h3>
              <div className="flex flex-wrap gap-4">
                <CyberpunkButton colorScheme="cyan" neuralText scanningEffect>
                  Neural Link
                </CyberpunkButton>
                <CyberpunkButton colorScheme="purple" glowEffect>
                  Data Stream
                </CyberpunkButton>
                <CyberpunkButton colorScheme="pink" clipPath="double-cut">
                  Ghost Protocol
                </CyberpunkButton>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Outline Variants</h3>
              <div className="flex flex-wrap gap-4">
                <CyberpunkButton variant="outline" colorScheme="green">
                  System Active
                </CyberpunkButton>
                <CyberpunkButton variant="outline" colorScheme="red">
                  Alert Status
                </CyberpunkButton>
                <CyberpunkButton variant="outline" colorScheme="yellow">
                  Warning Mode
                </CyberpunkButton>
              </div>
            </div>

            {/* Loading and Disabled States */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">States</h3>
              <div className="flex flex-wrap gap-4">
                <CyberpunkButton loading colorScheme="cyan">
                  Processing...
                </CyberpunkButton>
                <CyberpunkButton disabled colorScheme="gray">
                  Offline
                </CyberpunkButton>
              </div>
            </div>
          </div>
        </CyberpunkCard>

        {/* Form Showcase */}
        <CyberpunkCard
          title="CyberpunkInput Components"
          subtitle="Advanced form controls with neural theming"
          colorScheme="purple"
          hoverable
          withAccent
        >
          <div className="space-y-6">
            <CyberpunkInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              neuralLabel="NEURAL_ID"
              placeholder="Enter your neural identifier..."
              colorScheme="cyan"
              scanningEffect
              hint="Your unique identifier in the neural network"
            />

            <CyberpunkInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              neuralLabel="NEURAL_LINK_ADDRESS"
              placeholder="neural.link@cybernet.void"
              colorScheme="purple"
              glowEffect
              required
            />

            <CyberpunkTextArea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              neuralLabel="DATA_PAYLOAD"
              placeholder="Initiate neural data exchange protocols. Describe your project requirements, collaboration proposals, or neural enhancement inquiries..."
              rows={4}
              colorScheme="pink"
              scanningEffect
              required
            />

            <div className="flex justify-end">
              <CyberpunkButton
                onClick={handleSubmit}
                loading={isLoading}
                colorScheme="cyan"
                neuralText
                scanningEffect
                glowEffect
              >
                Initiate Transmission
              </CyberpunkButton>
            </div>
          </div>
        </CyberpunkCard>

        {/* Badge Showcase */}
        <CyberpunkCard
          title="CyberpunkBadge Components"
          subtitle="Status indicators and notification badges"
          colorScheme="green"
          hoverable
          withAccent
        >
          <div className="space-y-6">
            {/* Status Badges */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Status Indicators</h3>
              <div className="flex flex-wrap gap-4">
                <CyberpunkBadge status="active" dot>
                  System Online
                </CyberpunkBadge>
                <CyberpunkBadge status="processing" dot>
                  Processing
                </CyberpunkBadge>
                <CyberpunkBadge status="error" dot>
                  Connection Error
                </CyberpunkBadge>
                <CyberpunkBadge status="warning" dot>
                  Neural Warning
                </CyberpunkBadge>
              </div>
            </div>

            {/* Technology Tags */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                <CyberpunkBadge variant="secondary" colorScheme="cyan" clipPath="angled-corner">
                  React
                </CyberpunkBadge>
                <CyberpunkBadge variant="secondary" colorScheme="purple" clipPath="angled-corner">
                  TypeScript
                </CyberpunkBadge>
                <CyberpunkBadge variant="secondary" colorScheme="pink" clipPath="angled-corner">
                  TailwindCSS
                </CyberpunkBadge>
                <CyberpunkBadge variant="secondary" colorScheme="green" clipPath="angled-corner">
                  Next.js
                </CyberpunkBadge>
              </div>
            </div>

            {/* Count Badges */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Notifications</h3>
              <div className="flex flex-wrap gap-4">
                <CyberpunkBadge colorScheme="red" count={5}>
                  Alerts
                </CyberpunkBadge>
                <CyberpunkBadge colorScheme="blue" count={12}>
                  Messages
                </CyberpunkBadge>
                <CyberpunkBadge colorScheme="yellow" count={3}>
                  Updates
                </CyberpunkBadge>
              </div>
            </div>
          </div>
        </CyberpunkCard>

        {/* Effects Showcase */}
        <CyberpunkCard
          title="Visual Effects System"
          subtitle="Advanced scanning and glow effects"
          colorScheme="orange"
          hoverable
          withAccent
        >
          <div className="space-y-6">
            {/* Custom Effect Hook Example */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Interactive Effects</h3>
              <div
                className="relative p-8 bg-gray-800 border border-orange-400 text-center cursor-pointer"
                onMouseEnter={effects.handleMouseEnter}
                onMouseLeave={effects.handleMouseLeave}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  ...effects.getGlowStyles()
                }}
              >
                <div style={effects.getScanningStyles()} />
                <CornerDecorations color="orange" size="lg" />
                
                <div className="relative z-10">
                  <p className="text-orange-400 font-mono">
                    Hover to activate neural scanning protocol
                  </p>
                  {effects.isActive && (
                    <p className="text-green-400 font-mono text-sm mt-2">
                      Scanning Progress: {Math.round(effects.progress)}%
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Standalone Effects */}
            <div className="space-y-3">
              <h3 className="text-purple-400 font-mono text-sm uppercase tracking-wider">Standalone Effects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative p-6 bg-gray-800 border border-cyan-400">
                  <ScanningEffect color="cyan" active duration={3000} />
                  <CornerDecorations color="cyan" />
                  <p className="text-cyan-400 font-mono text-center">
                    Vertical Scanning
                  </p>
                </div>
                
                <div className="relative p-6 bg-gray-800 border border-purple-400">
                  <ScanningEffect color="purple" active duration={2500} direction="horizontal" />
                  <CornerDecorations color="purple" style="angled" />
                  <p className="text-purple-400 font-mono text-center">
                    Horizontal Scanning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CyberpunkCard>

        {/* Complex Layout Example */}
        <CyberpunkCard
          title="Neural Network Dashboard"
          subtitle="Production-ready layout example"
          colorScheme="teal"
          hoverable
          withAccent
          scanningEffect
          glowEffect
          footer={
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <CyberpunkBadge status="active" size="sm">
                  Connected
                </CyberpunkBadge>
                <CyberpunkBadge status="processing" size="sm">
                  Syncing
                </CyberpunkBadge>
              </div>
              <div className="text-teal-400 font-mono text-xs">
                Last sync: 2087.12.25 23:59:59
              </div>
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-cyan-400 font-mono text-sm uppercase">Neural Nodes</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300 font-mono text-sm">Active</span>
                  <CyberpunkBadge colorScheme="green" size="xs">24</CyberpunkBadge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-mono text-sm">Processing</span>
                  <CyberpunkBadge colorScheme="yellow" size="xs">3</CyberpunkBadge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300 font-mono text-sm">Offline</span>
                  <CyberpunkBadge colorScheme="red" size="xs">1</CyberpunkBadge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-purple-400 font-mono text-sm uppercase">Data Streams</h4>
              <div className="space-y-2">
                {['Primary', 'Secondary', 'Backup'].map((stream, index) => (
                  <div key={stream} className="flex items-center justify-between">
                    <span className="text-gray-300 font-mono text-sm">{stream}</span>
                    <CyberpunkBadge 
                      status={index === 0 ? 'active' : index === 1 ? 'processing' : 'default'} 
                      dot 
                      size="xs"
                    >
                      {index === 0 ? 'Online' : index === 1 ? 'Syncing' : 'Standby'}
                    </CyberpunkBadge>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-pink-400 font-mono text-sm uppercase">Quick Actions</h4>
              <div className="space-y-2">
                <CyberpunkButton 
                  size="sm" 
                  variant="outline" 
                  colorScheme="cyan" 
                  fullWidth
                  clipPath="angled-corner"
                >
                  Sync Neural Data
                </CyberpunkButton>
                <CyberpunkButton 
                  size="sm" 
                  variant="outline" 
                  colorScheme="purple" 
                  fullWidth
                  clipPath="angled-corner"
                >
                  Run Diagnostics
                </CyberpunkButton>
                <CyberpunkButton 
                  size="sm" 
                  variant="outline" 
                  colorScheme="pink" 
                  fullWidth
                  clipPath="angled-corner"
                >
                  Export Logs
                </CyberpunkButton>
              </div>
            </div>
          </div>
        </CyberpunkCard>

      </div>
    </div>
  );
};

export default ComponentShowcase;
