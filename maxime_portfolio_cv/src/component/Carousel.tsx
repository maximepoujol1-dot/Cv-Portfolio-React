import { useState } from 'react'
import { useTranslation } from '../../node_modules/react-i18next'

import img1 from "../assets/test1.png";
import img2 from "../assets/test2.png";
import img3 from "../assets/test3.png";
import img4 from "../assets/test4.png";

const slide = ["#slide1", "#slide2", "#slide3", "#slide4"]

const Carousel = () => {
    const [id, setId] = useState(0)
    const { t } = useTranslation()

  return (
                <div className="w-full relative">
                    <a href={slide[id]} aria-label={t("common.previousSlide")} className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2 z-10" onClick={() => {id - 1 === -1 ? setId(slide.length - 1) : setId(id - 1)}}>
                        ❮
                    </a>
                    <div className='carousel w-full'>
                        <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} alt={t("common.image")} className="w-full" />
                        </div>

                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} alt={t("common.image")} className="w-full" />
                        </div>

                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img3} alt={t("common.image")} className="w-full" />
                        </div>

                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={img4} alt={t("common.image")} className="w-full" />
                        </div>
                    </div>
                    

                    <a href={slide[id]} aria-label={t("common.nextSlide")} className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2 z-10" onClick={() => {id + 1 === 4 ? setId(0) : setId(id + 1)}}>
                        ❯
                    </a>
                </div>
  )
}

export default Carousel