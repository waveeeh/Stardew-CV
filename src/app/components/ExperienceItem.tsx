interface ExperienceItemProps {
  position: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export function ExperienceItem({ position, company, date, responsibilities }: ExperienceItemProps) {
  return (
    <div className="bg-white/50 p-4 rounded border-2 border-[#8B4513]/30">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
        <div>
          <h3 className="font-bold text-[#4a2c2a]">{position}</h3>
          <p className="text-[#6b4423] italic">{company}</p>
        </div>
        <span 
          className="text-[#7c5c3e] text-xs sm:text-right shrink-0"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}
        >
          {date}
        </span>
      </div>
      <ul className="space-y-1 text-sm text-[#4a2c2a]">
        {responsibilities.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-[#8B4513]">🌾</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
