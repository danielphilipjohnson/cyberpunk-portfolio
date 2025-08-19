"use client"

import React, { useState, useEffect } from 'react';
import { 
  CyberpunkCard, 
  CyberpunkInput, 
  CyberpunkTextArea, 
  CyberpunkButton,
  CyberpunkBadge,
  ScanningEffect,
  CornerDecorations
} from '@/lib/ui';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('STANDBY');
  const [scanLine, setScanLine] = useState(0);
  const [encryptionLevel, setEncryptionLevel] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Neural scanning animation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(scanInterval);
  }, []);

  // Encryption simulation
  useEffect(() => {
    const encryptInterval = setInterval(() => {
      setEncryptionLevel(Math.floor(75 + Math.random() * 25));
    }, 1500);

    return () => clearInterval(encryptInterval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'NEURAL_ID_REQUIRED';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'NEURAL_LINK_REQUIRED';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'INVALID_NEURAL_PROTOCOL';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'TRANSMISSION_HEADER_REQUIRED';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'DATA_PAYLOAD_REQUIRED';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus('ERROR');
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('TRANSMITTING');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('TRANSMITTED');
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormStatus('STANDBY');
      }, 3000);
    }, 2000);
  };

  const getStatusColor = () => {
    switch (formStatus) {
      case 'TRANSMITTING': return 'text-yellow-400';
      case 'TRANSMITTED': return 'text-green-400';
      case 'ERROR': return 'text-red-400';
      default: return 'text-cyan-400';
    }
  };

  const getFieldClass = (fieldName: string) => {
    const hasError = errors[fieldName];
    const baseClass = "w-full bg-gray-800 border border-gray-600 rounded-none px-4 py-3 text-gray-100 font-mono text-sm focus:outline-none transition-all duration-300";
    
    if (hasError) {
      return `${baseClass} border-red-400 focus:border-red-400 focus:shadow-red-400/25`;
    }
    
    return `${baseClass} focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/25`;
  };

  return (
    <CyberpunkCard
      colorScheme="cyan"
      scanningEffect
      withAccent
      clipPath="straight"
      header={
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-cyan-900 border border-cyan-400 flex items-center justify-center mr-3"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
              <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-cyan-400 font-mono font-bold text-lg">NEURAL_LINK_INTERFACE</h3>
              <div className="text-gray-400 font-mono text-xs">quantum_encrypted_transmission_v2.7.4</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-xs font-mono">
            <CyberpunkBadge 
              status={formStatus === 'TRANSMITTED' ? 'success' : formStatus === 'ERROR' ? 'error' : formStatus === 'TRANSMITTING' ? 'processing' : 'default'}
              size="sm"
              dot
            >
              {formStatus}
            </CyberpunkBadge>
            <div className="text-gray-400">
              ENCRYPTION: <span className="text-cyan-400">{encryptionLevel}%</span>
            </div>
          </div>
        </div>
      }
    >
      <ScanningEffect 
        color="cyan" 
        active={true} 
        duration={2000} 
        opacity={0.3}
      />
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <CyberpunkInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          neuralLabel="NEURAL_ID"
          placeholder="Enter your neural identifier..."
          colorScheme="cyan"
          clipPath="angled-corner"
          scanningEffect
          glowEffect
          required
          error={errors.name}
        />

        {/* Email Field */}
        <CyberpunkInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          neuralLabel="NEURAL_LINK_ADDRESS"
          placeholder="neural.link@cybernet.void"
          colorScheme="cyan"
          clipPath="angled-corner"
          scanningEffect
          glowEffect
          required
          error={errors.email}
        />

        {/* Subject Field */}
        <CyberpunkInput
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          neuralLabel="TRANSMISSION_HEADER"
          placeholder="Neural interface collaboration request..."
          colorScheme="cyan"
          clipPath="angled-corner"
          scanningEffect
          glowEffect
          required
          error={errors.subject}
        />

        {/* Message Field */}
        <CyberpunkTextArea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          neuralLabel="DATA_PAYLOAD"
          placeholder="Initiate neural data exchange protocols. Describe your project requirements, collaboration proposals, or neural enhancement inquiries..."
          rows={6}
          colorScheme="cyan"
          clipPath="angled-corner"
          scanningEffect
          glowEffect
          required
          error={errors.message}
        />

        {/* Submit Button */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-gray-400 font-mono text-xs">
            {formStatus === 'TRANSMITTED' ? (
              <span className="text-green-400">✓ NEURAL_LINK_ESTABLISHED</span>
            ) : formStatus === 'ERROR' ? (
              <span className="text-red-400">⚠ TRANSMISSION_FAILED</span>
            ) : (
              <span>All transmissions are quantum encrypted</span>
            )}
          </div>
          
          <CyberpunkButton
            type="submit"
            disabled={isSubmitting || formStatus === 'TRANSMITTED'}
            loading={isSubmitting}
            colorScheme="cyan"
            clipPath="double-cut"
            neuralText
            scanningEffect
            glowEffect
          >
            {formStatus === 'TRANSMITTED' ? 'TRANSMITTED' : 'INITIATE_TRANSMISSION'}
          </CyberpunkButton>
        </div>
      </form>
    </CyberpunkCard>
  );
}
