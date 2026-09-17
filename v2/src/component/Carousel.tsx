import { useState } from 'react'
import Card from './Card'
import img1 from "../assets/test1.png";
import img2 from "../assets/test2.png";
import img3 from "../assets/test3.png";
import img4 from "../assets/test4.png";

const slide = ["#slide1", "#slide2", "#slide3", "#slide4"]

const Carousel = () => {
    const [id, setId] = useState(0)

  return (
        <Card
            style="flex items-center w-1/2 bg-base-100 card shadow-xl"
            title=""
            modal={false}
        >
            <div className="hero-content flex-col lg:flex-row">
                <a
                    href={slide[id]}
                    className="btn btn-circle"
                    onClick={() => {
                        id - 1 === -1 ? setId(slide.length - 1) : setId(id - 1)
                    }}
                >
                    ❮
                </a>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                    </div>
                </div>

                <a href={slide[id]} className="btn btn-circle" onClick={() => {id + 1 === 4 ? setId(0) : setId(id + 1)}}>
                    ❯
                </a>
            </div>
        </Card>
  )
}

export default Carousel