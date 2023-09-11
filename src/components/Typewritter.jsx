import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Sesuaikan dengan kecepatan ketik yang diinginkan
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default Typewriter;
