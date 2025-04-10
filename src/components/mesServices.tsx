import { AnimatedTestimonials } from "./ui/animated-testimonials";

interface services {
  quote: string;
  name: string;
  src: string;
}

export function MesServices() {

  function services(): services[] {
    const servicesFR = [
      {
        quote: "Création de sites et applications web performants avec React, NestJS, et bases de données optimisées.",
        name: "Développement Web Full-Stack",
        src: "src/assets/images/services/fullstack.jpg",
      },
      {
        quote: "Applications interactives et responsives, adaptées aux mobiles avec React et PWA.",
        name: "Développement d'Applications Web & Mobile",
        src: "src/assets/images/services/mobileapp.jpg",
      },
      {
        quote: "Conception d'API REST et GraphQL sécurisées et performantes avec NestJS, Prisma et Node.js.",
        name: "API & Backend",
        src: "src/assets/images/services/api.png",
      },
      {
        quote: "Mise en place d’infrastructures cloud (AWS, Scaleway), CI/CD et conteneurisation avec Docker.",
        name: "Architecture & DevOps",
        src: "src/assets/images/services/devops.png",
      },
      {
        quote: "Développement d’interfaces modernes avec TailwindCSS, animations et optimisations UX.",
        name: "Intégration UI/UX",
        src: "src/assets/images/services/uiux.jpg",
      },
      {
        quote: "Protection des applications (authentification, sécurité des données) et optimisation des performances.",
        name: "Sécurité & Performance",
        src: "src/assets/images/services/security.png",
      },
      {
        quote: "Modélisation, gestion et optimisation de bases SQL (MySQL, PostgreSQL) et NoSQL (MongoDB, Redis).",
        name: "Base de Données & Stockage",
        src: "src/assets/images/services/database.png",
      },
      {
        quote: "Automatisation des workflows, tests unitaires et end-to-end avec Jest, Cypress et BullMQ.",
        name: "Automatisation & Tests",
        src: "src/assets/images/services/testing.png",
      },
    ];
    const servicesES = [
      {
        quote: "Creación de sitios y aplicaciones web eficientes con React, NestJS y bases de datos optimizadas.",
        name: "Desarrollo Web Full-Stack",
        src: "src/assets/images/services/fullstack.jpg",
      },
      {
        quote: "Aplicaciones interactivas y adaptables a móviles con React y tecnologías PWA.",
        name: "Desarrollo de Aplicaciones Web y Móviles",
        src: "src/assets/images/services/mobileapp.jpg",
      },
      {
        quote: "Diseño de API REST y GraphQL seguras y eficientes con NestJS, Prisma y Node.js.",
        name: "API y Backend",
        src: "src/assets/images/services/api.png",
      },
      {
        quote: "Implementación de infraestructuras en la nube (AWS, Scaleway), CI/CD y contenedores con Docker.",
        name: "Arquitectura y DevOps",
        src: "src/assets/images/services/devops.png",
      },
      {
        quote: "Desarrollo de interfaces modernas con TailwindCSS, animaciones y optimización UX.",
        name: "Integración UI/UX",
        src: "src/assets/images/services/uiux.jpg",
      },
      {
        quote: "Protección de aplicaciones (autenticación, seguridad de datos) y optimización del rendimiento.",
        name: "Seguridad y Rendimiento",
        src: "src/assets/images/services/security.png",
      },
      {
        quote: "Modelado, gestión y optimización de bases de datos SQL (MySQL, PostgreSQL) y NoSQL (MongoDB, Redis).",
        name: "Bases de Datos y Almacenamiento",
        src: "src/assets/images/services/database.png",
      },
      {
        quote: "Automatización de flujos de trabajo, pruebas unitarias y E2E con Jest, Cypress y BullMQ.",
        name: "Automatización y Pruebas",
        src: "src/assets/images/services/testing.png",
      },
    ];
    const servicesEN = [
      {
        quote: "Creation of high-performance websites and web apps using React, NestJS, and optimized databases.",
        name: "Full-Stack Web Development",
        src: "src/assets/images/services/fullstack.jpg",
      },
      {
        quote: "Interactive, mobile-friendly apps with React and PWA technologies.",
        name: "Web & Mobile App Development",
        src: "src/assets/images/services/mobileapp.jpg",
      },
      {
        quote: "Design of secure and high-performance REST and GraphQL APIs with NestJS, Prisma, and Node.js.",
        name: "API & Backend",
        src: "src/assets/images/services/api.png",
      },
      {
        quote: "Cloud infrastructure setup (AWS, Scaleway), CI/CD, and Docker containerization.",
        name: "Architecture & DevOps",
        src: "src/assets/images/services/devops.png",
      },
      {
        quote: "Modern UI development with TailwindCSS, animations, and UX optimizations.",
        name: "UI/UX Integration",
        src: "src/assets/images/services/uiux.jpg",
      },
      {
        quote: "Application protection (authentication, data security) and performance optimization.",
        name: "Security & Performance",
        src: "src/assets/images/services/security.png",
      },
      {
        quote: "Modeling, managing, and optimizing SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) databases.",
        name: "Database & Storage",
        src: "src/assets/images/services/database.png",
      },
      {
        quote: "Workflow automation, unit and end-to-end testing with Jest, Cypress, and BullMQ.",
        name: "Automation & Testing",
        src: "src/assets/images/services/testing.png",
      },
    ];
    const languages = localStorage.getItem("language")
    if (languages === "fr") {
      return servicesFR
    }
    else if (languages === "esp") {
      return servicesES
    }
    else if (languages === "en") {
      return servicesEN
    }
    return servicesFR
  }

  return <AnimatedTestimonials testimonials={services()} />;
}
