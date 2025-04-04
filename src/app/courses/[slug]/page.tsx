import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaClock, FaUsers, FaStar, FaCheck, FaPlay, FaArrowLeft, FaShare, FaDownload } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for courses (should be moved to a separate data file in a real application)
const courses = [
  {
    id: '1',
    title: 'Hacking Éthique: De Débutant à Expert',
    slug: 'hacking-ethique-debutant-expert',
    description: 'Maîtrisez les techniques de hacking éthique et apprenez à sécuriser les systèmes informatiques comme un professionnel.',
    longDescription: `
      <p>Le hacking éthique est devenu une compétence essentielle dans le monde de la cybersécurité moderne. Cette formation complète vous guidera à travers toutes les étapes nécessaires pour devenir un expert en hacking éthique.</p>

      <p>Que vous soyez débutant ou que vous ayez déjà une expérience en sécurité informatique, ce cours vous fournira les connaissances et les compétences pratiques nécessaires pour exceller dans ce domaine passionnant.</p>

      <h3>Ce que vous apprendrez :</h3>
      <ul>
        <li>Les fondamentaux du hacking éthique et de la sécurité informatique</li>
        <li>Les techniques de reconnaissance et de collecte d'informations</li>
        <li>L'exploitation des vulnérabilités courantes</li>
        <li>Les méthodologies de test d'intrusion</li>
        <li>La sécurisation des systèmes et des réseaux</li>
        <li>Les bonnes pratiques et l'éthique professionnelle</li>
      </ul>

      <h3>Prérequis :</h3>
      <ul>
        <li>Connaissances de base en informatique</li>
        <li>Familiarité avec les systèmes d'exploitation Linux et Windows</li>
        <li>Compréhension basique des réseaux</li>
      </ul>
    `,
    imageUrl: '/images/courses/ethical-hacking.jpg',
    category: 'Hacking Éthique',
    duration: '40 heures',
    level: 'Débutant à Avancé',
    students: 1250,
    rating: 4.8,
    reviews: 325,
    instructor: {
      name: 'Alexandre Martin',
      title: 'Expert en Cybersécurité',
      bio: 'Alexandre Martin est un expert en cybersécurité avec plus de 15 ans d\'expérience. Il a travaillé pour de grandes entreprises et organismes gouvernementaux, réalisant des tests d\'intrusion et formant des équipes de sécurité.',
      imageUrl: '/images/instructors/alexandre-martin.jpg'
    },
    price: 499,
    featured: true,
    topics: [
      'Introduction au hacking éthique',
      'Reconnaissance et collecte d\'informations',
      'Tests d\'intrusion',
      'Exploitation des vulnérabilités',
      'Sécurisation des systèmes',
    ],
    modules: [
      {
        title: 'Introduction au Hacking Éthique',
        lessons: [
          { title: 'Qu\'est-ce que le hacking éthique?', duration: '45 min' },
          { title: 'Environnement légal et éthique', duration: '30 min' },
          { title: 'Configuration de votre laboratoire', duration: '60 min' },
        ]
      },
      {
        title: 'Techniques de Reconnaissance',
        lessons: [
          { title: 'OSINT et collecte d\'informations', duration: '60 min' },
          { title: 'Scanning de réseaux', duration: '45 min' },
          { title: 'Énumération des services', duration: '45 min' },
        ]
      },
      {
        title: 'Exploitation des Vulnérabilités',
        lessons: [
          { title: 'Identification des vulnérabilités', duration: '60 min' },
          { title: 'Exploitation de base', duration: '90 min' },
          { title: 'Post-exploitation', duration: '60 min' },
        ]
      },
    ],
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courses.find(course => course.slug === params.slug);
  
  if (!course) {
    return {
      title: 'Formation non trouvée | Deadsec',
      description: 'Cette formation n\'existe pas ou n\'est plus disponible.',
    };
  }

  return {
    title: `${course.title} | Deadsec`,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find(course => course.slug === params.slug);

  if (!course) {
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
                <Link href="/courses" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
                  <FaArrowLeft className="mr-2" />
                  Retour aux formations
                </Link>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{course.description}</p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2" />
                    <span>{course.students} étudiants</span>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="mr-2 text-yellow-400" />
                    <span>{course.rating} ({course.reviews} avis)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center transition-colors">
                    S'inscrire maintenant
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center transition-colors">
                    <FaShare className="mr-2" />
                    Partager
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">À propos de cette formation</h2>
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: course.longDescription }} />
                </div>

                {/* Course Content */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contenu du cours</h2>
                  <div className="space-y-6">
                    {course.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border border-gray-200 rounded-lg">
                        <div className="p-4 bg-gray-50 border-b border-gray-200">
                          <h3 className="text-lg font-bold text-gray-900">
                            Module {moduleIndex + 1}: {module.title}
                          </h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="p-4 flex items-center justify-between">
                              <div className="flex items-center">
                                <FaPlay className="text-blue-600 mr-3" />
                                <span className="text-gray-700">{lesson.title}</span>
                              </div>
                              <span className="text-gray-500 text-sm">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-4">{course.price}€</div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mb-4 transition-colors">
                      S'inscrire maintenant
                    </button>
                    <p className="text-gray-500 text-sm">Garantie satisfait ou remboursé pendant 30 jours</p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-bold text-gray-900 mb-4">Cette formation inclut :</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        {course.duration} de contenu vidéo
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        Exercices pratiques
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        Ressources téléchargeables
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        Accès à vie
                      </li>
                      <li className="flex items-center text-gray-700">
                        <FaCheck className="text-green-500 mr-2" />
                        Certificat de fin de formation
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Instructor */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Votre instructeur</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <FaUser className="w-8 h-8 text-gray-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{course.instructor.name}</h3>
                      <p className="text-gray-600">{course.instructor.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{course.instructor.bio}</p>
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
