import { useEffect, useState } from "react";

export default function LoveLetter() {
  const fullText = "I love you, Nani ❤️";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    localStorage.setItem("valentineDone", "true");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.innerText = "🌸";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 6 + Math.random() * 4 + "s";
      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 10000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <div className="letter-bg fade-in">
      <div className="letter-box">
        <h1>Dear Love 💖</h1>

        <p>
          From the moment you came into my life, everything became warmer,
          brighter, and more meaningful.
        </p>

        <p>Thank you for choosing me — today, tomorrow, and always.</p>

        <p>Happy Valentine’s Day 💕</p>

        <p className="typed-love">{typedText}</p>
      </div>
    </div>
  );
}
