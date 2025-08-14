"use client"

import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
  accentColor: string;
}

export default function CopyButton({ text, accentColor }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        absolute top-2 right-12 
        px-2 py-1 text-xs font-mono uppercase tracking-wider
        bg-gray-800/60 border border-${accentColor}-400/30
        text-${accentColor}-400 hover:bg-${accentColor}-400/10
        transition-all duration-200 hover:scale-105
        ${copied ? 'text-green-400 border-green-400/50' : ''}
      `}
      style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
      title={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>COPIED</span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>COPY</span>
        </div>
      )}
    </button>
  );
}
