import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"> 
        <nav>
            <h6 className="footer-title">Liens</h6>
            <a href="https://github.com/maximepoujol1-dot" className="link link-hover">Github</a>
            <a href="https://www.linkedin.com/in/maxime-collette-poujol-40b0483a1/" className="link link-hover">LinkedIn</a>
            <a href="" className="link link-hover">Instagram</a>
            <a href="" className="link link-hover">FaceBook</a>
        </nav>
        <nav>
            <h6 className="footer-title">Document</h6>
            <a href="" className="link link-hover">CV</a>
            <a href="" className="link link-hover">Conditions générales</a>
            <a href="" className="link link-hover">mentions légales</a>
            <a href="" className="link link-hover">confidentialités</a>
        </nav>
        <nav>
            <h6 className="footer-title">Navigation</h6>
            <Link to="/" className="link link-hover">Accueil</Link>
            <Link to="/portfolio" className="link link-hover">Portfolio</Link>
            <Link to="/cv" className="link link-hover">Cv</Link>
            <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
    </footer>
  )
}

export default Footer