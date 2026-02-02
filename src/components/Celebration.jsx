import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Landing.css"; // Reuse hearts & gradients

export default function Celebration() {
  const [hearts, setHearts] = useState([]);
  const [kisses, setKisses] = useState([]);

  // Hearts animation
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
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Kisses animation
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(7);
      const newKiss = {
        id,
        left: Math.random() * 100 + "vw",
        color: "#ff5e78", // pink-red for kiss
        duration: 4 + Math.random() * 4,
      };
      setKisses((prev) => [...prev, newKiss]);
      setTimeout(() => {
        setKisses((prev) => prev.filter((k) => k.id !== id));
      }, newKiss.duration * 1000);
    }, 400); // kisses appear faster

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="landing-page celebration-page"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {/* Hearts */}
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

      {/* Kisses */}
      {kisses.map((kiss) => (
        <div
          key={kiss.id}
          className="kiss"
          style={{
            left: kiss.left,
            animationDuration: kiss.duration + "s",
          }}
        >
          💋
        </div>
      ))}

<h1>I love you tooooo endlessly 💕🎉</h1>
<p>I love you forever and ever  ❤️</p>
<p>For me, every day is Love Day.</p>
<p>I will express my love for you each and every day.</p>

<p>I love the way you speak.</p>
<p>I love the way you make me feel loved—it never makes me wonder why I shouldn’t love you.</p> 
    </motion.div>
  );
}
