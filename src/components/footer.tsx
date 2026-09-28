import React from "react";
import { Typography } from "@material-tailwind/react";
import { smoothScroll } from "../lib/helpers";
import { useTranslation } from "react-i18next";
import { SocialLinks } from "./SocialLinks";

export function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="bg-black flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between m-auto">
            <div className="max-w-5xl m-auto  py-40 flex flex-col items-center">
                <Typography color="blue-gray" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    &copy; Paul Leclercq (DevTech Evolution)
                </Typography>
                <ul className="flex flex-col md:flex-wrap items-center gap-y-9 md:gap-y-2 gap-x-8 py-10 font-[my-font]">
                    <li className="cursor-pointer border-white">
                        <Typography
                            as="a"
                            onClick={(e) => smoothScroll(e as React.MouseEvent<HTMLAnchorElement>)}
                            data-scrollto="/accueil"
                            color="blue-gray"
                            className=" transition-colors hover:text-[#9E4CC1]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {t('nav.accueil')}
                        </Typography>
                    </li>
                    <li className="cursor-pointer">
                        <Typography
                            as="a"
                            onClick={(e) => smoothScroll(e as React.MouseEvent<HTMLAnchorElement>)}
                            data-scrollto="/presentation"
                            color="blue-gray"
                            className=" transition-colors hover:text-[#9E4CC1]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {t('nav.qui_suis_je')}
                        </Typography>
                    </li>
                    <li className="cursor-pointer">
                        <Typography
                            as="a"
                            onClick={(e) => smoothScroll(e as React.MouseEvent<HTMLAnchorElement>)}
                            data-scrollto="/services"
                            color="blue-gray"
                            className=" transition-colors hover:text-[#9E4CC1]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {t('nav.services')}
                        </Typography>
                    </li>
                    <li className="cursor-pointer">
                        <Typography
                            as="a"
                            onClick={(e) => smoothScroll(e as React.MouseEvent<HTMLAnchorElement>)}
                            data-scrollto="/projets"
                            color="blue-gray"
                            className=" transition-colors hover:text-[#9E4CC1]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {t('nav.projets')}
                        </Typography>
                    </li>
                    <li className="cursor-pointer">
                        <Typography
                            as="a"
                            onClick={(e) => smoothScroll(e as React.MouseEvent<HTMLAnchorElement>)}
                            data-scrollto="/tecnos"
                            color="blue-gray"
                            className=" transition-colors hover:text-[#9E4CC1]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {t('nav.tecnos')}
                        </Typography>
                    </li>
                </ul>
                <div className='flex flex-row space-x-8 pt-2'>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}