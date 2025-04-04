import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Blog | Deadsec',
  description: 'Découvrez nos derniers articles, conseils et actualités dans le domaine de la technologie et de la cybersécurité.',
};

// Temporary mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: 'Les tendances de la cybersécurité en 2023',
    excerpt: 'Découvrez les principales menaces et solutions de sécurité qui façonnent le paysage numérique cette année.',
    date: '2023-05-15',
    author: 'Jean Dupont',
    category: 'Cybersécurité',
    imageUrl: '/images/blog/cybersecurity-trends.jpg',
    slug: 'tendances-cybersecurite-2023'
  },
  {
    id: '2',
    title: 'Comment l\'IA transforme le monde des affaires',
    excerpt: 'L\'intelligence artificielle révolutionne la façon dont les entreprises opèrent. Voici comment en tirer parti.',
    date: '2023-04-22',
    author: 'Marie Laurent',
    category: 'Intelligence Artificielle',
    imageUrl: '/images/blog/ai-business.jpg',
    slug: 'ia-transformation-business'
  },
  {
    id: '3',
    title: 'Guide de migration vers le cloud pour les PME',
    excerpt: 'Un guide étape par étape pour aider les petites et moyennes entreprises à migrer efficacement vers le cloud.',
    date: '2023-03-10',
    author: 'Thomas Moreau',
    category: 'Cloud Computing',
    imageUrl: '/images/blog/cloud-migration.jpg',
    slug: 'guide-migration-cloud-pme'
  },
  {
    id: '4',
    title: 'Les meilleures pratiques de développement web en 2023',
    excerpt: 'Restez à jour avec les dernières tendances et meilleures pratiques en matière de développement web moderne.',
    date: '2023-02-28',
    author: 'Sophie Dubois',
    category: 'Développement Web',
    imageUrl: '/images/blog/web-dev-practices.jpg',
    slug: 'meilleures-pratiques-dev-web-2023'
  },
];

// Helper function to format date
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Blog <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Deadsec</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez nos derniers articles, conseils et actualités dans le domaine de la technologie et de la cybersécurité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/category/cybersecurite" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Cybersécurité
            </Link>
            <Link href="/blog/category/intelligence-artificielle" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              Intelligence Artificielle
            </Link>
            <Link href="/blog/category/cloud" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors">
              Cloud
            </Link>
            <Link href="/blog/category/developpement" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
              Développement
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Article à la Une</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={blogPosts[0].imageUrl}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formatDate(blogPosts[0].date)}</span>
                  <span className="mx-2">•</span>
                  <FaUser className="mr-2" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <FaTag className="text-blue-500 mr-2" />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`} className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                  Lire l'article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles Récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaTag className="text-blue-500 mr-2" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Lire plus →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog/archive" className="inline-block bg-gray-800 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Restez informé
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans votre boîte de réception.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                S'abonner
              </button>
            </form>
            <p className="mt-4 text-sm text-blue-100">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
