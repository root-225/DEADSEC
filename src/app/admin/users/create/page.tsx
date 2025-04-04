import Link from 'next/link';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

export default function CreateUserPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/admin/users" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Créer un nouvel utilisateur</h1>
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
              </div>
            </div>
            
            {/* Password */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Mot de passe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Le mot de passe doit contenir au moins 8 caractères.
                  </p>
                </div>
                
                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le mot de passe *
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="send_credentials"
                      name="send_credentials"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="send_credentials" className="font-medium text-gray-700">
                      Envoyer les identifiants par email
                    </label>
                    <p className="text-gray-500">
                      Un email sera envoyé à l'utilisateur avec ses identifiants de connexion.
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
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Courte biographie de l'utilisateur"
                />
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
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
                Créer l'utilisateur
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
