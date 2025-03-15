'use client';

import { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export default function Tooltip({ content, children, position = 'right' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2'
  };

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-opacity-50"
      >
        {children}
      </button>
      
      {isVisible && (
        <div
          className={`absolute z-50 bg-white border border-[#E5E5E5] rounded-lg shadow-lg p-4 w-80 ${positionClasses[position]}`}
          style={{
            boxShadow: '0 4px 6px -1px rgba(227, 6, 19, 0.1), 0 2px 4px -1px rgba(227, 6, 19, 0.06)'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
} 