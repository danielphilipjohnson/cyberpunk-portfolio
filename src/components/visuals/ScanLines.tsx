export default function ScanLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated scan lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(6, 182, 212, 0.03) 2px,
              rgba(6, 182, 212, 0.03) 4px
            )
          `,
          animation: 'scanlines 2s linear infinite',
        }}
      />
      
      {/* Moving scan line */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60"
        style={{
          animation: 'movingScanLine 3s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes movingScanLine {
          0%, 100% { 
            top: 0%; 
            opacity: 0; 
          }
          5% { 
            opacity: 0.6; 
          }
          50% { 
            top: 100%; 
            opacity: 0.6; 
          }
          95% { 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
}
