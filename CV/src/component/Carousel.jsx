import React, { useState } from 'react'
import Card from './Card'
import img1 from "../assets/ck3_wallpaper.jpg";
import img2 from "../assets/ck3_wallpaper2.webp";
import img3 from "../assets/ck3_wallpaper3.webp";
import img4 from "../assets/CK3_Northern_Lords_Keyart_11.jpg";

const slide = ["#slide1","#slide2","#slide3","#slide4"]          

const Carousel = () => {
  const [id, setId] = useState(0);
  return (
        
        <div className="flex flex-row justify-center gap-4">
                

                <Card taille= "flex items-center w-1/2 bg-base-100 card shadow-xl" contenu={
                        
                    <div className="hero-content flex-col lg:flex-row">
                        <a href={slide[id]} className="btn btn-circle" onClick={() => {id-1==(-1) ? setId(slide.length-1) : setId(id-1)} }>❮</a>
                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img
                                src= {img1}
                                className="w-full" />
                                
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img
                                src={img2}
                                className="w-full" />
                                
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img
                                src= {img3}
                                className="w-full" />
                                
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img
                                src= {img4}
                                className="w-full" />
                                
                            </div>
                        </div>
                        <a href={slide[id]} className="btn btn-circle" onClick={() => { id+1==4 ? setId(0) : setId(id+1)}} >❯</a>
                    </div>  









                } title="Mes Projets" modal={false}/>
                
                
        </div>

  )
}

export default Carousel