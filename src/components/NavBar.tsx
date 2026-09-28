
import { JSX } from "react";
import { useTranslation } from "react-i18next";
import { FloatingNav } from "./ui/floating-navbar";
import { IconCode, IconDeviceDesktopSearch, IconHome, IconTools, IconUser } from "@tabler/icons-react";

interface navItem {
  name: string,
  link: string,
  icon: JSX.Element,
}

export function NavBar() {

  const { t } = useTranslation();

  const navItems: navItem[] = [
    {
      name: t("nav.accueil"),
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: t("nav.qui_suis_je"),
      link: "/presentation",
      icon: <IconUser className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: t("nav.services"),
      link: "/services",
      icon: <IconTools className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: t("nav.projets"),
      link: "/projets",
      icon: <IconDeviceDesktopSearch className="h-4 w-4 text-neutral-500 " />,
    },
    {
      name: t("nav.tecnos"),
      link: "/tecnos",
      icon: <IconCode className="h-4 w-4 text-neutral-500 " />,
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

