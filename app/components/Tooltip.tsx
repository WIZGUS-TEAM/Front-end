"use client"

import React, { useState } from 'react'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TooltipProps {
  content: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ content, className }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className={cn("text-gray-400 hover:text-gray-600", className)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Info size={16} />
      </button>
      {isVisible && (
        <div className="absolute z-10 w-64 px-4 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-2 left-6">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-3" />
        </div>
      )}
    </div>
  )
}

export default Tooltip 