export default function GlitchEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Random glitch bars */}
      <div
        className="absolute w-full h-px bg-pink-500 opacity-0"
        style={{
          top: '25%',
          animation: 'glitch1 4s infinite',
        }}
      />
      <div
        className="absolute w-3/4 h-px bg-cyan-400 opacity-0"
        style={{
          top: '45%',
          left: '10%',
          animation: 'glitch2 6s infinite',
        }}
      />
      <div
        className="absolute w-1/2 h-px bg-green-400 opacity-0"
        style={{
          top: '75%',
          right: '15%',
          animation: 'glitch3 8s infinite',
        }}
      />

      {/* Digital noise overlay */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 0, 0.1) 0%, transparent 50%)
          `,
          animation: 'noise 0.2s infinite',
        }}
      />

      <style jsx>{`
        @keyframes glitch1 {
          0%, 90%, 100% { opacity: 0; }
          91%, 95% { opacity: 0.7; transform: translateX(0); }
          92% { opacity: 0.8; transform: translateX(-2px); }
          93% { opacity: 0.6; transform: translateX(2px); }
          94% { opacity: 0.9; transform: translateX(-1px); }
        }

        @keyframes glitch2 {
          0%, 85%, 100% { opacity: 0; }
          86%, 90% { opacity: 0.5; transform: translateX(0); }
          87% { opacity: 0.7; transform: translateX(3px); }
          88% { opacity: 0.4; transform: translateX(-2px); }
          89% { opacity: 0.8; transform: translateX(1px); }
        }

        @keyframes glitch3 {
          0%, 95%, 100% { opacity: 0; }
          96%, 99% { opacity: 0.6; transform: translateX(0); }
          97% { opacity: 0.8; transform: translateX(-3px); }
          98% { opacity: 0.5; transform: translateX(2px); }
        }

        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1px, 1px); }
          20% { transform: translate(1px, -1px); }
          30% { transform: translate(-1px, -1px); }
          40% { transform: translate(1px, 1px); }
          50% { transform: translate(-1px, 1px); }
          60% { transform: translate(1px, -1px); }
          70% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 1px); }
          90% { transform: translate(-1px, 1px); }
        }
      `}</style>
    </div>
  );
}
