


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown"
import { FirstCard } from "../components/3dcards/firstcard"
import { SecondCard } from "../components/3dcards/secondcard"
import { MesTecnosBackground } from "../components/mes-technos-background"
import { MesProjets } from "../components/mesProjets"
import { MesServices } from "../components/mesServices"
import Presentation from "../components/presentation"
import { PresentationBackgroundBoxes } from "../components/presentation-background-boxes"
import { BackgroundBeamsWithCollision } from "../components/presentation_0"
import { TracingBeam } from "../components/ui/tracing-beam"
import { Settings } from "lucide-react";
import useDarkMode from "../components/hooks/useDarkMode"
import { ThirdCard } from "../components/3dcards/thirdcard"
import { ThourthCard } from "../components/3dcards/fourthcard"
import { FifthCard } from "../components/3dcards/fifthcard"
import { useTranslation } from "react-i18next"
import { Footer } from "../components/footer"
import { NavBar } from "../components/NavBar"
import { SocialLinks } from "../components/SocialLinks"

export default function HomePage() {

    const [, setIsDark] = useDarkMode();

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <NavBar />
            <div className="w-full m-auto">
                <TracingBeam
                    children={
                        <>
                            <BackgroundBeamsWithCollision children={<Presentation />} />
                            <PresentationBackgroundBoxes />
                            <MesServices />
                            <MesProjets children={<FirstCard />} scndchildren={<SecondCard />} thrdchildren={<ThirdCard />} fourthchildren={<ThourthCard />} fifthchildren={<FifthCard />} />
                            <MesTecnosBackground />
                            <Footer />
                        </>}
                />

                <div className="group flex flex-wrap fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 pointer-events-auto  cursor-pointer">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button aria-label={t('a11y.settings')} className="group cursor-pointer size-14 rounded-full  bg-[#9E4CC1] text-white font-bold transition duration-200 hover:bg-white hover:border-[#9E4CC1] border-2 text-xl flex justify-center items-center focus-visible:ring-2 focus-visible:ring-[#9E4CC1]">
                                <Settings strokeWidth={1.75} className="group-hover:text-[#9E4CC1] group-hover:animate-[spin_2s_linear_infinite] motion-reduce:group-hover:animate-none" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-white flex flex-col justify-center items-center p-6 border-[#0D172B] text-[#0D172B] ">
                            <DropdownMenuLabel className="text-black">{t('settings.theme')}</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <button
                                    onClick={() => setIsDark(false)}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200">
                                    Light
                                </button>
                                <button
                                    onClick={() => setIsDark(true)}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-[#0D172B] text-white text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200">
                                    Dark
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-black">Langues:</DropdownMenuLabel>
                            <DropdownMenuItem className="flex flex-col">
                                <button
                                    onClick={() => changeLanguage("fr")}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28">
                                    🇫🇷 Français
                                </button>
                                <button
                                    onClick={() => changeLanguage("en")}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28">
                                    🇺🇸 English
                                </button>
                                <button
                                    onClick={() => changeLanguage("es")}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28">
                                    🇪🇸 Español
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-black">Contact:</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <div className='flex flex-row space-x-2'>
                                    <SocialLinks />
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    )
}
