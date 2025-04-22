import { useState } from "react";
import tuftissimo from "../../assets/images/tuftissimo.webp";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import { useRefAccordion } from "../../lib/helpers";
import { useTranslation } from "react-i18next";

export function ThirdCard() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const accordionRef = useRefAccordion(setOpen);

    return (
        <CardContainer className="w-[350px] md:w-[400px]">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-[#440949]"
                >
                    {t('card3.titre')}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-[#730363] text-sm max-w-sm mt-2"
                >
                    {t('card3.sousTitre')}
                </CardItem>
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                >
                    <img src={tuftissimo} height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div ref={accordionRef} className="flex justify-between items-center mt-10 text-black">
                    <Accordion open={open} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen()} className="cursor-pointer" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 text-[#730363] backdrop-blur-sm border border-[#B26FCD] rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 cursor-pointer">
                                {t("card3.bouton.enSavoirPlus")}
                            </CardItem>
                        </AccordionHeader>
                        <AccordionBody className="text-sm text-gray-700 leading-relaxed">
                            <p>
                                {t('card3.description.intro')}
                            </p>

                            <p className="mt-2">
                                🧶 <strong className="underline">{t('card3.description.fonctionnalitesTitre')}</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-1">
                                <li>{t('card3.description.fonctionnalites.f1')}</li>
                                <li>{t('card3.description.fonctionnalites.f2')}</li>
                                <li>{t('card3.description.fonctionnalites.f3')}</li>
                                <li>{t('card3.description.fonctionnalites.f4')}</li>
                                <li>{t('card3.description.fonctionnalites.f5')}</li>
                                <li>{t('card3.description.fonctionnalites.f6')}</li>
                            </ul>

                            <p className="mt-4">
                                💡 <strong className="underline">{t('card3.description.atoutsTitre')}</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-1">
                                <li>{t('card3.description.atouts.a1')}</li>
                                <li>{t('card3.description.atouts.a2')}</li>
                                <li>{t('card3.description.atouts.a3')}</li>
                                <li>{t('card3.description.atouts.a4')}</li>
                            </ul>

                            <p className="mt-4">
                                <strong>{t('card3.description.conclusion')}</strong>
                            </p>
                            <a
                                href=""
                                target="_blank"
                                className="mt-6 px-5 py-3 rounded-xl bg-[#0D172B] text-white text-xs font-bold block cursor-pointer w-36 text-center"
                            >
                                {t('card3.bouton.visiter')}
                            </a>
                            <p>
                                <small>{t('card3.comingSoon')}</small>
                            </p>
                        </AccordionBody>
                    </Accordion>
                </div>
            </CardBody>
        </CardContainer>
    );
}
