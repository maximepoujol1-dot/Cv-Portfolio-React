import Carousel from '../component/Carousel'
import Projet from '../component/Projet'
import type { projet } from '../typeInterface/interface'
import { useTranslation } from '../../node_modules/react-i18next'

const PortfolioPage = () => {
  const { t } = useTranslation()
  const projects: projet[] = [
    {
      id: 1,
      style: 'w-full bg-base-100 shadow-xl p-6',
      title: t('portfolio.personalPortfolio'),
      date: '2025',
      children: <p>{t('portfolio.personalPortfolioDescription')}</p>,
    },
    {
      id: 2,
      style: 'w-full bg-base-100 shadow-xl p-6',
      title: t('portfolio.taskManager'),
      date: t('portfolio.testProject'),
      children: <p>{t('portfolio.taskManagerDescription')}</p>,
    },
    {
      id: 3,
      style: 'w-full bg-base-100 shadow-xl p-6',
      title: t('portfolio.videoGame'),
      date: t('portfolio.testProject'),
      children: <p>{t('portfolio.videoGameDescription')}</p>,
    },
  ]

  return (
    <div>
      <br/>
      <Projet listeProjet={projects}></Projet>
    </div>
  )
}

export default PortfolioPage