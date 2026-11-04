import i18n from "i18next";
import { initReactI18next } from "../node_modules/react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          common: {
            view: "Voir",
            profilePhoto: "Photo de profil",
            image: "Image",
            heroImage: "Illustration de présentation",
            previousSlide: "Image précédente",
            nextSlide: "Image suivante",
            theme: "Thème",
            time: "Heure",
            openModal: "Ouvrir la fenêtre",
            close: "Fermer",
            switchLanguage: "Passer en {{language}}",
          },
          navigation: {
            portfolio: "Portfolio",
            cv: "CV",
            contact: "Contact",
          },
          home: {
            title: "Qui suis-je ?",
            introduction:
              "Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.",
            projects: "Mes projets",
            learnMore: "Me connaître",
            contact: "Me contacter",
          },
          portfolio: {
            personalPortfolio: "Portfolio personnel",
            personalPortfolioDescription:
              "Création d’un portfolio responsive pour présenter mon parcours, mes compétences et mes réalisations avec React et TypeScript.",
            taskManager: "Gestionnaire de tâches",
            testProject: "Projet test",
            taskManagerDescription:
              "Application de démonstration pour organiser des tâches, suivre leur avancement et les classer par priorité.",
            videoGame: "Jeu vidéo 2D",
            videoGameDescription:
              "Petit jeu de plateforme imaginé pour expérimenter la création de niveaux, les déplacements et les interactions avec Godot.",
          },
          cv: {
            presentation: "Présentation",
            introduction:
              "Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.",
            education: "Formations",
            experience: "Expérience",
            skillsTable: "Tableau des compétences",
            languages: "Langages :",
            libraries: "Bibliothèques :",
            tools: "Outils :",
            databases: "Bases de données :",
            hobbies: "Centres d’intérêt",
            highSchool: "Lycée",
            highSchoolDescription:
              "J’ai suivi un baccalauréat mathématiques et NSI, ce qui m’a permis de développer très tôt ma logique algorithmique, des connaissances de base en réseaux, des bases en langage de base de données et la rigueur d’application.",
            ynov: "Ynov",
            ynovDate: "2025 - aujourd’hui",
            ynovDescription:
              "Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.",
            upcoming: "À venir",
            future: "Futur",
            experienceDescription:
              "Je suis actuellement un développeur junior qui cherche une alternance ou un stage. Mon but est d’approfondir mes compétences dans plusieurs domaines et de m’immerger dans le contexte professionnel en entreprise. J’ai hâte de pouvoir travailler avec vous !",
            videoGames: "Jeux vidéo",
            cinema: "Cinéma",
            history: "Histoire",
            judo: "Judo",
          },
          contactPage: {
            title: "Me contacter",
            linkedin: "LinkedIn",
            github: "GitHub",
            instagram: "Instagram",
            facebook: "Facebook",
            emailPlaceholder: "mail@site.com",
            subjectPlaceholder: "Objet",
            messagePlaceholder: "Message",
            submit: "Envoyer",
            otherNetworks: "Autres réseaux",
            linkedinDescription: "Vous pouvez consulter ma page LinkedIn ici.",
            githubDescription:
              "Vous pouvez consulter mon GitHub et mes projets précédents ici.",
            instagramDescription:
              "Vous pouvez consulter mon compte Instagram professionnel ici.",
          },
          notFound: {
            title: "Erreur : 404",
            message:
              "Vous vous êtes égaré. Essayez de rejoindre l’une des pages suivantes.",
            projects: "Mes projets",
            learnMore: "Me connaître",
            contact: "Me contacter",
          },
          footer: {
            links: "Liens",
            legal: "Informations légales",
            navigation: "Navigation",
            terms: "Conditions générales",
            legalNotice: "Mentions légales",
            privacy: "Confidentialité",
            home: "Accueil",
          },
          legalPage: {
            title: "Page légale",
          },
        },
      },
      en: {
        translation: {
          common: {
            view: "View",
            profilePhoto: "Profile photo",
            image: "Image",
            heroImage: "Hero illustration",
            previousSlide: "Previous image",
            nextSlide: "Next image",
            theme: "Theme",
            time: "Time",
            openModal: "Open modal",
            close: "Close",
            switchLanguage: "Switch to {{language}}",
          },
          navigation: {
            portfolio: "Portfolio",
            cv: "CV",
            contact: "Contact",
          },
          home: {
            title: "Who am I?",
            introduction:
              "I’m Maxime Collette Poujol, a computer science student and junior developer. Curious and motivated, I enjoy learning new technologies, building projects, and solving problems. I’m now looking to put my skills into practice and continue growing in the field of computer science.",
            projects: "My projects",
            learnMore: "About me",
            contact: "Contact me",
          },
          portfolio: {
            personalPortfolio: "Personal portfolio",
            personalPortfolioDescription:
              "A responsive portfolio built with React and TypeScript to showcase my background, skills, and projects.",
            taskManager: "Task manager",
            testProject: "Test project",
            taskManagerDescription:
              "A demo application for organizing tasks, tracking their progress, and sorting them by priority.",
            videoGame: "2D video game",
            videoGameDescription:
              "A small platform game created to experiment with level design, movement, and interactions in Godot.",
          },
          cv: {
            presentation: "About me",
            introduction:
              "I’m Maxime Collette Poujol, a computer science student and junior developer. Curious and motivated, I enjoy learning new technologies, building projects, and solving problems. I’m now looking to put my skills into practice and continue growing in the field of computer science.",
            education: "Education",
            experience: "Experience",
            skillsTable: "Skills",
            languages: "Languages:",
            libraries: "Libraries:",
            tools: "Tools:",
            databases: "Databases:",
            hobbies: "Interests",
            highSchool: "High school",
            highSchoolDescription:
              "I completed a mathematics and digital sciences and computer science (NSI) baccalauréat, which helped me develop algorithmic thinking early on, gain foundational knowledge of networks and database languages, and build a disciplined approach to applying what I learned.",
            ynov: "Ynov",
            ynovDate: "2025 - present",
            ynovDescription:
              "I’m Maxime Collette Poujol, a computer science student and junior developer. Curious and motivated, I enjoy learning new technologies, building projects, and solving problems. I’m now looking to put my skills into practice and continue growing in the field of computer science.",
            upcoming: "Coming soon",
            future: "Future",
            experienceDescription:
              "I’m currently a junior developer looking for a work-study placement or internship. My goal is to deepen my skills in several areas and gain experience in a professional company environment. I look forward to working with you!",
            videoGames: "Video games",
            cinema: "Cinema",
            history: "History",
            judo: "Judo",
          },
          contactPage: {
            title: "Contact me",
            linkedin: "LinkedIn",
            github: "GitHub",
            instagram: "Instagram",
            facebook: "Facebook",
            emailPlaceholder: "mail@site.com",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Message",
            submit: "Send",
            otherNetworks: "Other social networks",
            linkedinDescription: "You can visit my LinkedIn page here.",
            githubDescription:
              "You can visit my GitHub and browse my previous projects here.",
            instagramDescription:
              "You can visit my professional Instagram account here.",
          },
          notFound: {
            title: "Error: 404",
            message:
              "You seem to be lost. Try visiting one of the following pages.",
            projects: "My projects",
            learnMore: "About me",
            contact: "Contact me",
          },
          footer: {
            links: "Links",
            legal: "Legal information",
            navigation: "Navigation",
            terms: "Terms and conditions",
            legalNotice: "Legal notice",
            privacy: "Privacy policy",
            home: "Home",
          },
          legalPage: {
            title: "Legal page",
          },
        },
      },
    },
    lng: "fr",          
    fallbackLng: "en",  
    interpolation: { escapeValue: false }, 
  });

export default i18n;