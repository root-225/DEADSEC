'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  withText?: boolean;
  className?: string;
};

export default function Logo({ 
  size = 'md', 
  animated = true, 
  withText = true,
  className = '',
}: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, textClass: 'text-lg' },
    md: { width: 40, height: 40, textClass: 'text-xl' },
    lg: { width: 48, height: 48, textClass: 'text-2xl' },
  };

  const { width, height, textClass } = sizes[size];

  const logoVariants = {
    initial: { rotate: 0 },
    hover: animated ? { rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } } : {},
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
        className="relative"
        style={{ width, height }}
      >
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
          
          {/* Deadsec Logo */}
          <path 
            d="M25 25L75 75M75 25L25 75M50 15V85M15 50H85" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3182CE" />
              <stop offset="100%" stopColor="#7649C6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {withText && (
        <span className={`ml-2 font-bold ${textClass} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400`}>
          DEADSEC
        </span>
      )}
    </Link>
  );
} 