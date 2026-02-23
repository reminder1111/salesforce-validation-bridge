import { motion, AnimatePresence } from 'framer-motion';
import { DOMAIN_TYPES } from "../../utils/constants";

const DomainSelector = ({ domainType, customDomain, onDomainTypeChange, onCustomDomainChange }) => {
  const domains = [
    {
      value: DOMAIN_TYPES.PRODUCTION,
      title: 'Production',
      description: 'login.salesforce.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
    },
    {
      value: DOMAIN_TYPES.CUSTOM,
      title: 'Custom Domain',
      description: 'Your My Domain URL',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{
        display: 'block',
        color: 'rgba(255,255,255,0.9)',
        fontSize: '0.875rem',
        fontWeight: '600',
        marginBottom: '0.75rem'
      }}>
        Environment Type
      </label>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {domains.map((domain, index) => (
          <motion.label
            key={domain.value}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              background: domainType === domain.value 
                ? 'linear-gradient(135deg, rgba(0, 161, 224, 0.3), rgba(1, 118, 211, 0.3))'
                : 'rgba(255, 255, 255, 0.08)',
              border: `2px solid ${domainType === domain.value ? 'rgba(0, 161, 224, 0.6)' : 'rgba(255, 255, 255, 0.15)'}`,
              borderRadius: '12px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <input
              type="radio"
              name="domain"
              value={domain.value}
              checked={domainType === domain.value}
              onChange={(e) => onDomainTypeChange(e.target.value)}
              style={{ display: 'none' }}
            />
            
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.5)',
              marginRight: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <AnimatePresence>
                {domainType === domain.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'white'
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'white',
                fontWeight: '600',
                marginBottom: '0.25rem'
              }}>
                {domain.icon}
                {domain.title}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.7)'
              }}>
                {domain.description}
              </div>
            </div>
          </motion.label>
        ))}
      </div>

      <AnimatePresence>
        {domainType === DOMAIN_TYPES.CUSTOM && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: '1rem' }}
          >
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              Custom Domain URL
            </label>
            <input
              type="text"
              placeholder="https://yourdomain.my.salesforce.com"
              value={customDomain}
              onChange={(e) => onCustomDomainChange(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.875rem',
                backdropFilter: 'blur(10px)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(0, 161, 224, 0.6)';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            />
            <p style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '0.5rem',
              marginBottom: 0
            }}>
              Enter your complete My Domain URL (must start with https:// and end with .salesforce.com)
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DomainSelector;
