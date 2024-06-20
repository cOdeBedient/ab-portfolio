import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollingLine: React.FC = () => {
      const [pathD, setPathD] = useState('M0 0');
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const newD = calculatePath(scrollY);
          setPathD(newD);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const calculatePath = (scrollY: number): string => {
        const amplitude = 50; // Amplitude of the sine wave
        const frequency = 0.05; // Frequency of the sine wave
        const height = 100; // The height of each segment of the wave
    
        let path = `M${scrollY} 0`;
        for (let i = 0; i < window.innerWidth; i += height) {
          const y = i + height;
          const x = scrollY + amplitude * Math.sin(frequency * (scrollY + i));
          path += ` Q${x} ${i + height / 2} ${x} ${y}`;
        }
        return path;
      };
    
      return (
        <svg height="100%" width="100%" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
          <motion.path
            d={pathD}
            stroke="green"
            strokeWidth="4" // Adjust this value to make the line thicker
            fill="transparent"
          />
        </svg>
      );
    };
    
    export default ScrollingLine;
    