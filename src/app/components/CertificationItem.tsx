interface CertificationItemProps {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink?: string;
}

export function CertificationItem({ name, issuer, date, credentialId, verifyLink }: CertificationItemProps) {
  return (
    <div className="bg-white/50 p-4 rounded border-2 border-[#8B4513]/30 flex items-start gap-3">
      <span className="text-2xl">⭐</span>
      <div className="flex-1">
        <h3 className="font-bold text-[#4a2c2a]">{name}</h3>
        <p className="text-[#6b4423] text-sm">{issuer}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
          <span 
            className="text-[#7c5c3e] text-xs"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
          >
            {date}
          </span>
        </div>

        {(verifyLink || credentialId) && (
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            {verifyLink && (
              <a 
                href={verifyLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4a2c2a] text-xs underline hover:text-[#8B4513] transition-colors"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '9px' }}
              >
                Verify
              </a>
            )}
            {verifyLink && credentialId && (
              <span className="text-[#7c5c3e] text-xs" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '9px' }}>
                |
              </span>
            )}
            {credentialId && (
              <span className="text-[#7c5c3e] text-xs" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '9px' }}>
                Credential Identification Code: {credentialId}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}