"use client"

import React from 'react';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';
import ScanLines from '../visuals/ScanLines';
import GlitchEffect from '../visuals/GlitchEffect';

export default function BlogHero() {
  return (
    <section
      className="relative min-h-[60vh] text-white font-mono overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #7209b7 100%)',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Cyberpunk Visual Effects */}
      <div className="absolute inset-0 z-0">
        <CyberpunkSectionDecor variant="grid" intensity="medium" />
      </div>
      <ScanLines />
      <GlitchEffect />


      {/* Blog Hero Content */}
      <div className="relative z-10 px-6 md:px-16 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            <div className="text-cyan-400 text-sm font-mono tracking-wider">
              [DATA_STREAM: ACTIVE] • [NEURAL_LINK: SYNCHRONIZED]
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-wider text-white mb-4">
            DATA <span className="text-cyan-400">CHRONICLES</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center bg-gray-800/60 border border-cyan-500/30 px-6 py-3"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
              <span className="text-cyan-500 font-mono text-sm mr-2">[BLOG_MATRIX]</span>
              <span className="text-white font-bold tracking-wider">NEURAL TRANSMISSIONS</span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-white/90 text-lg font-mono leading-relaxed mb-4">
              Direct feed from the <span className="text-cyan-400 font-bold">neural cortex</span> of a Night City operative. 
              Raw thoughts, code fragments, and digital ghost stories straight from the data streams.
            </p>
            <p className="text-white/70 text-base font-mono leading-relaxed">
              <span className="text-pink-500 font-bold">Warning:</span> Content may contain traces of corporate conspiracy theories, 
              bleeding-edge tech insights, and occasional glitches in the matrix.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 p-4 text-center"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
              <div className="text-cyan-400 text-sm font-mono mb-1">TRANSMISSIONS</div>
              <div className="text-white font-bold text-xl">12</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-pink-500/20 p-4 text-center"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
              <div className="text-pink-500 text-sm font-mono mb-1">SYNC_RATE</div>
              <div className="text-white font-bold text-xl">98.3%</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-lime-400/20 p-4 text-center"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}>
              <div className="text-lime-400 text-sm font-mono mb-1">BANDWIDTH</div>
              <div className="text-white font-bold text-xl">∞ TB/s</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning lines animation */}
      <style jsx>{`
        @keyframes scanY {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
