import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
    itemsFront,
    itemsBack,
    itemsDevOps,
    className,
}: {
    itemsFront: {
        title: string;
        link:string;
        image:string;
    }[];
    itemsBack:{
        title:string;
        link:string;
        image:string;
    }[];
    itemsDevOps:{
        title:string;
        link:string;
        image:string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
         <h2 className="md:text-3xl text-xl lg:text-4xl font-extrabold text-text-blue-service">FrontEnd</h2>
            <div
                className={cn(
                    "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-10",
                    className
                )}
            >
               
                {itemsFront.map((item, idx) => (
                    <a
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-[#CDB3FF] block  rounded-3xl"
                                    layoutId="front"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card className="bg-card-blue">
                            <CardTitle>{item.title}</CardTitle>
                            <img src={item.image} alt={item.title} width="200" height="128" loading="lazy" decoding="async" className="w-full h-32 object-contain rounded-t-lg" />
                        </Card>
                    </a>
                ))}
            </div>
            <h2 className="md:text-3xl text-xl lg:text-4xl font-extrabold text-text-blue-service ">BackEnd</h2>
            <div
                className={cn(
                    "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-10",
                    className
                )}
            >
                {itemsBack.map((item, idx) => (
                    <a
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-[#CDB3FF]  block  rounded-3xl"
                                    layoutId="back"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card className="bg-card-blue">
                            <CardTitle>{item.title}</CardTitle>
                            <img src={item.image} alt={item.title} width="200" height="128" loading="lazy" decoding="async" className="w-full h-32 object-contain rounded-t-lg" />
                        </Card>
                    </a>
                ))}
            </div>
            <h2 className="md:text-3xl text-xl lg:text-4xl font-extrabold text-text-blue-service ">DevOps</h2>
            <div
                className={cn(
                    "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-10",
                    className
                )}
            >
                {itemsDevOps.map((item, idx) => (
                    <a
                        href={item?.link}
                        key={item?.link}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-[#CDB3FF]  block  rounded-3xl"
                                    layoutId="devOps"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card className="bg-card-blue">
                            <CardTitle>{item.title}</CardTitle>
                            <img src={item.image} alt={item.title} width="200" height="128" loading="lazy" decoding="async" className="w-full h-32 object-contain rounded-t-lg" />
                        </Card>
                    </a>
                ))}
            </div>
        </>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0D172B] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
