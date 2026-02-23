import { motion } from 'framer-motion';

const Alert = ({ type = 'success', message, onClose }) => {
  const types = {
    success: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))',
      border: '1px solid rgba(16, 185, 129, 0.4)',
      color: '#34d399',
    },
    error: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.2))',
      border: '1px solid rgba(239, 68, 68, 0.4)',
      color: '#f87171',
    },
  };

  const icons = {
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      style={{
        ...types[type],
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        maxWidth: '600px',
        margin: '0 auto 1.5rem'
      }}
      role="alert"
    >
      <span style={{ flexShrink: 0 }}>{icons[type]}</span>
      <span style={{ flex: 1, color: 'white', fontSize: '0.95rem' }}>{message}</span>
      {onClose && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background 0.2s'
          }}
          aria-label="Close alert"
        >
          ×
        </motion.button>
      )}
    </motion.div>
  );
};

export default Alert;
