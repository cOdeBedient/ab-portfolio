import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StyledTextCycle } from './TextCycle.styled'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//@ts-ignore
import Slider from "react-slick"

const words = ["[ click... ]", "Developer", "Nerd", "Humanist", "Mathlete", "Creative", "Coder", "Filmmaker", "Artist", "Listener"]

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

  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsReady(true);
  //   }, 500)

  //   return () => clearTimeout(timer);
  // }, []);

  // var settings = {
  //   dots: false,
  //   autoplay: true,
  //   autoplaySpeed: 4500,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   vertical: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex(prevIndex => (prevIndex + 1) % words.length);
  //   }, 3000)

  //   return () => clearInterval(intervalId)
  // }, []);

  return (
    <StyledTextCycle>
        {/* <Slider {...settings}>
          <h3>Filmmaker</h3>
          <h3>Developer</h3>
          <h3>Nerd</h3>
          <h3>Humanist</h3>
          <h3>Mathlete</h3>
          <h3>Creative</h3>
          <h3>Coder</h3>
          <h3>Filmmaker</h3>
          <h3>Artist</h3>
          <h3>Listener</h3>
        </Slider> */}
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
            <h3>
              {words[index]}
            </h3>
          </motion.div>
        </AnimatePresence>
    </StyledTextCycle>
  );
};

export default TextCycle