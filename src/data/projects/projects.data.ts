//* INTERFACES *//
import type { IProject } from "@/interfaces";

export const PROJECTS_DATA: IProject[] = [
  {
    active: true,
    name: "3Asaltos",
    cover: "/projects/3-asaltos-cover.webp",
    technologies: ["Astro", "React", "HeroUI", "Tailwind", "TypeScript"],
    description:
      "Web diseñada para visualizar todos los episodios de un podcast sobre MMA, desarrollada con Astro para optimizar la velocidad, mejorar el rendimiento y brindar una experiencia de usuario más fluida y agradable.",
    link: "https://3asaltos.vercel.app/",
  },
  {
    active: true,
    name: "Evlun",
    cover: "/projects/evlun-cover.webp",
    technologies: [
      "React",
      "Next",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "Docker",
      "React-Query",
      "TypeScript",
      "Cloudinary",
      "Mongoose",
    ],
    repository: "https://github.com/TomasCuevas/Evlun",
    description:
      "Clon funcional de Twitter creado desde cero como un desafío avanzado. Incluye registro de cuenta, seguir usuarios, publicar tweets, responder a tweets propios y ajenos, dar 'me gusta' y más.",
    link: "https://evlun.vercel.app",
  },
  {
    active: true,
    name: "Teslo",
    cover: "/projects/teslo-cover.webp",
    technologies: [
      "React",
      "Next",
      "Tailwind",
      "Node",
      "MongoDB",
      "NextAuth",
      "Docker",
      "SWR",
      "TypeScript",
      "PayPal API",
      "Mongoose",
    ],
    repository: "https://github.com/TomasCuevas/Teslo",
    description:
      "Ecommerce realizado en un curso de Next.js. Después de finalizar el curso, decidí refinar la aplicación: refactorizar el código, mejorar los estilos, optimizar el rendimiento y hacerla completamente responsive.",
    link: "https://teslo-tc.vercel.app/",
  },
  {
    active: false,
    name: "Labor",
    cover: "/projects/labor-cover.webp",
    technologies: ["Next", "React", "Tailwind", "PostgreSQL", "NestJs", "React-Query", "Docker", "TypeScript", "TypeORM"],
    repository: "https://github.com/TomasCuevas/Labor",
    description:
      "Clon de Trello para mejorar habilidades en desarrollo backend con NestJS y gestión de bases de datos con PostgreSQL. Frontend funcional y optimizado con ReactJS y NextJS.",
    link: "https://labor-client.vercel.app",
  },
  {
    active: true,
    name: "Productive Pulse",
    cover: "/projects/productive-pulse-cover.webp",
    technologies: ["Astro", "React", "Tailwind", "Zustand", "TypeScript", "NextUI"],
    repository: "https://github.com/TomasCuevas/ProductivePulse",
    description:
      "Aplicación Pomodoro desarrollada en Astro y React ofrece configuración flexible de tiempos de trabajo, descanso y descanso largo. Incluye un reproductor de música y un gestor de tareas integrado para crear, actualizar, completar y eliminar tareas.",
    link: "https://productive-pulse.vercel.app",
  },
  {
    active: true,
    name: "Visualizer",
    cover: "/projects/visualizer-cover.webp",
    technologies: ["React", "Next", "Tailwind", "Unsplash API", "React-Query", "TypeScript"],
    repository: "https://github.com/TomasCuevas/Visualizer",
    description:
      "Web de imágenes obtenidas por la API que ofrece Unsplash. En ella podremos visualizar las ultimas imágenes, imágenes por categoría o utilizar el buscador integrado en la web.",
    link: "https://visualizer-azure.vercel.app/",
  },
  {
    active: true,
    name: "Atomic Notes",
    cover: "/projects/atomic-notes-cover.webp",
    technologies: ["React", "Next", "Tailwind", "Material UI", "Firebase & Firestore", "Cloudinary", "TypeScript"],
    repository: "https://github.com/TomasCuevas/Atomic-Notes",
    description:
      "Aplicación para crear y editar notas con la capacidad de agregar imágenes. Utiliza Firebase para la autenticación y Firestore como base de datos, junto con Cloudinary para el almacenamiento de imágenes.",
    link: "https://atomic-notes.vercel.app",
  },
  {
    active: true,
    name: "Pokedex",
    cover: "/projects/pokedex-cover.webp",
    technologies: ["React", "Next", "Tailwind", "React-Query", "TypeScript", "Framer-Motion"],
    repository: "https://github.com/TomasCuevas/Pokedex-TC",
    description:
      "Web de listado de pokemones con la API de PokeAPI. Funciones incluidas: listar todos los pokemones, filtrar por tipo, guardar/quitar de favoritos, ver detalles del pokemon seleccionado y buscar en el buscador integrado.",
    link: "https://pokedex-tc.vercel.app/",
  },
  {
    active: true,
    name: "Whiteblack",
    cover: "/projects/whiteblack-cover.webp",
    technologies: ["Next", "React", "Tailwind", "TypeScript"],
    repository: "https://github.com/TomasCuevas/whiteblack",
    description:
      "Blog personal desarrollado con Next.js y Tailwind. En el escribo artículos sobre desarrollo web y otros temas relacionados. Al desarrollarlo reforcé mis habilidades en Next.js, Tailwind, redacción y comunicación.",
    link: "https://whiteblack.vercel.app",
  },
];

export const ACTIVE_PROJECTS_DATA = PROJECTS_DATA.filter((project) => project.active);
