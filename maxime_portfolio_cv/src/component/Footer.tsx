import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import Modal from './Modal';

const Footer = () => {
    const { t } = useTranslation();
     return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 shadow-[0_-2px_8px_rgb(0_0_0_/_0.25)]"> 
        <nav>
            <h6 className="footer-title">{t("footer.links")}</h6>
            <a href="https://github.com/maximepoujol1-dot" className="link link-hover">{t("contactPage.github")}</a>
            <a href="https://www.linkedin.com/in/maxime-collette-poujol-40b0483a1/" className="link link-hover">{t("contactPage.linkedin")}</a>
        </nav>
        <nav>
            <h6 className="footer-title">{t("footer.legal")}</h6>
            <Modal triggerLabel={t("footer.terms")}>
                <h3 className="text-lg font-bold">{t("footer.terms")}</h3>
                <p className="">element a dire</p>  
                <p className="py-4">Press ESC key or click outside to close</p>
            </Modal>
            <Modal triggerLabel={t("footer.legalNotice")}>
                <h3 className="text-lg font-bold">{t("footer.legalNotice")}</h3>
                <p className="">element a dire</p>  
                <p className="py-4">Press ESC key or click outside to close</p>
            </Modal>
            <Modal triggerLabel={t("footer.privacy")}>
                <h3 className="text-lg font-bold">{t("footer.privacy")}</h3>
                <p className="">element a dire</p>  
                <p className="py-4">Press ESC key or click outside to close</p>                
            </Modal>
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