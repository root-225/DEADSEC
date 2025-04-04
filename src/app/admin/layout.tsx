"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaBook, 
  FaGraduationCap, 
  FaBlog, 
  FaChartLine, 
  FaCog, 
  FaUsers, 
  FaBars, 
  FaTimes,
  FaSignOutAlt,
  FaBell,
  FaUserCircle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navigation: NavItem[] = [
  { name: 'Tableau de bord', href: '/admin', icon: <FaChartLine className="w-6 h-6" /> },
  { name: 'E-books', href: '/admin/ebooks', icon: <FaBook className="w-6 h-6" /> },
  { name: 'Cours', href: '/admin/courses', icon: <FaGraduationCap className="w-6 h-6" /> },
  { name: 'Blog', href: '/admin/blog', icon: <FaBlog className="w-6 h-6" /> },
  { name: 'Utilisateurs', href: '/admin/users', icon: <FaUsers className="w-6 h-6" /> },
  { name: 'Paramètres', href: '/admin/settings', icon: <FaCog className="w-6 h-6" /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
            <Link href="/admin" className="flex items-center">
              <span className="text-white text-xl font-bold">HK Admin</span>
            </Link>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 bg-gray-800">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FaUserCircle className="w-8 h-8 text-gray-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`lg:pl-64 flex flex-col min-h-screen transition-all duration-200 ${
        isSidebarOpen ? 'pl-64' : 'pl-0'
      }`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="h-16 flex items-center justify-between px-4 lg:px-8">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <FaBars className="w-6 h-6" />
            </button>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaBell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <AnimatePresence>
                  {isNotificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {/* Example notifications */}
                        <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                          <p className="text-sm text-gray-700">Nouveau cours ajouté</p>
                          <p className="text-xs text-gray-500">Il y a 5 minutes</p>
                        </a>
                        <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                          <p className="text-sm text-gray-700">3 nouveaux utilisateurs inscrits</p>
                          <p className="text-xs text-gray-500">Il y a 1 heure</p>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaUserCircle className="w-6 h-6" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      <Link
                        href="/admin/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mon profil
                      </Link>
                      <Link
                        href="/admin/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Paramètres
                      </Link>
                      <hr className="my-1 border-gray-200" />
                      <button
                        onClick={() => {/* Handle logout */}}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                      >
                        <FaSignOutAlt className="w-4 h-4 mr-2" />
                        Déconnexion
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
