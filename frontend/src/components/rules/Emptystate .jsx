import { motion } from 'framer-motion';
import Button from '../common/Button';

const EmptyState = ({ title, message, onAction, actionText, loading, showAction = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        minHeight: '400px'
      }}
    >
      <motion.div
        className="glass-card"
        style={{
          maxWidth: '500px',
          width: '100%',
          padding: '3rem 2rem'
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <motion.div
          style={{
            width: showAction ? '120px' : '80px',
            height: showAction ? '120px' : '80px',
            margin: '0 auto 2rem',
            position: 'relative'
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 161, 224, 0.2), rgba(1, 118, 211, 0.2))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(0, 161, 224, 0.4)',
            position: 'relative'
          }}>
            <svg 
              width={showAction ? "60" : "40"} 
              height={showAction ? "60" : "40"} 
              viewBox="0 0 120 120" 
              fill="none"
            >
              <motion.path
                d="M60 30v60M30 60h60"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
            
            {/* Pulsing rings */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '2px solid rgba(0, 161, 224, 0.4)',
                borderRadius: '50%'
              }}
              animate={{
                scale: [1, 1.3, 1.3],
                opacity: [0.5, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem'
          }}
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: showAction ? '2rem' : 0,
            lineHeight: '1.6'
          }}
        >
          {message}
        </motion.p>

        {showAction && onAction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="primary"
              onClick={onAction}
              disabled={loading}
              icon={
                <motion.svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  animate={loading ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                >
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </motion.svg>
              }
            >
              {actionText || 'Load Rules'}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;
