import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import LoginForm from './components/auth/Loginform';
import RulesSection from './components/rules/Rulessection';
import Alert from './components/common/Alert';
import Loader from './components/common/Loader';
import EmptyState from './components/rules/Emptystate .jsx';
import { useAuth } from './hooks/useAuth';
import { useRules } from './hooks/useRules';
import { useToast } from './hooks/useToast';
import './styles/glass-theme.css';
import './index.css';

function App() {
  const { 
    loggedIn, 
    userInfo, 
    loading, 
    checkAuth, 
    handleLogout 
  } = useAuth();
  
  const {
    rules,
    rulesLoading,
    togglingId,
    searchTerm,
    filterActive,
    setSearchTerm,
    setFilterActive,
    fetchValidationRules,
    handleToggle,
    filteredRules
  } = useRules(loggedIn);

  const { toast, showToast, clearToast } = useToast();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const successParam = params.get('success');
    const errorParam = params.get('error');

    if (successParam === '1') {
      showToast('Successfully logged in to Salesforce!', 'success');
      checkAuth();
      window.history.replaceState({}, '', window.location.pathname);
    }

    if (errorParam) {
      showToast(decodeURIComponent(errorParam), 'error');
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [checkAuth, showToast]);

  if (loading) {
    return <Loader text="Checking authentication..." />;
  }

  return (
    <>
      {/* Animated Background Clouds */}
      <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      <Layout 
        loggedIn={loggedIn} 
        userInfo={userInfo}
        onLogout={handleLogout}
        onRefresh={fetchValidationRules}
        rulesLoading={rulesLoading}
      >
        <AnimatePresence mode="wait">
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Alert 
                type={toast.type} 
                message={toast.message} 
                onClose={clearToast} 
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!loggedIn ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <LoginForm onShowToast={showToast} />
            </motion.div>
          ) : (
            <motion.div
              key="rules"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {rules.length > 0 ? (
                <RulesSection
                  rules={filteredRules}
                  searchTerm={searchTerm}
                  filterActive={filterActive}
                  onSearchChange={setSearchTerm}
                  onFilterChange={setFilterActive}
                  onToggle={(rule) => handleToggle(rule, showToast)}
                  togglingId={togglingId}
                />
              ) : (
                !rulesLoading && (
                  <EmptyState
                    title="No Validation Rules Yet"
                    message="Click the 'Refresh Rules' button above to load validation rules from your Salesforce org."
                    onAction={fetchValidationRules}
                    actionText="Load Validation Rules"
                    loading={rulesLoading}
                  />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
