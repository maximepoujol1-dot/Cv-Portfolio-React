import { useTranslation } from 'react-i18next';
import { projectLinkClass as linkClass } from '../utility/constants'

interface ProjectCardProps {
  title: string
  message: string
  github: string | undefined
}

const ProjectCard = ({title,message,github}:ProjectCardProps) => {
    const { t } = useTranslation();
    return (
        <div className="card flex w-full flex-col items-start bg-base-100 p-6 text-left shadow-xl shadow-black/40">
            <h2 className="card-title mb-3 w-full text-left">{title}</h2>
            <div className="flex flex-1 flex-col items-start gap-3 text-left">
                <p>{message}</p>
                <a href={github} className={linkClass} target="_blank" rel="noreferrer">
                  {t("portfolio.github")}
                </a>
            </div>
        </div>
    )
}

export default ProjectCard