import { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { FaHome, FaNewspaper, FaUsers, FaSignOutAlt, FaCog, FaEye } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Deadsec',
  description: 'Panneau d\'administration pour gérer le contenu du site Deadsec',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Deadsec Admin</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/admin" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaHome className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/posts" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaNewspaper className="mr-3" />
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/admin/users" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaUsers className="mr-3" />
                  Utilisateurs
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaCog className="mr-3" />
                  Paramètres
                </Link>
              </li>
              <li className="pt-6 mt-6 border-t border-gray-700">
                <Link href="/" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaEye className="mr-3" />
                  Voir le site
                </Link>
              </li>
              <li>
                <Link href="/admin/logout" className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaSignOutAlt className="mr-3" />
                  Déconnexion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 w-full">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Admin Dashboard</h2>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-4">Connecté en tant qu'Admin</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
