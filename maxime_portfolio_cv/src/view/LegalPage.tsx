import { useTranslation } from '../../node_modules/react-i18next'

const LegalPage = () => {
  const { t } = useTranslation()
  return (
    <div>{t('legalPage.title')}</div>
  )
}

export default LegalPage