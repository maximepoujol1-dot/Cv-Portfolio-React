
import img4 from "../assets/moi.png";

import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { linkClass } from '../utility/constants'

const HomePage = () => {
  const { t } = useTranslation();

  return (
  <div className="flex min-h-[calc(100dvh-4rem)] flex-col-reverse items-center justify-center gap-10 px-6 py-16 md:flex-row md:justify-between md:px-16 lg:px-24">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-[clamp(1.4rem,4vw,4.5rem)] font-extrabold leading-tight">
        <span className="whitespace-nowrap">COLLETTE-POUJOL</span>
        <span className="block">MAXIME</span>
      </h1>

      <h2 className="mt-4 text-xl font-medium text-gray-500 md:text-2xl">
        {t("home.subtitle")}
      </h2>

      <p className="mt-6 max-w-xl text-base leading-relaxed">
        {t("home.introduction")}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-5 md:justify-start">
        <Link to="/portfolio" className={linkClass}>{t("home.projects")}</Link>
        <Link to="/cv" className={linkClass}>{t("home.learnMore")}</Link>
        <Link to="/contact" className={linkClass}>{t("home.contact")}</Link>
      </div>
    </div>

    <div className="flex flex-1 justify-center md:justify-end">
      <div className="relative before:absolute before:left-4 before:top-4 before:-z-10 before:h-full before:w-full before:bg-base-200 md:before:left-6 md:before:top-6">
        <img
          src={img4}
          alt={t("common.profilePhoto")}
          className="h-64 w-64 object-cover shadow-2xl shadow-black/40 md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>
    </div>
  </div>
)
}

export default HomePage