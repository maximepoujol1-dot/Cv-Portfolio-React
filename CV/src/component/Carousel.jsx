import React from 'react'
import img1 from "../assets/ck3_wallpaper.jpg";
import img2 from "../assets/ck3_wallpaper2.webp";
import img3 from "../assets/ck3_wallpaper3.webp";
import img4 from "../assets/CK3_Northern_Lords_Keyart_11.jpg";

const Carousel = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src= {img1}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src={img2}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src= {img3}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
            src= {img4}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Carousel