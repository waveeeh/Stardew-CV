import { PixelBorder } from './PixelBorder';
import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  icon: string;
  children: ReactNode;
}

export function SectionCard({ title, icon, children }: SectionCardProps) {
  return (
    <PixelBorder className="w-full mb-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h2 
          className="text-[#4a2c2a] uppercase tracking-wider"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px' }}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </PixelBorder>
  );
}
