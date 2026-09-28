import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { useTranslation } from "react-i18next";

interface services {
  quote: string;
  name: string;
  src: string;
}

import fullstack from "../assets/images/services/fullstack.webp";
import mobileapp from "../assets/images/services/mobileapp.webp";
import api from "../assets/images/services/api.webp";
import devops from "../assets/images/services/devops.webp";
import uiux from "../assets/images/services/uiux.webp";
import security from "../assets/images/services/security.webp";
import database from "../assets/images/services/database.webp";
import testing from "../assets/images/services/testing.webp";

const serviceImages = [fullstack, mobileapp, api, devops, uiux, security, database, testing];

export function MesServices() {
  const { t } = useTranslation();

  const items = t("services.items", { returnObjects: true }) as { name: string; quote: string }[];
  const services: services[] = items.map((item, index) => ({
    ...item,
    src: serviceImages[index],
  }));

  return <AnimatedTestimonials testimonials={services} />;
}
