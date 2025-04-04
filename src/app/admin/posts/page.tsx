import Link from 'next/link';
import { FaPlus, FaPen, FaEye, FaTrash } from 'react-icons/fa';

// Mock data for blog posts
const blogPosts = [
  { 
    id: '1', 
    title: 'Les tendances de la cybersécurité en 2023', 
    date: '15 mai 2023', 
    author: 'Jean Dupont',
    category: 'Cybersécurité',
    views: 1245, 
    status: 'Publié',
    slug: 'tendances-cybersecurite-2023'
  },
  { 
    id: '2', 
    title: 'Comment l\'IA transforme le monde des affaires', 
    date: '22 avril 2023', 
    author: 'Marie Laurent',
    category: 'Intelligence Artificielle',
    views: 876, 
    status: 'Publié',
    slug: 'ia-transformation-business'
  },
  { 
    id: '3', 
    title: 'Guide de migration vers le cloud pour les PME', 
    date: '10 mars 2023', 
    author: 'Thomas Moreau',
    category: 'Cloud Computing',
    views: 654, 
    status: 'Publié',
    slug: 'guide-migration-cloud-pme'
  },
  { 
    id: '4', 
    title: 'Les meilleures pratiques de développement web en 2023', 
    date: '28 février 2023', 
    author: 'Sophie Dubois',
    category: 'Développement Web',
    views: 432, 
    status: 'Publié',
    slug: 'meilleures-pratiques-dev-web-2023'
  },
  { 
    id: '5', 
    title: 'Sécurité des applications web', 
    date: '18 mai 2023', 
    author: 'Jean Dupont',
    category: 'Cybersécurité',
    views: 0, 
    status: 'Brouillon',
    slug: 'securite-applications-web'
  },
  { 
    id: '6', 
    title: 'L\'avenir du travail à distance', 
    date: '20 mai 2023', 
    author: 'Marie Laurent',
    category: 'Business',
    views: 0, 
    status: 'Brouillon',
    slug: 'avenir-travail-distance'
  },
];

export default function PostsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Articles</h1>
        <Link 
          href="/admin/posts/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" />
          Nouvel article
        </Link>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <select
              id="status"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Tous</option>
              <option value="published">Publié</option>
              <option value="draft">Brouillon</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
            <select
              id="category"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Toutes</option>
              <option value="cybersecurity">Cybersécurité</option>
              <option value="ai">Intelligence Artificielle</option>
              <option value="cloud">Cloud Computing</option>
              <option value="webdev">Développement Web</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Auteur</label>
            <select
              id="author"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Tous</option>
              <option value="jean">Jean Dupont</option>
              <option value="marie">Marie Laurent</option>
              <option value="thomas">Thomas Moreau</option>
              <option value="sophie">Sophie Dubois</option>
            </select>
          </div>
          <div className="w-full md:w-auto flex-grow">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
            <input
              type="text"
              id="search"
              placeholder="Rechercher un article..."
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="w-full md:w-auto flex items-end">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg">
              Filtrer
            </button>
          </div>
        </div>
      </div>
      
      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auteur
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vues
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.views.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === 'Publié' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/admin/posts/edit/${post.id}`} className="text-blue-600 hover:text-blue-900">
                        <FaPen />
                      </Link>
                      <Link href={`/blog/${post.slug}`} className="text-gray-600 hover:text-gray-900">
                        <FaEye />
                      </Link>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Précédent
          </a>
          <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Suivant
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Affichage de <span className="font-medium">1</span> à <span className="font-medium">6</span> sur <span className="font-medium">6</span> résultats
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Précédent</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Suivant</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
