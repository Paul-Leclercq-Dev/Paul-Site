"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { useTranslation } from "react-i18next";

interface test {
    children: React.ReactNode;
    scndchildren: React.ReactNode;
    thrdchildren: React.ReactNode;
    fourthchildren: React.ReactNode;
    fifthchildren: React.ReactNode;
}

export function MesProjets(props: test) {
    
    const { t } = useTranslation();

    const { children, scndchildren, thrdchildren, fourthchildren, fifthchildren } = props

    return (
        <>
            <div id='projets' className=" bg-bg-blue h-full pb-20 ">
                <div className="w-full flex flex-col items-center justify-center  overflow-hidden rounded-md pt-5 absolute">
                    <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20 pt-10 ">
                        {t("projets")}
                    </h1>
                    <div className="w-[40rem] relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-bg-blue [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
                <div className="max-w-5xl m-auto flex justify-start md:justify-center flex-nowrap md:flex-wrap pt-40 md:pt-60 gap-2 md:gap-2 overflow-x-auto w-full pb-15 md:pb-20 snap-x snap-mandatory">
                    <div className="">{children}</div>
                    <div className="">{scndchildren}</div>
                    <div className="">{thrdchildren}</div>
                    <div className="">{fifthchildren}</div>
                    <div className="">{fourthchildren}</div>

                </div>
                <a href="mailto:paul.lercq@gmail.com">
                    <button
                        className=" flex items-center animate-bounce cursor-pointer px-8 py-4 rounded-md border border-[#B26FCD] bg-white text-[#0D172B] text-sm hover:shadow-[4px_4px_0px_0px_#B26FCD] transition duration-200 min-w-28 z-50 m-auto">
                       {t("nav.mecontacter")}
                    </button>
                </a>
            </div>

        </>

    );
}
