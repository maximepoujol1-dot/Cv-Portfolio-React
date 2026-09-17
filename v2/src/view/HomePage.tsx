
import img1 from "../assets/test2.png";
import img2 from "../assets/moi.png";
import Card from "../component/Card";
import Hero from "../component/Hero";
import { Link} from "react-router-dom";
const HomePage = () => {

  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}>
        <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={""} modal={false}>
          <Hero title={"Qui suis je ?"} image={img2} style={""}>
            <p className="py-6" style={{ fontSize: '15px' }}>
              Je suis Maxime Collette Poujol, étudiant en informatique et développeur junior. Curieux et motivé, j’aime apprendre de nouvelles technologies, développer des projets et résoudre des problèmes. Je souhaite aujourd’hui mettre mes compétences en pratique et continuer à progresser dans le domaine de l’informatique. 
            </p>  
            
          </Hero>
          <div  className= "flex justify-center gap-2">
                          <Link to="/portfolio" className="btn btn-primary">Mes projets</Link>
                          <Link to="/cv" className="btn btn-primary">Me connaitre</Link>
                          <Link to="/contact" className="btn btn-primary">Me contacter</Link>
                </div>
        </Card>  
    </div>
  )
}

export default HomePage