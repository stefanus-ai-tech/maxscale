
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  percentage: number;
  title: string;
  description?: string;
  className?: string;
  color?: string;
}

const StatCard = ({
  percentage,
  title,
  description,
  className,
  color = 'from-maxscale-accent to-maxscale-secondary'
}: StatCardProps) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const countingDone = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countingDone.current) {
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          const increment = percentage / totalFrames;
          
          let currentFrame = 0;
          
          const counter = setInterval(() => {
            currentFrame++;
            setCount(prev => {
              const newValue = Math.min(Math.ceil(prev + increment), percentage);
              if (newValue >= percentage) {
                clearInterval(counter);
                countingDone.current = true;
              }
              return newValue;
            });
            
            if (currentFrame === totalFrames) {
              clearInterval(counter);
              countingDone.current = true;
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [percentage]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-panel p-6 flex flex-col animate-fade-in opacity-0 [animation-delay:200ms]",
        className
      )}
    >
      <div className="flex items-center mb-2">
        <span className={`text-4xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text`}>
          {count}%
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-gray-300 text-sm">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
