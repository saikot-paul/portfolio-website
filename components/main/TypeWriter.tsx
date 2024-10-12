"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
  delay: number;
  className: string;
}

export const Typewriter = ({ text, delay, className }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText("");
        setIndex(0);
      }, delay * 50);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, delay]);

  return (
    <div
      className={className}
      style={{ whiteSpace: "pre-wrap", height: "3rem" }}
    >
      {currentText}
    </div>
  );
};
