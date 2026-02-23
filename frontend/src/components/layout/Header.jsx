import { motion } from 'framer-motion';
import Button from '../common/Button';

const Header = ({ loggedIn, userInfo, onLogout, onRefresh, rulesLoading }) => {
  return (
    <header className="header">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow: '0 4px 15px rgba(0,161,224,0.3)'
            }}
          >
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="#fff"/>
              <circle cx="20" cy="20" r="4" fill="#fff"/>
            </svg>
          </motion.div>
          <div>
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: 'white',
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Validation Rules Bridge
            </h1>
            <p style={{ 
              fontSize: '0.875rem', 
              color: 'rgba(255,255,255,0.8)',
              margin: 0
            }}>
              Manage Salesforce validation rules with ease
            </p>
          </div>
        </motion.div>

        {loggedIn && userInfo && (
          <motion.div 
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                fontSize: '0.95rem', 
                fontWeight: '600', 
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                {userInfo.username}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                gap: '0.5rem'
              }}>
                <span>{userInfo.userType}</span>
                {userInfo.email && <span>• {userInfo.email}</span>}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="primary"
                  onClick={onRefresh}
                  disabled={rulesLoading}
                  icon={
                    <motion.svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={rulesLoading ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: rulesLoading ? Infinity : 0, ease: "linear" }}
                    >
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </motion.svg>
                  }
                >
                  {rulesLoading ? 'Loading...' : 'Refresh'}
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  onClick={onLogout}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
                    </svg>
                  }
                >
                  Logout
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
