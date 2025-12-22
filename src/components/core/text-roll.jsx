import React from 'react';
import './text-roll.css';

export function TextRoll({ children, className = '' }) {
  const text = String(children);
  return (
    <div className={`text-roll ${className}`} aria-hidden>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="text-roll-letter"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
