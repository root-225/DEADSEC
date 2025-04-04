import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaDownload, FaBook, FaCalendarAlt, FaUser, FaTag, FaFilePdf, FaArrowLeft, FaShare } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for e-books
const ebooks = [
  {
    id: '1',
    title: 'Guide de cybersécurité pour les PME',
    slug: 'guide-cybersecurite-pme',
    description: 'Un guide complet pour aider les petites et moyennes entreprises à se protéger contre les cybermenaces actuelles.',
    longDescription: `
      <p>La cybersécurité est devenue une préoccupation majeure pour toutes les entreprises, quelle que soit leur taille. Ce guide complet est conçu spécifiquement pour les PME qui souhaitent renforcer leur posture de sécurité sans disposer nécessairement de ressources importantes.</p>
      
      <p>Vous y trouverez des conseils pratiques, des check-lists et des recommandations adaptées à la réalité des petites et moyennes entreprises. Ce guide vous aidera à identifier vos vulnérabilités, à mettre en place des mesures de protection appropriées et à réagir efficacement en cas d'incident.</p>
      
      <h3>Ce que vous découvrirez dans cet e-book :</h3>
      <ul>
        <li>Les principales menaces qui ciblent spécifiquement les PME</li>
        <li>Comment réaliser une évaluation des risques adaptée à votre entreprise</li>
        <li>Les mesures de sécurité essentielles à mettre en place</li>
        <li>Comment sensibiliser vos employés aux bonnes pratiques</li>
        <li>Un plan d'action en cas d'incident de sécurité</li>
        <li>Des ressources et outils gratuits ou abordables pour améliorer votre sécurité</li>
      </ul>
      
      <p>Que vous débutiez en matière de cybersécurité ou que vous cherchiez à améliorer vos pratiques existantes, ce guide vous fournira des informations précieuses pour protéger efficacement votre entreprise.</p>
    `,
    imageUrl: '/images/ebooks/cybersecurity-guide.jpg',
    category: 'Cybersécurité',
    author: 'Jean Dupont',
    authorTitle: 'Expert en Cybersécurité',
    authorBio: 'Jean Dupont est un expert en cybersécurité avec plus de 15 ans d\'expérience dans le domaine. Il a travaillé pour plusieurs grandes entreprises et organisations gouvernementales, les aidant à renforcer leur posture de sécurité.',
    publishDate: '2023-04-15',
    pages: 48,
    format: 'PDF',
    fileSize: '3.2 MB',
    downloadUrl: '/downloads/guide-cybersecurite-pme.pdf',
    featured: true,
    tableOfContents: [
      { title: 'Introduction à la cybersécurité pour les PME', page: 3 },
      { title: 'Comprendre les menaces actuelles', page: 7 },
      { title: 'Évaluation des risques pour votre entreprise', page: 12 },
      { title: 'Mesures de sécurité essentielles', page: 18 },
      { title: 'Protection des données sensibles', page: 25 },
      { title: 'Formation et sensibilisation des employés', page: 32 },
      { title: 'Plan de réponse aux incidents', page: 38 },
      { title: 'Ressources et outils recommandés', page: 43 },
      { title: 'Conclusion et prochaines étapes', page: 46 },
    ],
    relatedEbooks: ['introduction-intelligence-artificielle', 'securite-applications-web', 'rgpd-guide-conformite'],
  },
  {
    id: '2',
    title: 'Introduction à l\'Intelligence Artificielle',
    slug: 'introduction-intelligence-artificielle',
    description: 'Découvrez les concepts fondamentaux de l\'intelligence artificielle et son impact sur les entreprises modernes.',
    longDescription: `
      <p>L'intelligence artificielle (IA) transforme rapidement tous les secteurs d'activité. Cet e-book vous offre une introduction claire et accessible aux concepts fondamentaux de l'IA, sans nécessiter de connaissances techniques préalables.</p>
      
      <p>Vous découvrirez comment l'IA fonctionne, ses différentes applications dans le monde professionnel, et comment elle peut être utilisée pour résoudre des problèmes concrets dans votre organisation.</p>
      
      <h3>Ce que vous découvrirez dans cet e-book :</h3>
      <ul>
        <li>Les concepts de base de l'intelligence artificielle</li>
        <li>Les différentes branches de l'IA : machine learning, deep learning, etc.</li>
        <li>Comment l'IA transforme différents secteurs d'activité</li>
        <li>Des exemples concrets d'applications de l'IA en entreprise</li>
        <li>Les considérations éthiques liées à l'utilisation de l'IA</li>
        <li>Comment démarrer avec l'IA dans votre organisation</li>
      </ul>
      
      <p>Que vous soyez un dirigeant cherchant à comprendre les implications de l'IA pour votre entreprise ou un professionnel souhaitant élargir ses connaissances, cet e-book vous fournira une base solide pour comprendre cette technologie transformative.</p>
    `,
    imageUrl: '/images/ebooks/ai-intro.jpg',
    category: 'Intelligence Artificielle',
    author: 'Marie Laurent',
    authorTitle: 'Consultante en IA',
    authorBio: 'Marie Laurent est consultante en intelligence artificielle et data science. Elle accompagne les entreprises dans leur transformation numérique et l\'adoption de technologies d\'IA depuis plus de 8 ans.',
    publishDate: '2023-03-22',
    pages: 36,
    format: 'PDF',
    fileSize: '2.8 MB',
    downloadUrl: '/downloads/introduction-intelligence-artificielle.pdf',
    featured: true,
    tableOfContents: [
      { title: 'Qu\'est-ce que l\'intelligence artificielle?', page: 3 },
      { title: 'Histoire et évolution de l\'IA', page: 6 },
      { title: 'Les différentes branches de l\'IA', page: 10 },
      { title: 'Machine learning et deep learning', page: 14 },
      { title: 'Applications de l\'IA en entreprise', page: 19 },
      { title: 'Considérations éthiques', page: 26 },
      { title: 'Démarrer avec l\'IA dans votre organisation', page: 30 },
      { title: 'Ressources pour approfondir', page: 34 },
    ],
    relatedEbooks: ['guide-cybersecurite-pme', 'data-science-debutants', 'transformation-digitale-guide-strategique'],
  },
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ebook = ebooks.find(ebook => ebook.slug === params.slug);
  
  if (!ebook) {
    return {
      title: 'E-book non trouvé | Deadsec',
      description: 'Cet e-book n\'existe pas ou n\'est plus disponible.',
    };
  }

  return {
    title: `${ebook.title} | Deadsec`,
    description: ebook.description,
  };
}

