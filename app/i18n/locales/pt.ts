export const pt = {
  header: {
    home: 'Início',
    resume: 'Currículo',
    projects: 'Projetos',
    books: 'Livros',
    contact: 'Contato',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
  home: {
    title: "Olá, eu sou Ricardo Bezerra",
    subtitle: "Desenvolvedor Full Stack apaixonado por criar aplicações web modernas e escaláveis com arquitetura de microsserviços, microfrontends e tecnologias serverless.",
    featured: {
      title: 'Projetos em Destaque',
      description: 'Aqui estão alguns dos meus projetos mais impactantes que mostram minha experiência em desenvolvimento de software.',
      projects: [
        {
          title: 'SaaS One',
          description: 'Uma plataforma SaaS revolucionária que simplifica a integração do Google Workspace para empresas. Inclui análises em tempo real, fluxos de trabalho automatizados e um painel de controle impressionante construído com Vue.js. Utiliza arquitetura de microsserviços com Docker e Kubernetes para uma escalabilidade perfeita.',
          image: '/assets/images/saason.png',
          link: 'https://saas.one/',
          tags: ['Vue.js', 'Node.js', 'MongoDB', 'Storybook', 'Cypress', 'GraphQL', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'BitBucket', 'Jest', 'Cucumber Preprocessor', 'Jenkins', 'Kubernetes', 'Redis', 'Git']
        },
        {
          title: 'TeamCulture',
          description: 'Uma solução inovadora de gestão de recursos humanos que transforma a cultura corporativa. Construída com Vue.js e Node.js, oferece análises poderosas, ferramentas de engajamento de funcionários e acompanhamento de desempenho. Inclui testes abrangentes com Cypress e Jest, garantindo qualidade excepcional.',
          image: '/assets/images/teamculture.png',
          link: 'https://teamculture.com.br',
          tags: ['Vue.js', 'Node.js', 'Cypress', 'MongoDB', 'CI/CD', 'Storybook', 'Jest', 'Cucumber Preprocessor', 'GraphQL', 'Customer Success', 'Agile Methodologies']
        },
        {
          title: 'NutriFlow',
          description: 'Experimente o planejamento nutricional personalizado impulsionado por IA. Esta aplicação Next.js integra OpenAI para recomendações dietéticas inteligentes, inclui processamento seguro de pagamentos com Stripe e gera relatórios em PDF. Implantada no Google Cloud Platform para desempenho ideal.',
          image: '/assets/images/nutriflow.png',
          link: 'https://nutriflow.online/',
          tags: ['Next.js', 'Node.js', 'OpenAI', 'Docker', 'MongoDB', 'Stripe', 'Google Cloud Platform', 'App Engine', 'Redis']
        }
      ]
    },
    view_all_projects: "Ver Todos os Projetos",
    name: 'Niverton Ricardo',
    profession: 'Desenvolvedor Sênior Full-Stack e Especialista em DevOps',
    location: 'Caruaru, Brasil',
    experience: 'Mais de 10 anos de experiência',
    expertise: 'Experiência em Vue.js, React, Node.js, Rust e práticas de DevOps',
    interests: 'Interesses: Leitura, academia, meditação e técnicas de produtividade',
  },
  projects: {
    title: 'Projetos',
    viewProject: 'Ver Projeto',
  },
  books: {
    title: 'Livros que Li e Recomendo!',
    categories: {
      productivity: 'Produtividade',
      selfDevelopment: 'Desenvolvimento Pessoal',
      business: 'Negócios e Empreendedorismo',
      technology: 'Tecnologia e Engenharia',
      creativity: 'Criatividade e Inovação'
    },
    bookList: {
      productivity: [
        {
          title: 'A Semana de 4 Horas',
          author: 'Tim Ferriss',
          description: 'Escape do 9-5, viva em qualquer lugar e junte-se aos Novos Ricos'
        },
        {
          title: 'O Ano de 12 Semanas',
          author: 'Brian P. Moran',
          description: 'Faça mais em 12 semanas do que outros fazem em 12 meses'
        },
        {
          title: 'Essencialismo',
          author: 'Greg McKeown',
          description: 'A busca disciplinada por menos'
        },
        {
          title: 'A Mente em Prática',
          author: 'Thomas M. Sterner',
          description: 'Desenvolva foco e disciplina em sua vida'
        },
        {
          title: 'Termine o que Começou',
          author: 'Peter Hollins',
          description: 'A arte de seguir em frente'
        }
      ],
      selfDevelopment: [
        {
          title: 'O Ego é seu Inimigo',
          author: 'Ryan Holiday',
          description: 'A luta para dominar nosso maior oponente'
        },
        {
          title: 'Potencial Oculto',
          author: 'Adam Grant',
          description: 'A ciência de alcançar coisas maiores'
        },
        {
          title: 'A Montanha é Você',
          author: 'Brianna Wiest',
          description: 'Transforme a autossabotagem em autodomínio'
        },
        {
          title: 'Ultraaprendizado',
          author: 'Scott Young',
          description: 'Domine habilidades difíceis, supere a concorrência'
        }
      ],
      business: [
        {
          title: 'Construa, Não Fale',
          author: 'Rabih Ghandour',
          description: 'Coisas que você gostaria de ter aprendido na escola'
        },
        {
          title: 'A Startup Enxuta',
          author: 'Eric Ries',
          description: 'Como os empreendedores de hoje usam a inovação contínua'
        },
        {
          title: 'O Fim de Semana do Milhão de Dólares',
          author: 'Noah Kagan',
          description: 'O caminho rápido para construir um negócio lucrativo'
        },
        {
          title: 'StoryBrand',
          author: 'Donald Miller',
          description: 'Clarifique sua mensagem para que os clientes ouçam'
        },
        {
          title: 'Sprint',
          author: 'Jake Knapp',
          description: 'Resolva grandes problemas e teste novas ideias em apenas cinco dias'
        }
      ],
      technology: [
        {
          title: 'O Guia do Engenheiro de Software',
          author: 'Gergely Orosz',
          description: 'Navegando o caminho de júnior a sênior e além'
        },
        {
          title: 'O Engenheiro Pragmático',
          author: 'Gergely Orosz',
          description: 'Conselhos práticos para carreiras em engenharia de software'
        },
        {
          title: 'Algoritmos',
          author: 'Robert Sedgewick',
          description: 'Conceitos essenciais para profissionais de programação'
        }
      ],
      creativity: [
        {
          title: 'Roube Como um Artista',
          author: 'Austin Kleon',
          description: 'Dicas criativas para trabalhos originais'
        }
      ]
    }
  },
  resume: {
    title: 'Currículo',
    downloadPDF: 'Baixar PDF',
    personalInfo: {
      title: 'Informações Pessoais',
      name: 'Niverton Ricardo Bezerra Neves',
      dob: '2000 (24 anos)',
      nationality: 'Brasileiro',
      location: 'Brasil (Aberto a realocação)',
      phone: '+55 81 9 96095850',
      email: 'niverton.neves@gmail.com',
      linkedin: 'linkedin.com/in/ricardo-bezerra-22bb661a4',
      github: 'github.com/ricardobezerra22'
    },
    summary: {
      title: 'Resumo Profissional',
      content: 'Desenvolvedor Full-Stack com mais de 5 anos de experiência e especializado em Vue.js, React e Node.js, focado na construção de aplicações SaaS escaláveis, microfrontends com SPA e microsserviços para sistemas backend escaláveis. Experiência em otimização de SEO com metadados e integração do Google Analytics. Experiente em design de APIs RESTful, implementação de sistemas de autenticação, integração de IA generativa em SPAs e otimização de desempenho do sistema. Conhecimento sólido em DevOps com experiência em CI/CD, Docker e infraestrutura em nuvem (AWS/GCP). Usuário de arquitetura limpa, melhores práticas de segurança, adaptado a ambientes dinâmicos, trabalho em equipe e princípios de engenharia de software. Aberto a oportunidades internacionais e realocação.'
    },
    experience: {
      title: 'Experiência Profissional',
      jobs: [
        {
          company: 'Safetec',
          position: 'Desenvolvedor Full-Stack',
          period: 'Jan 2024 – Presente',
          description: 'Especialista em serviços de nuvem e transformação digital',
          achievements: [
            'Desenvolvi aplicações SaaS escaláveis usando Vue.js, Node.js e TypeScript',
            'Projetei APIs RESTful e implementei autenticação OAuth2',
            'Integrei OpenAI com Google Workspace para melhorar a produtividade dos usuários',
            'Otimizei o desempenho do backend, reduzindo os tempos de resposta das consultas ao banco de dados em 40%',
            'Construí pipelines de CI/CD para implantação e testes automatizados',
            'Garanti as melhores práticas de segurança seguindo as diretrizes da OWASP',
            'Refatorei códigos antigos, atualizando sistemas e melhorando o desempenho, cuidando para não quebrar nada'
          ]
        },
        {
          company: 'COMEIA',
          position: 'Desenvolvedor Full-Stack',
          period: 'Mar 2022 – Presente',
          achievements: [
            'Criei o SaaS One, uma plataforma empresarial que reduziu os custos de SaaS em mais de $20.000 mensais',
            'Trabalhei no TeamCulture, um SaaS de gestão de RH, melhorando o desempenho e a acessibilidade do frontend',
            'Implementei Jest e Cypress para testes de ponta a ponta',
            'Integrei arquitetura de microsserviços para melhorar a escalabilidade',
            'Documentei todos os componentes do frontend com Storybook',
            'Usei Single Page Application e microsserviços',
            'Arquitetura de código limpo e TDD para backend e frontend',
            'Gerenciamento de tempo com livros de alto valor',
            'Metodologias ágeis com ClickUP e JIRA',
            'Liderei o desenvolvimento de aplicações de página única escaláveis usando React e TypeScript',
            'Otimizei métricas de desempenho web e Core Web Vitals para plataformas SaaS empresariais',
            'Construí componentes reutilizáveis e implementei estratégias de testes abrangentes',
            'Colaborei com equipes multifuncionais para melhorar a experiência do usuário',
            'Arquiteturei soluções frontend utilizando bibliotecas modernas de gerenciamento de estado',
            'Desenvolvi recursos orientados por SEO para apoiar o crescimento do tráfego orgânico',
            'Mantive documentação de alta qualidade e especificações técnicas',
            'Implementei visualização de dados e apresentação de dados tabulares complexos'
          ]
        },
        {
          company: 'Numerarte',
          position: 'Desenvolvedor Full-Stack',
          period: 'Dez 2019 – Mar 2022',
          achievements: [
            'Desenvolvi e mantive sistemas ERP usando Vue.js e Node.js',
            'Melhorei o desempenho das aplicações por meio de cache otimizado e indexação de banco de dados'
          ]
        }
      ]
    },
    education: {
      title: 'Educação',
      schools: [
        {
          name: 'UNICESUMAR',
          degree: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
          period: '2023 – 2026'
        },
        {
          name: 'ASCES-UNITA',
          degree: 'Direito (Incompleto)',
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
          title: 'Bancos de Dados',
          skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'noSQL', 'Supabase', 'Firestore']
        },
        devops: {
          title: 'DevOps e Cloud',
          skills: ['Docker', 'Kubernetes', 'AWS S3', 'Google Cloud', 'CI/CD', 'GitHub Actions', 'Firebase']
        },
        testing: {
          title: 'Segurança e Testes',
          skills: ['Jest', 'Cypress', 'OWASP Security', 'OAuth2', 'Firebase Authentication', 'Cucumber']
        },
        workflow: {
          title: 'Controle de Versão e Fluxo de Trabalho',
          skills: ['Git', 'GitHub', 'GitLab', 'Ágil (Scrum/Kanban)']
        }
      }
    },
    softSkills: {
      title: 'Habilidades Interpessoais',
      skills: [
        {
          name: 'Liderança',
          description: 'Habilidade comprovada para liderar e mentorar equipes de desenvolvimento'
        },
        {
          name: 'Comunicação',
          description: 'Excelentes habilidades de comunicação verbal e escrita em vários idiomas'
        },
        {
          name: 'Resolução de Problemas',
          description: 'Habilidades analíticas e criativas fortes para resolver problemas'
        },
        {
          name: 'Adaptabilidade',
          description: 'Aprendiz rápido e adaptável a novas tecnologias e ambientes'
        },
        {
          name: 'Gestão de Tempo',
          description: 'Eficiente na gestão de múltiplos projetos e cumprimento de prazos'
        },
        {
          name: 'Colaboração em Equipe',
          description: 'Bom jogador de equipe com experiência em times multifuncionais'
        },
        {
          name: 'Consciência Cultural',
          description: 'Experiência trabalhando em ambientes multiculturais'
        },
        {
          name: 'Pensamento Crítico',
          description: 'Abordagem analítica para resolução de problemas e tomada de decisões'
        }
      ]
    },
    projects: {
      title: 'Projetos e Conquistas',
      list: [
        'NutriFlow – Sistema de planejamento nutricional com IA usando OpenAI e Node.js',
        'SaaS One – Ferramenta de gestão SaaS integrada ao Google Workspace',
        'TeamCulture – Plataforma SaaS de RH com desempenho e UX aprimorados',
        'Phoenix - SaaS de viagens e logística',
        'Freelancing - Landing pages em geral para mercados',
        'BitCoinLiveTracker - Aplicação Web3 para rastrear o preço do Bitcoin usando a API do COINGECKO',
        'Safetec - Manutenção de todo o ecossistema do Google Workspace do parceiro Google Safetec, com mais de 4000 clientes e aplicações escaláveis, e manutenção de sistemas antigos'
      ]
    },
    languages: {
      title: 'Idiomas',
      list: [
        { language: 'Português', level: 'Nativo' },
        { language: 'Inglês', level: 'Fluente (C1)' },
        { language: 'Francês', level: 'Intermediário (B1)' }
      ]
    },
    certifications: {
      title: 'Certificações e Treinamentos',
      list: [
        'Comeia Academy Desenvolvimento Fullstack (Bootcamp de 6 meses) (2022)',
        'EF SET Inglês C2 (Teste de Proficiência)'
      ]
    },
    interests: {
      title: 'Interesses',
      list: [
        { name: 'IA e Aprendizado de Máquina', icon: 'Brain' },
        { name: 'Arquitetura de Software', icon: 'Architecture' },
        { name: 'DevOps e Infraestrutura em Nuvem', icon: 'Cloud' },
        { name: 'Produtividade e Neurociência', icon: 'Zap' },
        { name: 'Contribuições de Código Aberto', icon: 'Code2' },
        { name: 'Desenvolvimento em Vue.js e React', icon: 'Layout' },
        { name: 'Especialista em JavaScript/TypeScript', icon: 'FileJson' },
        { name: 'Arquitetura Frontend', icon: 'Layers' },
        { name: 'Integração e Testes de API', icon: 'TestTube' },
        { name: 'Otimização de Desempenho', icon: 'Gauge' },
        { name: 'Código Limpo e Documentação', icon: 'FileCode' },
        { name: 'IA Generativa', icon: 'Stars' },
        { name: 'Integração de IA', icon: 'Bot' },
        { name: 'Python', icon: 'FileType' },
        { name: 'React Native', icon: 'Smartphone' }
      ]
    },
  },
}