
import Card from '../component/Card'
import Divider from '../component/divider'
import Hero from '../component/Hero';
import { useTranslation } from 'react-i18next';
import {
  SiPython,
  SiGo,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss,
  SiReact,
  SiFastapi,
  SiDocker,
  SiSqlalchemy,
  SiPostgresql,
  SiUnity, 
  SiGodotengine,
  SiRender,
  SiSupabase,
} from "react-icons/si";

import {
  FaBook,
  FaFilm,
  FaGamepad,
  } from "react-icons/fa";

import {GiKimono } from "react-icons/gi";

const langage = [
  { id: 1, name: "Go", logo: <SiGo aria-hidden="true" className="text-3xl" /> },
  { id: 2, name: "Python", logo: <SiPython aria-hidden="true" className="text-3xl" /> },
  { id: 3, name: "Java", logo: <SiOpenjdk aria-hidden="true" className="text-3xl" /> },
  { id: 4, name: "C", logo: <SiC aria-hidden="true" className="text-3xl" /> },
  { id: 5, name: "C#", logo: <SiSharp aria-hidden="true" className="text-3xl" /> },
  { id: 6, name: "C++", logo: <SiCplusplus aria-hidden="true" className="text-3xl" /> },
  { id: 7, name: "JavaScript", logo: <SiJavascript aria-hidden="true" className="text-3xl" /> },
  { id: 8, name: "TypeScript", logo: <SiTypescript aria-hidden="true" className="text-3xl" /> },
  { id: 9, name: "HTML", logo: <SiHtml5 aria-hidden="true" className="text-3xl" /> },
  { id: 10, name: "CSS", logo: <SiCss aria-hidden="true" className="text-3xl" /> },
];

const librairie = [
  { id: 1, name: "FastAPI", logo: <SiFastapi aria-hidden="true" className="text-3xl" /> },
  { id: 2, name: "React", logo: <SiReact aria-hidden="true" className="text-3xl" /> },
  { id: 3, name: "SQLAlchemy", logo: <SiSqlalchemy aria-hidden="true" className="text-3xl" /> },
  { id: 4, name: "GORM", logo: <SiGo aria-hidden="true" className="text-3xl" /> },
];

const outil = [
  { id: 1, name: "Docker", logo: <SiDocker aria-hidden="true" className="text-3xl" /> },
  { id: 2, name: "Godot", logo: <SiGodotengine aria-hidden="true" className="text-3xl" /> },
  { id: 3, name: "Render", logo: <SiRender aria-hidden="true" className="text-3xl" /> },
  { id: 4, name: "Unity", logo: <SiUnity aria-hidden="true" className="text-3xl" /> },
];

const baseDeDonnees = [
  { id: 1, name: "PostgreSQL", logo: <SiPostgresql aria-hidden="true" className="text-3xl" /> },
  { id: 2, name: "Supabase", logo: <SiSupabase aria-hidden="true" className="text-3xl" /> },
];

const hobbies = [
  { id: 1, name: 'cv.judo', logo: <GiKimono aria-hidden="true" className="text-3xl"/> },
  { id: 2, name: 'cv.videoGames', logo: <FaGamepad aria-hidden="true" className="text-3xl"/> },
  { id: 3, name: 'cv.cinema', logo: <FaFilm aria-hidden="true" className="text-3xl"/> },
  { id: 4, name: 'cv.history', logo: <FaBook aria-hidden="true" className="text-3xl"/> },
]

const Experience = [
  {
    id: 1,
    name: 'cv.upcoming',
    image: '/favicon.svg',
    message: 'cv.experienceDescription',
    date: 'cv.future'
  }
]

const formation = [
  {
    id: 1,
    name: 'cv.highSchool',
    image: '/favicon.svg',
    message: 'cv.highSchoolDescription',
    date: '2022 - 2025'
  },
  {
    id: 2,
    name: 'cv.ynov',
    image: '/favicon.svg',
    message: 'cv.ynovDescription',
    date: 'cv.ynovDate'
  }
]



const CvPage = () => {
  const { t } = useTranslation();
  return (
      <div className="w-[90%] mx-auto">
        <br />
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">{t('cv.presentation')}</h1>
          <br />
          <p>
            {t('cv.introduction')}
          </p>
          <br />
        </div>

        <br />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{t('cv.education')}</h1>
          <Card style="w-full bg-base-100 card-xl shadow-xl shadow-black/40 p-6" title="" titleClassName="text-3xl font-bold" modal={false}>
          {formation.map((item) => (
              <Hero key={item.id} title={t(item.name)} image={""} date={item.date.startsWith('cv.') ? t(item.date) : item.date} style="bg-transparent shadow-none" titleStyle={'text-4xl mb-1 font-bold'} >
                <p>{t(item.message)}</p>
              </Hero>
            ))}
          </Card>  
        </div>

        <br />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold md:text-4xl">{t('cv.experience')}</h1>
            <Card style="w-full bg-base-100 card-xl shadow-xl shadow-black/40 p-6" title="" titleClassName="text-3xl font-bold" modal={false}>
            {Experience.map((item) => (
              <Hero
                key={item.id}
                title={t(item.name)}
                image={""}
                date={t(item.date)}
                style="bg-transparent shadow-none" 
                titleStyle={'text-4xl mb-1 font-bold'} 
                >
                <p>{t(item.message)}</p>
              </Hero>
            ))}
            </Card>
          </div>


        <br />
        <h1 className="text-3xl font-bold md:text-4xl">{t('cv.skillsTable')}</h1>
        <Card style="w-full bg-base-100 card-xl shadow-xl shadow-black/40 p-6" title="" titleClassName="text-3xl font-bold" modal={false}>
          <br />
          <div>
            <div>
              <h2 className="mb-3 text-xl font-semibold">{t('cv.languages')}</h2>
              <Divider inside={langage} horizontale={false} />
            </div>
            <br />
            <div>
              <h2 className="mb-3 text-xl font-semibold">{t('cv.libraries')}</h2>
              <Divider inside={librairie} horizontale={false} />
            </div>
            <br />
            <div>
              <h2 className="mb-3 text-xl font-semibold">{t('cv.tools')}</h2>
              <Divider inside={outil} horizontale={false} />
            </div>
            <br />
            <div>
              <h2 className="mb-3 text-xl font-semibold">{t('cv.databases')}</h2>
              <Divider inside={baseDeDonnees} horizontale={false} />
            </div>
        
          </div>
          <br />
        </Card>

        <br />
        <h1 className="text-3xl font-bold md:text-4xl">{t('cv.hobbies')}</h1>
        <Card style="w-full bg-base-100 card-xl shadow-xl shadow-black/40 p-6" title="" titleClassName="text-3xl font-bold" modal={false}>
          <br />
          <Divider inside={hobbies.map((item) => ({ ...item, name: t(item.name) }))} horizontale={false} />
          <br />
        </Card>
        <br />
      </div>
  )
}

export default CvPage 