export default function EbookDetailPage({ params }: { params: { slug: string } }) {
  const ebook = ebooks.find(ebook => ebook.slug === params.slug);

  if (!ebook) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href="/ebooks" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
                  <FaArrowLeft className="mr-2" />
                  Retour aux e-books
                </Link>
                <h1 className="text-4xl font-bold mb-4">{ebook.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{ebook.description}</p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{ebook.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(ebook.publishDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBook className="mr-2" />
                    <span>{ebook.pages} pages</span>
                  </div>
                  <div className="flex items-center">
                    <FaFilePdf className="mr-2" />
                    <span>{ebook.fileSize}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={ebook.downloadUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    Télécharger gratuitement
                  </a>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center transition-colors">
                    <FaShare className="mr-2" />
                    Partager
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={ebook.imageUrl}
                  alt={ebook.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos de cet e-book</h2>
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: ebook.longDescription }} />
                </div>
                <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Table des matières</h2>
                  <div className="space-y-4">
                    {ebook.tableOfContents.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-800">{item.title}</span>
                        <span className="text-gray-500">Page {item.page}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">À propos de l'auteur</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <FaUser className="w-8 h-8 text-gray-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{ebook.author}</h3>
                      <p className="text-gray-600">{ebook.authorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{ebook.authorBio}</p>
                </div>

                {/* Related E-books */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">E-books similaires</h2>
                  <div className="space-y-6">
                    {ebooks
                      .filter(relatedEbook => relatedEbook.slug !== ebook.slug)
                      .slice(0, 3)
                      .map((relatedEbook) => (
                        <Link key={relatedEbook.id} href={`/ebooks/${relatedEbook.slug}`} className="block group">
                          <div className="flex items-start">
                            <div className="relative w-20 h-24 flex-shrink-0">
                              <Image
                                src={relatedEbook.imageUrl}
                                alt={relatedEbook.title}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div className="ml-4">
                              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {relatedEbook.title}
                              </h3>
                              <p className="text-sm text-gray-600 line-clamp-2">{relatedEbook.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
