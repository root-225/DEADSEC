import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaGraduationCap, FaClock, FaUsers, FaStar, FaFilter } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Formations en Cybersécurité | Deadsec',
  description: 'Découvrez nos formations professionnelles en cybersécurité, hacking éthique, et sécurité des systèmes d\'information.',
};

// Mock data for courses
const courses = [
  {
    id: '1',
    title: 'Hacking Éthique: De Débutant à Expert',
    slug: 'hacking-ethique-debutant-expert',
    description: 'Maîtrisez les techniques de hacking éthique et apprenez à sécuriser les systèmes informatiques comme un professionnel.',
    imageUrl: '/images/courses/ethical-hacking.jpg',
    category: 'Hacking Éthique',
    duration: '40 heures',
    level: 'Débutant à Avancé',
    students: 1250,
    rating: 4.8,
    instructor: 'Alexandre Martin',
    price: 499,
    featured: true,
    topics: [
      'Introduction au hacking éthique',
      'Reconnaissance et collecte d\'informations',
      'Tests d\'intrusion',
      'Exploitation des vulnérabilités',
      'Sécurisation des systèmes',
    ],
  },
  {
    id: '2',
    title: 'Cybersécurité pour Entreprises',
    slug: 'cybersecurite-entreprises',
    description: 'Formation complète sur la protection des infrastructures d\'entreprise contre les cybermenaces modernes.',
    imageUrl: '/images/courses/enterprise-security.jpg',
    category: 'Sécurité d\'Entreprise',
    duration: '35 heures',
    level: 'Intermédiaire',
    students: 850,
    rating: 4.7,
    instructor: 'Sophie Bernard',
    price: 699,
    featured: true,
    topics: [
      'Sécurité des réseaux d\'entreprise',
      'Protection des données sensibles',
      'Gestion des incidents',
      'Conformité RGPD',
      'Audits de sécurité',
    ],
  },
  {
    id: '3',
    title: 'Développement Sécurisé',
    slug: 'developpement-securise',
    description: 'Apprenez à développer des applications web sécurisées et à prévenir les vulnérabilités courantes.',
    imageUrl: '/images/courses/secure-development.jpg',
    category: 'Développement',
    duration: '30 heures',
    level: 'Intermédiaire',
    students: 720,
    rating: 4.6,
    instructor: 'Thomas Dubois',
    price: 449,
    featured: false,
    topics: [
      'Sécurité des applications web',
      'OWASP Top 10',
      'Tests de sécurité',
      'Authentification sécurisée',
      'Protection contre les injections',
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Formations en <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Cybersécurité</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Développez vos compétences en cybersécurité avec nos formations professionnelles. 
              De débutant à expert, trouvez le programme qui vous correspond.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Catégories de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Hacking Éthique', 'Sécurité d\'Entreprise', 'Développement'].map((category) => (
                <div key={category} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                    <FaGraduationCap className="text-blue-600 text-2xl" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    {category === 'Hacking Éthique' && 'Apprenez les techniques de hacking éthique et de tests d\'intrusion.'}
                    {category === 'Sécurité d\'Entreprise' && 'Protégez les infrastructures et données d\'entreprise.'}
                    {category === 'Développement' && 'Développez des applications sécurisées dès la conception.'}
                  </p>
                  <Link href={`/courses/category/${category.toLowerCase()}`} className="text-blue-600 font-medium hover:text-blue-700">
                    Voir les formations →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Formations à la Une</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.filter(course => course.featured).map((course) => (
                <Link key={course.id} href={`/courses/${course.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FaClock className="mr-2" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <FaUsers className="mr-2" />
                          {course.students} étudiants
                        </div>
                        <div className="flex items-center">
                          <FaStar className="mr-2 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{course.price}€</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          En savoir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Toutes les Formations</h2>
              <div className="flex items-center space-x-4">
                <select className="rounded-lg border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                  <option>Tous les niveaux</option>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
                <select className="rounded-lg border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                  <option>Prix: tous</option>
                  <option>Prix: croissant</option>
                  <option>Prix: décroissant</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link key={course.id} href={`/courses/${course.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <FaUsers className="mr-1" />
                          {course.students}
                        </div>
                        <div className="flex items-center">
                          <FaStar className="mr-1 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">{course.price}€</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                          Voir le détail
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à développer vos compétences en cybersécurité ?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Rejoignez notre communauté d'experts et bénéficiez d'un accompagnement personnalisé 
              pour atteindre vos objectifs professionnels.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Commencer maintenant
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
