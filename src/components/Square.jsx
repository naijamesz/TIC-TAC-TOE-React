import { motion } from 'framer-motion';

const Square = ({ value, onClick, isWinningSquare }) => {
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${winningClassName}`}
      onClick={onClick}
    >
      <motion.span
        key={value}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.3 }}
      >
        {value}
      </motion.span>
    </button>
  );
};
export default Square;
