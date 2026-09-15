import { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealOnScroll = ({ children, className = '' }: RevealOnScrollProps) => (
  <div className={className}>{children}</div>
);

export default RevealOnScroll;
