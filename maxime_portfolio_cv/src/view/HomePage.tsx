
import img1 from "../assets/test1.png";
import img2 from "../assets/test2.png";
import img3 from "../assets/test3.png";
import img4 from "../assets/moi.png";
import Card from "../component/Card";
import Hero from "../component/Hero";

import { Link} from "react-router-dom";
import { useTranslation } from "../../node_modules/react-i18next";
const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img2})` }}>
        <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={""} modal={false}>
          <div className="flex flex-1 flex-col">
            <Hero title={t("home.title")} image={img4} style={""} date={""} titleStyle="">
              <p className="py-6" style={{ fontSize: '15px' }}>
                {t("home.introduction")}
              </p>  
              
            </Hero>

            <div className="flex flex-1 w-full justify-center gap-2 p-2">
              <Link to="/portfolio" className="btn w-[30%] h-auto self-stretch border-none text-white bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>{t("home.projects")}</Link>
              <Link to="/cv" className="btn w-[30%] h-auto self-stretch border-none text-white bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>{t("home.learnMore")}</Link>
              <Link to="/contact" className="btn w-[30%] h-auto self-stretch border-none text-white bg-cover bg-center" style={{ backgroundImage: `url(${img3})` }}>{t("home.contact")}</Link>
            </div>

          </div>
        </Card>  
    </div>
  )
}

export default HomePage