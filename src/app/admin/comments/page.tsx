"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheck, FaTimes, FaTrash, FaEdit, FaEye, FaFilter } from 'react-icons/fa';

// Mock data for comments
const commentsData = [
  {
    id: '1',
    author: 'Sophie Martin',
    email: 'sophie.martin@example.com',
    content: 'Excellent article, très instructif sur les tendances actuelles en cybersécurité. J\'ai particulièrement apprécié la partie sur l\'authentification sans mot de passe.',
    date: '2023-05-15T14:32:00',
    postId: '1',
    postTitle: 'Les tendances de la cybersécurité en 2023',
    status: 'approved',
    ip: '192.168.1.1',
  },
  {
    id: '2',
    author: 'Thomas Dubois',
    email: 'thomas.dubois@example.com',
    content: 'Je suis d\'accord avec les points soulevés dans cet article. L\'IA transforme vraiment la façon dont nous faisons des affaires aujourd\'hui.',
    date: '2023-05-14T10:15:00',
    postId: '2',
    postTitle: 'Comment l\'IA transforme le monde des affaires',
    status: 'approved',
    ip: '192.168.1.2',
  },
  {
    id: '3',
    author: 'Julie Leroy',
    email: 'julie.leroy@example.com',
    content: 'Merci pour ce guide détaillé sur la migration vers le cloud. Nous sommes une PME et nous envisageons de faire cette transition prochainement.',
    date: '2023-05-13T16:45:00',
    postId: '3',
    postTitle: 'Guide de migration vers le cloud pour les PME',
    status: 'pending',
    ip: '192.168.1.3',
  },
  {
    id: '4',
    author: 'Pierre Moreau',
    email: 'pierre.moreau@example.com',
    content: 'Je trouve que ces pratiques de développement web sont déjà obsolètes. Il y a des approches bien plus modernes maintenant.',
    date: '2023-05-12T09:20:00',
    postId: '4',
    postTitle: 'Les meilleures pratiques de développement web en 2023',
    status: 'pending',
    ip: '192.168.1.4',
  },
  {
    id: '5',
    author: 'spam_bot',
    email: 'spam@example.com',
    content: 'Check out our amazing products at discount prices! Visit our website now! [link removed]',
    date: '2023-05-11T22:10:00',
    postId: '1',
    postTitle: 'Les tendances de la cybersécurité en 2023',
    status: 'spam',
    ip: '192.168.1.5',
  },
  {
    id: '6',
    author: 'Marie Dupont',
    email: 'marie.dupont@example.com',
    content: 'Je viens de commencer à explorer l\'IA pour notre entreprise et cet article m\'a donné beaucoup d\'idées. Merci !',
    date: '2023-05-10T14:05:00',
    postId: '2',
    postTitle: 'Comment l\'IA transforme le monde des affaires',
    status: 'approved',
    ip: '192.168.1.6',
  },
  {
    id: '7',
    author: 'Jean Bernard',
    email: 'jean.bernard@example.com',
    content: 'Article très intéressant. J\'aimerais savoir si vous avez des recommandations spécifiques pour les entreprises du secteur de la santé ?',
    date: '2023-05-09T11:30:00',
    postId: '3',
    postTitle: 'Guide de migration vers le cloud pour les PME',
    status: 'pending',
    ip: '192.168.1.7',
  },
];

export default function CommentsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedComments, setSelectedComments] = useState([] as string[]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter comments based on status and search term
  const filteredComments = commentsData.filter(comment => {
    const matchesStatus = filter === 'all' || comment.status === filter;
    const matchesSearch = 
      comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.postTitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  
  // Toggle comment selection
  const toggleCommentSelection = (id: string) => {
    if (selectedComments.includes(id)) {
      setSelectedComments(selectedComments.filter((commentId: string) => commentId !== id));
    } else {
      setSelectedComments([...selectedComments, id]);
    }
  };
  
  // Select all comments
  const toggleSelectAll = () => {
    if (selectedComments.length === filteredComments.length) {
      setSelectedComments([]);
    } else {
      setSelectedComments(filteredComments.map(comment => comment.id));
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'spam':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des commentaires</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              filter === 'all' 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tous ({commentsData.length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              filter === 'approved' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Approuvés ({commentsData.filter(c => c.status === 'approved').length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              filter === 'pending' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            En attente ({commentsData.filter(c => c.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('spam')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              filter === 'spam' 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Spam ({commentsData.filter(c => c.status === 'spam').length})
          </button>
        </div>
      </div>
      
      {/* Search and Bulk Actions */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher dans les commentaires..."
                className="block w-full pl-3 pr-10 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
            </div>
          </div>
          
          {selectedComments.length > 0 && (
            <div className="flex space-x-2">
              <button
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FaCheck className="mr-2" />
                Approuver
              </button>
              <button
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FaTimes className="mr-2" />
                Marquer comme spam
              </button>
              <button
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <FaTrash className="mr-2" />
                Supprimer
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Comments Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedComments.length === filteredComments.length && filteredComments.length > 0}
                      onChange={toggleSelectAll}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Auteur
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commentaire
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Article
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredComments.length > 0 ? (
                filteredComments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedComments.includes(comment.id)}
                          onChange={() => toggleCommentSelection(comment.id)}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{comment.author}</div>
                          <div className="text-sm text-gray-500">{comment.email}</div>
                          <div className="text-xs text-gray-400">IP: {comment.ip}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md truncate">
                        {comment.content.length > 100 
                          ? `${comment.content.substring(0, 100)}...` 
                          : comment.content
                        }
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <Link href={`/blog/${comment.postId}`} className="hover:text-blue-600">
                          {comment.postTitle.length > 30 
                            ? `${comment.postTitle.substring(0, 30)}...` 
                            : comment.postTitle
                          }
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{formatDate(comment.date)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(comment.status)}`}>
                        {comment.status === 'approved' && 'Approuvé'}
                        {comment.status === 'pending' && 'En attente'}
                        {comment.status === 'spam' && 'Spam'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button title="Voir" className="text-gray-600 hover:text-gray-900">
                          <FaEye />
                        </button>
                        <button title="Éditer" className="text-blue-600 hover:text-blue-900">
                          <FaEdit />
                        </button>
                        {comment.status !== 'approved' && (
                          <button title="Approuver" className="text-green-600 hover:text-green-900">
                            <FaCheck />
                          </button>
                        )}
                        {comment.status !== 'spam' && (
                          <button title="Marquer comme spam" className="text-yellow-600 hover:text-yellow-900">
                            <FaTimes />
                          </button>
                        )}
                        <button title="Supprimer" className="text-red-600 hover:text-red-900">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      Aucun commentaire ne correspond à vos critères de recherche.
                    </div>
                  </td>
                </tr>
              )}
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
              Affichage de <span className="font-medium">1</span> à <span className="font-medium">{filteredComments.length}</span> sur <span className="font-medium">{commentsData.length}</span> résultats
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
