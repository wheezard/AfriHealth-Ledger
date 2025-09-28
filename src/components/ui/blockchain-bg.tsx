import React from 'react';

export const BlockchainBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 blockchain-bg floating-nodes" />
      
      {/* Floating Geometric Nodes */}
      <div className="absolute inset-0">
        {/* Large Primary Node */}
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-primary/10 animate-float blur-sm" 
             style={{ animationDelay: '0s' }} />
        
        {/* Secondary Nodes */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-secondary/10 animate-float blur-sm" 
             style={{ animationDelay: '2s' }} />
        
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-primary/8 animate-float blur-sm" 
             style={{ animationDelay: '4s' }} />
        
        {/* Hexagonal Blockchain Nodes */}
        <div className="absolute top-1/2 left-1/5 w-16 h-16 rotate-45 bg-primary/5 animate-rotate-slow" />
        <div className="absolute top-3/4 right-1/3 w-12 h-12 rotate-45 bg-secondary/5 animate-rotate-slow" 
             style={{ animationDelay: '10s' }} />
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <path 
            d="M 100 200 Q 300 100 500 200 T 900 150" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse" 
          />
          
          <path 
            d="M 200 400 Q 400 300 600 400 T 1000 350" 
            stroke="url(#lineGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
      
      {/* Particle Field */}
      <div className="particle-field" />
    </div>
  );
};