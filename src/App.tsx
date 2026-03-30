import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscriptions from './pages/Subscriptions';
import Login from './pages/Login';
import BookDetails from './pages/BookDetails';
import OnlineReading from './pages/OnlineReading';
import FreeReaders from './pages/FreeReaders';
import Reader from './pages/Reader';
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/signup';
  const isActualReaderPage = location.pathname.startsWith('/read/') && 
                            location.pathname !== '/read/free' && 
                            location.pathname !== '/read/premium';
  const isSpecialPage = isLoginPage || isActualReaderPage;

  return (
    <div className="min-h-screen flex flex-col">
      {!isSpecialPage && <Navbar />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/read/premium" element={<OnlineReading />} />
            <Route path="/read/free" element={<FreeReaders />} />
            <Route path="/read/:id" element={<Reader />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isSpecialPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
