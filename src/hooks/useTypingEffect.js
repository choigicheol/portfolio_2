import { useState, useEffect } from "react";

function useTypingEffect(text, delay) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      const currentLetter = text[currentIndex];
      setTypedText((prevTypedText) => prevTypedText + currentLetter);
      currentIndex++;
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
      setTypedText("");
    };
  }, [text, delay]);

  return typedText;
}

export default useTypingEffect;
