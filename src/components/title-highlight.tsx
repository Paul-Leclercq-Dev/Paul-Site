
import { motion } from "motion/react";
import { Highlight } from "./ui/hero-highlight";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function HeroHighlightDemo() {
   const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisibile] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is visible:", entry.isIntersecting); // Debug
        if (entry.isIntersecting) {
          setIsVisibile(true);
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])


  return (

    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [20, -5, 0] }}
      transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      className="md:text-6xl text-4xl lg:text-8xl font-bold text-center md:pt-20 py-15 md:pb-10 text-text-blue-service max-w-4xl leading-relaxed lg:leading-snug mx-auto"
    >
      {t("technos.mes")}{" "}
      <Highlight className="text-text-blue-tecnos" isVisible={isVisible}>
      {t("technos.technos")}
      </Highlight>
    </motion.h1>

  );
}
