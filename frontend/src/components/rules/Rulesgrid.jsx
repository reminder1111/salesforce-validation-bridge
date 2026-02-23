import { motion } from 'framer-motion';
import RuleCard from './RuleCard.jsx';

const RulesGrid = ({ rules, onToggle, togglingId }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem',
        padding: '1rem 0'
      }}
    >
      {rules.map((rule) => (
        <RuleCard
          key={rule.Id}
          rule={rule}
          onToggle={onToggle}
          isToggling={togglingId === rule.Id}
        />
      ))}
    </motion.div>
  );
};

export default RulesGrid;
