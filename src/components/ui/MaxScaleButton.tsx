
import React from 'react';
import { cn } from '@/lib/utils';

interface MaxScaleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const MaxScaleButton = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: MaxScaleButtonProps) => {
  const baseStyles = "relative font-semibold inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-maxscale-dark focus:ring-maxscale-accent";
  
  const variantStyles = {
    primary: "bg-accent-gradient hover:opacity-90 text-white",
    secondary: "bg-maxscale-muted hover:bg-maxscale-muted/80 text-white",
    outline: "bg-transparent border border-maxscale-accent text-maxscale-accent hover:bg-maxscale-accent/10",
    ghost: "bg-transparent hover:bg-maxscale-light text-white"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        variant === 'primary' && "overflow-hidden",
        className
      )}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-maxscale-accent to-maxscale-secondary opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      )}
      {children}
    </button>
  );
};

export default MaxScaleButton;
