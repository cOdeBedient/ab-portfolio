import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledTextCycle } from './TextCycle.styled';

const words = ["[is a...]", "Nerd", "Humanist", "Developer", "Mathlete", "Creative", "Filmmaker", "Coder", "Artist", "Listener"]

const TextCycle: React.FC = () => {
  const [index, setIndex] = useState(0)

  function cycle() {
    setIndex(prev => {
      if(prev === words.length - 1) {
        prev = 1
      } else {
        prev = (prev + 1) % words.length
      }
      return prev
    })
  }

  return (
    <>
        <div style={{ overflow: 'hidden', height: '1em' }}>
        <AnimatePresence initial={false}>
          <motion.div
            onClick={cycle}
            style={{ position: 'absolute' }}
            key={index}
            initial={{ y: '-80%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '80%', opacity: 0 }}
            transition={{ duration: 0.37 }}
          >
            <StyledTextCycle>
              {words[index]}
            </StyledTextCycle>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default TextCycle