import React from 'react';

export function Logo({ className = "", light = false }: { className?: string, light?: boolean }) {
  const textColor = light ? "#FFFFFF" : "#1C1C1C";
  
  return (
    <svg viewBox="0 0 350 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <style>
        {`
          .logo-text { font-family: 'Inter', system-ui, sans-serif; font-weight: 800; font-size: 68px; letter-spacing: -0.02em; }
          .logo-house { stroke-width: 6.5; stroke-linejoin: round; stroke-linecap: round; }
        `}
      </style>
      
      {/* L */}
      <text x="0" y="75" fill={textColor} className="logo-text">L</text>
      
      {/* House (a) */}
      <g transform="translate(42, 20)">
        {/* House outline */}
        <path d="M 4 54 L 4 28 L 22 8 L 40 28 L 40 54" stroke="#FF7A00" fill="none" className="logo-house" />
        {/* 'a' loop inside */}
        <path d="M 40 34 C 22 34, 16 54, 28 54 C 34 54, 40 48, 40 42" stroke="#FF7A00" fill="none" className="logo-house" />
      </g>
      
      {/* nt */}
      <text x="100" y="75" fill={textColor} className="logo-text">nt</text>
      
      {/* e (bars) */}
      <g transform="translate(182, 34)">
        <path d="M 0 6 L 24 2" stroke="#FF7A00" strokeWidth="8.5" strokeLinecap="round" />
        <path d="M 0 20 L 26 16" stroke="#0055FF" strokeWidth="8.5" strokeLinecap="round" />
        <path d="M 0 34 L 26 30" stroke="#00C2FF" strokeWidth="8.5" strokeLinecap="round" />
      </g>
      
      {/* nn */}
      <text x="220" y="75" fill={textColor} className="logo-text">nn</text>
    </svg>
  );
}
