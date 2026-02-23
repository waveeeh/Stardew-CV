import { ExternalLink } from 'lucide-react';

interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
  tech: string[];
}

export function ProjectItem({ name, description, link, tech }: ProjectItemProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/50 p-4 rounded border-2 border-[#8B4513]/30 hover:bg-white/70 hover:border-[#8B4513]/50 transition-all group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-[#4a2c2a] group-hover:text-[#2a6b3c]">{name}</h3>
        <ExternalLink className="w-4 h-4 text-[#7c5c3e] shrink-0" />
      </div>
      <p className="text-sm text-[#4a2c2a] mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span 
            key={idx}
            className="px-2 py-1 bg-[#6ba368] text-white text-xs rounded"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px' }}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
