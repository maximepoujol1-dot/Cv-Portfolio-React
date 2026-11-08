import Card from '../component/Card'
import CardFigure from '../component/CardFigure'
import { useTranslation } from "react-i18next";
import Button from '../component/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { linkClass } from '../utility/constants'

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex-1 px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        <Card title={t("contactPage.title")} style="w-full card shadow-xl shadow-black/40 p-6" modal={false}>
          <br/>
          <div className="flex flex-1 flex-col gap-4">
            <input className="input validator w-full border border-base-content/30 focus:border-primary focus:outline-none" type="email" required placeholder={t("contactPage.emailPlaceholder")} />
            <input className="input validator w-full border border-base-content/30 focus:border-primary focus:outline-none" type="text" required placeholder={t("contactPage.subjectPlaceholder")} />
            <textarea className="textarea validator min-h-40 w-full flex-1 resize-none border border-base-content/30 focus:border-primary focus:outline-none" required placeholder={t("contactPage.messagePlaceholder")}/>
            <Button style={linkClass} click={function (): void {
              throw new Error('Function not implemented.');
            } }>{t("contactPage.submit")}</Button>
          </div>
        </Card>

        <Card title={t("contactPage.otherNetworks")} style="w-full card shadow-xl shadow-black/40 p-6" modal={false}>
          <br/>
          <div className="flex flex-1 flex-col gap-5">
            <CardFigure title={t("contactPage.linkedin")} style="w-full card flex-1 shadow-xl shadow-black/40 p-4" icon={<FaLinkedin className="h-20 w-20 text-[#0A66C2]" />} modal={false}>
              <div className="flex flex-col items-end gap-4">
                <p className="self-start">{t("contactPage.linkedinDescription")}</p>
                <a href="https://www.linkedin.com/in/maxime-collette-poujol-40b0483a1/" target="_blank" rel="noreferrer" className={linkClass}>
                  {t("common.view")}
                </a>
              </div>
            </CardFigure>

            <CardFigure title={t("contactPage.github")} style="w-full card flex-1 shadow-xl shadow-black/40 p-4" icon={<FaGithub className="h-20 w-20"/>} modal={false}>
              <div className="flex flex-col items-end gap-4">
                <p className="self-start">{t("contactPage.githubDescription")}</p>
                <a href="https://github.com/maximepoujol1-dot" target="_blank" rel="noreferrer" className={linkClass}>
                  {t("common.view")}
                </a>
              </div>
            </CardFigure>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default ContactPage