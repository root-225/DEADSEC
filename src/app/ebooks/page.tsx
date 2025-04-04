import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaDownload, FaSearch, FaFilter, FaBook, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'E-books Gratuits | Deadsec',
  description: 'Téléchargez gratuitement nos e-books sur la cybersécurité, l\'intelligence artificielle et la transformation digitale.',
};

// Mock data for e-books
const ebooks = [
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
  },
];

export default function EbooksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              E-books <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Gratuits</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Téléchargez gratuitement nos e-books sur la cybersécurité, l'intelligence artificielle et la transformation digitale.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un e-book..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured E-books */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">E-books à la Une</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.filter(ebook => ebook.featured).map((ebook) => (
                <Link key={ebook.id} href={`/ebooks/${ebook.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={ebook.imageUrl}
                        alt={ebook.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                        {ebook.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{ebook.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{ebook.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FaUser className="mr-2" />
                          {ebook.author}
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {new Date(ebook.publishDate).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center">
                          <FaBook className="mr-2" />
                          {ebook.pages} pages
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
                        <FaDownload className="mr-2" />
                        Télécharger ({ebook.fileSize})
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All E-books */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Tous les E-books</h2>
              <div className="flex items-center space-x-4">
                <select className="rounded-lg border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                  <option>Tous les sujets</option>
                  <option>Cybersécurité</option>
                  <option>Intelligence Artificielle</option>
                  <option>Transformation Digitale</option>
                </select>
                <select className="rounded-lg border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
                  <option>Plus récents</option>
                  <option>Plus anciens</option>
                  <option>Alphabétique</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.map((ebook) => (
                <Link key={ebook.id} href={`/ebooks/${ebook.slug}`} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={ebook.imageUrl}
                        alt={ebook.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm font-medium">
                        {ebook.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{ebook.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{ebook.description}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FaUser className="mr-1" />
                          {ebook.author}
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          {new Date(ebook.publishDate).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors text-sm">
                        <FaDownload className="mr-2" />
                        Télécharger
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
