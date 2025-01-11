import { useEffect, useState } from "react";

interface TypeWriterProps {
  textInput: string;
}

export const Typewriter = ({ textInput }: TypeWriterProps) => {
  const [text, setText] = useState("");

  const targetText = text

  const writeScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => writeScreen(text, i + 1), 100);
    }
  };

  useEffect(() => {
    writeScreen(textInput);
  }, [textInput]); 

  return (
    <span>
      {Array.from(targetText).map((letter, idx) => (
        <span
          key={idx}
          className={
            letter === 'Y' || letter === 'G' || letter === '.' 
              ? 'redLetter' 
              : ''
          }
        >
          {letter}
        </span>
      ))}
    </span>
  )
};
