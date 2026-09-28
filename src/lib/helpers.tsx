import React, { useRef, useEffect } from "react";

export function useRefAccordion(setOpen: React.Dispatch<React.SetStateAction<boolean>>) {
    const accordionRef = useRef<HTMLDivElement>(null); // Création d'une référence

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
                setOpen(false); // Ferme l'accordion si on clique à l'extérieur
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpen]); // Ajout de setOpen comme dépendance

    return accordionRef; // Retourne la référence pour qu'elle soit utilisée ailleurs
}

export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('data-scrollto')?.slice(1)
    const elementToGo = targetId ? document.getElementById(targetId) : null

    if (elementToGo) {
        elementToGo.scrollIntoView({
            behavior:"smooth",
            block:'nearest'
        })
    } else {
        window.scrollTo({top : 0, behavior:'smooth'})
    }


}
