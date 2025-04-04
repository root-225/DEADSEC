import { FaSave } from 'react-icons/fa';

export default function SettingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Paramètres du site</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
          <FaSave className="mr-2" />
          Enregistrer les modifications
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          <div className="grid grid-cols-1 gap-6">
            {/* General Settings */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres généraux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Site Title */}
                <div>
                  <label htmlFor="site_title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titre du site
                  </label>
                  <input
                    type="text"
                    id="site_title"
                    name="site_title"
                    defaultValue="Deadsec"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                
                {/* Site Description */}
                <div>
                  <label htmlFor="site_description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description du site
                  </label>
                  <input
                    type="text"
                    id="site_description"
                    name="site_description"
                    defaultValue="Services de cybersécurité et transformation digitale"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              
              {/* Contact Email */}
              <div className="mt-4">
                <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email de contact
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  defaultValue="contact@deadsec.com"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            {/* Blog Settings */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres du blog</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Posts Per Page */}
                <div>
                  <label htmlFor="posts_per_page" className="block text-sm font-medium text-gray-700 mb-1">
                    Articles par page
                  </label>
                  <input
                    type="number"
                    id="posts_per_page"
                    name="posts_per_page"
                    min="1"
                    max="50"
                    defaultValue="10"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                
                {/* Default Category */}
                <div>
                  <label htmlFor="default_category" className="block text-sm font-medium text-gray-700 mb-1">
                    Catégorie par défaut
                  </label>
                  <select
                    id="default_category"
                    name="default_category"
                    defaultValue="cybersecurite"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="cybersecurite">Cybersécurité</option>
                    <option value="ia">Intelligence Artificielle</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="transformation-digitale">Transformation Digitale</option>
                  </select>
                </div>
              </div>
              
              {/* Comments Settings */}
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enable_comments"
                      name="enable_comments"
                      type="checkbox"
                      defaultChecked
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enable_comments" className="font-medium text-gray-700">
                      Activer les commentaires
                    </label>
                    <p className="text-gray-500">
                      Permettre aux utilisateurs de commenter les articles du blog.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="moderate_comments"
                      name="moderate_comments"
                      type="checkbox"
                      defaultChecked
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="moderate_comments" className="font-medium text-gray-700">
                      Modérer les commentaires
                    </label>
                    <p className="text-gray-500">
                      Les commentaires doivent être approuvés avant d'être publiés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Settings */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Réseaux sociaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Twitter */}
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                    Twitter
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://twitter.com/
                    </span>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      defaultValue="deadsec"
                      className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://linkedin.com/company/
                    </span>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      defaultValue="deadsec"
                      className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                {/* Facebook */}
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                    Facebook
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://facebook.com/
                    </span>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      defaultValue="deadsec"
                      className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                {/* Instagram */}
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://instagram.com/
                    </span>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      defaultValue="deadsec"
                      className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analytics Settings */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Analytiques</h3>
              <div>
                <label htmlFor="google_analytics" className="block text-sm font-medium text-gray-700 mb-1">
                  ID Google Analytics
                </label>
                <input
                  type="text"
                  id="google_analytics"
                  name="google_analytics"
                  placeholder="UA-XXXXXXXXX-X ou G-XXXXXXXXXX"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Laissez vide si vous n'utilisez pas Google Analytics.
                </p>
              </div>
            </div>
            
            {/* Submit Buttons */}
            <div className="flex justify-end space-x-3 border-t border-gray-200 pt-6">
              <button
                type="reset"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Réinitialiser
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaSave className="mr-2" />
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
