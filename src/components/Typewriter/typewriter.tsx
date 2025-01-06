import { useEffect, useState } from "react";

interface TypeWriterProps {
  textInput: string;
}

export const Typewriter = ({ textInput }: TypeWriterProps) => {
  const [text, setText] = useState("");

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
  <div className="writeTextContainer">
    {text}
    </div>
  )
};
