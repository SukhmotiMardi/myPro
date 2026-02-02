import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Landing.css";

export default function Memories({ onNext }) {
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

<p>  Hey Sagun, </p>
      <p>Whenever you feel low, I am always be there by your side, no matter what the situation is.
      </p>
     


      <div className="memories-grid">
        <img src="https://i.pinimg.com/236x/32/5d/b6/325db6b54ac125733badcd83f44e32a6.jpg" alt="Romantic moment 1" />
        <img src="https://i.pinimg.com/236x/62/0b/72/620b72e1f10e864ec5c5a33be616de49.jpg" alt="Romantic moment 2" />  
        <img src="https://i.pinimg.com/236x/27/59/25/275925f8e4e97e40e7d9038a742db682.jpg" alt="Romantic moment 4" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwfgxh5NCIqr-Fvu5TzBFypwl6weVCzqtM1onvvOT0g&s" alt="Romantic moment 3" />
      </div>

      <button onClick={onNext}>One last thing 💫</button>
    </motion.div>
  );
}


