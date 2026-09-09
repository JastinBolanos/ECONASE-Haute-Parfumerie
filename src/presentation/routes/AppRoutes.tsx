import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { CatalogPage } from '../pages/catalog/CatalogPage';
import { ProductDetailPage } from '../pages/catalog/ProductDetailPage';
import { MaisonPage } from '../pages/maison/MaisonPage';
import { CartPage } from '../pages/cart/CartPage';
import { ProfileLayout } from '../pages/profile/ProfileLayout';
import { ProfileOverviewPage } from '../pages/profile/ProfileOverviewPage';
import { ProfileSettingsPage } from '../pages/profile/ProfileSettingsPage';
import { ProfileAddressesPage } from '../pages/profile/ProfileAddressesPage';
import { ProfileOrdersPage } from '../pages/profile/ProfileOrdersPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Root redirect to semantic home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Main Home Hierarchy */}
      <Route path="/home" element={<MainLayout />}>
        {/* Catálogo Principal */}
        <Route index element={<CatalogPage />} />

        {/* Ficha Detallada de Fragancia */}
        <Route path="fragancias/:id" element={<ProductDetailPage />} />

        {/* Filosofía y Maison */}
        <Route path="maison" element={<MaisonPage />} />

        {/* Bolsa de Compras */}
        <Route path="bolsa" element={<CartPage />} />

        {/* Espacio del Cliente / Perfil y Sub-rutas jerárquicas */}
        <Route path="perfil" element={<ProfileLayout />}>
          {/* Resumen de Cuenta */}
          <Route index element={<ProfileOverviewPage />} />

          {/* Ajustes y Seguridad */}
          <Route path="ajustes" element={<ProfileSettingsPage />} />

          {/* Libreta de Direcciones de Entrega */}
          <Route path="direcciones" element={<ProfileAddressesPage />} />

          {/* Historial de Pedidos */}
          <Route path="pedidos" element={<ProfileOrdersPage />} />
        </Route>
      </Route>

      {/* Catch-all for unmatched routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
