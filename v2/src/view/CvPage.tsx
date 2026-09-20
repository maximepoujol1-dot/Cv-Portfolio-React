
import Card from '../component/Card'
import Divider from '../component/divider'
import Hero from '../component/Hero';

const hard_skills = [
  {id: 1, name: "golang", image: "/favicon.svg"},
  {id: 2, name:"javascript", image: "/favicon.svg"},
  {id: 3, name:"react", image: "/favicon.svg"},
  {id: 4, name: "C", image: "/favicon.svg"},
  {id: 5, name:"C++", image: "/favicon.svg"},
  {id: 6, name:"SQL", image: "/favicon.svg"}
];

const Experience = [
  {
    id: 1,
    name: 'A venir',
    image: '/favicon.svg',
    message:
      "Je suis actuellement un développeur junior qui cherche une alternance ou un stage. Mon but est d’approfondir mes compétences dans plusieurs domaines et de m’immerger dans le contexte professionnel en entreprise. J’ai hâte de pouvoir travailler avec vous !",
    date: ''
  }
]

const formation = [
  {
    id: 1,
    name: 'Lycée',
    image: '/favicon.svg',
    message:
      "J’ai suivi un baccalauréat mathématiques et NSI, ce qui m’a permis de développer très tôt ma logique algorithmique, des connaissances de base en réseaux, des bases en langage de base de données et la rigueur d’application.",
    date: '2022 - 2025'
  },
  {
    id: 2,
    name: 'Ynov',
    image: '/favicon.svg',
    message:
      "Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique.",
    date: "2025 - aujourd'hui"
  }
]

const hobbies = [
  { id: 1, name: 'Judo', image: '/favicon.svg' },
  { id: 2, name: 'Jeux vidéos', image: '/favicon.svg' },
  { id: 3, name: 'Cinéma', image: '/favicon.svg' },
  { id: 4, name: 'Histoire', image: '/favicon.svg' }
]

const CvPage = () => {
  return (
    <main className="flex-1">
      <div className="w-[90%] mx-auto">
        <br />
        <Card style="w-full bg-base-100 card-xl shadow-xl" title="Présentation" modal={false}>
          <br />
          <p>
            Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior.
            Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets
            et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique
            et continuer à progresser dans le domaine de l’informatique.
          </p>
          <br />
        </Card>

        <br />
        <Card style="w-full bg-base-100 card-xl shadow-xl" title="Formation" modal={false}>
          <div className="space-y-4">
            {formation.map((item) => (
              <Hero
                key={item.id}
                title={item.name}
                image={item.image}
                style="bg-transparent shadow-none"
              >
                <p className="text-sm text-base-content/70">{item.date}</p>
                <p>{item.message}</p>
              </Hero>
            ))}
          </div>
        </Card>

        <br />
        <Card style="w-full bg-base-100 card-xl shadow-xl" title="Experience" modal={false}>
          <div className="space-y-4">
            {Experience.map((item) => (
              <Hero
                key={item.id}
                title={item.name}
                image={item.image}
                style="bg-transparent shadow-none"
              >
                <p className="text-sm text-base-content/70">{item.date}</p>
                <p>{item.message}</p>
              </Hero>
            ))}
          </div>
        </Card>

        <br />
        <Card style="w-full bg-base-100 card-xl shadow-xl" title="Compétence" modal={false}>
          <br />
          <Divider inside={hard_skills} horizontale={false} />
          <br />
        </Card>

        <br />
        <Card style="w-full bg-base-100 card-xl shadow-xl" title="Hobbie" modal={false}>
          <br />
          <Divider inside={hobbies} horizontale={false} />
          <br />
        </Card>
        <br />
      </div>
    </main>
  )
}

export default CvPage 