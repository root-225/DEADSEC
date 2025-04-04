"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUpload, FaSearch, FaFolder, FaImage, FaFile, FaTrash, FaEdit, FaEye } from 'react-icons/fa';

// Mock data for media files
const mediaFiles = [
  {
    id: '1',
    name: 'cybersecurity-trends.jpg',
    type: 'image',
    size: '1.2 MB',
    dimensions: '1200x800',
    uploadedAt: '2023-05-10',
    url: '/images/blog/cybersecurity-trends.jpg',
  },
  {
    id: '2',
    name: 'ai-business.jpg',
    type: 'image',
    size: '0.9 MB',
    dimensions: '1200x800',
    uploadedAt: '2023-04-15',
    url: '/images/blog/ai-business.jpg',
  },
  {
    id: '3',
    name: 'cloud-migration.jpg',
    type: 'image',
    size: '1.5 MB',
    dimensions: '1200x800',
    uploadedAt: '2023-03-05',
    url: '/images/blog/cloud-migration.jpg',
  },
  {
    id: '4',
    name: 'web-dev-practices.jpg',
    type: 'image',
    size: '1.1 MB',
    dimensions: '1200x800',
    uploadedAt: '2023-02-20',
    url: '/images/blog/web-dev-practices.jpg',
  },
  {
    id: '5',
    name: 'deadsec-whitepaper.pdf',
    type: 'document',
    size: '2.3 MB',
    dimensions: '-',
    uploadedAt: '2023-01-15',
    url: '/documents/deadsec-whitepaper.pdf',
  },
  {
    id: '6',
    name: 'security-checklist.docx',
    type: 'document',
    size: '0.5 MB',
    dimensions: '-',
    uploadedAt: '2023-01-10',
    url: '/documents/security-checklist.docx',
  },
];

export default function MediaLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [selectedFiles, setSelectedFiles] = useState([] as string[]);
  
  // Filter media files based on search term and type
  const filteredMedia = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || file.type === selectedType;
    return matchesSearch && matchesType;
  });
  
  // Sort media files
  const sortedMedia = [...filteredMedia].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'size') {
      return parseFloat(a.size) - parseFloat(b.size);
    }
    return 0;
  });
  
  // Toggle file selection
  const toggleFileSelection = (id: string) => {
    if (selectedFiles.includes(id)) {
      setSelectedFiles(selectedFiles.filter((fileId: string) => fileId !== id));
    } else {
      setSelectedFiles([...selectedFiles, id]);
    }
  };
  
  // Select all files
  const selectAllFiles = () => {
    if (selectedFiles.length === sortedMedia.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(sortedMedia.map(file => file.id));
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Médiathèque</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
            <FaUpload className="mr-2" />
            Importer des fichiers
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center">
            <FaFolder className="mr-2" />
            Nouvelle dossier
          </button>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-auto flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher des fichiers..."
                className="block w-full pl-10 pr-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="all">Tous les types</option>
              <option value="image">Images</option>
              <option value="document">Documents</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="date">Trier par date</option>
              <option value="name">Trier par nom</option>
              <option value="size">Trier par taille</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Media Grid */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Bulk Actions */}
        {selectedFiles.length > 0 && (
          <div className="flex justify-between items-center mb-4 p-3 bg-blue-50 rounded-lg">
            <div>
              <span className="font-medium">{selectedFiles.length} fichier(s) sélectionné(s)</span>
            </div>
            <div className="flex space-x-3">
              <button className="text-red-600 hover:text-red-800 flex items-center">
                <FaTrash className="mr-1" />
                Supprimer
              </button>
              <button className="text-gray-600 hover:text-gray-800 flex items-center">
                <FaFolder className="mr-1" />
                Déplacer
              </button>
            </div>
          </div>
        )}
        
        {/* Table Header */}
        <div className="flex items-center py-2 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
          <div className="w-10">
            <input
              type="checkbox"
              checked={selectedFiles.length === sortedMedia.length && sortedMedia.length > 0}
              onChange={selectAllFiles}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <div className="w-16"></div>
          <div className="flex-1">Nom</div>
          <div className="w-32 text-center">Type</div>
          <div className="w-32 text-center">Taille</div>
          <div className="w-32 text-center">Dimensions</div>
          <div className="w-32 text-center">Date</div>
          <div className="w-24 text-center">Actions</div>
        </div>
        
        {/* Media Files */}
        {sortedMedia.length > 0 ? (
          <div>
            {sortedMedia.map((file) => (
              <div key={file.id} className="flex items-center py-3 border-b border-gray-100 hover:bg-gray-50">
                <div className="w-10">
                  <input
                    type="checkbox"
                    checked={selectedFiles.includes(file.id)}
                    onChange={() => toggleFileSelection(file.id)}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="w-16 flex justify-center">
                  {file.type === 'image' ? (
                    <div className="relative h-12 w-12 rounded overflow-hidden">
                      <Image
                        src={file.url}
                        alt={file.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center">
                      <FaFile className="text-gray-400 text-xl" />
                    </div>
                  )}
                </div>
                <div className="flex-1 truncate">
                  <span className="font-medium text-gray-900">{file.name}</span>
                </div>
                <div className="w-32 text-center">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    file.type === 'image' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {file.type === 'image' ? 'Image' : 'Document'}
                  </span>
                </div>
                <div className="w-32 text-center text-gray-500">{file.size}</div>
                <div className="w-32 text-center text-gray-500">{file.dimensions}</div>
                <div className="w-32 text-center text-gray-500">{file.uploadedAt}</div>
                <div className="w-24 text-center">
                  <div className="flex justify-center space-x-2">
                    <button title="Voir" className="text-gray-600 hover:text-gray-900">
                      <FaEye />
                    </button>
                    <button title="Éditer" className="text-blue-600 hover:text-blue-900">
                      <FaEdit />
                    </button>
                    <button title="Supprimer" className="text-red-600 hover:text-red-900">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <FaImage className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun fichier trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">
              Aucun fichier ne correspond à vos critères de recherche.
            </p>
          </div>
        )}
        
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
                Affichage de <span className="font-medium">1</span> à <span className="font-medium">{sortedMedia.length}</span> sur <span className="font-medium">{mediaFiles.length}</span> résultats
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
    </div>
  );
}
