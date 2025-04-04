import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// Temporary mock data for blog posts
const blogPosts = [
  {
    id: '1',
    title: 'Les tendances de la cybersécurité en 2023',
    excerpt: 'Découvrez les principales menaces et solutions de sécurité qui façonnent le paysage numérique cette année.',
    content: `
      <p>La cybersécurité est plus importante que jamais dans notre monde de plus en plus connecté. En 2023, plusieurs tendances majeures façonnent le paysage de la sécurité numérique.</p>
      
      <h2>1. L'essor des attaques de ransomware ciblées</h2>
      <p>Les attaques de ransomware sont devenues plus sophistiquées et ciblées. Les cybercriminels ne se contentent plus d'attaques massives et indifférenciées, mais ciblent désormais des organisations spécifiques susceptibles de payer des rançons importantes.</p>
      
      <h2>2. L'adoption croissante de l'authentification sans mot de passe</h2>
      <p>Les méthodes d'authentification sans mot de passe, telles que les clés de sécurité, la biométrie et les applications d'authentification, gagnent du terrain. Ces méthodes offrent non seulement une meilleure sécurité, mais également une expérience utilisateur améliorée.</p>
      
      <h2>3. L'intelligence artificielle dans la cybersécurité</h2>
      <p>L'IA est utilisée à la fois par les défenseurs et les attaquants. Les solutions de sécurité basées sur l'IA peuvent détecter des comportements anormaux et des menaces inconnues, tandis que les cybercriminels utilisent l'IA pour créer des attaques plus sophistiquées.</p>
      
      <h2>4. La sécurité du cloud en évolution</h2>
      <p>Avec l'adoption massive du cloud, la sécurité des environnements cloud est devenue une priorité. Les entreprises investissent dans des solutions spécifiques au cloud pour protéger leurs données et applications.</p>
      
      <h2>5. La montée des menaces liées à l'Internet des objets (IoT)</h2>
      <p>L'expansion de l'IoT crée de nouvelles surfaces d'attaque. Les appareils IoT, souvent dotés d'une sécurité limitée, deviennent des cibles privilégiées pour les cybercriminels.</p>
      
      <h2>Conclusion</h2>
      <p>Face à ces tendances, les organisations doivent adopter une approche proactive de la cybersécurité. Cela implique non seulement l'utilisation des dernières technologies de sécurité, mais également la formation des employés et la mise en place de processus de sécurité robustes.</p>
    `,
    date: '2023-05-15',
    author: 'Jean Dupont',
    authorRole: 'Expert en Cybersécurité',
    authorImage: '/images/team/jean-dupont.jpg',
    category: 'Cybersécurité',
    imageUrl: '/images/blog/cybersecurity-trends.jpg',
    slug: 'tendances-cybersecurite-2023',
    tags: ['Cybersécurité', 'Ransomware', 'IA', 'Cloud', 'IoT']
  },
  {
    id: '2',
    title: 'Comment l\'IA transforme le monde des affaires',
    excerpt: 'L\'intelligence artificielle révolutionne la façon dont les entreprises opèrent. Voici comment en tirer parti.',
    content: `
      <p>L'intelligence artificielle (IA) est en train de révolutionner le monde des affaires à un rythme sans précédent. Des startups aux grandes entreprises, l'IA offre des opportunités inédites pour améliorer l'efficacité, réduire les coûts et créer de nouveaux modèles commerciaux.</p>
      
      <h2>Automatisation des processus</h2>
      <p>L'une des applications les plus immédiates de l'IA est l'automatisation des tâches répétitives. Les systèmes d'IA peuvent traiter des factures, gérer des inventaires et même répondre aux demandes des clients, libérant ainsi les employés pour des tâches à plus forte valeur ajoutée.</p>
      
      <h2>Analyse prédictive</h2>
      <p>L'IA excelle dans l'analyse de grandes quantités de données pour identifier des tendances et faire des prédictions. Les entreprises utilisent ces capacités pour prévoir la demande des clients, optimiser les prix et anticiper les problèmes de maintenance.</p>
      
      <h2>Personnalisation à grande échelle</h2>
      <p>Grâce à l'IA, les entreprises peuvent offrir des expériences personnalisées à des millions de clients simultanément. Des recommandations de produits aux communications marketing, l'IA permet une personnalisation qui était auparavant impossible à cette échelle.</p>
      
      <h2>Prise de décision améliorée</h2>
      <p>Les outils d'aide à la décision basés sur l'IA fournissent aux dirigeants des insights précieux pour prendre des décisions plus éclairées. Ces systèmes peuvent analyser des scénarios complexes et recommander des actions optimales.</p>
      
      <h2>Défis et considérations</h2>
      <p>Malgré ses nombreux avantages, l'adoption de l'IA présente des défis. Les entreprises doivent gérer les questions éthiques, assurer la qualité des données et former leur personnel. Une stratégie d'IA bien pensée est essentielle pour maximiser les bénéfices tout en minimisant les risques.</p>
      
      <h2>Conclusion</h2>
      <p>L'IA n'est plus une technologie futuriste, mais une réalité commerciale. Les entreprises qui adoptent l'IA de manière stratégique seront mieux positionnées pour prospérer dans l'économie numérique en constante évolution.</p>
    `,
    date: '2023-04-22',
    author: 'Marie Laurent',
    authorRole: 'Consultante en IA',
    authorImage: '/images/team/marie-laurent.jpg',
    category: 'Intelligence Artificielle',
    imageUrl: '/images/blog/ai-business.jpg',
    slug: 'ia-transformation-business',
    tags: ['Intelligence Artificielle', 'Business', 'Automatisation', 'Analyse de données']
  },
  {
    id: '3',
    title: 'Guide de migration vers le cloud pour les PME',
    excerpt: 'Un guide étape par étape pour aider les petites et moyennes entreprises à migrer efficacement vers le cloud.',
    content: `
      <p>La migration vers le cloud représente une étape cruciale pour les PME qui souhaitent moderniser leur infrastructure informatique, améliorer leur agilité et réduire leurs coûts. Voici un guide pratique pour réussir cette transition.</p>
      
      <h2>Étape 1: Évaluation et planification</h2>
      <p>Avant de migrer vers le cloud, il est essentiel d'évaluer votre infrastructure actuelle et de définir clairement vos objectifs. Identifiez les applications et données à migrer, évaluez leur compatibilité avec le cloud et établissez un calendrier réaliste.</p>
      
      <h2>Étape 2: Choix du modèle de cloud</h2>
      <p>Plusieurs options s'offrent à vous: cloud public, privé ou hybride. Chaque modèle présente des avantages et des inconvénients en termes de coût, de sécurité et de contrôle. Pour la plupart des PME, le cloud public offre un bon équilibre entre coût et fonctionnalités.</p>
      
      <h2>Étape 3: Sélection des fournisseurs</h2>
      <p>Choisissez des fournisseurs de services cloud qui répondent à vos besoins spécifiques. Considérez des facteurs tels que la fiabilité, la sécurité, le support client et la tarification. Les grands acteurs comme AWS, Microsoft Azure et Google Cloud offrent des solutions adaptées aux PME.</p>
      
      <h2>Étape 4: Préparation des données et applications</h2>
      <p>Préparez vos données et applications pour la migration. Cela peut impliquer la modernisation de certaines applications, la restructuration des bases de données ou la mise à jour des systèmes d'exploitation.</p>
      
      <h2>Étape 5: Migration progressive</h2>
      <p>Optez pour une approche progressive plutôt qu'une migration complète en une seule fois. Commencez par des applications non critiques pour minimiser les risques et permettre à votre équipe de se familiariser avec l'environnement cloud.</p>
      
      <h2>Étape 6: Formation et adaptation</h2>
      <p>Formez votre personnel aux nouvelles technologies et processus. La migration vers le cloud implique souvent des changements dans la façon dont les équipes travaillent et gèrent les ressources informatiques.</p>
      
      <h2>Étape 7: Optimisation continue</h2>
      <p>Après la migration, surveillez et optimisez régulièrement votre infrastructure cloud. Ajustez les ressources en fonction de vos besoins réels pour maximiser les performances et minimiser les coûts.</p>
      
      <h2>Conclusion</h2>
      <p>La migration vers le cloud est un voyage plutôt qu'une destination. Avec une planification minutieuse et une approche méthodique, les PME peuvent tirer pleinement parti des avantages du cloud tout en minimisant les perturbations pour leur activité.</p>
    `,
    date: '2023-03-10',
    author: 'Thomas Moreau',
    authorRole: 'Architecte Cloud',
    authorImage: '/images/team/thomas-moreau.jpg',
    category: 'Cloud Computing',
    imageUrl: '/images/blog/cloud-migration.jpg',
    slug: 'guide-migration-cloud-pme',
    tags: ['Cloud', 'Migration', 'PME', 'Infrastructure']
  },
  {
    id: '4',
    title: 'Les meilleures pratiques de développement web en 2023',
    excerpt: 'Restez à jour avec les dernières tendances et meilleures pratiques en matière de développement web moderne.',
    content: `
      <p>Le développement web évolue rapidement, avec de nouvelles technologies, frameworks et méthodologies qui émergent constamment. En 2023, plusieurs pratiques se démarquent comme essentielles pour créer des applications web modernes, performantes et accessibles.</p>
      
      <h2>Adoption des architectures JAMstack</h2>
      <p>Le JAMstack (JavaScript, APIs, Markup) continue de gagner en popularité. Cette approche, qui sépare le frontend du backend via des APIs, offre de nombreux avantages: performance, sécurité, évolutivité et expérience de développement améliorée.</p>
      
      <h2>Focus sur les Web Core Vitals</h2>
      <p>Google accorde une importance croissante aux Web Core Vitals dans son algorithme de classement. Les développeurs doivent optimiser le LCP (Largest Contentful Paint), le FID (First Input Delay) et le CLS (Cumulative Layout Shift) pour améliorer l'expérience utilisateur et le référencement.</p>
      
      <h2>Développement mobile-first</h2>
      <p>Avec plus de la moitié du trafic web provenant des appareils mobiles, l'approche mobile-first est devenue incontournable. Concevoir d'abord pour les petits écrans puis adapter pour les grands écrans permet de créer des expériences optimisées pour tous les appareils.</p>
      
      <h2>Accessibilité web intégrée</h2>
      <p>L'accessibilité n'est plus une option mais une nécessité. Les développeurs doivent intégrer les principes d'accessibilité dès le début du processus de développement, en suivant les directives WCAG et en testant régulièrement avec des outils d'accessibilité.</p>
      
      <h2>Utilisation des API modernes du navigateur</h2>
      <p>Les navigateurs modernes offrent des API puissantes comme WebAssembly, Web Components et Progressive Web Apps (PWA). Ces technologies permettent de créer des applications web qui rivalisent avec les applications natives en termes de performance et de fonctionnalités.</p>
      
      <h2>Sécurité renforcée</h2>
      <p>La sécurité web est plus importante que jamais. Les développeurs doivent implémenter HTTPS, adopter des pratiques comme le CSP (Content Security Policy), et rester vigilants face aux vulnérabilités courantes comme les injections SQL et les attaques XSS.</p>
      
      <h2>Conclusion</h2>
      <p>Le développement web moderne exige une approche holistique qui équilibre performance, accessibilité, sécurité et expérience utilisateur. En adoptant ces meilleures pratiques, les développeurs peuvent créer des applications web qui répondent aux attentes croissantes des utilisateurs et des moteurs de recherche.</p>
    `,
    date: '2023-02-28',
    author: 'Sophie Dubois',
    authorRole: 'Développeuse Full Stack',
    authorImage: '/images/team/sophie-dubois.jpg',
    category: 'Développement Web',
    imageUrl: '/images/blog/web-dev-practices.jpg',
    slug: 'meilleures-pratiques-dev-web-2023',
    tags: ['Développement Web', 'JAMstack', 'Performance', 'Accessibilité', 'PWA']
  },
];

// Helper function to format date
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé | Deadsec',
      description: 'L\'article que vous recherchez n\'existe pas ou a été déplacé.',
    };
  }
  
  return {
    title: `${post.title} | Deadsec`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />
            Retour aux articles
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-300 mb-6">
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <FaCalendarAlt className="mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center mr-6 mb-2 sm:mb-0">
              <FaUser className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mb-2 sm:mb-0">
              <FaTag className="mr-2" />
              <span className="bg-blue-600 bg-opacity-30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-96 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article className="bg-white rounded-xl shadow-lg p-8">
            {/* Author Info */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">{post.authorRole}</p>
              </div>
            </div>
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Partager cet article</h4>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <FaShare size={24} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Articles Similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>{formatDate(relatedPost.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedPost.title}</h3>
                    <Link href={`/blog/${relatedPost.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Lire plus →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'aide avec votre projet?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nos experts sont prêts à vous accompagner dans la transformation digitale de votre entreprise.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
