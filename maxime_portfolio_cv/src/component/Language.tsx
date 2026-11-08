import { useTranslation } from "react-i18next";

interface LanguageProps {
  className?: string
}

const Language = ({ className = "" }: LanguageProps) => {
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language ?? "fr";
    const nextLanguage = currentLanguage.startsWith("fr") ? "en" : "fr";
    
  return (
    <div>
      <button className={className} aria-label={t("common.switchLanguage", { language: nextLanguage.toUpperCase() })} onClick={() => i18n.changeLanguage(nextLanguage)}>
        {nextLanguage.toUpperCase()}
      </button>
    </div>
  );
}

export default Language
