import Link from 'next/link';
import { FaArrowLeft, FaSave, FaEye, FaTrash } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// Mock data for blog posts
const blogPosts = [
  { 
    id: '1', 
    title: 'Les tendances de la cybersécurité en 2023', 
    slug: 'tendances-cybersecurite-2023',
    excerpt: 'Découvrez les principales menaces et solutions de sécurité qui façonnent le paysage numérique cette année.',
    content: `
      <p>La cybersécurité est plus importante que jamais dans notre monde de plus en plus connecté. En 2023, plusieurs tendances majeures façonnent le paysage de la sécurité numérique.</p>
      
      <h2>1. L'essor des attaques de ransomware ciblées</h2>
      <p>Les attaques de ransomware sont devenues plus sophistiquées et ciblées. Les cybercriminels ne se contentent plus d'attaques massives et indifférenciées, mais ciblent désormais des organisations spécifiques susceptibles de payer des rançons importantes.</p>
      
      <h2>2. L'adoption croissante de l'authentification sans mot de passe</h2>
      <p>Les méthodes d'authentification sans mot de passe, telles que les clés de sécurité, la biométrie et les applications d'authentification, gagnent du terrain. Ces méthodes offrent non seulement une meilleure sécurité, mais également une expérience utilisateur améliorée.</p>
      
      <h2>3. L'intelligence artificielle dans la cybersécurité</h2>
      <p>L'IA est utilisée à la fois par les défenseurs et les attaquants. Les solutions de sécurité basées sur l'IA peuvent détecter des comportements anormaux et des menaces inconnues, tandis que les cybercriminels utilisent l'IA pour créer des attaques plus sophistiquées.</p>
      
      <h2>4. La sécurité du cloud en évolution</h2>
      <p>Avec l'adoption massive du cloud, la sécurité des environnements cloud est devenue une priorité. Les entreprises investissent dans des solutions spécifiques au cloud pour protéger leurs données et applications.</p>
      
      <h2>5. La montée des menaces liées à l'Internet des objets (IoT)</h2>
      <p>L'expansion de l'IoT crée de nouvelles surfaces d'attaque. Les appareils IoT, souvent dotés d'une sécurité limitée, deviennent des cibles privilégiées pour les cybercriminels.</p>
      
      <h2>Conclusion</h2>
      <p>Face à ces tendances, les organisations doivent adopter une approche proactive de la cybersécurité. Cela implique non seulement l'utilisation des dernières technologies de sécurité, mais également la formation des employés et la mise en place de processus de sécurité robustes.</p>
    `,
    date: '2023-05-15', 
    author: 'jean',
    authorName: 'Jean Dupont',
    category: 'cybersecurity',
    categoryName: 'Cybersécurité',
    views: 1245, 
    status: 'published',
    tags: 'Cybersécurité, Ransomware, IA, Cloud, IoT',
    imageUrl: '/images/blog/cybersecurity-trends.jpg'
  },
  { 
    id: '2', 
    title: 'Comment l\'IA transforme le monde des affaires', 
    slug: 'ia-transformation-business',
    excerpt: 'L\'intelligence artificielle révolutionne la façon dont les entreprises opèrent. Voici comment en tirer parti.',
    content: `
      <p>L'intelligence artificielle (IA) est en train de révolutionner le monde des affaires à un rythme sans précédent. Des startups aux grandes entreprises, l'IA offre des opportunités inédites pour améliorer l'efficacité, réduire les coûts et créer de nouveaux modèles commerciaux.</p>
      
      <h2>Automatisation des processus</h2>
      <p>L'une des applications les plus immédiates de l'IA est l'automatisation des tâches répétitives. Les systèmes d'IA peuvent traiter des factures, gérer des inventaires et même répondre aux demandes des clients, libérant ainsi les employés pour des tâches à plus forte valeur ajoutée.</p>
      
      <h2>Analyse prédictive</h2>
      <p>L'IA excelle dans l'analyse de grandes quantités de données pour identifier des tendances et faire des prédictions. Les entreprises utilisent ces capacités pour prévoir la demande des clients, optimiser les prix et anticiper les problèmes de maintenance.</p>
      
      <h2>Personnalisation à grande échelle</h2>
      <p>Grâce à l'IA, les entreprises peuvent offrir des expériences personnalisées à des millions de clients simultanément. Des recommandations de produits aux communications marketing, l'IA permet une personnalisation qui était auparavant impossible à cette échelle.</p>
      
      <h2>Prise de décision améliorée</h2>
      <p>Les outils d'aide à la décision basés sur l'IA fournissent aux dirigeants des insights précieux pour prendre des décisions plus éclairées. Ces systèmes peuvent analyser des scénarios complexes et recommander des actions optimales.</p>
      
      <h2>Défis et considérations</h2>
      <p>Malgré ses nombreux avantages, l'adoption de l'IA présente des défis. Les entreprises doivent gérer les questions éthiques, assurer la qualité des données et former leur personnel. Une stratégie d'IA bien pensée est essentielle pour maximiser les bénéfices tout en minimisant les risques.</p>
      
      <h2>Conclusion</h2>
      <p>L'IA n'est plus une technologie futuriste, mais une réalité commerciale. Les entreprises qui adoptent l'IA de manière stratégique seront mieux positionnées pour prospérer dans l'économie numérique en constante évolution.</p>
    `,
    date: '2023-04-22', 
    author: 'marie',
    authorName: 'Marie Laurent',
    category: 'ai',
    categoryName: 'Intelligence Artificielle',
    views: 876, 
    status: 'published',
    tags: 'Intelligence Artificielle, Business, Automatisation, Analyse de données',
    imageUrl: '/images/blog/ai-business.jpg'
  },
];

