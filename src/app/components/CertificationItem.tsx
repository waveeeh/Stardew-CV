interface CertificationItemProps {
  name: string;
  issuer: string;
  date: string;
}

export function CertificationItem({ name, issuer, date }: CertificationItemProps) {
  return (
    <div className="bg-white/50 p-4 rounded border-2 border-[#8B4513]/30 flex items-start gap-3">
      <span className="text-2xl">⭐</span>
      <div className="flex-1">
        <h3 className="font-bold text-[#4a2c2a]">{name}</h3>
        <p className="text-[#6b4423] text-sm">{issuer}</p>
        <span 
          className="text-[#7c5c3e] text-xs"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
        >
          {date}
        </span>
      </div>
    </div>
  );
}
