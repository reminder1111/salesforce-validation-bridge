import { motion } from 'framer-motion';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="app">
      <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 2
      }}>
        <motion.div
          className="glass-card"
          style={{
            padding: '3rem',
            textAlign: 'center',
            minWidth: '300px'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 2rem',
              position: 'relative'
            }}
          >
            {/* Outer rotating ring */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '4px solid rgba(255, 255, 255, 0.2)',
                borderTop: '4px solid white',
                borderRadius: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner pulsing circle */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, rgba(0, 161, 224, 0.8), rgba(1, 118, 211, 0.8))',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(0, 161, 224, 0.5)'
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p
            style={{
              color: 'white',
              fontSize: '1.125rem',
              fontWeight: '500',
              margin: 0
            }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
