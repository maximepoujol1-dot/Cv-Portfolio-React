import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { FaExclamationTriangle } from "react-icons/fa";
import CardFigure from '../component/CardFigure';
import { linkClass } from '../utility/constants'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
  <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-6 py-16">
    <div className="w-full max-w-md">
      <CardFigure
        title="404"
        style="card w-full bg-base-100 text-center shadow-xl shadow-black/40 p-6"
        icon={<FaExclamationTriangle aria-hidden="true" className="h-16 w-16 text-warning" />}
        modal={false}
      >
        <h2 className="mt-2 text-lg font-semibold">
          {t('notFound.title')}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          {t('notFound.message')}
        </p>

        <div className="mt-6 flex justify-center">
          <Link to="/" className={linkClass}>{t('notFound.homeButton')}</Link>
        </div>
      </CardFigure>
    </div>
  </div>
)
}

export default NotFoundPage