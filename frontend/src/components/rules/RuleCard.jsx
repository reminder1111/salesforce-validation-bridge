import { motion } from 'framer-motion';
import Button from '../common/Button';

const RuleCard = ({ rule, onToggle, isToggling }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card"
      style={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: rule.Active 
            ? 'linear-gradient(90deg, #10b981, #34d399)' 
            : 'linear-gradient(90deg, #ef4444, #f87171)',
          opacity: 0.8
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '1rem'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '600', 
            color: 'white',
            marginBottom: '0.5rem',
            wordBreak: 'break-word'
          }}>
            {rule.ValidationName}
          </h3>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'rgba(255,255,255,0.7)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            {rule.EntityName}
          </p>
        </div>
        
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600',
            background: rule.Active 
              ? 'rgba(16, 185, 129, 0.2)' 
              : 'rgba(239, 68, 68, 0.2)',
            color: rule.Active ? '#34d399' : '#f87171',
            border: `1px solid ${rule.Active ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            backdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap'
          }}
        >
          <motion.svg 
            width="8" 
            height="8" 
            viewBox="0 0 12 12" 
            fill="currentColor"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <circle cx="6" cy="6" r="6"/>
          </motion.svg>
          {rule.Active ? 'Enabled' : 'Disabled'}
        </motion.span>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        padding: '0.75rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ 
          fontSize: '0.75rem', 
          color: 'rgba(255,255,255,0.6)',
          marginBottom: '0.25rem'
        }}>
          Rule ID
        </p>
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'monospace',
          wordBreak: 'break-all'
        }}>
          {rule.Id}
        </p>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant={rule.Active ? 'danger' : 'success'}
            onClick={() => onToggle(rule)}
            disabled={isToggling}
            fullWidth
            icon={
              rule.Active ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm1-11a1 1 0 1 0-2 0v3H4a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0V9h3a1 1 0 1 0 0-2H9V4z"/>
                </svg>
              )
            }
          >
            {isToggling ? (
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Updating...
              </motion.span>
            ) : (
              rule.Active ? 'Disable Rule' : 'Enable Rule'
            )}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RuleCard;
