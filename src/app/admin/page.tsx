"use client";

import React from 'react';
import { 
  FaBook, 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaEye, 
  FaDownload,
  FaUserGraduate,
  FaComments
} from 'react-icons/fa';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the charts
const visitsData = [
  { name: 'Jan', visits: 4000 },
  { name: 'Fév', visits: 3000 },
  { name: 'Mar', visits: 5000 },
  { name: 'Avr', visits: 4500 },
  { name: 'Mai', visits: 6000 },
  { name: 'Juin', visits: 5500 },
];

const recentActivities = [
  {
    id: 1,
    action: 'Nouveau cours ajouté',
    details: 'Cybersécurité Avancée',
    time: 'Il y a 5 minutes',
  },
  {
    id: 2,
    action: 'Nouvel utilisateur inscrit',
    details: 'jean.dupont@example.com',
    time: 'Il y a 15 minutes',
  },
  {
    id: 3,
    action: 'E-book téléchargé',
    details: 'Guide de la Cybersécurité',
    time: 'Il y a 30 minutes',
  },
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Utilisateurs</p>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
              <p className="text-sm text-green-600">+12% ce mois</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUsers className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cours Actifs</p>
              <p className="text-2xl font-semibold text-gray-900">45</p>
              <p className="text-sm text-green-600">+3 cette semaine</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <FaGraduationCap className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">E-books Téléchargés</p>
              <p className="text-2xl font-semibold text-gray-900">2,567</p>
              <p className="text-sm text-green-600">+25% ce mois</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaDownload className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Visites Aujourd'hui</p>
              <p className="text-2xl font-semibold text-gray-900">856</p>
              <p className="text-sm text-green-600">+5% vs hier</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaEye className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trafic du Site</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité Récente</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {activity.action.includes('cours') ? (
                      <FaGraduationCap className="w-4 h-4 text-gray-600" />
                    ) : activity.action.includes('utilisateur') ? (
                      <FaUserGraduate className="w-4 h-4 text-gray-600" />
                    ) : (
                      <FaBook className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            href="/admin/activity"
            className="mt-4 inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            Voir toute l'activité
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/courses/new"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaGraduationCap className="w-6 h-6 text-purple-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Ajouter un Cours</p>
              <p className="text-sm text-gray-600">Créer un nouveau cours</p>
            </div>
          </Link>

          <Link
            href="/admin/ebooks/new"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaBook className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Ajouter un E-book</p>
              <p className="text-sm text-gray-600">Publier un nouveau e-book</p>
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaUsers className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Gérer les Utilisateurs</p>
              <p className="text-sm text-gray-600">Voir tous les utilisateurs</p>
            </div>
          </Link>

          <Link
            href="/admin/analytics"
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaChartLine className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Voir les Analytics</p>
              <p className="text-sm text-gray-600">Statistiques détaillées</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
