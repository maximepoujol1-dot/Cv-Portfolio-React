import Card from '../component/Card'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../node_modules/react-i18next'
import img1 from "../assets/test2.png";
import pp from "../assets/Rond_rouge.png"

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}>
        <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={""} modal={false}>
          <Hero title={t("notFound.title")} image={pp} style={""} titleStyle={''} date={''}>
            <p className="py-6" style={{ fontSize: '15px' }}>
              {t("notFound.message")}
            </p>  
            
          </Hero>
          <div  className= "flex justify-center gap-2">
                          <Card style={"bg-base-100 w-1/2 h-4/4 shadow-xl"} title={t("notFound.projects")} modal={false} ><Link to="/portfolio" className="btn btn-primary">{t("common.view")}</Link></Card>
                          <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={t("notFound.learnMore")} modal={false} ><Link to="/cv" className="btn btn-primary">{t("common.view")}</Link></Card>
                          <Card style={"bg-base-100 w-1/2 h-3/4 shadow-xl"} title={t("notFound.contact")} modal={false} ><Link to="/contact" className="btn btn-primary">{t("common.view")}</Link></Card>

                </div>
        </Card>
        </div>
  )
}

export default NotFoundPage