import ProjectCard from './projectCard'
import type { projet } from '../utility/type'
import { useMemo } from 'react'

interface ProjetTypeProps {
  listeProjet: projet[]
}

const TypeProject = ({ listeProjet }: ProjetTypeProps) => {
  const type1 = useMemo(() => listeProjet.filter((item) => item.type === 1), [listeProjet])
  const type2 = useMemo(() => listeProjet.filter((item) => item.type === 2), [listeProjet])
  const type3 = useMemo(() => listeProjet.filter((item) => item.type === 3), [listeProjet])

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-3 text-xl font-semibold">Web</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {type1.map((item) => (
            <li key={item.id}>
              <ProjectCard title={item.title} message={item.message} github={item.github} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Jeu vidéo</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {type2.map((item) => (
            <li key={item.id}>
              <ProjectCard title={item.title} message={item.message} github={item.github} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Autre</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {type3.map((item) => (
            <li key={item.id}>
              <ProjectCard title={item.title} message={item.message} github={item.github} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default TypeProject
