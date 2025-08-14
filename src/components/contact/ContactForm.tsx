"use client"

import React, { useState, useEffect } from 'react';

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
  const [errors, setErrors] = useState({});

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
    const newErrors: any = {};
    
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
    <div className="relative bg-gray-900 border border-gray-800 overflow-hidden">
      {/* Neural scan effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 transition-all duration-1000`}
          style={{ 
            top: `${25 * scanLine}%`,
            animation: 'scanMove 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
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
            <div className="text-gray-400">
              STATUS: <span className={`font-bold ${getStatusColor()}`}>{formStatus}</span>
            </div>
            <div className="text-gray-400">
              ENCRYPTION: <span className="text-cyan-400">{encryptionLevel}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="block text-cyan-400 font-mono text-sm uppercase tracking-wider">
            NEURAL_ID <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={getFieldClass('name')}
            placeholder="Enter your neural identifier..."
            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
          />
          {errors.name && (
            <div className="text-red-400 font-mono text-xs flex items-center">
              <span className="mr-1">⚠</span> {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-cyan-400 font-mono text-sm uppercase tracking-wider">
            NEURAL_LINK_ADDRESS <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={getFieldClass('email')}
            placeholder="neural.link@cybernet.void"
            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
          />
          {errors.email && (
            <div className="text-red-400 font-mono text-xs flex items-center">
              <span className="mr-1">⚠</span> {errors.email}
            </div>
          )}
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <label className="block text-cyan-400 font-mono text-sm uppercase tracking-wider">
            TRANSMISSION_HEADER <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={getFieldClass('subject')}
            placeholder="Neural interface collaboration request..."
            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
          />
          {errors.subject && (
            <div className="text-red-400 font-mono text-xs flex items-center">
              <span className="mr-1">⚠</span> {errors.subject}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-cyan-400 font-mono text-sm uppercase tracking-wider">
            DATA_PAYLOAD <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={getFieldClass('message')}
            placeholder="Initiate neural data exchange protocols. Describe your project requirements, collaboration proposals, or neural enhancement inquiries..."
            style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}
          />
          {errors.message && (
            <div className="text-red-400 font-mono text-xs flex items-center">
              <span className="mr-1">⚠</span> {errors.message}
            </div>
          )}
        </div>

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
          
          <button
            type="submit"
            disabled={isSubmitting || formStatus === 'TRANSMITTED'}
            className={`px-8 py-3 font-mono font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              isSubmitting || formStatus === 'TRANSMITTED'
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-cyan-400 text-gray-900 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25'
            }`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin mr-2"></div>
                TRANSMITTING...
              </span>
            ) : formStatus === 'TRANSMITTED' ? (
              'TRANSMITTED'
            ) : (
              'INITIATE_TRANSMISSION'
            )}
          </button>
        </div>
      </form>

      {/* Tech decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-30"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-30"></div>

      <style jsx>{`
        @keyframes scanMove {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
