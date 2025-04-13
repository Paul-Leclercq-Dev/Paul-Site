import { AnimatedTestimonials } from "./ui/animated-testimonials";

interface services {
  quote: string;
  name: string;
  src: string;
}

import fullstack from "../assets/images/services/fullstack.webp";
import mobileapp from "../assets/images/services/mobileapp.webp";
import api from "../assets/images/services/api.webp";
import devops from "../assets/images/services/devops.webp";
import uiux from "../assets/images/services/uiux.webp";
import security from "../assets/images/services/security.webp";
import database from "../assets/images/services/database.webp";
import testing from "../assets/images/services/testing.webp";

export function MesServices() {
  function services(): services[] {
    const servicesFR = [
      {
        quote: "Création de sites et applications web performants avec React, NestJS, et bases de données optimisées.",
        name: "Développement Web Full-Stack",
        src: fullstack,
      },
      {
        quote: "Applications interactives et responsives, adaptées aux mobiles avec React et PWA.",
        name: "Développement d'Applications Web & Mobile",
        src: mobileapp,
      },
      {
        quote: "Conception d'API REST et GraphQL sécurisées et performantes avec NestJS, Prisma et Node.js.",
        name: "API & Backend",
        src: api,
      },
      {
        quote: "Mise en place d’infrastructures cloud (AWS, Scaleway), CI/CD et conteneurisation avec Docker.",
        name: "Architecture & DevOps",
        src: devops,
      },
      {
        quote: "Développement d’interfaces modernes avec TailwindCSS, animations et optimisations UX.",
        name: "Intégration UI/UX",
        src: uiux,
      },
      {
        quote: "Protection des applications (authentification, sécurité des données) et optimisation des performances.",
        name: "Sécurité & Performance",
        src: security,
      },
      {
        quote: "Modélisation, gestion et optimisation de bases SQL (MySQL, PostgreSQL) et NoSQL (MongoDB, Redis).",
        name: "Base de Données & Stockage",
        src: database,
      },
      {
        quote: "Automatisation des workflows, tests unitaires et end-to-end avec Jest, Cypress et BullMQ.",
        name: "Automatisation & Tests",
        src: testing,
      },
    ];
    const servicesES = [
      {
        quote: "Creación de sitios y aplicaciones web eficientes con React, NestJS y bases de datos optimizadas.",
        name: "Desarrollo Web Full-Stack",
        src: fullstack,
      },
      {
        quote: "Aplicaciones interactivas y adaptables a móviles con React y tecnologías PWA.",
        name: "Desarrollo de Aplicaciones Web y Móviles",
        src: mobileapp,
      },
      {
        quote: "Diseño de API REST y GraphQL seguras y eficientes con NestJS, Prisma y Node.js.",
        name: "API y Backend",
        src: api,
      },
      {
        quote: "Implementación de infraestructuras en la nube (AWS, Scaleway), CI/CD y contenedores con Docker.",
        name: "Arquitectura y DevOps",
        src: devops,
      },
      {
        quote: "Desarrollo de interfaces modernas con TailwindCSS, animaciones y optimización UX.",
        name: "Integración UI/UX",
        src: uiux,
      },
      {
        quote: "Protección de aplicaciones (autenticación, seguridad de datos) y optimización del rendimiento.",
        name: "Seguridad y Rendimiento",
        src: security,
      },
      {
        quote: "Modelado, gestión y optimización de bases de datos SQL (MySQL, PostgreSQL) y NoSQL (MongoDB, Redis).",
        name: "Bases de Datos y Almacenamiento",
        src: database,
      },
      {
        quote: "Automatización de flujos de trabajo, pruebas unitarias y E2E con Jest, Cypress y BullMQ.",
        name: "Automatización y Pruebas",
        src: testing,
      },
    ];
    const servicesEN = [
      {
        quote: "Creation of high-performance websites and web apps using React, NestJS, and optimized databases.",
        name: "Full-Stack Web Development",
        src: fullstack,
      },
      {
        quote: "Interactive, mobile-friendly apps with React and PWA technologies.",
        name: "Web & Mobile App Development",
        src: mobileapp,
      },
      {
        quote: "Design of secure and high-performance REST and GraphQL APIs with NestJS, Prisma, and Node.js.",
        name: "API & Backend",
        src: api,
      },
      {
        quote: "Cloud infrastructure setup (AWS, Scaleway), CI/CD, and Docker containerization.",
        name: "Architecture & DevOps",
        src: devops,
      },
      {
        quote: "Modern UI development with TailwindCSS, animations, and UX optimizations.",
        name: "UI/UX Integration",
        src: uiux,
      },
      {
        quote: "Application protection (authentication, data security) and performance optimization.",
        name: "Security & Performance",
        src: security,
      },
      {
        quote: "Modeling, managing, and optimizing SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) databases.",
        name: "Database & Storage",
        src: database,
      },
      {
        quote: "Workflow automation, unit and end-to-end testing with Jest, Cypress, and BullMQ.",
        name: "Automation & Testing",
        src: testing,
      },
    ];

    const language = localStorage.getItem("language");
    if (language === "fr") return servicesFR;
    if (language === "esp") return servicesES;
    if (language === "en") return servicesEN;
    return servicesFR;
  }

  return <AnimatedTestimonials testimonials={services()} />;
}
