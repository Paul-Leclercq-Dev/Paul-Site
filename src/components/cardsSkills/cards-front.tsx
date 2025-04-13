import { HeroHighlightDemo } from "../title-highlight";
import { HoverEffect } from "./card-hover";

import html from "../../assets/images/logo/html.webp";
import css from "../../assets/images/logo/css.webp";
import tailwind from "../../assets/images/logo/tailwind.webp";
import js from "../../assets/images/logo/jslogo.webp";
import react from "../../assets/images/logo/react.webp";
import vue from "../../assets/images/logo/vue.webp";
import ts from "../../assets/images/logo/ts.webp";
import cypress from "../../assets/images/logo/cypress.webp";

import nest from "../../assets/images/logo/nest.webp";
import jest from "../../assets/images/logo/jest.webp";
import nodejs from "../../assets/images/logo/nodejs.webp";
import mongodb from "../../assets/images/logo/mongodb.webp";
import mysql from "../../assets/images/logo/mysql.webp";
import prisma from "../../assets/images/logo/prisma.svg";
import aws from "../../assets/images/logo/aws.webp";
import scaleway from "../../assets/images/logo/scaleway.webp";
import redis from "../../assets/images/logo/redis.webp";

import gitci from "../../assets/images/logo/ci_cd.webp";
import docker from "../../assets/images/logo/docker.webp";
import prometheus from "../../assets/images/logo/prometheus.webp";
import grafana from "../../assets/images/logo/grafana.webp";
import nginx from "../../assets/images/logo/nginx.webp";

export function CardHoverEffectDemo() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-8">
        <HeroHighlightDemo />
        <HoverEffect itemsFront={front} itemsBack={back} itemsDevOps={devOps} />
      </div>
    </div>
  );
}

export const front = [
  { title: "HTML", image: html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "CSS", image: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { title: "Tailwind", image: tailwind, link: "https://tailwindcss.com/" },
  { title: "Javascript", image: js, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "React", image: react, link: "https://react.dev/" },
  { title: "Vue", image: vue, link: "https://vuejs.org/" },
  { title: "Typescript", image: ts, link: "https://www.typescriptlang.org/" },
  { title: "Cypress", image: cypress, link: "https://www.cypress.io/" }
];

export const back = [
  { title: "Nest", image: nest, link: "https://nestjs.com/" },
  { title: "Jest", image: jest, link: "https://jestjs.io/" },
  { title: "NodeJS", image: nodejs, link: "https://nodejs.org/" },
  { title: "MongoDB", image: mongodb, link: "https://www.mongodb.com/" },
  { title: "MySQL", image: mysql, link: "https://www.mysql.com/" },
  { title: "Prisma", image: prisma, link: "https://www.prisma.io/" },
  { title: "AWS", image: aws, link: "https://aws.amazon.com/" },
  { title: "Scaleway", image: scaleway, link: "https://www.scaleway.com/" },
  { title: "Redis", image: redis, link: "https://redis.io/" }
];

export const devOps = [
  { title: "Git CI/CD", image: gitci, link: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" },
  { title: "Docker", image: docker, link: "https://www.docker.com/" },
  { title: "Prometheus", image: prometheus, link: "https://prometheus.io/" },
  { title: "Grafana", image: grafana, link: "https://grafana.com/" },
  { title: "Nginx", image: nginx, link: "https://nginx.org/" }
];
