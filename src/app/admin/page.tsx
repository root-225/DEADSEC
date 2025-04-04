import Link from 'next/link';
import { FaNewspaper, FaUsers, FaEye, FaPen, FaPlus } from 'react-icons/fa';

// Mock data for dashboard statistics
const stats = [
  { name: 'Articles publiés', value: '24', icon: <FaNewspaper className="w-6 h-6" />, color: 'bg-blue-500' },
  { name: 'Utilisateurs', value: '8', icon: <FaUsers className="w-6 h-6" />, color: 'bg-green-500' },
  { name: 'Vues totales', value: '12,493', icon: <FaEye className="w-6 h-6" />, color: 'bg-purple-500' },
];

// Mock data for recent posts
const recentPosts = [
  { id: '1', title: 'Les tendances de la cybersécurité en 2023', date: '15 mai 2023', views: 1245, status: 'Publié' },
  { id: '2', title: 'Comment l\'IA transforme le monde des affaires', date: '22 avril 2023', views: 876, status: 'Publié' },
  { id: '3', title: 'Guide de migration vers le cloud pour les PME', date: '10 mars 2023', views: 654, status: 'Publié' },
  { id: '4', title: 'Les meilleures pratiques de développement web en 2023', date: '28 février 2023', views: 432, status: 'Publié' },
  { id: '5', title: 'Brouillon: Sécurité des applications web', date: '18 mai 2023', views: 0, status: 'Brouillon' },
];

// Mock data for recent users
const recentUsers = [
  { id: '1', name: 'Admin', email: 'admin@deadsec.com', role: 'Administrateur', lastLogin: '18 mai 2023' },
  { id: '2', name: 'Jean Dupont', email: 'jean@deadsec.com', role: 'Éditeur', lastLogin: '17 mai 2023' },
  { id: '3', name: 'Marie Laurent', email: 'marie@deadsec.com', role: 'Éditeur', lastLogin: '16 mai 2023' },
  { id: '4', name: 'Thomas Moreau', email: 'thomas@deadsec.com', role: 'Auteur', lastLogin: '15 mai 2023' },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-full p-3 text-white mr-4`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Articles récents</h2>
            <Link href="/admin/posts/create" className="flex items-center text-sm text-blue-600 hover:text-blue-800">
              <FaPlus className="mr-1" />
              Nouvel article
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titre
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
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
                      <Link href={`/admin/posts/edit/${post.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                        <FaPen />
                      </Link>
                      <Link href={`/blog/${post.id}`} className="text-gray-600 hover:text-gray-900">
                        <FaEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link href="/admin/posts" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tous les articles →
            </Link>
          </div>
        </div>
        
        {/* Recent Users */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Utilisateurs récents</h2>
            <Link href="/admin/users/create" className="flex items-center text-sm text-blue-600 hover:text-blue-800">
              <FaPlus className="mr-1" />
              Nouvel utilisateur
            </Link>
          </div>
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === 'Administrateur' ? 'bg-red-100 text-red-800' : 
                        user.role === 'Éditeur' ? 'bg-blue-100 text-blue-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.lastLogin}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link href="/admin/users" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tous les utilisateurs →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
