import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  icon,
  fullWidth = false,
  type = 'button',
}) => {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, rgba(0, 161, 224, 0.8), rgba(1, 118, 211, 0.8))',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    success: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8))',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    danger: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 0.8))',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
  };

  const sizes = {
    medium: { padding: '0.625rem 1.25rem', fontSize: '0.875rem' },
    large: { padding: '0.875rem 1.75rem', fontSize: '1rem' },
  };

  const style = {
    ...variants[variant],
    ...sizes[size],
    borderRadius: '10px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: fullWidth ? '100%' : 'auto',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
  };

  return (
    <motion.button
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)' } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
