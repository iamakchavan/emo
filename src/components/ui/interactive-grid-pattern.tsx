import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveGridPatternProps {
  className?: string;
  squaresClassName?: string;
  width?: number;
  height?: number;
  squares?: [number, number];
}

export function InteractiveGridPattern({
  className,
  squaresClassName,
  width = 40,
  height = 40,
  squares = [24, 24],
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  
  const [horizontal, vertical] = squares;
  const totalSquares = horizontal * vertical;
  const gridWidth = width * horizontal;
  const gridHeight = height * vertical;
  
  const getX = (index: number) => (index % horizontal) * width;
  const getY = (index: number) => Math.floor(index / horizontal) * height;
  
  const handleMouseEnter = (index: number) => {
    setHoveredSquare(index);
  };
  
  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <svg
      viewBox={`0 0 ${gridWidth} ${gridHeight}`}
      className={cn("absolute inset-0 h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
    >
      {[...Array(totalSquares)].map((_, index) => (
        <rect
          key={index}
          x={getX(index)}
          y={getY(index)}
          width={width}
          height={height}
          className={cn(
            "stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
            hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
            squaresClassName
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </svg>
  );
}