
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Landing.css"; // Reuse hearts and gradient CSS

export default function Proposal({ onYes }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(7);
      const newHeart = {
        id,
        left: Math.random() * 100 + "vw",
        color: Math.random() > 0.5 ? "pink" : "lightblue",
        duration: 5 + Math.random() * 5,
      };
      setHearts((prev) => [...prev, newHeart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, newHeart.duration * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="landing-page proposal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            backgroundColor: heart.color,
            animationDuration: heart.duration + "s",
          }}
        />
      ))}

      <h1>Will you be my forever? 💍❤️</h1>
      <div className="proposal-buttons">
        <button onClick={onYes}>YES 💖</button>
        <button onClick={onYes}>Of course YES 🥹</button>
      </div>
    </motion.div>
  );
}
