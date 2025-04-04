import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaTag, FaUser, FaStar, FaGraduationCap, FaCheck } from 'react-icons/fa';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Formations | Deadsec',
  description: 'Développez vos compétences en cybersécurité, intelligence artificielle et transformation digitale avec nos formations en ligne.',
};

export default function FormationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Formations <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Deadsec</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Développez vos compétences en cybersécurité, intelligence artificielle et transformation digitale avec nos formations en ligne.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi Choisir Nos Formations ?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <p className="text-gray-600">Formateurs experts avec une expérience pratique</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <p className="text-gray-600">Contenu actualisé et adapté aux besoins du marché</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <p className="text-gray-600">Approche pratique avec des cas concrets</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3" />
                    <p className="text-gray-600">Support personnalisé tout au long de la formation</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/training.jpg"
                  alt="Formation professionnelle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nos Domaines de Formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/courses/cybersecurity-business.jpg"
                    alt="Cybersécurité"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersécurité</h3>
                <p className="text-gray-600">Protection des systèmes, gestion des risques et conformité réglementaire.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/courses/ai-fundamentals.jpg"
                    alt="Intelligence Artificielle"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligence Artificielle</h3>
                <p className="text-gray-600">Machine learning, deep learning et applications pratiques de l'IA.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/courses/digital-transformation.jpg"
                    alt="Transformation Digitale"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transformation Digitale</h3>
                <p className="text-gray-600">Stratégies de transformation numérique et optimisation des processus.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gray-900">
                  <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
                  <p className="text-gray-300 mb-8">
                    Vous souhaitez en savoir plus sur nos formations ? Notre équipe est là pour répondre à toutes vos questions.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <FaCheck className="text-green-400 mt-1 mr-3" />
                      <p className="text-gray-300">Programmes personnalisés selon vos besoins</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-green-400 mt-1 mr-3" />
                      <p className="text-gray-300">Formations en présentiel ou à distance</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-green-400 mt-1 mr-3" />
                      <p className="text-gray-300">Devis sur mesure pour les entreprises</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <Contact />
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
