interface EducationItemProps {
  degree: string;
  institution: string;
  date: string;
  place?: string;
}

export function EducationItem({ degree, institution, date, place }: EducationItemProps) {
  return (
    <div className="bg-white/50 p-4 rounded border-2 border-[#8B4513]/30">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
        <div>
          <h3 className="font-bold text-[#4a2c2a]">{degree}</h3>
          <p className="text-[#6b4423] italic">{institution}</p>
          {place && (
            <span className="inline-block mt-2 text-xs bg-[#8B4513]/10 text-[#4a2c2a] px-2 py-0.5 rounded border border-[#8B4513]/30">
              {place}
            </span>
          )}
        </div>
        <span 
          className="text-[#7c5c3e] text-xs sm:text-right shrink-0"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
        >
          {date}
        </span>
      </div>
    </div>
  );
}