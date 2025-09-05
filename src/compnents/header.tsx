// src/components/Header.tsx
import { Link } from "react-router-dom"; // ou remplacer par <a href> si pas de router
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#ff8c00e1] shadow-md">
      <div className="container mx-20 px-4 py-20 flex justify-between gap-50 items-center">
        <h1 className="text-3xl font-bold text-white">GASRTO<span className="text-[#078610]">WOLF</span></h1>
        <nav className="flex items-center gap-15">
          <ul className="flex space-x-10 text-white text-2xl  font-bold ">
            <li>
              <Link to="/" className="hover:text-yellow-600">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Nos_services" className="hover:text-yellow-600">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-yellow-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-normal gap-20">
          <Link to="/" >
              <button className="text-white font-bold text-2xl">Se connecter</button>
          </Link>
        
            {/* Icône panier */}
          <Link to="/Panier" className="relative">
            <ShoppingCart className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            {/* Badge du nombre d'articles (facultatif) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              0
            </span> 
          </Link>
      </div>
      </div>
      
    </header>
  );
};

export default Header;
