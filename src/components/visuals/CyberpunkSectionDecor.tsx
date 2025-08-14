import GridLines from './GridLines';

type CyberpunkSectionDecorProps = {
  variant?: 'grid' | 'solid' | 'minimal';
  intensity?: 'low' | 'medium' | 'high';
};

export default function CyberpunkSectionDecor({ 
  variant = 'grid', 
  intensity = 'medium' 
}: CyberpunkSectionDecorProps) {
  
  const getIntensityOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-20';
      case 'medium': return 'opacity-30';
      case 'high': return 'opacity-40';
      default: return 'opacity-30';
    }
  };

  const getBorderOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-20';
      case 'medium': return 'opacity-30';
      case 'high': return 'opacity-50';
      default: return 'opacity-30';
    }
  };

  return (
    <>
      {/* Only show grid lines for 'grid' variant */}
      {variant === 'grid' && <GridLines />}
      
      {/* Radial dot pattern - always show but vary intensity */}
      <div
        className={`absolute inset-0 ${getIntensityOpacity()}`}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0"
        }}
      />
      
      {/* Corner brackets - hide for minimal variant */}
      {variant !== 'minimal' && (
        <>
          <div className={`absolute top-0 left-0 w-40 h-40 border-t border-l border-cyan-800 ${getBorderOpacity()}`} />
          <div className={`absolute top-0 right-0 w-40 h-40 border-t border-r border-cyan-800 ${getBorderOpacity()}`} />
          <div className={`absolute bottom-0 left-0 w-40 h-40 border-b border-l border-cyan-800 ${getBorderOpacity()}`} />
          <div className={`absolute bottom-0 right-0 w-40 h-40 border-b border-r border-cyan-800 ${getBorderOpacity()}`} />
        </>
      )}
    </>
  );
}
