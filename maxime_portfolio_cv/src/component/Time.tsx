import { useTranslation } from '../../node_modules/react-i18next'

const Time = () => {
  const { t } = useTranslation()
  return (
    <div>{t("common.time")}</div>
  )
}

export default Time