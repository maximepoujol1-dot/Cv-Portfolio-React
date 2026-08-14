import React from 'react'
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
            <a href="" className="link link-hover">Portfolio</a>
            <a href="" className="link link-hover">mentions légales</a>
            <a href="" className="link link-hover">confidentialités</a>
        </nav>
        <nav>
            <h6 className="footer-title">Navigation</h6>
            <a href="" className="link link-hover"><Link to="/"> Accueuil</Link></a>
            <a href="" className="link link-hover"><Link to="/portfolio"> Portfolio</Link></a>
            <a href="" className="link link-hover"><Link to="/cv"> Cv </Link></a>
            <a href="" className="link link-hover"><Link to="/contact"> Contact</Link></a>
        </nav>
        </footer>
  )
}

export default Footer