import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;  // Allow custom styling
}

export function Card({ children, className = '' }: CardProps): JSX.Element {
  // Basic content validation
  if (typeof children === 'string' && children.length > 5000) {
    throw new Error('Card content exceeds maximum length');
  }

  return (
    <div 
      className={`ui-rounded-lg ui-border ui-border-gray-200 ui-bg-white ui-p-4 ui-shadow-sm dark:ui-border-gray-800 dark:ui-bg-gray-950 ${className}`}
    >
      {children}
    </div>
  );
}
