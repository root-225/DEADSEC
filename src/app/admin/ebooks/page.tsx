"use client";

import React, { useState, useCallback } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaFilter, FaEye, FaDownload, FaFileUpload, FaStar, FaChartLine, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

// Define TypeScript interfaces
interface Ebook {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  author: string;
  publishDate: string;
  pages: number;
  format: string;
  fileSize: string;
  downloadUrl: string;
  featured: boolean;
  status: 'published' | 'draft' | 'archived';
  createdAt: string;
  updatedAt: string;
  downloads: number;
}

type SortField = 'date' | 'downloads' | 'title';
type SortOrder = 'asc' | 'desc';
type Status = 'Tous' | 'Publié' | 'Brouillon' | 'Archivé';
type Category = 'Toutes' | 'Cybersécurité' | 'Intelligence Artificielle' | 'Transformation Digitale' | 'Cloud Computing' | 'Data Science' | 'DevOps' | 'Juridique';

// Mock data for e-books
const ebooks: Ebook[] = [
  {
    id: '1',
    title: 'Guide de cybersécurité pour les PME',
    slug: 'guide-cybersecurite-pme',
    description: 'Un guide complet pour aider les petites et moyennes entreprises à se protéger contre les cybermenaces actuelles.',
    imageUrl: '/images/ebooks/cybersecurity-guide.jpg',
    category: 'Cybersécurité',
    author: 'Jean Dupont',
    publishDate: '2023-04-15',
    pages: 48,
    format: 'PDF',
    fileSize: '3.2 MB',
    downloadUrl: '/downloads/guide-cybersecurite-pme.pdf',
    featured: true,
    status: 'published',
    createdAt: '2023-04-10',
    updatedAt: '2023-04-15',
    downloads: 342,
  },
  {
    id: '2',
    title: 'Introduction à l\'Intelligence Artificielle',
    slug: 'introduction-intelligence-artificielle',
    description: 'Découvrez les concepts fondamentaux de l\'intelligence artificielle et son impact sur les entreprises modernes.',
    imageUrl: '/images/ebooks/ai-intro.jpg',
    category: 'Intelligence Artificielle',
    author: 'Marie Laurent',
    publishDate: '2023-03-22',
    pages: 36,
    format: 'PDF',
    fileSize: '2.8 MB',
    downloadUrl: '/downloads/introduction-intelligence-artificielle.pdf',
    featured: true,
    status: 'published',
    createdAt: '2023-03-20',
    updatedAt: '2023-03-22',
    downloads: 287,
  },
  {
    id: '3',
    title: 'Transformation Digitale: Guide Stratégique',
    slug: 'transformation-digitale-guide-strategique',
    description: 'Un guide stratégique pour aider les entreprises à réussir leur transformation digitale dans un monde en constante évolution.',
    imageUrl: '/images/ebooks/digital-transformation.jpg',
    category: 'Transformation Digitale',
    author: 'Thomas Moreau',
    publishDate: '2023-02-10',
    pages: 52,
    format: 'PDF',
    fileSize: '4.1 MB',
    downloadUrl: '/downloads/transformation-digitale-guide-strategique.pdf',
    featured: true,
    status: 'published',
    createdAt: '2023-02-05',
    updatedAt: '2023-02-10',
    downloads: 215,
  },
  {
    id: '4',
    title: 'Les bases du Cloud Computing',
    slug: 'bases-cloud-computing',
    description: 'Comprendre les fondamentaux du cloud computing et comment l\'adopter efficacement dans votre organisation.',
    imageUrl: '/images/ebooks/cloud-computing.jpg',
    category: 'Cloud Computing',
    author: 'Sophie Dubois',
    publishDate: '2023-01-18',
    pages: 42,
    format: 'PDF',
    fileSize: '3.5 MB',
    downloadUrl: '/downloads/bases-cloud-computing.pdf',
    featured: false,
    status: 'published',
    createdAt: '2023-01-15',
    updatedAt: '2023-01-18',
    downloads: 178,
  },
  {
    id: '5',
    title: 'Sécurité des applications web',
    slug: 'securite-applications-web',
    description: 'Un guide pratique pour sécuriser vos applications web contre les vulnérabilités les plus courantes.',
    imageUrl: '/images/ebooks/web-security.jpg',
    category: 'Cybersécurité',
    author: 'Pierre Martin',
    publishDate: '2022-12-05',
    pages: 38,
    format: 'PDF',
    fileSize: '2.9 MB',
    downloadUrl: '/downloads/securite-applications-web.pdf',
    featured: false,
    status: 'published',
    createdAt: '2022-12-01',
    updatedAt: '2022-12-05',
    downloads: 203,
  },
  {
    id: '6',
    title: 'Data Science pour les débutants',
    slug: 'data-science-debutants',
    description: 'Une introduction accessible à la data science et à l\'analyse de données pour les non-spécialistes.',
    imageUrl: '/images/ebooks/data-science.jpg',
    category: 'Data Science',
    author: 'Claire Dubois',
    publishDate: '2022-11-14',
    pages: 44,
    format: 'PDF',
    fileSize: '3.7 MB',
    downloadUrl: '/downloads/data-science-debutants.pdf',
    featured: false,
    status: 'draft',
    createdAt: '2022-11-10',
    updatedAt: '2022-11-14',
    downloads: 0,
  },
  {
    id: '7',
    title: 'DevOps: Principes et Pratiques',
    slug: 'devops-principes-pratiques',
    description: 'Découvrez comment adopter la culture DevOps pour améliorer la collaboration et l\'efficacité de vos équipes de développement.',
    imageUrl: '/images/ebooks/devops.jpg',
    category: 'DevOps',
    author: 'Michel Bernard',
    publishDate: '2022-10-20',
    pages: 46,
    format: 'PDF',
    fileSize: '3.4 MB',
    downloadUrl: '/downloads/devops-principes-pratiques.pdf',
    featured: false,
    status: 'published',
    createdAt: '2022-10-15',
    updatedAt: '2022-10-20',
    downloads: 156,
  },
  {
    id: '8',
    title: 'RGPD: Guide de conformité',
    slug: 'rgpd-guide-conformite',
    description: 'Un guide pratique pour comprendre et mettre en œuvre la conformité au Règlement Général sur la Protection des Données.',
    imageUrl: '/images/ebooks/gdpr.jpg',
    category: 'Juridique',
    author: 'Anne Leroy',
    publishDate: '2022-09-08',
    pages: 50,
    format: 'PDF',
    fileSize: '3.9 MB',
    downloadUrl: '/downloads/rgpd-guide-conformite.pdf',
    featured: false,
    status: 'archived',
    createdAt: '2022-09-05',
    updatedAt: '2022-09-08',
    downloads: 132,
  },
];

