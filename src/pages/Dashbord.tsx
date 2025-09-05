import SidebarLayout from "../layouts/Sidebarlayout";

export default function Dashboard() {
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold mb-4">Tableau de bord Admin</h1>
      <p className="text-gray-600">Bienvenue sur l’espace d’administration.</p>

      {/* Exemple de stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white shadow rounded-2xl">📊 Utilisateurs: 120</div>
        <div className="p-6 bg-white shadow rounded-2xl">🛒 Produits: 56</div>
        <div className="p-6 bg-white shadow rounded-2xl">💰 Ventes: 340</div>
      </div>
    </SidebarLayout>
  );
}
