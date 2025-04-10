
import { JSX } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconCode, IconDeviceDesktopSearch, IconHome, IconTools, IconUser } from "@tabler/icons-react";

interface navItem {
  name: string,
  link: string,
  icon: JSX.Element,
}

export function NavBar() {

  function navItems(): navItem[] {
    const navItemsFR = [
      {
        name: "Accueil",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Qui suis-je",
        link: "/presentation",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Services",
        link: "/services",
        icon: (
          <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Projets",
        link: "/projets",
        icon: (
          <IconDeviceDesktopSearch className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Technos",
        link: "/tecnos",
        icon: (
          <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ];
    const navItemsEsp = [
      {
        name: "Inicio",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "¿Quién soy?",
        link: "/presentation",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Servicios",
        link: "/services",
        icon: (
          <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Proyectos",
        link: "/projets",
        icon: (
          <IconDeviceDesktopSearch className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Tecnologías",
        link: "/tecnos",
        icon: (
          <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ];

    const navItemsEn = [
      {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Who am I",
        link: "/presentation",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Services",
        link: "/services",
        icon: (
          <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Projects",
        link: "/projets",
        icon: (
          <IconDeviceDesktopSearch className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
      {
        name: "Technologies",
        link: "/tecnos",
        icon: (
          <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ];

    const languages = localStorage.getItem("language")
    if (languages === "fr") {
      return navItemsFR
    }
    else if (languages === "esp") {
      return navItemsEsp
    }
    else if (languages === "en") {
      return navItemsEn
    }
    return navItemsFR
  }


  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems()} />
    </div>
  );
}

