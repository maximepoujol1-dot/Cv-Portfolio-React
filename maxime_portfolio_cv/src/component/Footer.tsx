import { useTranslation } from '../../node_modules/react-i18next';
import { Link } from 'react-router-dom'

const Footer = () => {
    const { t } = useTranslation();
     return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"> 
        <nav>
            <h6 className="footer-title">{t("footer.links")}</h6>
            <a href="https://github.com/maximepoujol1-dot" className="link link-hover">{t("contactPage.github")}</a>
            <a href="https://www.linkedin.com/in/maxime-collette-poujol-40b0483a1/" className="link link-hover">{t("contactPage.linkedin")}</a>
        </nav>
        <nav>
            <h6 className="footer-title">{t("footer.legal")}</h6>
            <Link to="/Legal" className="link link-hover">{t("footer.terms")}</Link>
            <Link to="/Legal" className="link link-hover">{t("footer.legalNotice")}</Link>
            <Link to="/Legal" className="link link-hover">{t("footer.privacy")}</Link>
        </nav>
        <nav>
            <h6 className="footer-title">{t("footer.navigation")}</h6>
            <Link to="/" className="link link-hover">{t("footer.home")}</Link>
            <Link to="/portfolio" className="link link-hover">{t("navigation.portfolio")}</Link>
            <Link to="/cv" className="link link-hover">{t("navigation.cv")}</Link>
            <Link to="/contact" className="link link-hover">{t("navigation.contact")}</Link>
        </nav>
    </footer>
  )
}

export default Footer