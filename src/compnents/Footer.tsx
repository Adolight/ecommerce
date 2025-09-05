import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  LayoutDashboard,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ff8c00b7] text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* À propos + logo */}
        <div>
          <div className="flex items-center gap-2 text-white text-xl font-bold mb-4">
            <LayoutDashboard size={24} />
            <h1 className="text-2xl font-bold text-white">ADO<span className="text-yellow-600">LIGHT</span></h1>
          </div>
          <p className="text-gray-100 text-sm">
            Fabrication artisanale de meubles sur-mesure. Un savoir-faire local au service de vos projets.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Nos services</a></li>
            <li><a href="#" className="hover:text-white">À propos</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li><a href="#" className="hover:text-white">Placards & Dressings</a></li>
            <li><a href="#" className="hover:text-white">Cuisines sur-mesure</a></li>
            <li><a href="#" className="hover:text-white">Lits & Rangements</a></li>
            <li><a href="#" className="hover:text-white">Meubles salon</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +235 65 98 94 43
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> menuiserieadolight@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> N'Djamena, Tchad
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Menuiserieadolight. Tous droits réservés.
        &nbsp; | &nbsp;
        <a href="#" className="hover:text-white">Mentions légales</a> &nbsp; | &nbsp;
        <a href="#" className="hover:text-white">Politique de confidentialité</a>
      </div>
    </footer>
  );
};

export default Footer;
