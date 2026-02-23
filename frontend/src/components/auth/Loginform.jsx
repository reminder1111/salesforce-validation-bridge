import { useState } from 'react';
import { motion } from 'framer-motion';
import DomainSelector from './Domainselector';
import Button from '../common/Button';
import { buildLoginUrl, validateCustomDomain } from '../../services/authService';
import { DOMAIN_TYPES } from '../../utils/constants';

const LoginForm = ({ onShowToast }) => {
  const [domainType, setDomainType] = useState(DOMAIN_TYPES.PRODUCTION);
  const [customDomain, setCustomDomain] = useState('');

  const handleLogin = () => {
    if (domainType === DOMAIN_TYPES.CUSTOM) {
      const error = validateCustomDomain(customDomain);
      if (error) {
        onShowToast(error, 'error');
        return;
      }
    }

    const loginUrl = buildLoginUrl(domainType, customDomain);
    window.location.href = loginUrl;
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: 'calc(100vh - 200px)',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card"
        style={{ 
          maxWidth: '480px', 
          width: '100%',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,161,224,0.3)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <path d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 40c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z" fill="white" opacity="0.9"/>
              <circle cx="32" cy="32" r="8" fill="white" opacity="0.9"/>
            </svg>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '0.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          Connect to Salesforce
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem',
            fontSize: '1rem'
          }}
        >
          Select your Salesforce environment to manage validation rules
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <DomainSelector
            domainType={domainType}
            customDomain={customDomain}
            onDomainTypeChange={setDomainType}
            onCustomDomainChange={setCustomDomain}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '2rem' }}
        >
          <Button
            variant="primary"
            size="large"
            onClick={handleLogin}
            fullWidth
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            }
          >
            Login with Salesforce
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.875rem'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
          </svg>
          Secure OAuth 2.0 authentication
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
