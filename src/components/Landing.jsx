import { motion } from "framer-motion";

export default function Landing({ onNext }) {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Hey Love ❤️</h1>
      <p>I made something special just for you...</p>
      <button onClick={onNext}>Click me 🥰</button>
    </motion.div>
  );
}
