
import { useTranslation } from "react-i18next";
import { Boxes } from "../components/ui/background-boxes";

export function PresentationBackgroundBoxes() {

    const { t } = useTranslation();
    

    return (
        <>
            <div id='presentation' className="h-full relative w-full overflow-hidden bg-bg-blue  flex flex-col items-center justify-center rounded-lg pb-20 ">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />
                <Boxes />
                <div className="flex flex-col items-center pt-10 ">
                    <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center relative z-20 pt-10 pb-5 text-text-blue">
                        {t("presentation.quisuisje")}
                    </h1>
                    <p className="mt-2 relative z-20 max-w-5xl py-10  text-lg/9 md:text-lg/10 overflow-hidden text-justify px-6 text-text-blue">
                    {t("presentation.par1")}
                        <br /> <br />
                        {t("presentation.par2")}
                        <br />
                        {t("presentation.par3")}
                        <br /> <br />
                        {t("presentation.par4")}
                    </p>
                    
                </div>
                <a className='z-50' href="mailto:paul.lercq@gmail.com">
                    <button
                        className="motion-safe:animate-bounce cursor-pointer px-8 py-4 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28">
                        <span className="">{t("nav.mecontacter")}</span>
                    </button>
                </a>
            </div>
        </>
    );
}
