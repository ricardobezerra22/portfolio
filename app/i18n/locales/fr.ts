export const fr = {
  header: {
    home: 'Accueil',
    resume: 'CV',
    projects: 'Projets',
    books: 'Livres',
    contact: 'Contact',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  home: {
    title: "Bonjour, je suis Ricardo Bezerra",
    subtitle: "Développeur Full Stack passionné par la création d'applications web modernes et évolutives avec une architecture de microservices, des microfrontends et des technologies serverless.",
    featured: {
      title: 'Projets en Vedette',
      description: 'Voici quelques-uns de mes projets les plus marquants qui mettent en valeur mon expertise en développement logiciel.',
      projects: [
        {
          title: 'SaaS One',
          description: 'Une plateforme SaaS révolutionnaire qui simplifie l\'intégration de Google Workspace pour les entreprises. Inclut des analyses en temps réel, des flux de travail automatisés et un tableau de bord impressionnant construit avec Vue.js. Utilise une architecture de microservices avec Docker et Kubernetes pour une évolutivité parfaite.',
          image: '/assets/images/saason.png',
          link: 'https://saas.one/',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'Storybook', 'Cypress', 'GraphQL', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'BitBucket', 'Jest', 'Cucumber Preprocessor', 'Jenkins', 'Kubernetes', 'Redis', 'Git']
        },
        {
          title: 'TeamCulture',
          description: 'Une solution innovante de gestion des ressources humaines qui transforme la culture d\'entreprise. Construite avec Vue.js et Node.js, elle offre des analyses puissantes, des outils d\'engagement des employés et un suivi des performances. Inclut des tests complets avec Cypress et Jest, garantissant une qualité exceptionnelle.',
          image: '/assets/images/teamculture.png',
          link: 'https://teamculture.com.br',
          tags: ['Vue.js', 'Node.js', 'Cypress', 'MongoDB', 'CI/CD', 'Storybook', 'Jest', 'Cucumber Preprocessor', 'GraphQL', 'Customer Success', 'Agile Methodologies']
        },
        {
          title: 'NutriFlow',
          description: 'Découvrez la planification nutritionnelle personnalisée alimentée par l\'IA. Cette application Next.js intègre OpenAI pour des recommandations diététiques intelligentes, inclut un traitement sécurisé des paiements avec Stripe et génère des rapports PDF. Déployée sur Google Cloud Platform pour des performances optimales.',
          image: '/assets/images/nutriflow.png',
          link: 'https://nutriflow.online/',
          tags: ['Next.js', 'Node.js', 'OpenAI', 'Docker', 'MongoDB', 'Stripe', 'Google Cloud Platform', 'App Engine', 'Redis']
        }
      ]
    },
    view_all_projects: "Voir Tous les Projets",
    name: 'Niverton Ricardo',
    profession: 'Développeur Senior Full-Stack et Spécialiste DevOps',
    location: 'Caruaru, Brésil',
    experience: 'Plus de 10 ans d\'expérience',
    expertise: 'Expert en Vue.js, React, Node.js, Rust et pratiques DevOps',
    interests: 'Centres d\'intérêt : Lecture, salle de sport, méditation et techniques de productivité',
  },
  projects: {
    title: 'Projets',
    viewProject: 'Voir le Projet',
  },
  books: {
    title: 'Livres que j\'ai lus et recommandés !',
    categories: {
      productivity: 'Productivité',
      selfDevelopment: 'Développement Personnel',
      business: 'Business et Entrepreneuriat',
      technology: 'Technologie et Ingénierie',
      creativity: 'Créativité et Innovation'
    },
    bookList: {
      productivity: [
        {
          title: 'La Semaine de 4 Heures',
          author: 'Tim Ferriss',
          description: 'Échappez au 9-5, vivez n\'importe où et rejoignez les Nouveaux Riches'
        },
        {
          title: 'L\'Année de 12 Semaines',
          author: 'Brian P. Moran',
          description: 'Faites plus en 12 semaines que les autres en 12 mois'
        },
        {
          title: 'Essentialisme',
          author: 'Greg McKeown',
          description: 'La poursuite disciplinée de moins'
        },
        {
          title: 'L\'Esprit en Pratique',
          author: 'Thomas M. Sterner',
          description: 'Développez la concentration et la discipline dans votre vie'
        },
        {
          title: 'Terminez ce que vous Commencez',
          author: 'Peter Hollins',
          description: 'L\'art d\'aller jusqu\'au bout'
        }
      ],
      selfDevelopment: [
        {
          title: 'L\'Égo est votre Ennemi',
          author: 'Ryan Holiday',
          description: 'Le combat pour maîtriser notre plus grand adversaire'
        },
        {
          title: 'Potentiel Caché',
          author: 'Adam Grant',
          description: 'La science pour accomplir de grandes choses'
        },
        {
          title: 'La Montagne, c\'est Vous',
          author: 'Brianna Wiest',
          description: 'Transformer l\'auto-sabotage en maîtrise de soi'
        },
        {
          title: 'Ultra-Apprentissage',
          author: 'Scott Young',
          description: 'Maîtrisez des compétences difficiles, dépassez la concurrence'
        }
      ],
      business: [
        {
          title: 'Construisez, Ne Parlez Pas',
          author: 'Rabih Ghandour',
          description: 'Ce que vous auriez aimé apprendre à l\'école'
        },
        {
          title: 'Le Lean Startup',
          author: 'Eric Ries',
          description: 'Comment les entrepreneurs d\'aujourd\'hui utilisent l\'innovation continue'
        },
        {
          title: 'Le Week-End du Million de Dollars',
          author: 'Noah Kagan',
          description: 'La voie rapide pour construire une entreprise rentable'
        },
        {
          title: 'StoryBrand',
          author: 'Donald Miller',
          description: 'Clarifiez votre message pour que les clients écoutent'
        },
        {
          title: 'Sprint',
          author: 'Jake Knapp',
          description: 'Résolvez de gros problèmes et testez de nouvelles idées en seulement cinq jours'
        }
      ],
      technology: [
        {
          title: 'Le Guide de l\'Ingénieur Logiciel',
          author: 'Gergely Orosz',
          description: 'Naviguer du junior au senior et au-delà'
        },
        {
          title: 'L\'Ingénieur Pragmatique',
          author: 'Gergely Orosz',
          description: 'Conseils pratiques pour les carrières en ingénierie logicielle'
        },
        {
          title: 'Algorithmes',
          author: 'Robert Sedgewick',
          description: 'Concepts essentiels pour les professionnels de la programmation'
        }
      ],
      creativity: [
        {
          title: 'Volez comme un Artiste',
          author: 'Austin Kleon',
          description: 'Conseils créatifs pour des travaux originaux'
        }
      ]
    }
  },
  resume: {
    title: 'CV',
    downloadPDF: 'Télécharger le PDF',
    personalInfo: {
      title: 'Informations Personnelles',
      name: 'Niverton Ricardo Bezerra Neves',
      dob: '2000 (24 ans)',
      nationality: 'Brésilien',
      location: 'Brésil (Ouvert à la relocalisation)',
      phone: '+55 81 9 96095850',
      email: 'niverton.neves@gmail.com',
      linkedin: 'linkedin.com/in/ricardo-bezerra-22bb661a4',
      github: 'github.com/ricardobezerra22'
    },
    summary: {
      title: 'Résumé Professionnel',
      content: 'Développeur Full-Stack avec plus de 5 ans d\'expérience et spécialisé en Vue.js, React et Node.js, axé sur la création d\'applications SaaS évolutives, des microfrontends avec SPA et des microservices pour des systèmes backend évolutifs. Expérience en optimisation SEO avec des métadonnées et intégration de Google Analytics. Expérimenté dans la conception d\'API RESTful, la mise en œuvre de systèmes d\'authentification, l\'intégration d\'IA générative dans les SPAs et l\'optimisation des performances système. Solides connaissances en DevOps avec une expérience en CI/CD, Docker et infrastructure cloud (AWS/GCP). Utilisateur d\'architecture propre, de bonnes pratiques de sécurité, adapté aux environnements dynamiques, travail d\'équipe et principes d\'ingénierie logicielle. Ouvert à des opportunités internationales et à la relocalisation.'
    },
    experience: {
      title: 'Expérience Professionnelle',
      jobs: [
        {
          company: 'Safetec',
          position: 'Développeur Full-Stack',
          period: 'Jan 2024 – Présent',
          description: 'Spécialiste en services cloud et transformation numérique',
          achievements: [
            'Développé des applications SaaS évolutives avec Vue.js, Node.js et TypeScript',
            'Conçu des API RESTful et mis en œuvre l\'authentification OAuth2',
            'Intégré OpenAI avec Google Workspace pour améliorer la productivité des utilisateurs',
            'Optimisé les performances du backend, réduisant les temps de réponse des requêtes de base de données de 40 %',
            'Construit des pipelines CI/CD pour le déploiement et les tests automatisés',
            'Assuré les meilleures pratiques de sécurité en suivant les directives OWASP',
            'Refactorisé d\'anciens codes, mis à jour les systèmes et amélioré les performances, en veillant à ne rien casser'
          ]
        },
        {
          company: 'COMEIA',
          position: 'Développeur Full-Stack',
          period: 'Mar 2022 – Présent',
          achievements: [
            'Créé SaaS One, une plateforme d\'entreprise réduisant les coûts SaaS de plus de 20 000 $ par mois',
            'Travaillé sur TeamCulture, un SaaS de gestion RH, améliorant les performances et l\'accessibilité du frontend',
            'Mis en œuvre Jest et Cypress pour les tests de bout en bout',
            'Intégré une architecture de microservices pour améliorer l\'évolutivité',
            'Documenté tous les composants frontend avec Storybook',
            'Utilisé Single Page Application et microservices',
            'Architecture de code propre et TDD pour le backend et le frontend',
            'Gestion du temps avec des livres de haute valeur',
            'Méthodologies agiles avec ClickUP et JIRA',
            'Dirigé le développement d\'applications monopage évolutives avec React et TypeScript',
            'Optimisé les métriques de performance web et Core Web Vitals pour les plateformes SaaS d\'entreprise',
            'Construit des composants réutilisables et mis en œuvre des stratégies de test complètes',
            'Collaboré avec des équipes multifonctionnelles pour améliorer l\'expérience utilisateur',
            'Architecturé des solutions frontend utilisant des bibliothèques modernes de gestion d\'état',
            'Développé des fonctionnalités SEO pour soutenir la croissance du trafic organique',
            'Maintenu une documentation de haute qualité et des spécifications techniques',
            'Mis en œuvre la visualisation de données et la présentation de données tabulaires complexes'
          ]
        },
        {
          company: 'Numerarte',
          position: 'Développeur Full-Stack',
          period: 'Déc 2019 – Mar 2022',
          achievements: [
            'Développé et maintenu des systèmes ERP avec Vue.js et Node.js',
            'Amélioré les performances des applications grâce à un cache optimisé et à l\'indexation de la base de données'
          ]
        }
      ]
    },
    education: {
      title: 'Éducation',
      schools: [
        {
          name: 'UNICESUMAR',
          degree: 'Licence en Analyse et Développement de Systèmes',
          period: '2023 – 2026'
        },
        {
          name: 'ASCES-UNITA',
          degree: 'Droit (Incomplet)',
          period: '2018–2022'
        }
      ]
    },
    skills: {
      title: 'Compétences Techniques',
      categories: {
        frontend: {
          title: 'Frontend',
          skills: ['Vue.js', 'React', 'Next.js', 'Nuxt.js', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'SCSS', 'Vuetify', 'PrimeVue', 'Shadcn', 'Material UI', 'Vue Router', 'Vuex', 'Pinia', 'Redux', 'Google Analytics', 'SEO', 'StoryBook']
        },
        backend: {
          title: 'Backend',
          skills: ['Node.js', 'Express.js', 'NestJS', 'GoLang', 'Python', 'Fastify', 'Django', 'AWS DynamoDB']
        },
        databases: {
          title: 'Bases de Données',
          skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'noSQL', 'Supabase', 'Firestore']
        },
        devops: {
          title: 'DevOps et Cloud',
          skills: ['Docker', 'Kubernetes', 'AWS S3', 'Google Cloud', 'CI/CD', 'GitHub Actions', 'Firebase']
        },
        testing: {
          title: 'Sécurité et Tests',
          skills: ['Jest', 'Cypress', 'OWASP Security', 'OAuth2', 'Firebase Authentication', 'Cucumber']
        },
        workflow: {
          title: 'Gestion de Version et Workflow',
          skills: ['Git', 'GitHub', 'GitLab', 'Agile (Scrum/Kanban)']
        }
      }
    },
    softSkills: {
      title: 'Compétences Interpersonnelles',
      skills: [
        {
          name: 'Leadership',
          description: 'Capacité avérée à diriger et à encadrer des équipes de développement'
        },
        {
          name: 'Communication',
          description: 'Excellentes compétences en communication verbale et écrite dans plusieurs langues'
        },
        {
          name: 'Résolution de Problèmes',
          description: 'Solides compétences analytiques et créatives pour résoudre les problèmes'
        },
        {
          name: 'Adaptabilité',
          description: 'Apprentissage rapide et adaptable aux nouvelles technologies et environnements'
        },
        {
          name: 'Gestion du Temps',
          description: 'Efficace dans la gestion de plusieurs projets et le respect des délais'
        },
        {
          name: 'Collaboration en Équipe',
          description: 'Bon joueur d\'équipe avec une expérience dans des équipes multifonctionnelles'
        },
        {
          name: 'Conscience Culturelle',
          description: 'Expérience de travail dans des environnements multiculturels'
        },
        {
          name: 'Pensée Critique',
          description: 'Approche analytique pour la résolution de problèmes et la prise de décision'
        }
      ]
    },
    projects: {
      title: 'Projets et Réalisations',
      list: [
        'NutriFlow – Système de planification nutritionnelle alimenté par l\'IA utilisant OpenAI et Node.js',
        'SaaS One – Outil de gestion SaaS intégré à Google Workspace',
        'TeamCulture – Plateforme SaaS de RH avec des performances et une UX améliorées',
        'Phoenix - SaaS de voyage et logistique',
        'Freelancing - Landing pages pour divers marchés',
        'BitCoinLiveTracker - Application Web3 pour suivre le prix du Bitcoin en utilisant l\'API COINGECKO',
        'Safetec - Maintenance de tout l\'écosystème Google Workspace du partenaire Google Safetec, avec plus de 4000 clients et des applications évolutives, ainsi que la maintenance d\'anciens systèmes'
      ]
    },
    languages: {
      title: 'Langues',
      list: [
        { language: 'Portugais', level: 'Natif' },
        { language: 'Anglais', level: 'Courant (C1)' },
        { language: 'Français', level: 'Intermédiaire (B1)' }
      ]
    },
    certifications: {
      title: 'Certifications et Formations',
      list: [
        'Comeia Academy Développement Fullstack (Bootcamp de 6 mois) (2022)',
        'EF SET Anglais C2 (Test de Compétence)'
      ]
    },
    interests: {
      title: 'Centres d\'Intérêt',
      list: [
        { name: 'IA et Apprentissage Automatique', icon: 'Brain' },
        { name: 'Architecture Logicielle', icon: 'Architecture' },
        { name: 'DevOps et Infrastructure Cloud', icon: 'Cloud' },
        { name: 'Productivité et Neurosciences', icon: 'Zap' },
        { name: 'Contributions Open Source', icon: 'Code2' },
        { name: 'Développement Vue.js et React', icon: 'Layout' },
        { name: 'Expert en JavaScript/TypeScript', icon: 'FileJson' },
        { name: 'Architecture Frontend', icon: 'Layers' },
        { name: 'Intégration et Tests d\'API', icon: 'TestTube' },
        { name: 'Optimisation des Performances', icon: 'Gauge' },
        { name: 'Code Propre et Documentation', icon: 'FileCode' },
        { name: 'IA Générative', icon: 'Stars' },
        { name: 'Intégration d\'IA', icon: 'Bot' },
        { name: 'Python', icon: 'FileType' },
        { name: 'React Native', icon: 'Smartphone' }
      ]
    },
  },
}