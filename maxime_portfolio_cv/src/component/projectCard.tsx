import { useTranslation } from 'react-i18next'
import { projectLinkClass as linkClass } from '../utility/constants'

interface ProjectCardProps {
  title: string
  message: string
  github: string | undefined
  role?: string
  technology?: string[]
}

const ProjectCard = ({title,message,github,role,technology}:ProjectCardProps) => {
    const { t } = useTranslation()

    return (
        <div className="card flex h-80 w-full flex-col items-start bg-base-100 p-6 text-left shadow-xl shadow-black/40">
            <h2 className="card-title mb-3 w-full text-left">{title}</h2>
            <div className="flex min-h-0 w-full flex-1 flex-col text-left">
                <p className="overflow-y-auto">{message}</p>
                <div className="flex w-full flex-col items-start gap-2 pt-3">
                    <p><strong>{t('portfolio.role')} :</strong>{role ? ` ${role}` : ''}</p>
                    {technology && technology.length > 0 && (
                      <div className="flex w-full flex-wrap items-center gap-2">
                        <strong>{t('portfolio.technology')} :</strong>
                        {technology.map((item) => (
                          <span key={item} className="badge badge-outline badge-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                    <a href={github} className={linkClass} target="_blank" rel="noreferrer">
                      {t('portfolio.github')}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard