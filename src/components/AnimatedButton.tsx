
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends Omit<ButtonProps, 'variant'> {
  showIcon?: boolean;
  variant?: 'default' | 'outline' | 'minimal' | 'link' | 'destructive' | 'secondary' | 'ghost';
}

const AnimatedButton = ({ 
  children, 
  className,
  showIcon = true,
  variant = 'default',
  ...props 
}: AnimatedButtonProps) => {
  if (variant === 'minimal') {
    return (
      <Button
        className={cn(
          'relative px-6 py-2 rounded-full bg-black/10 text-black hover:bg-black/20 transition-all duration-300',
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
          {showIcon && (
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
      </Button>
    );
  }
  
  if (variant === 'outline') {
    return (
      <Button
        className={cn(
          'relative px-6 py-2 rounded-full border border-black/20 bg-transparent text-black hover:bg-black/5 transition-all duration-300 group',
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
          {showIcon && (
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
      </Button>
    );
  }
  
  return (
    <Button
      className={cn(
        'relative overflow-hidden bg-black text-white hover:bg-black/80 transition-all duration-300 group',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {showIcon && (
          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </Button>
  );
};

export default AnimatedButton;
