export default function ArchitecturePage() {
  return (
    <div className="prose max-w-none">
      <h1>Architecture</h1>

      <h2>Structure du Projet</h2>
      <div className="not-prose">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg">
{`dcf/
├── admin/           # Interface d'administration
├── server/          # Logique côté serveur
├── dist/           # Code compilé
└── config/         # Fichiers de configuration`}
        </pre>
      </div>

      <h2>Composants Principaux</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Admin</h3>
          <p className="text-gray-600">
            Interface d'administration construite avec React et @strapi/design-system
          </p>
          <ul className="mt-4 space-y-2">
            <li>Gestion des causes</li>
            <li>Configuration du plugin</li>
            <li>Interface utilisateur moderne</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Server</h3>
          <p className="text-gray-600">
            Backend TypeScript gérant la logique métier et les données
          </p>
          <ul className="mt-4 space-y-2">
            <li>API RESTful</li>
            <li>Services métier</li>
            <li>Gestion des données</li>
          </ul>
        </div>
      </div>

      <h2>Points d'Entrée</h2>
      <p>
        Le plugin utilise plusieurs points d'entrée clés pour son fonctionnement :
      </p>
      <ul>
        <li><code>bootstrap.ts</code> : Initialisation du plugin</li>
        <li><code>register.ts</code> : Enregistrement des fonctionnalités</li>
        <li><code>destroy.ts</code> : Nettoyage à l'arrêt</li>
      </ul>
    </div>
  );
} 