// Categories for filtering
const categories: Category[] = ['Toutes', 'Cybersécurité', 'Intelligence Artificielle', 'Transformation Digitale', 'Cloud Computing', 'Data Science', 'DevOps', 'Juridique'];

// Statuses for filtering
const statuses: Status[] = ['Tous', 'Publié', 'Brouillon', 'Archivé'];

export default function EbooksManagementPage() {
  // State declarations
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes' as Category);
  const [selectedStatus, setSelectedStatus] = useState('Tous' as Status);
  const [sortBy, setSortBy] = useState('date' as SortField);
  const [sortOrder, setSortOrder] = useState('desc' as SortOrder);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null as Ebook | null);

  // Memoized filter function
  const filterEbooks = useCallback((ebook: Ebook) => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes' || ebook.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Tous' || 
                         (selectedStatus === 'Publié' && ebook.status === 'published') ||
                         (selectedStatus === 'Brouillon' && ebook.status === 'draft') ||
                         (selectedStatus === 'Archivé' && ebook.status === 'archived');
    return matchesSearch && matchesCategory && matchesStatus;
  }, [searchTerm, selectedCategory, selectedStatus]);

  // Memoized sort function
  const sortEbooks = useCallback((a: Ebook, b: Ebook) => {
    if (sortBy === 'date') {
      return sortOrder === 'desc' 
        ? new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        : new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    }
    if (sortBy === 'downloads') {
      return sortOrder === 'desc' ? b.downloads - a.downloads : a.downloads - b.downloads;
    }
    if (sortBy === 'title') {
      return sortOrder === 'desc' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title);
    }
    return 0;
  }, [sortBy, sortOrder]);

  // Filter and sort ebooks
  const filteredEbooks = ebooks.filter(filterEbooks).sort(sortEbooks);

  const handleDeleteEbook = (ebook: Ebook) => {
    setSelectedEbook(ebook);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedEbook) return;
    
    try {
      // Here you would typically make an API call to delete the ebook
      // await deleteEbook(selectedEbook.id);
      toast.success('E-book supprimé avec succès');
      setIsDeleteModalOpen(false);
      setSelectedEbook(null);
    } catch (error) {
      toast.error('Une erreur est survenue lors de la suppression');
    }
  };

  const toggleFeatured = async (ebook: Ebook) => {
    try {
      // Here you would typically make an API call to toggle featured status
      // await updateEbook(ebook.id, { featured: !ebook.featured });
      toast.success(ebook.featured ? 'E-book retiré des favoris' : 'E-book ajouté aux favoris');
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };

  const handleSortChange = (value: string) => {
    const [newSortBy, newSortOrder] = value.split('-') as [SortField, SortOrder];
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestion des E-books</h1>
            <p className="text-gray-600 mt-2">Gérez et suivez vos e-books en un seul endroit</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/admin/ebooks/analytics" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg flex items-center transition-colors duration-200 shadow-sm"
            >
              <FaChartLine className="mr-2" />
              Analytiques
            </Link>
            <Link 
              href="/admin/ebooks/new" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg flex items-center transition-colors duration-200 shadow-sm"
            >
              <FaPlus className="mr-2" />
              Ajouter un e-book
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total des e-books</h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{ebooks.length}</p>
              <div className="text-green-500 text-sm font-medium">+5% <span className="text-gray-400">vs mois dernier</span></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">E-books publiés</h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{ebooks.filter(ebook => ebook.status === 'published').length}</p>
              <div className="text-green-500 text-sm font-medium">+2% <span className="text-gray-400">vs mois dernier</span></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Téléchargements totaux</h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{ebooks.reduce((acc, ebook) => acc + ebook.downloads, 0)}</p>
              <div className="text-green-500 text-sm font-medium">+18% <span className="text-gray-400">vs mois dernier</span></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-gray-500 text-sm font-medium mb-2">E-books mis en avant</h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{ebooks.filter(ebook => ebook.featured).length}</p>
              <div className="text-yellow-500 text-sm font-medium">Featured</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 hover:shadow-md transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un e-book..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => handleSortChange(e.target.value)}
                className="block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                <option value="date-desc">Date: Plus récent</option>
                <option value="date-asc">Date: Plus ancien</option>
                <option value="downloads-desc">Téléchargements: Plus élevé</option>
                <option value="downloads-asc">Téléchargements: Plus bas</option>
                <option value="title-asc">Titre: A-Z</option>
                <option value="title-desc">Titre: Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* E-books Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    E-book
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Téléchargements
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de publication
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEbooks.map((ebook) => (
                  <tr key={ebook.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 relative rounded-lg overflow-hidden">
                          <Image
                            src={ebook.imageUrl}
                            alt={ebook.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-150">
                              <Link href={`/admin/ebooks/${ebook.id}`}>
                                {ebook.title}
                              </Link>
                            </div>
                            {ebook.featured && (
                              <button
                                onClick={() => toggleFeatured(ebook)}
                                className="ml-2 text-yellow-400 hover:text-yellow-500 transition-colors duration-150"
                                title="Retirer des favoris"
                              >
                                <FaStar className="h-4 w-4" />
                              </button>
                            )}
                            {!ebook.featured && (
                              <button
                                onClick={() => toggleFeatured(ebook)}
                                className="ml-2 text-gray-400 hover:text-yellow-400 transition-colors duration-150"
                                title="Ajouter aux favoris"
                              >
                                <FaStar className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{ebook.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {ebook.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ebook.status === 'published' ? 'bg-green-100 text-green-800' :
                        ebook.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ebook.status === 'published' ? 'Publié' :
                         ebook.status === 'draft' ? 'Brouillon' : 'Archivé'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ebook.downloads.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(ebook.publishDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <Link
                          href={`/admin/ebooks/${ebook.id}/analytics`}
                          className="text-indigo-600 hover:text-indigo-900 transition-colors duration-150 p-1.5 hover:bg-indigo-50 rounded-full"
                          title="Voir les analytiques"
                        >
                          <FaChartLine className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/ebooks/${ebook.id}/edit`}
                          className="text-blue-600 hover:text-blue-900 transition-colors duration-150 p-1.5 hover:bg-blue-50 rounded-full"
                          title="Modifier"
                        >
                          <FaEdit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteEbook(ebook)}
                          className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1.5 hover:bg-red-50 rounded-full"
                          title="Supprimer"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && selectedEbook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Confirmer la suppression</h3>
              <p className="text-gray-600 mb-6">
                Êtes-vous sûr de vouloir supprimer l'e-book "{selectedEbook.title}" ? Cette action est irréversible.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-150"
                >
                  Annuler
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-150"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredEbooks.length === 0 && (
          <div className="text-center py-12">
            <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Aucun e-book trouvé</h3>
            <p className="mt-2 text-gray-500">
              Nous n'avons trouvé aucun e-book correspondant à vos critères de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
