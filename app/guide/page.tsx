export default function GuidePage() {
  return (
    <div className="prose max-w-none">
      <h1>Documentation de l'API DCF</h1>
      
      <p className="lead">
        Bienvenue dans la documentation officielle du plugin DCF pour Strapi. Cette documentation vous guidera à travers l'architecture, la configuration et l'utilisation de notre API.
      </p>

      <h2>Vue d'ensemble</h2>
      <p>
        DCF est un plugin Strapi moderne développé en TypeScript qui permet de gérer efficacement les dons et les causes. Il est construit sur une architecture robuste divisée en deux parties principales : une interface d'administration et une logique serveur.
      </p>

      <h2>Versions et Compatibilité</h2>
      <div className="not-prose">
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <ul className="space-y-1">
              <li>React v18.3.1</li>
              <li>React Router DOM v6.30.0</li>
              <li>Styled Components v6.1.15</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <ul className="space-y-1">
              <li>Strapi v5.11.2</li>
              <li>TypeScript v5.8.2</li>
              <li>Strapi SDK Plugin v5.3.2</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Pour Commencer</h2>
      <p>
        Explorez les sections suivantes pour comprendre en détail le fonctionnement de l'API :
      </p>
      <ul>
        <li>Architecture : Structure du projet et organisation du code</li>
        <li>Configuration : Paramétrage et personnalisation</li>
        <li>API Reference : Documentation détaillée des endpoints</li>
        <li>Bonnes Pratiques : Recommandations et conventions</li>
      </ul>
    </div>
  );
} 