import Link from 'next/link';
import { FaPlus, FaPen, FaTrash, FaUserShield, FaUserEdit, FaUserCog } from 'react-icons/fa';

// Mock data for users
const users = [
  { 
    id: '1', 
    name: 'Admin', 
    email: 'admin@deadsec.com', 
    role: 'Administrateur', 
    lastLogin: '18 mai 2023',
    status: 'Actif'
  },
  { 
    id: '2', 
    name: 'Jean Dupont', 
    email: 'jean@deadsec.com', 
    role: 'Éditeur', 
    lastLogin: '17 mai 2023',
    status: 'Actif'
  },
  { 
    id: '3', 
    name: 'Marie Laurent', 
    email: 'marie@deadsec.com', 
    role: 'Éditeur', 
    lastLogin: '16 mai 2023',
    status: 'Actif'
  },
  { 
    id: '4', 
    name: 'Thomas Moreau', 
    email: 'thomas@deadsec.com', 
    role: 'Auteur', 
    lastLogin: '15 mai 2023',
    status: 'Actif'
  },
  { 
    id: '5', 
    name: 'Sophie Dubois', 
    email: 'sophie@deadsec.com', 
    role: 'Auteur', 
    lastLogin: '14 mai 2023',
    status: 'Actif'
  },
  { 
    id: '6', 
    name: 'Pierre Martin', 
    email: 'pierre@deadsec.com', 
    role: 'Contributeur', 
    lastLogin: '10 mai 2023',
    status: 'Inactif'
  },
];

// Role icons mapping
const roleIcons = {
  'Administrateur': <FaUserShield className="text-red-500" />,
  'Éditeur': <FaUserEdit className="text-blue-500" />,
  'Auteur': <FaUserCog className="text-green-500" />,
  'Contributeur': <FaUserCog className="text-yellow-500" />,
};

export default function UsersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
        <Link 
          href="/admin/users/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" />
          Nouvel utilisateur
        </Link>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
            <select
              id="role"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Tous</option>
              <option value="admin">Administrateur</option>
              <option value="editor">Éditeur</option>
              <option value="author">Auteur</option>
              <option value="contributor">Contributeur</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
            <select
              id="status"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Tous</option>
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
            </select>
          </div>
          <div className="w-full md:w-auto flex-grow">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Recherche</label>
            <input
              type="text"
              id="search"
              placeholder="Rechercher un utilisateur..."
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
      
      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dernière connexion
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="mr-2">{roleIcons[user.role as keyof typeof roleIcons]}</span>
                      <span className={`text-sm font-medium ${
                        user.role === 'Administrateur' ? 'text-red-800' : 
                        user.role === 'Éditeur' ? 'text-blue-800' : 
                        user.role === 'Auteur' ? 'text-green-800' : 
                        'text-yellow-800'
                      }`}>
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.lastLogin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <Link href={`/admin/users/edit/${user.id}`} className="text-blue-600 hover:text-blue-900">
                        <FaPen />
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
