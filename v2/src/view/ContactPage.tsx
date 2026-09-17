import React from 'react'
import Card from '../component/Card'
import CardFigure from '../component/CardFigure'
import img1 from "../assets/test1.png";
import img2 from "../assets/test2.png";
import img3 from "../assets/test3.png";

const ContactPage = () => {
  return (
    <main className="flex-1">
              <br/>
              <div className="flex flex-row h-1/2 justify-center gap-4">
                <Card title={"Me Contatcter"} style={"flex  w-2/5 h-3/5  card shadow-xl"} modal={false}>
                  <div justify-center gap-4>
                    <br/>
                      <input className="input validator" type="email" required placeholder="mail@site.com" />
                      <br/>
                      <input className="input validator" type="message" required placeholder="objet" />
                      <br/>
                      <input className="input validator h-24" type="message" required placeholder="message" />
                      <br/>
                      <button>submit</button>
                  </div>
                </Card>
              </div>
    
    
              <div className="flex flex-col justify-center min-h-screen">
                <br/>
                <Card title={"Autre réseaux"} style={"flex  w-full h-3/5  "} modal={false}>
                  <div className="flex flex-row h-1/2 justify-center gap-4">
                      <CardFigure title="LinkedIn" style="flex  w-2/5 h-3/5  card shadow-xl" img={img1} modal={false}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-primary">voir</a>
                      </CardFigure>

                      <CardFigure title="Github" style="flex w-2/5 h-3/5  card shadow-xl" img={img2} modal={false}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-primary">voir</a>
                      </CardFigure>
                      
                      <CardFigure title="Instagram" style="flex w-2/5 h-3/5 card shadow-xl" img={img3} modal={false}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn btn-primary">voir</a>
                      </CardFigure>
                  </div>
                </Card>    
                <br/>
              </div>
            </main>  
  )
}

export default ContactPage