import img1 from "../assets/ck3_wallpaper.jpg";


export const hard_skills = [
  {id: 1, name: "golang", image: "/favicon.svg"},
  {id: 2, name:"javascript", image: "/favicon.svg"},
  {id: 3, name:"react", image: "/favicon.svg"},
  {id: 4, name: "C", image: "/favicon.svg"},
  {id: 5, name:"C++", image: "/favicon.svg"},
  {id: 6, name:"SQL", image: "/favicon.svg"}
];

export const soft_skills = [
  {id: 1, name: "code", image: "/favicon.svg"},
  {id: 2, name: "lire", image: "/favicon.svg"},
  {id: 3, name: "ecrire", image: "/favicon.svg"}
];

export const Experience = [
  {id: 1, name: "A venir", image: "/favicon.svg", message: "Je suis actuellement un devellopeur junior qui cherche une alternace ou un stage. Mon but est d'approfondir mes compétence dans les plusieurs domaine ainsi que d'imergé dans le contexte professionel du travail au sein d'une entreprise. J'ai hate de pouvoir travaillé avec vous !", date: ""},
]   

export const formation = [
  {id: 1, name: "Lycée", image: "/favicon.svg", message: "J'ai suivis un Bacaloreat mathématique et NSI (Numérique et Science Informatique) qui m'a permis de très tot devellopé ma logique algorithmique, des connaissance de base en reseaux, des base en langage de base de donné et la rigueur d'application", date: "2022 - 2025"},
  {id: 2, name: "Ynov", image: "/favicon.svg", message: "Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.", date: "2025 - aujourd'hui"},
]   

export const projetsList = [
  {
    id: 1,
    title: "Projet 1",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
    contenuModal: <ul className="menu menu-vertical px-1">
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            </ul>
  },
  {
    id: 2,
    title: "Projet 2",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2024",
    modal: true,
    contenuModal: <ul className="menu menu-vertical px-1">
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            <li><img src= {img1} className="w-full" /></li>
            </ul>
  }
];

export const projetsList2 = [
  
  {
    id: 3,
    title: "Projet 3",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2026",
    modal: true,
  },
  {
    id: 4,
    title: "Projet 4",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  }
];


export const projetsList3 = [
    {
    id: 5,
    title: "Projet 5",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2026",
    modal: true,
  },
  {
    id: 6,
    title: "Projet 6",
    contenu: <p>J'ai fait un projet cool</p>,
    taille: "flex w-1/3 h-2/3 bg-base-100 card shadow-xl",
    year: "2025",
    modal: true,
  },
];