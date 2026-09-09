import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { useCart } from '../hooks/useCart';

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1A1918]">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Lateral Drawer / Bandeja lateral con secciones principales */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Top navigation */}
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        cartCount={cartCount}
      />

      {/* Route Outlet */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};
