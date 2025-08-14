"use client"

import React, { JSX, useEffect } from 'react';
import CyberpunkSectionDecor from '../visuals/CyberpunkSectionDecor';

// Import Prism for syntax highlighting
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
// Import custom cyberpunk theme
import '../../styles/prism-cyberpunk.css';
// Import copy button
import CopyButton from './CopyButton';

interface BlogPostContentProps {
  content: string;
  category: string;
}

export default function BlogPostContent({ content, category }: BlogPostContentProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'neural-tech': 'cyan',
      'corpo-intel': 'pink',
      'street-code': 'lime',
      'data-stream': 'purple',
      'ghost-protocol': 'orange',
      default: 'teal'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const accentColor = getCategoryColor(category);

  // Simple markdown-like parser for our content
  const parseContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent = '';
    let codeBlockLang = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Handle code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockLang = line.slice(3) || 'text';
          codeBlockContent = '';
        } else {
          inCodeBlock = false;
          
          // Get the highlighted code using Prism
          const getHighlightedCode = (code: string, language: string) => {
            const trimmedCode = code.trim();
            if (!trimmedCode) return '';
            
            try {
              const lang = language.toLowerCase();
              // Map some common aliases
              const langMap: Record<string, string> = {
                'js': 'javascript',
                'ts': 'typescript',
                'sh': 'bash',
                'shell': 'bash',
                'yml': 'yaml',
                'py': 'python'
              };
              
              const actualLang = langMap[lang] || lang;
              
              if (Prism.languages[actualLang]) {
                return Prism.highlight(trimmedCode, Prism.languages[actualLang], actualLang);
              }
              return trimmedCode;
            } catch (error) {
              return trimmedCode;
            }
          };
          
          const highlightedCode = getHighlightedCode(codeBlockContent, codeBlockLang);
          
          elements.push(
            <div key={i} className="relative mb-8">
              <div className={`bg-gray-900/90 border border-${accentColor}-400/30 p-6 font-mono text-sm overflow-x-auto cyberpunk-code-block`}
                style={{ clipPath: 'polygon(0 0, 98% 0, 100% 100%, 0 100%)' }}>
                <div className={`text-${accentColor}-400 text-xs mb-3 uppercase tracking-wider flex items-center justify-between`}>
                  <span>[{codeBlockLang.toUpperCase()}_BLOCK]</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-[10px]">COMPILED</span>
                  </div>
                </div>
                <pre className="text-gray-300 whitespace-pre-wrap">
                  <code 
                    className={`language-${codeBlockLang.toLowerCase()}`}
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                  />
                </pre>
              </div>
              <CopyButton text={codeBlockContent.trim()} accentColor={accentColor} />
              <div className="absolute top-2 right-2">
                <div className={`w-2 h-2 bg-${accentColor}-400 rounded-full animate-pulse`}></div>
              </div>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockContent += line + '\n';
        continue;
      }

      // Handle headers
      if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={i} className={`text-xl font-bold text-${accentColor}-400 font-mono uppercase tracking-wider mb-3 mt-6`}>
            {line.slice(5)}
          </h4>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className={`text-2xl font-bold text-${accentColor}-400 font-mono uppercase tracking-wider mb-4 mt-8`}>
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-3xl font-bold text-white font-mono uppercase tracking-wider mb-6 mt-10">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-4xl font-bold text-white font-mono uppercase tracking-wider mb-8 mt-12">
            {line.slice(2)}
          </h1>
        );
      }
      // Handle special cyberpunk headers
      else if (line.startsWith('**[') && line.endsWith(']**')) {
        elements.push(
          <div key={i} className={`bg-gray-800/60 border border-${accentColor}-500/30 p-3 mb-4`}
            style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}>
            <div className={`text-${accentColor}-400 font-mono text-sm font-bold tracking-wider`}>
              {line.slice(3, -3)}
            </div>
          </div>
        );
      }
      // Handle lists
      else if (line.startsWith('- ')) {
        const listItem = line.slice(2);
        elements.push(
          <div key={i} className="flex items-start gap-3 mb-3">
            <div className={`w-2 h-2 bg-${accentColor}-400 rounded-full mt-3 flex-shrink-0`}></div>
            <div className="text-gray-300 font-mono leading-relaxed">
              {parseInlineFormatting(listItem)}
            </div>
          </div>
        );
      }
      // Handle numbered lists
      else if (/^\d+\.\s/.test(line)) {
        const number = line.match(/^(\d+)\./)?.[1] || '';
        const listItem = line.replace(/^\d+\.\s/, '');
        elements.push(
          <div key={i} className="flex items-start gap-3 mb-3">
            <div className={`text-${accentColor}-400 font-mono text-sm font-bold min-w-[2rem]`}>
              {number}.
            </div>
            <div className="text-gray-300 font-mono leading-relaxed">
              {parseInlineFormatting(listItem)}
            </div>
          </div>
        );
      }
      // Handle dividers
      else if (line === '---') {
        elements.push(
          <div key={i} className="flex items-center my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className={`mx-4 w-3 h-3 bg-${accentColor}-400 rounded-full`}></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
        );
      }
      // Handle empty lines
      else if (line.trim() === '') {
        elements.push(<div key={i} className="mb-4"></div>);
      }
      // Handle regular paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={i} className="text-gray-300 font-mono leading-relaxed mb-6">
            {parseInlineFormatting(line)}
          </p>
        );
      }
    }

    return elements;
  };

  // Parse inline formatting like **bold**, `code`, etc.
  const parseInlineFormatting = (text: string) => {
    const parts = [];
    let currentText = text;
    let key = 0;

    while (currentText) {
      // Handle inline code
      const codeMatch = currentText.match(/`([^`]+)`/);
      if (codeMatch) {
        const before = currentText.substring(0, codeMatch.index);
        const code = codeMatch[1];
        const after = currentText.substring(codeMatch.index! + codeMatch[0].length);

        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <code key={key++} className={`bg-gray-800 text-${accentColor}-400 px-2 py-1 font-mono text-sm border border-gray-600`}>
            {code}
          </code>
        );
        currentText = after;
        continue;
      }

      // Handle bold text
      const boldMatch = currentText.match(/\*\*([^*]+)\*\*/);
      if (boldMatch) {
        const before = currentText.substring(0, boldMatch.index);
        const bold = boldMatch[1];
        const after = currentText.substring(boldMatch.index! + boldMatch[0].length);

        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <strong key={key++} className={`text-${accentColor}-400 font-bold`}>
            {bold}
          </strong>
        );
        currentText = after;
        continue;
      }

      // Handle colored text
      const colorMatch = currentText.match(/<span className="text-(\w+)-(\d+)">([^<]+)<\/span>/);
      if (colorMatch) {
        const before = currentText.substring(0, colorMatch.index);
        const colorClass = `text-${colorMatch[1]}-${colorMatch[2]}`;
        const colored = colorMatch[3];
        const after = currentText.substring(colorMatch.index! + colorMatch[0].length);

        if (before) parts.push(<span key={key++}>{before}</span>);
        parts.push(
          <span key={key++} className={colorClass}>
            {colored}
          </span>
        );
        currentText = after;
        continue;
      }

      // No more matches, add remaining text
      parts.push(<span key={key++}>{currentText}</span>);
      break;
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <CyberpunkSectionDecor variant="minimal" intensity="low" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Content area */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 p-8 md:p-12"
            style={{ clipPath: 'polygon(0 0, 99% 0, 100% 100%, 0 100%)' }}>
            
            {/* Terminal header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className={`text-${accentColor}-400 font-mono text-sm uppercase tracking-wider`}>
                [NEURAL_TRANSMISSION_ACTIVE]
              </div>
              <div className="flex-1"></div>
              <div className={`w-2 h-2 bg-${accentColor}-400 rounded-full animate-pulse`}></div>
            </div>

            {/* Parsed content */}
            <div className="cyberpunk-content">
              {parseContent(content)}
            </div>

            {/* Terminal footer */}
            <div className="mt-12 pt-6 border-t border-gray-600">
              <div className="flex items-center justify-between text-sm font-mono text-gray-400">
                <div>[TRANSMISSION_COMPLETE]</div>
                <div className="flex items-center gap-2">
                  <span>NEURAL_STATUS:</span>
                  <span className="text-green-400">SYNCHRONIZED</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Floating data points */}
      <div className={`absolute top-1/4 right-1/4 w-1 h-1 bg-${accentColor}-400 rounded-full animate-ping opacity-40`}></div>
      <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 bg-${accentColor}-400 rounded-full animate-ping opacity-40 animation-delay-1000`}></div>

      {/* CSS for animation delay */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .cyberpunk-content h1,
        .cyberpunk-content h2,
        .cyberpunk-content h3,
        .cyberpunk-content h4 {
          position: relative;
        }
        
        .cyberpunk-content h1::after,
        .cyberpunk-content h2::after,
        .cyberpunk-content h3::after,
        .cyberpunk-content h4::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color, #06b6d4), transparent);
        }
        
        .cyberpunk-content pre {
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--accent-color, #06b6d4) transparent;
        }
        
        .cyberpunk-content pre::-webkit-scrollbar {
          height: 8px;
        }
        
        .cyberpunk-content pre::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .cyberpunk-content pre::-webkit-scrollbar-thumb {
          background: var(--accent-color, #06b6d4);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
