import React from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import  Layout  from "../Layout/Layout";


const HomePage = lazy(() => import('../../pages/HomePage'))
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} > 
      <Route index element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
          
        </Route >
        </Routes>
      
    </div>
  );
};


