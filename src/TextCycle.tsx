import {useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledTextCycle } from './TextCycle.styled'

const words = ["Genius", "Mathlete", "Developer", "Creative", "Nerd", "Artist", "Coder", "Listener"];

const TextCycle: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000)
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'inline-block', overflow: 'hidden', height: '2em' }}>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ y: '-80%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '80%', opacity: 0 }}
          transition={{ duration: .75 }}
          style={{ position: 'absolute' }}
        >
            <StyledTextCycle>
                {words[index]}
            </StyledTextCycle>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextCycle;