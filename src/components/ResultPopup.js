import { motion } from "framer-motion";

function ResultPopup({ message, countdown }) {
  if (!message) return null;

  // Determine background color based on message content
  const bgColor = message.includes("Correct") ? "bg-green-500" : "bg-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-10 transform -translate-x-1/2 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg text-center flex flex-col items-center w-60`}
    >
      <p className="text-2xl font-semibold">{message}</p>
      {countdown !== null && (
        <motion.p
          key={countdown}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-lg mt-2"
        >
          Next question in {countdown}...
        </motion.p>
      )}
    </motion.div>
  );
}

export default ResultPopup;
