import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect (faster blink)
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 300); // Blinks every 400ms
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && !reverse ) {
      
      setTimeout(() => setReverse(true), 800); 
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // TYPING SPEED
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(
      reverse ? 20 : subIndex === words[index].length ? 1000 : 50, // 30ms delete, 80ms type
      parseInt(Math.random() * 150)
    ));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`ml-1 font-light ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

export default TypewriterEffect;