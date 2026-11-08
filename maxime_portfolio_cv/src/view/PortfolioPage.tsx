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
      title: t('portfolio.personalPortfolio'),
      date: '2025',
      message: t('portfolio.personalPortfolioDescription'),
      github: 'https://github.com/maximepoujol1-dot',
    },
    {
      id: 2,
      type: 1,
      title: t('portfolio.taskManager'),
      date: t('portfolio.testProject'),
      message: t('portfolio.taskManagerDescription'),
      github: 'https://github.com/maximepoujol1-dot',
    },
    {
      id: 3,
      type: 1,
      title: t('portfolio.videoGame'),
      date: t('portfolio.testProject'),
      message: t('portfolio.videoGameDescription'),
      github: 'https://github.com/maximepoujol1-dot',
    },
    {
      id: 4,
      type: 1,
      title: `${t('portfolio.testProject')} 1`,
      date: '2026',
      message: t('portfolio.testProjectDescription'),
      github: 'https://github.com/maximepoujol1-dot',
    },
    {
      id: 5,
      type: 2,
      title: `${t('portfolio.testProject')} 2`,
      date: '2026',
      message: t('portfolio.testProjectDescription'),
      github: 'https://github.com/maximepoujol1-dot',
    },
    {
      id: 6,
      type: 3,
      title: `${t('portfolio.testProject')} 3`,
      date: '2026',
      message: t('portfolio.testProjectDescription'),
      github: 'https://github.com/maximepoujol1-dot',
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