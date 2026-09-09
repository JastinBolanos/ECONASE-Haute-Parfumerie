import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { WelcomeScreen } from '../components/welcome/WelcomeScreen';
import { useCart } from '../hooks/useCart';

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(() => {
    // Open on initial visit if not dismissed in current session
    return !sessionStorage.getItem('econase_welcome_dismissed');
  });
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleCloseWelcome = (selectedFamily?: 'AMADERADO & ESPECIADO' | 'CÍTRICO & FLORAL BLANCO' | 'CUERO & RESINAS NOBLES' | 'TODAS') => {
    setIsWelcomeOpen(false);
    if (selectedFamily && selectedFamily !== 'TODAS') {
      navigate(`/home?familia=${encodeURIComponent(selectedFamily)}`);
    } else if (selectedFamily === 'TODAS') {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1A1918]">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Interactive Minimalist Welcome Screen */}
      <WelcomeScreen
        isOpen={isWelcomeOpen}
        onClose={handleCloseWelcome}
      />

      {/* Lateral Drawer / Bandeja lateral con secciones principales */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenWelcome={() => {
          setIsSidebarOpen(false);
          setIsWelcomeOpen(true);
        }}
      />

      {/* Top navigation */}
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenWelcome={() => setIsWelcomeOpen(true)}
        cartCount={cartCount}
      />

      {/* Route Outlet */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenWelcome={() => setIsWelcomeOpen(true)} />
    </div>
  );
};

