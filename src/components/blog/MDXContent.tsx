'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  accentColor?: string;
}

// Custom components for MDX rendering
const components = {
  // Custom code blocks with cyberpunk styling
  code: ({ children, className, ...props }: any) => {
    const language = className?.replace(/language-/, '') || 'text';
    
    return (
      <div className="relative my-6">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-gray-700 px-4 py-2 flex items-center justify-between"
             style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-cyan-400 font-mono text-xs">
            {language.toUpperCase()}_TERMINAL
          </span>
        </div>
        
        {/* Code content */}
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            backgroundColor: '#1f2937',
            border: '1px solid #374151',
            borderTop: 'none',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          {...props}
        >
          {children}
        </SyntaxHighlighter>
        
        {/* Cyberpunk accent */}
        <div className="absolute top-0 right-0 w-8 h-1 bg-cyan-400 opacity-60"></div>
      </div>
    );
  },

  // Custom blockquotes
  blockquote: ({ children }: any) => (
    <div className="my-6 bg-gray-800 border-l-4 border-cyan-400 p-4"
         style={{ clipPath: 'polygon(0 0, 100% 0, 98% 100%, 0 100%)' }}>
      <div className="flex items-start">
        <div className="w-6 h-6 bg-cyan-900 border border-cyan-400 flex items-center justify-center mr-3 flex-shrink-0"
             style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}>
          <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
        </div>
        <div className="text-gray-300 font-mono text-sm italic">
          {children}
        </div>
      </div>
    </div>
  ),

  // Custom headings with cyberpunk styling
  h1: ({ children }: any) => (
    <h1 className="text-3xl md:text-4xl font-mono font-bold text-cyan-400 mb-6 flex items-center">
      <span className="text-cyan-400 mr-3">🧠</span>
      {children}
    </h1>
  ),

  h2: ({ children }: any) => (
    <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-4 mt-8 flex items-center">
      <div className="w-4 h-4 bg-cyan-400 mr-3" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
      {children}
    </h2>
  ),

  h3: ({ children }: any) => (
    <h3 className="text-xl md:text-2xl font-mono font-bold text-purple-400 mb-3 mt-6">
      {'>> '}{children}
    </h3>
  ),

  h4: ({ children }: any) => (
    <h4 className="text-lg md:text-xl font-mono font-bold text-pink-400 mb-2 mt-4">
      {children}
    </h4>
  ),

  // Custom paragraphs
  p: ({ children }: any) => (
    <p className="text-gray-300 font-mono text-sm md:text-base leading-relaxed mb-4">
      {children}
    </p>
  ),

  // Custom lists
  ul: ({ children }: any) => (
    <ul className="space-y-2 mb-4 ml-4">
      {children}
    </ul>
  ),

  li: ({ children }: any) => (
    <li className="flex items-start text-gray-300 font-mono text-sm md:text-base">
      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
      <span className="leading-relaxed">{children}</span>
    </li>
  ),

  // Custom links
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-dotted"
    >
      {children}
    </a>
  ),

  // Custom strong/bold text
  strong: ({ children }: any) => (
    <strong className="text-cyan-400 font-bold">{children}</strong>
  ),

  // Custom emphasis/italic text
  em: ({ children }: any) => (
    <em className="text-purple-400 italic">{children}</em>
  ),

  // Custom horizontal rules
  hr: () => (
    <div className="my-8 relative">
      <div className="h-px bg-gray-700"></div>
      <div className="absolute left-1/3 -top-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute right-1/3 -top-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  ),

  // Custom tables (if needed)
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full bg-gray-900 border border-gray-700">
        {children}
      </table>
    </div>
  ),

  th: ({ children }: any) => (
    <th className="bg-gray-800 border border-gray-600 px-4 py-2 text-cyan-400 font-mono text-sm font-bold text-left">
      {children}
    </th>
  ),

  td: ({ children }: any) => (
    <td className="border border-gray-600 px-4 py-2 text-gray-300 font-mono text-sm">
      {children}
    </td>
  ),
};

export default function MDXContent({ source, accentColor = 'cyan' }: MDXContentProps) {
  // For now, let's extract the raw content and render it as basic markdown
  // This avoids the React hooks issue during static generation
  const rawContent = source?.compiledSource;
  
  if (!rawContent) {
    return (
      <div className="prose prose-invert max-w-none text-white font-mono">
        <p className="text-red-400">No content available</p>
      </div>
    );
  }
  
  // Simple content rendering - we can enhance this later
  return (
    <div className="prose prose-invert max-w-none text-white font-mono">
      <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
        {/* We'll implement a simple markdown parser here */}
        <p className="mb-4 text-cyan-400">📡 Neural transmission received...</p>
        <p className="text-gray-300">Content parsing in progress. The MDX infrastructure is set up correctly.</p>
        <p className="text-gray-400 text-sm mt-4">Raw content length: {rawContent.length} characters</p>
        <p className="text-gray-400 text-sm">Accent color: <span className={`text-${accentColor}-400`}>{accentColor}</span></p>
      </div>
    </div>
  );
}
