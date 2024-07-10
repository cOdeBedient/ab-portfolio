import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledTextCycle } from './TextCycle.styled';

const words = ["Mathlete", "Developer", "Creative", "Nerd", "Filmmaker", "Coder", "Artist", "Listener"]

const TextCycle: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIndex(0)
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden', height: '1em' }}>
      <AnimatePresence initial={false}>
        <motion.div
          style={{ position: 'absolute' }}
          key={index}
          initial={{ y: '-80%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '80%', opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <StyledTextCycle>
            {words[index]}
          </StyledTextCycle>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextCycle