import Link from 'next/link';
import { FaArrowLeft, FaSave, FaTrash } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// Mock data for users
const users = [
  { 
    id: '1', 
    name: 'Admin', 
    email: 'admin@deadsec.com', 
    username: 'admin',
    role: 'admin',
    roleName: 'Administrateur',
    lastLogin: '18 mai 2023',
    status: 'active',
    bio: 'Administrateur principal du site Deadsec.'
  },
  { 
    id: '2', 
    name: 'Jean Dupont', 
    email: 'jean@deadsec.com', 
    username: 'jean',
    role: 'editor',
    roleName: 'Éditeur',
    lastLogin: '17 mai 2023',
    status: 'active',
    bio: 'Expert en cybersécurité chez Deadsec.'
  },
  { 
    id: '3', 
    name: 'Marie Laurent', 
    email: 'marie@deadsec.com', 
    username: 'marie',
    role: 'editor',
    roleName: 'Éditeur',
    lastLogin: '16 mai 2023',
    status: 'active',
    bio: 'Consultante en IA chez Deadsec.'
  },
];

export default function EditUserPage({ params }: { params: { id: string } }) {
  const user = users.find(user => user.id === params.id);
  
  if (!user) {
    notFound();
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/admin/users" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Modifier l'utilisateur</h1>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
          <FaSave className="mr-2" />
          Enregistrer
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          <div className="grid grid-cols-1 gap-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={user.name}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Prénom Nom"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={user.email}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="exemple@deadsec.com"
                  />
                </div>
              </div>
            </div>
            
            {/* Account Information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informations du compte</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom d'utilisateur *
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={user.username}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="utilisateur"
                  />
                </div>
                
                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Rôle *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue={user.role}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Sélectionner un rôle</option>
                    <option value="admin">Administrateur</option>
                    <option value="editor">Éditeur</option>
                    <option value="author">Auteur</option>
                    <option value="contributor">Contributeur</option>
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Les différents rôles ont des niveaux d'accès différents.
                  </p>
                </div>
                
                {/* Status */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Statut *
                  </label>
                  <select
                    id="status"
                    name="status"
                    required
                    defaultValue={user.status}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                  </select>
                </div>
                
                {/* Last Login */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dernière connexion
                  </label>
                  <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-50 rounded-md shadow-sm text-gray-500 sm:text-sm">
                    {user.lastLogin}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Password */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Changer le mot de passe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* New Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Laissez vide pour conserver le mot de passe actuel.
                  </p>
                </div>
                
                {/* Confirm New Password */}
                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="send_password_reset"
                      name="send_password_reset"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="send_password_reset" className="font-medium text-gray-700">
                      Envoyer un email de réinitialisation de mot de passe
                    </label>
                    <p className="text-gray-500">
                      Un email sera envoyé à l'utilisateur pour qu'il puisse définir son propre mot de passe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Informations supplémentaires</h3>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Biographie
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  defaultValue={user.bio}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Courte biographie de l'utilisateur"
                />
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaTrash className="mr-2" />
                Supprimer l'utilisateur
              </button>
              
              <div className="flex space-x-3">
                <Link
                  href="/admin/users"
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
