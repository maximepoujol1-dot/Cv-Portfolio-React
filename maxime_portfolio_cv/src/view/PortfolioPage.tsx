import TimeProjet from '../component/TimeProjet'
import type { Filtre, projet } from '../utility/type'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import TypeProject from '../component/TypeProject'
import { AnimatePresence, motion } from 'motion/react'

const PortfolioPage = () => {
  const [filtre, setFiltre] = useState<Filtre>('time')
  const { t } = useTranslation()
  const projects: projet[] = [
    {
      id: 1,
      type: 1,
      title: t('portfolio.projects.portfolio.title'),
      date: t('portfolio.projects.portfolio.date'),
      message: t('portfolio.projects.portfolio.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.portfolio.role'),
      technology: ['Vite', 'TypeScript', 'DaisyUI', 'Tailwind CSS'],
    },
    {
      id: 2,
      type: 1,
      title: t('portfolio.projects.ludotheque.title'),
      date: t('portfolio.projects.ludotheque.date'),
      message: t('portfolio.projects.ludotheque.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.ludotheque.role'),
      technology: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
    },
    {
      id: 3,
      type: 2,
      title: t('portfolio.projects.ydaysGame.title'),
      date: t('portfolio.projects.ydaysGame.date'),
      message: t('portfolio.projects.ydaysGame.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.ydaysGame.role'),
      technology: ['Unity', 'C#'],
    },
    {
      id: 4,
      type: 1,
      title: t('portfolio.projects.vikingTracker.title'),
      date: t('portfolio.projects.vikingTracker.date'),
      message: t('portfolio.projects.vikingTracker.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.vikingTracker.role'),
      technology: ['Go', 'PostgreSQL', 'GORM', 'Supabase', 'Render'],
    },
    {
      id: 5,
      type: 3,
      title: t('portfolio.projects.micromaniac.title'),
      date: t('portfolio.projects.micromaniac.date'),
      message: t('portfolio.projects.micromaniac.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.micromaniac.role'),
      technology: ['Java', 'JavaFX'],
    },
    {
      id: 6,
      type: 3,
      title: t('portfolio.projects.abyssFall.title'),
      date: t('portfolio.projects.abyssFall.date'),
      message: t('portfolio.projects.abyssFall.message'),
      github: 'https://github.com/maximepoujol1-dot',
      role: t('portfolio.projects.abyssFall.role'),
      technology: ['Go'],
    },

  ]

  return (
    <div className="mx-auto w-[90%] max-w-6xl space-y-8 py-8 md:py-12">
      <header className="space-y-6">
        <div className="join" role="group" aria-label={t('navigation.portfolio')}>
          <button
            type="button"
            aria-label={t('portfolio.filterTime')}
            aria-pressed={filtre === 'time'}
            onClick={() => setFiltre('time')}
            className={`join-item btn ${filtre === 'time' ? 'btn-primary' : 'btn-outline'}`}
          >
            {t('portfolio.filterTime')}
          </button>

          <button
            type="button"
            aria-label={t('portfolio.filterType')}
            aria-pressed={filtre === 'type'}
            onClick={() => setFiltre('type')}
            className={`join-item btn ${filtre === 'type' ? 'btn-primary' : 'btn-outline'}`}
          >
            {t('portfolio.filterType')}
          </button>
        </div>
      </header>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={filtre}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
        >
          {filtre === 'time' ? (<TimeProjet listeProjet={projects} />) : (<TypeProject listeProjet={projects} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PortfolioPage