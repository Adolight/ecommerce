import type { ReactNode } from "react";
import Header from "../compnents/header";
// import  Sidebar  from "../compnents/sidebar";

type SidebarLayoutProps = {
  children: ReactNode;
};

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar admin */}
      <aside className="w-64 bg-gray-900 text-white">
        
      </aside>

      {/* Contenu principal */}
      <div className="flex flex-col min-h-screen">
             <Header />

      {/* Contenu principal */}
      <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