export default function EditPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/admin/posts" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Modifier l'article</h1>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaSave className="mr-2" />
            Enregistrer
          </button>
          <Link href={`/blog/${post.slug}`} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaEye className="mr-2" />
            Voir
          </Link>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          <div className="grid grid-cols-1 gap-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Titre de l'article *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                defaultValue={post.title}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Entrez le titre de l'article"
              />
            </div>
            
            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                Slug *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  /blog/
                </span>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  required
                  defaultValue={post.slug}
                  className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="mon-titre-article"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                L'URL de l'article. Utilisez des tirets pour séparer les mots.
              </p>
            </div>
            
            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                Extrait *
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                required
                defaultValue={post.excerpt}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Bref résumé de l'article (affiché dans les listes d'articles)"
              />
            </div>
            
            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Contenu *
              </label>
              <textarea
                id="content"
                name="content"
                rows={15}
                required
                defaultValue={post.content}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Contenu de l'article (supporte le HTML)"
              />
              <p className="mt-1 text-sm text-gray-500">
                Vous pouvez utiliser des balises HTML pour formater votre contenu.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue={post.category}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="cybersecurity">Cybersécurité</option>
                  <option value="ai">Intelligence Artificielle</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="webdev">Développement Web</option>
                  <option value="business">Business</option>
                </select>
              </div>
              
              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur *
                </label>
                <select
                  id="author"
                  name="author"
                  required
                  defaultValue={post.author}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Sélectionner un auteur</option>
                  <option value="jean">Jean Dupont</option>
                  <option value="marie">Marie Laurent</option>
                  <option value="thomas">Thomas Moreau</option>
                  <option value="sophie">Sophie Dubois</option>
                </select>
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                defaultValue={post.tags}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Séparez les tags par des virgules"
              />
              <p className="mt-1 text-sm text-gray-500">
                Ex: Cybersécurité, Cloud, IA
              </p>
            </div>
            
            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image à la une *
              </label>
              <div className="mt-1">
                <div className="mb-3">
                  <p className="text-sm text-gray-500">Image actuelle:</p>
                  <div className="mt-1 relative h-40 w-full md:w-1/2 overflow-hidden rounded-md">
                    <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Télécharger une nouvelle image</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Publication Settings */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres de publication</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Status */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Statut
                  </label>
                  <select
                    id="status"
                    name="status"
                    defaultValue={post.status}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                  </select>
                </div>
                
                {/* Publication Date */}
                <div>
                  <label htmlFor="publication_date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de publication
                  </label>
                  <input
                    type="date"
                    id="publication_date"
                    name="publication_date"
                    defaultValue={post.date}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaTrash className="mr-2" />
                Supprimer
              </button>
              
              <div className="flex space-x-3">
                <Link
                  href="/admin/posts"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <FaSave className="mr-2" />
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
