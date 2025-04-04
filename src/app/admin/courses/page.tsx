"use client";

import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaSearch, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaStar,
  FaPlus,
  FaFilter
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  price: number;
  status: 'draft' | 'published' | 'archived';
  enrollments: number;
  rating: number;
  imageUrl: string;
  featured: boolean;
}

// Mock courses data
const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction à la Cybersécurité',
    description: 'Apprenez les bases de la sécurité informatique',
    instructor: 'John Smith',
    category: 'Cybersécurité',
    level: 'beginner',
    duration: '8 heures',
    price: 99.99,
    status: 'published',
    enrollments: 156,
    rating: 4.8,
    imageUrl: '/images/courses/cybersecurity.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'Machine Learning Avancé',
    description: 'Maîtrisez les algorithmes de ML',
    instructor: 'Alice Johnson',
    category: 'Intelligence Artificielle',
    level: 'advanced',
    duration: '12 heures',
    price: 149.99,
    status: 'published',
    enrollments: 89,
    rating: 4.9,
    imageUrl: '/images/courses/ml.jpg',
    featured: false,
  },
  {
    id: '3',
    title: 'DevOps pour Débutants',
    description: 'Découvrez les pratiques DevOps',
    instructor: 'Bob Wilson',
    category: 'DevOps',
    level: 'beginner',
    duration: '6 heures',
    price: 79.99,
    status: 'draft',
    enrollments: 0,
    rating: 0,
    imageUrl: '/images/courses/devops.jpg',
    featured: false,
  },
];

const categories = [
  'Toutes',
  'Cybersécurité',
  'Intelligence Artificielle',
  'DevOps',
  'Cloud Computing',
  'Développement Web',
  'Data Science',
];

const levels = [
  'Tous',
  'Débutant',
  'Intermédiaire',
  'Avancé',
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Toutes');
  const [levelFilter, setLevelFilter] = useState('Tous');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'Toutes' || course.category === categoryFilter;
    const matchesLevel = levelFilter === 'Tous' || 
                        (levelFilter === 'Débutant' && course.level === 'beginner') ||
                        (levelFilter === 'Intermédiaire' && course.level === 'intermediate') ||
                        (levelFilter === 'Avancé' && course.level === 'advanced');
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    return matchesSearch && matchesCategory && matchesLevel && matchesStatus;
  });

  const handleDeleteCourse = (course: Course) => {
    setSelectedCourse(course);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedCourse) return;
    
    // Here you would typically make an API call to delete the course
    toast.success('Cours supprimé avec succès');
    setIsDeleteModalOpen(false);
    setSelectedCourse(null);
  };

  const toggleFeatured = async (course: Course) => {
    try {
      // Here you would typically make an API call to toggle featured status
      toast.success(course.featured ? 'Cours retiré des favoris' : 'Cours ajouté aux favoris');
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">Gestion des Cours</h1>
        <Link
          href="/admin/courses/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaPlus className="mr-2" />
          Ajouter un Cours
        </Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un cours..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">Tous les statuts</option>
          <option value="published">Publié</option>
          <option value="draft">Brouillon</option>
          <option value="archived">Archivé</option>
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={course.imageUrl}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => toggleFeatured(course)}
                  className={`p-2 rounded-full ${
                    course.featured ? 'bg-yellow-400' : 'bg-gray-200'
                  } hover:bg-yellow-500 transition-colors`}
                >
                  <FaStar className={`w-4 h-4 ${
                    course.featured ? 'text-white' : 'text-gray-600'
                  }`} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  course.status === 'published' ? 'bg-green-100 text-green-800' :
                  course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.status === 'published' ? 'Publié' :
                   course.status === 'draft' ? 'Brouillon' : 'Archivé'}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  course.level === 'beginner' ? 'bg-blue-100 text-blue-800' :
                  course.level === 'intermediate' ? 'bg-purple-100 text-purple-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level === 'beginner' ? 'Débutant' :
                   course.level === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{course.duration}</span>
                <span>{course.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 mr-2">{course.rating}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-600">{course.enrollments} inscrits</span>
              </div>
            </div>
            <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Par {course.instructor}
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/courses/${course.id}`}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <FaEye className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/admin/courses/edit/${course.id}`}
                    className="p-2 text-yellow-600 hover:text-yellow-800"
                  >
                    <FaEdit className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDeleteCourse(course)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <FaGraduationCap className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun cours trouvé</h3>
          <p className="mt-1 text-sm text-gray-500">
            Commencez par créer un nouveau cours ou modifiez vos filtres.
          </p>
          <div className="mt-6">
            <Link
              href="/admin/courses/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaPlus className="-ml-1 mr-2 h-5 w-5" />
              Nouveau Cours
            </Link>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirmer la suppression</h3>
            <p className="text-sm text-gray-500 mb-4">
              Êtes-vous sûr de vouloir supprimer le cours {selectedCourse?.title} ? Cette action est irréversible.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Annuler
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
                onClick={confirmDelete}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
