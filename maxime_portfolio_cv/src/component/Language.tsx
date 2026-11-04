import { useTranslation } from "../../node_modules/react-i18next";

const Language = () => {
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language;
    const nextLanguage = currentLanguage.startsWith("fr") ? "en" : "fr";

  return (
    <div>
      <button aria-label={t("common.switchLanguage", { language: nextLanguage.toUpperCase() })} onClick={() => i18n.changeLanguage(nextLanguage)}>
        {nextLanguage.toUpperCase()}
      </button>
    </div>
  );
}

export default Language
