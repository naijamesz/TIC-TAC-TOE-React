import { motion } from 'framer-motion';

const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <motion.span
          key={`${winner}${gamingBoard}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
        >
          Winner is <span className="text-white">{winner}</span>
        </motion.span>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <motion.span
          key={`${winner}${gamingBoard}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
        >
          <span className="text-white">O</span> and{' '}
          <span className="text-white">X</span> tied
        </motion.span>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{' '}
          <motion.span
            className="text-white"
            key={nextPlayer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeIn', duration: 0.3 }}
          >
            {nextPlayer}
          </motion.span>
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};
export default StatusMessage;
