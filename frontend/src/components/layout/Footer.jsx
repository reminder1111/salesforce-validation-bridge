import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            margin: 0,
            fontSize: '0.875rem'
          }}
        >
          © 2024 Salesforce Validation Rules Bridge · Built with React & Express
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '1.5rem'
          }}
        >
          <motion.a
            href="https://developer.salesforce.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.3s'
            }}
            whileHover={{ color: 'white', scale: 1.05 }}
          >
            Salesforce Docs
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              transition: 'color 0.3s'
            }}
            whileHover={{ color: 'white', scale: 1.05 }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
