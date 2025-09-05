import type { ReactNode } from "react";
import Header from "../compnents/header";
import Footer from "../compnents/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#5c3f1cdc]">
      {/* Header fixe en haut */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow">{children}</main>

      {/* Footer toujours en bas */}
      <Footer />
    </div>
  );
};
export default MainLayout;