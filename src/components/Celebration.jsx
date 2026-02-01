import { motion } from "framer-motion";

export default function Celebration() {
  return (
    <motion.div
      className="page"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <h1>YAYYYYY 💕🎉</h1>
      <p>I love you endlessly ❤️</p>
    </motion.div>
  );
}
