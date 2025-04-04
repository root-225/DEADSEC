import Link from 'next/link';
import { FaArrowLeft, FaSave, FaEye } from 'react-icons/fa';

export default function CreatePostPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/admin/posts" className="text-gray-600 hover:text-gray-900 mr-4">
            <FaArrowLeft />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Créer un nouvel article</h1>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaSave className="mr-2" />
            Enregistrer
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaEye className="mr-2" />
            Prévisualiser
          </button>
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
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                      <span>Télécharger un fichier</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">ou glisser-déposer</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
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
              <button
                type="button"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Publier
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
