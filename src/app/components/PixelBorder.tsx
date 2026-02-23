export function PixelBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 border-4 border-[#8B4513]" 
        style={{
          imageRendering: 'pixelated',
          boxShadow: 'inset 2px 2px 0px rgba(139, 69, 19, 0.5), inset -2px -2px 0px rgba(210, 180, 140, 0.5)'
        }}
      />
      <div className="relative bg-gradient-to-br from-[#f5e6d3] to-[#e8d4ba] p-6">
        {children}
      </div>
    </div>
  );
}
