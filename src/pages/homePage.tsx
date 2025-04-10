


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

export default function HomePage() {

    const [isDark, setIsDark] = useDarkMode();

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language)
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

                <div className="group flex flex-wrap fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 pointer-events-auto  cursor-progress">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="group cursor-progress size-14 rounded-full  bg-[#9E4CC1] text-white font-bold transition duration-200 hover:bg-white hover:border-[#9E4CC1] border-2 text-xl flex justify-center items-center">
                                <Settings strokeWidth={1.75} className="animate-[spin_2s_linear_infinite] group-hover:text-[#9E4CC1]" />
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
                                    onClick={() => changeLanguage("esp")}
                                    className="cursor-pointer px-4 py-2 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28">
                                    🇪🇸 Español
                                </button>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-black">Contact:</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <div className='flex flex-row space-x-2'>
                                    <a className='cursor-pointer' target='blank' href='https://www.linkedin.com/in/paul-leclercq/'>
                                        <button
                                            type="button"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light"
                                            className="z-50 w-16 mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                            <span className="[&>svg]:h-4 [&>svg]:w-4 cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 448 512">

                                                    <path
                                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </a>
                                    <a href='https://www.linkedin.com/in/paul-leclercq/'>
                                        <button
                                            type="button"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light"
                                            className="z-50 w-16 mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                            <span className="[&>svg]:h-4 [&>svg]:w-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 496 512">
                                                    <path
                                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </a>
                                    <a className='cursor-pointer' target='blank' href='mailto:paul.lercq@gmail.com'>
                                        <button
                                            type="button"
                                            data-twe-ripple-init
                                            data-twe-ripple-color="light"
                                            className="z-50 w-16 mb-2 inline-block rounded bg-[#590355] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                            <span className="[&>svg]:h-4 [&>svg]:w-4 cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 512 512">
                                                    <path d="M502.3 190.8L327.4 338c-15 12.5-37.1 12.5-52.1 0L9.7 190.8c-14.2-11.8-4.9-34.8 13.8-34.8h464.9c18.7 0 28 23 13.9 34.8zM48 144v224c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V144L256 304 48 144z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    )
}
