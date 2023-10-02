import { motion } from 'framer-motion';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        GAME HISTORY
      </h2>
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <motion.button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.5 }}
            >
              {index === 0 ? 'Go to game start' : `Go to move #${index}`}
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
