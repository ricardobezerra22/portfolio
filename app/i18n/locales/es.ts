export const es = {
  header: {
    home: 'Inicio',
    resume: 'Currículum',
    projects: 'Proyectos',
    books: 'Libros',
    contact: 'Contacto',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
  home: {
    title: "Hola, soy Ricardo Bezerra",
    subtitle: "Desarrollador Full Stack apasionado por crear aplicaciones web modernas y escalables con arquitectura de microservicios, microfrontends y tecnologías serverless.",
    featured: {
      title: 'Proyectos Destacados',
      description: 'Aquí hay algunos de mis proyectos más impactantes que muestran mi experiencia en desarrollo de software.',
      projects: [
        {
          title: 'SaaS One',
          description: 'Una plataforma SaaS revolucionaria que simplifica la integración de Google Workspace para empresas. Incluye análisis en tiempo real, flujos de trabajo automatizados y un panel de control impresionante construido con Vue.js. Utiliza arquitectura de microservicios con Docker y Kubernetes para una escalabilidad perfecta.',
          image: '/assets/images/saason.png',
          link: 'https://saas.one/',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'Storybook', 'Cypress', 'GraphQL', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'BitBucket', 'Jest', 'Cucumber Preprocessor', 'Jenkins', 'Kubernetes', 'Redis', 'Git']
        },
        {
          title: 'TeamCulture',
          description: 'Una solución innovadora de gestión de recursos humanos que transforma la cultura laboral. Construida con Vue.js y Node.js, ofrece análisis potentes, herramientas de participación de empleados y seguimiento de rendimiento. Incluye pruebas exhaustivas con Cypress y Jest, garantizando una calidad excepcional.',
          image: '/assets/images/teamculture.png',
          link: 'https://teamculture.com.br',
          tags: ['Vue.js', 'Node.js', 'Cypress', 'MongoDB', 'CI/CD', 'Storybook', 'Jest', 'Cucumber Preprocessor', 'GraphQL', 'Customer Success', 'Agile Methodologies']
        },
        {
          title: 'NutriFlow',
          description: 'Experimenta la planificación nutricional personalizada impulsada por IA. Esta aplicación de Next.js integra OpenAI para recomendaciones dietéticas inteligentes, incluye procesamiento seguro de pagos con Stripe y genera informes en PDF. Desplegada en Google Cloud Platform para un rendimiento óptimo.',
          image: '/assets/images/nutriflow.png',
          link: 'https://nutriflow.online/',
          tags: ['Next.js', 'Node.js', 'OpenAI', 'Docker', 'MongoDB', 'Stripe', 'Google Cloud Platform', 'App Engine', 'Redis']
        }
      ]
    },
    view_all_projects: "Ver Todos los Proyectos",
    name: 'Niverton Ricardo',
    profession: 'Desarrollador Senior Full-Stack y Especialista en DevOps',
    location: 'Caruaru, Brasil',
    experience: 'Más de 10 años de experiencia',
    expertise: 'Experto en Vue.js, React, Node.js, Rust y prácticas de DevOps',
    interests: 'Intereses: Lectura, gimnasio, meditación y técnicas de productividad',
  },
  projects: {
    title: 'Proyectos',
    viewProject: 'Ver Proyecto',
    filterPlaceholder: 'Filtrar por nombre',
    sortOptions: {
      name: 'Ordenar por nombre',
      date: 'Ordenar por fecha'
    }
  },
  books: {
    title: 'Libros que he leído y recomiendo',
    categories: {
      productivity: 'Productividad',
      selfDevelopment: 'Desarrollo Personal',
      business: 'Negocios y Emprendimiento',
      technology: 'Tecnología e Ingeniería',
      creativity: 'Creatividad e Innovación'
    },
    bookList: {
      productivity: [
        {
          title: 'La Semana Laboral de 4 Horas',
          author: 'Tim Ferriss',
          description: 'Escapa de 9-5, vive en cualquier lugar y únete a los Nuevos Ricos'
        },
        {
          title: 'El Año de 12 Semanas',
          author: 'Brian P. Moran',
          description: 'Haz más en 12 semanas que otros en 12 meses'
        },
        {
          title: 'Esencialismo',
          author: 'Greg McKeown',
          description: 'La búsqueda disciplinada de menos'
        },
        {
          title: 'La Mente en Práctica',
          author: 'Thomas M. Sterner',
          description: 'Desarrolla el enfoque y la disciplina en tu vida'
        },
        {
          title: 'Termina lo que Comienzas',
          author: 'Peter Hollins',
          description: 'El arte de seguir adelante'
        }
      ],
      selfDevelopment: [
        {
          title: 'El Ego es el Enemigo',
          author: 'Ryan Holiday',
          description: 'La lucha por dominar a nuestro mayor oponente'
        },
        {
          title: 'Potencial Oculto',
          author: 'Adam Grant',
          description: 'La ciencia de lograr cosas mayores'
        },
        {
          title: 'La Montaña Eres Tú',
          author: 'Brianna Wiest',
          description: 'Transforma el auto-sabotaje en autodominio'
        },
        {
          title: 'Ultraaprendizaje',
          author: 'Scott Young',
          description: 'Domina habilidades difíciles, supera a la competencia'
        }
      ],
      business: [
        {
          title: 'Construye, No Hables',
          author: 'Rabih Ghandour',
          description: 'Cosas que desearías que te hubieran enseñado en la escuela'
        },
        {
          title: 'El Método Lean Startup',
          author: 'Eric Ries',
          description: 'Cómo los emprendedores de hoy usan la innovación continua'
        },
        {
          title: 'El Fin de Semana del Millón de Dólares',
          author: 'Noah Kagan',
          description: 'El camino rápido para construir un negocio rentable'
        },
        {
          title: 'StoryBrand',
          author: 'Donald Miller',
          description: 'Clarifica tu mensaje para que los clientes escuchen'
        },
        {
          title: 'Sprint',
          author: 'Jake Knapp',
          description: 'Resuelve grandes problemas y prueba nuevas ideas en solo cinco días'
        }
      ],
      technology: [
        {
          title: 'La Guía del Ingeniero de Software',
          author: 'Gergely Orosz',
          description: 'Navegando el camino de junior a senior y más allá'
        },
        {
          title: 'El Ingeniero Pragmático',
          author: 'Gergely Orosz',
          description: 'Consejos prácticos para carreras en ingeniería de software'
        },
        {
          title: 'Algoritmos',
          author: 'Robert Sedgewick',
          description: 'Conceptos esenciales para profesionales de la programación'
        }
      ],
      creativity: [
        {
          title: 'Roba Como un Artista',
          author: 'Austin Kleon',
          description: 'Consejos creativos para trabajos originales'
        }
      ]
    }
  },
  resume: {
    title: 'Currículum',
    downloadPDF: 'Descargar PDF',
    personalInfo: {
      title: 'Información Personal',
      name: 'Niverton Ricardo Bezerra Neves',
      dob: '2000 (24 años)',
      nationality: 'Brasileño',
      location: 'Brasil (Abierto a reubicación)',
      phone: '+55 81 9 96095850',
      email: 'niverton.neves@gmail.com',
      linkedin: 'linkedin.com/in/ricardo-bezerra-22bb661a4',
      github: 'github.com/ricardobezerra22'
    },
    summary: {
      title: 'Resumen Profesional',
      content: 'Desarrollador Full-Stack con más de 5 años de experiencia y especializado en Vue.js, React y Node.js, enfocado en construir aplicaciones SaaS escalables, microfrontends con SPA y microservicios para sistemas backend escalables. Experto en optimización de SEO con metadatos e integración de Google Analytics. Experiencia en diseño de APIs RESTful, implementación de sistemas de autenticación, integración de IA generativa en SPAs y optimización del rendimiento del sistema. Fuerte conocimiento en DevOps con experiencia en CI/CD, Docker e infraestructura en la nube (AWS/GCP). Usuario de arquitectura limpia, mejores prácticas de seguridad, adaptado a entornos dinámicos, trabajo en equipo y principios de ingeniería de software. Abierto a oportunidades internacionales y reubicación.'
    },
    experience: {
      title: 'Experiencia Laboral',
      jobs: [
        {
          company: 'Safetec',
          position: 'Desarrollador Full-Stack',
          period: 'Ene 2024 – Presente',
          description: 'Especialista en servicios de nube y transformación digital',
          achievements: [
            'Desarrollé aplicaciones SaaS escalables usando Vue.js, Node.js y TypeScript',
            'Diseñé APIs RESTful e implementé autenticación OAuth2',
            'Integré OpenAI con Google Workspace para mejorar la productividad de los usuarios',
            'Optimicé el rendimiento del backend, reduciendo los tiempos de respuesta de las consultas a la base de datos en un 40%',
            'Construí pipelines de CI/CD para despliegue y pruebas automatizadas',
            'Aseguré las mejores prácticas de seguridad siguiendo las pautas de OWASP',
            'Refactoricé código antiguo, actualizando sistemas y mejorando el rendimiento, cuidando de no romper nada'
          ]
        },
        {
          company: 'COMEIA',
          position: 'Desarrollador Full-Stack',
          period: 'Mar 2022 – Presente',
          achievements: [
            'Creé SaaS One, una plataforma empresarial que redujo los gastos de SaaS en más de $20,000 mensuales',
            'Trabajé en TeamCulture, un SaaS de gestión de recursos humanos, mejorando el rendimiento y la accesibilidad del frontend',
            'Implementé Jest y Cypress para pruebas de extremo a extremo',
            'Integré arquitectura de microservicios para mejorar la escalabilidad',
            'Documenté todos los componentes del frontend con Storybook',
            'Usé Single Page Application y microservicios',
            'Arquitectura de código limpio y TDD para backend y frontend',
            'Gestión del tiempo con libros de alto valor',
            'Metodologías ágiles con ClickUP y JIRA',
            'Lideré el desarrollo de aplicaciones de una sola página escalables usando React y TypeScript',
            'Optimicé métricas de rendimiento web y Core Web Vitals para plataformas SaaS empresariales',
            'Construí componentes reutilizables e implementé estrategias de pruebas exhaustivas',
            'Colaboré con equipos multifuncionales para mejorar la experiencia del usuario',
            'Arquitecturé soluciones frontend utilizando bibliotecas modernas de gestión de estado',
            'Desarrollé funciones impulsadas por SEO para apoyar el crecimiento del tráfico orgánico',
            'Mantuve documentación de alta calidad y especificaciones técnicas',
            'Implementé visualización de datos y presentación de datos tabulares complejos'
          ]
        },
        {
          company: 'Numerarte',
          position: 'Desarrollador Full-Stack',
          period: 'Dic 2019 – Mar 2022',
          achievements: [
            'Desarrollé y mantuve sistemas ERP usando Vue.js y Node.js',
            'Mejoré el rendimiento de las aplicaciones mediante caché optimizado e indexación de bases de datos'
          ]
        }
      ]
    },
    education: {
      title: 'Educación',
      schools: [
        {
          name: 'UNICESUMAR',
          degree: 'Licenciatura en Análisis y Desarrollo de Sistemas',
          period: '2023 – 2026'
        },
        {
          name: 'ASCES-UNITA',
          degree: 'Derecho (Incompleto)',
          period: '2018–2022'
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
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
          title: 'Bases de Datos',
          skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'noSQL', 'Supabase', 'Firestore']
        },
        devops: {
          title: 'DevOps y Cloud',
          skills: ['Docker', 'Kubernetes', 'AWS S3', 'Google Cloud', 'CI/CD', 'GitHub Actions', 'Firebase']
        },
        testing: {
          title: 'Seguridad y Pruebas',
          skills: ['Jest', 'Cypress', 'OWASP Security', 'OAuth2', 'Firebase Authentication', 'Cucumber']
        },
        workflow: {
          title: 'Control de Versiones y Flujo de Trabajo',
          skills: ['Git', 'GitHub', 'GitLab', 'Ágil (Scrum/Kanban)']
        }
      }
    },
    softSkills: {
      title: 'Habilidades Blandas',
      skills: [
        {
          name: 'Liderazgo',
          description: 'Capacidad comprobada para liderar y mentorizar equipos de desarrollo'
        },
        {
          name: 'Comunicación',
          description: 'Excelentes habilidades de comunicación verbal y escrita en varios idiomas'
        },
        {
          name: 'Resolución de Problemas',
          description: 'Fuertes habilidades analíticas y creativas para resolver problemas'
        },
        {
          name: 'Adaptabilidad',
          description: 'Aprendizaje rápido y adaptabilidad a nuevas tecnologías y entornos'
        },
        {
          name: 'Gestión del Tiempo',
          description: 'Eficiente en la gestión de múltiples proyectos y cumplimiento de plazos'
        },
        {
          name: 'Colaboración en Equipo',
          description: 'Fuerte jugador de equipo con experiencia en equipos multifuncionales'
        },
        {
          name: 'Conciencia Cultural',
          description: 'Experiencia trabajando en entornos multiculturales'
        },
        {
          name: 'Pensamiento Crítico',
          description: 'Enfoque analítico para la resolución de problemas y toma de decisiones'
        }
      ]
    },
    projects: {
      title: 'Proyectos y Logros',
      list: [
        'NutriFlow – Sistema de planificación nutricional impulsado por IA usando OpenAI y Node.js',
        'SaaS One – Herramienta de gestión SaaS integrada con Google Workspace',
        'TeamCulture – Plataforma SaaS de recursos humanos con rendimiento y UX mejorados',
        'Phoenix - SaaS de viajes y logística',
        'Freelancing - Landing pages en general para mercados',
        'BitCoinLiveTracker - Aplicación Web3 para rastrear el precio de Bitcoin usando la API de COINGECKO',
        'Safetec - Mantenimiento de todo el ecosistema de Google Workspace del socio de Google Safetec, con más de 4000 clientes y aplicaciones escalables, y mantenimiento de sistemas antiguos'
      ]
    },
    languages: {
      title: 'Idiomas',
      list: [
        { language: 'Portugués', level: 'Nativo' },
        { language: 'Inglés', level: 'Fluido (C1)' },
        { language: 'Francés', level: 'Intermedio (B1)' }
      ]
    },
    certifications: {
      title: 'Certificaciones y Capacitaciones',
      list: [
        'Comeia Academy Desarrollo Fullstack (Bootcamp de 6 meses) (2022)',
        'EF SET Inglés C2 (Prueba de competencia)'
      ]
    },
    interests: {
      title: 'Intereses',
      list: [
        { name: 'IA y Aprendizaje Automático', icon: 'Brain' },
        { name: 'Arquitectura de Software', icon: 'Architecture' },
        { name: 'DevOps e Infraestructura en la Nube', icon: 'Cloud' },
        { name: 'Productividad y Neurociencia', icon: 'Zap' },
        { name: 'Contribuciones de Código Abierto', icon: 'Code2' },
        { name: 'Desarrollo en Vue.js y React', icon: 'Layout' },
        { name: 'Experto en JavaScript/TypeScript', icon: 'FileJson' },
        { name: 'Arquitectura Frontend', icon: 'Layers' },
        { name: 'Integración y Pruebas de API', icon: 'TestTube' },
        { name: 'Optimización de Rendimiento', icon: 'Gauge' },
        { name: 'Código Limpio y Documentación', icon: 'FileCode' },
        { name: 'IA Generativa', icon: 'Stars' },
        { name: 'Integración de IA', icon: 'Bot' },
        { name: 'Python', icon: 'FileType' },
        { name: 'React Native', icon: 'Smartphone' }
      ]
    },
  },
}