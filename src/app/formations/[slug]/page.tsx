import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaTag, FaUser, FaStar, FaGraduationCap, FaCheck, FaPlay, FaFileDownload, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

// Mock data for courses
const courses = [
  {
    id: '1',
    title: 'Cybersécurité pour les Entreprises',
    slug: 'cybersecurite-pour-entreprises',
    description: 'Apprenez à protéger votre entreprise contre les menaces numériques modernes avec cette formation complète en cybersécurité.',
    longDescription: `
      <p>La cybersécurité est devenue une préoccupation majeure pour toutes les entreprises, quelle que soit leur taille. Cette formation complète vous donnera les connaissances et les compétences nécessaires pour protéger efficacement votre organisation contre les cybermenaces modernes.</p>
      
      <p>Vous apprendrez à identifier les vulnérabilités, à mettre en place des mesures de protection appropriées, à détecter les intrusions et à réagir efficacement en cas d'incident de sécurité. Cette formation combine théorie et pratique pour vous permettre d'appliquer immédiatement les concepts appris.</p>
      
      <h3>Ce que vous apprendrez :</h3>
      <ul>
        <li>Les principes fondamentaux de la cybersécurité</li>
        <li>L'identification et l'évaluation des risques</li>
        <li>La mise en place de politiques de sécurité efficaces</li>
        <li>La protection des données sensibles</li>
        <li>La détection et la réponse aux incidents</li>
        <li>La conformité aux réglementations (RGPD, etc.)</li>
      </ul>
    `,
    imageUrl: '/images/courses/cybersecurity-business.jpg',
    category: 'Cybersécurité',
    level: 'Intermédiaire',
    duration: '12 heures',
    instructor: 'Jean Dupont',
    instructorTitle: 'Expert en Cybersécurité',
    instructorBio: 'Jean Dupont est un expert en cybersécurité avec plus de 15 ans d\'expérience dans le domaine. Il a travaillé pour plusieurs grandes entreprises et organisations gouvernementales, les aidant à renforcer leur posture de sécurité.',
    instructorImage: '/images/team/jean-dupont.jpg',
    price: 299,
    rating: 4.8,
    ratingCount: 124,
    featured: true,
    modules: [
      {
        title: 'Introduction à la cybersécurité',
        lessons: [
          { title: 'Comprendre les enjeux de la cybersécurité', duration: '25 min' },
          { title: 'Les types de menaces actuelles', duration: '30 min' },
          { title: 'Évaluation des risques', duration: '40 min' },
        ]
      },
      {
        title: 'Protection des systèmes et des données',
        lessons: [
          { title: 'Sécurisation des réseaux', duration: '45 min' },
          { title: 'Protection des données sensibles', duration: '35 min' },
          { title: 'Authentification et contrôle d\'accès', duration: '40 min' },
          { title: 'Chiffrement des données', duration: '30 min' },
        ]
      },
      {
        title: 'Détection et réponse aux incidents',
        lessons: [
          { title: 'Surveillance et détection des intrusions', duration: '40 min' },
          { title: 'Analyse des logs et alertes', duration: '35 min' },
          { title: 'Réponse aux incidents', duration: '50 min' },
          { title: 'Récupération après un incident', duration: '30 min' },
        ]
      },
      {
        title: 'Conformité et gouvernance',
        lessons: [
          { title: 'Comprendre le RGPD', duration: '40 min' },
          { title: 'Politiques de sécurité', duration: '35 min' },
          { title: 'Formation et sensibilisation des employés', duration: '45 min' },
          { title: 'Audit et amélioration continue', duration: '30 min' },
        ]
      },
    ],
    requirements: [
      'Connaissances de base en informatique et réseaux',
      'Compréhension générale des concepts de sécurité',
      'Un ordinateur avec accès à Internet',
    ],
    benefits: [
      'Certificat de réussite',
      'Accès à vie au contenu du cours',
      'Mises à jour régulières du contenu',
      'Forum d\'entraide entre participants',
      'Support technique',
    ],
    materials: [
      { title: 'Guide de cybersécurité pour entreprises (PDF)', type: 'pdf' },
      { title: 'Checklist d\'audit de sécurité (XLSX)', type: 'xlsx' },
      { title: 'Modèles de politiques de sécurité (DOCX)', type: 'docx' },
    ],
  },
  {
    id: '2',
    title: 'Intelligence Artificielle: Fondamentaux et Applications',
    slug: 'ia-fondamentaux-applications',
    description: 'Découvrez les concepts fondamentaux de l\'intelligence artificielle et comment les appliquer dans divers secteurs d\'activité.',
    longDescription: `
      <p>L'intelligence artificielle (IA) transforme rapidement tous les secteurs d'activité. Cette formation vous permettra de comprendre les concepts fondamentaux de l'IA et comment les appliquer dans votre domaine professionnel.</p>
      
      <p>Vous découvrirez les différentes techniques d'IA, du machine learning au deep learning, et comment ces technologies peuvent être utilisées pour résoudre des problèmes concrets. Cette formation est conçue pour être accessible aux débutants tout en fournissant des connaissances pratiques.</p>
      
      <h3>Ce que vous apprendrez :</h3>
      <ul>
        <li>Les principes fondamentaux de l'intelligence artificielle</li>
        <li>Les différentes techniques de machine learning</li>
        <li>Les bases du deep learning et des réseaux de neurones</li>
        <li>Comment préparer et nettoyer les données pour l'IA</li>
        <li>Les applications pratiques de l'IA dans différents secteurs</li>
        <li>Les considérations éthiques liées à l'IA</li>
      </ul>
    `,
    imageUrl: '/images/courses/ai-fundamentals.jpg',
    category: 'Intelligence Artificielle',
    level: 'Débutant',
    duration: '10 heures',
    instructor: 'Marie Laurent',
    instructorTitle: 'Consultante en IA',
    instructorBio: 'Marie Laurent est consultante en intelligence artificielle et data science. Elle accompagne les entreprises dans leur transformation numérique et l\'adoption de technologies d\'IA depuis plus de 8 ans.',
    instructorImage: '/images/team/marie-laurent.jpg',
    price: 249,
    rating: 4.7,
    ratingCount: 98,
    featured: true,
    modules: [
      {
        title: 'Introduction à l\'intelligence artificielle',
        lessons: [
          { title: 'Qu\'est-ce que l\'intelligence artificielle?', duration: '30 min' },
          { title: 'Histoire et évolution de l\'IA', duration: '25 min' },
          { title: 'Les différents types d\'IA', duration: '35 min' },
        ]
      },
      {
        title: 'Fondamentaux du machine learning',
        lessons: [
          { title: 'Introduction au machine learning', duration: '40 min' },
          { title: 'Apprentissage supervisé', duration: '45 min' },
          { title: 'Apprentissage non supervisé', duration: '40 min' },
          { title: 'Évaluation des modèles', duration: '30 min' },
        ]
      },
      {
        title: 'Deep learning et réseaux de neurones',
        lessons: [
          { title: 'Introduction au deep learning', duration: '35 min' },
          { title: 'Réseaux de neurones artificiels', duration: '45 min' },
          { title: 'Réseaux de neurones convolutifs (CNN)', duration: '40 min' },
          { title: 'Réseaux de neurones récurrents (RNN)', duration: '40 min' },
        ]
      },
      {
        title: 'Applications pratiques de l\'IA',
        lessons: [
          { title: 'IA dans le marketing et le commerce', duration: '35 min' },
          { title: 'IA dans la santé', duration: '30 min' },
          { title: 'IA dans la finance', duration: '30 min' },
          { title: 'Considérations éthiques et limites de l\'IA', duration: '35 min' },
        ]
      },
    ],
    requirements: [
      'Aucune connaissance préalable en IA n\'est requise',
      'Notions de base en mathématiques (niveau lycée)',
      'Un ordinateur avec accès à Internet',
    ],
    benefits: [
      'Certificat de réussite',
      'Accès à vie au contenu du cours',
      'Projets pratiques pour appliquer vos connaissances',
      'Forum d\'entraide entre participants',
      'Support technique',
    ],
    materials: [
      { title: 'Guide d\'introduction à l\'IA (PDF)', type: 'pdf' },
      { title: 'Exemples de code Python pour le machine learning (ZIP)', type: 'zip' },
      { title: 'Études de cas d\'applications de l\'IA (PDF)', type: 'pdf' },
    ],
  },
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courses.find((course) => course.slug === params.slug);
  
  if (!course) {
    return {
      title: 'Formation non trouvée | Deadsec',
      description: 'La formation que vous recherchez n\'existe pas ou a été déplacée.',
    };
  }
  
  return {
    title: `${course.title} | Formations Deadsec`,
    description: course.description,
  };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((course) => course.slug === params.slug);
  
  if (!course) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/formations" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />
            Retour aux formations
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-600"} />
                  ))}
                </div>
                <span className="text-gray-300 ml-2">{course.rating} ({course.ratingCount} avis)</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <FaUser className="mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaClock className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaGraduationCap className="mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaTag className="mr-2" />
                  <span>{course.category}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
                  <FaShoppingCart className="mr-2" />
                  S'inscrire - {course.price} €
                </button>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
                  <FaPlay className="mr-2" />
                  Aperçu gratuit
                </button>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
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

      {/* Course Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de cette formation</h2>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: course.longDescription }}
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenu du cours</h2>
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg font-medium text-gray-900">Module {moduleIndex + 1}: {module.title}</h3>
                        <span className="text-sm text-gray-500">{module.lessons.length} leçons</span>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="px-4 py-3 flex justify-between items-center">
                            <div className="flex items-center">
                              <FaPlay className="text-blue-600 mr-3" />
                              <span className="text-gray-700">{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prérequis</h2>
                <ul className="space-y-2">
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructeur</h2>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden">
                      <Image
                        src={course.instructorImage}
                        alt={course.instructor}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{course.instructor}</h3>
                    <p className="text-blue-600 mb-2">{course.instructorTitle}</p>
                    <p className="text-gray-700">{course.instructorBio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ce que vous obtiendrez</h3>
                <ul className="space-y-3 mb-6">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Matériel inclus</h3>
                <ul className="space-y-3 mb-6">
                  {course.materials.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <FaFileDownload className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{material.title}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">{course.price} €</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors mb-3">
                    <FaShoppingCart className="mr-2" />
                    S'inscrire maintenant
                  </button>
                  <p className="text-center text-sm text-gray-600">Garantie satisfait ou remboursé pendant 30 jours</p>
                </div>
                
                <div className="text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Partager cette formation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Formations similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses
              .filter(relatedCourse => relatedCourse.id !== course.id && relatedCourse.category === course.category)
              .slice(0, 3)
              .map((relatedCourse) => (
                <div key={relatedCourse.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedCourse.imageUrl}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedCourse.title}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(relatedCourse.rating) ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                      </div>
                      <span className="text-gray-600 ml-2 text-sm">{relatedCourse.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{relatedCourse.price} €</span>
                      <Link href={`/formations/${relatedCourse.slug}`} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        Voir le cours
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
