import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Landing.css";

export default function Landing({ onNext }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(7);
      const newHeart = {
        id,
        left: Math.random() * 100 + "vw",
        color: Math.random() > 0.5 ? "pink" : "lightblue",
        duration: 5 + Math.random() * 5, // 5s to 10s
      };
      setHearts((prev) => [...prev, newHeart]);
      // Remove heart after duration
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, newHeart.duration * 1000);
    }, 500); // new heart every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="landing-page"
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

      <h1>Hey Love ❤️</h1>
      <p>I made something special just for you...</p>
      <button onClick={onNext}>Click me 🥰</button>
    </motion.div>
  );
}
