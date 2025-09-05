// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Accueil";
import Contact from "../pages/Contact";
import Nos_services from "../pages/Menu";
import MainLayout from "../layouts/Mainlayout";
import Dashboard from "../pages/Dashbord";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/nos_services" element={<MainLayout><Nos_services /></MainLayout>} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
