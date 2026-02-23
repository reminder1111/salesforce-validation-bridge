import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, loggedIn, userInfo, onLogout, onRefresh, rulesLoading }) => {
  return (
    <div className="app">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header 
          loggedIn={loggedIn}
          userInfo={userInfo}
          onLogout={onLogout}
          onRefresh={onRefresh}
          rulesLoading={rulesLoading}
        />
      </motion.div>
      
      <main className="main-content">
        {children}
      </main>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;
