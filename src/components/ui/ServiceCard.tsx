
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string[];
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
  style
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-maxscale-accent/20 group animate-fade-in opacity-0 [animation-delay:var(--delay)]",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br from-maxscale-accent/20 to-maxscale-secondary/20 group-hover:from-maxscale-accent/30 group-hover:to-maxscale-secondary/30 transition-all duration-300">
        <Icon className="w-6 h-6 text-maxscale-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <ul className="text-gray-300 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-maxscale-accent mt-1.5 mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
