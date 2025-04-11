import { HeroHighlightDemo } from "../title-highlight";
import { HoverEffect } from "./card-hover";

import html from "../../assets/images/logo/html.png";
import css from "../../assets/images/logo/css.png";
import tailwind from "../../assets/images/logo/tailwind.png";
import js from "../../assets/images/logo/js.webp";
import react from "../../assets/images/logo/react.png";
import vue from "../../assets/images/logo/vue.png";
import ts from "../../assets/images/logo/ts.png";
import cypress from "../../assets/images/logo/cypress.png";

import nest from "../../assets/images/logo/nest.png";
import jest from "../../assets/images/logo/jest.png";
import nodejs from "../../assets/images/logo/nodejs.png";
import mongodb from "../../assets/images/logo/mongodb.png";
import mysql from "../../assets/images/logo/mysql.png";
import prisma from "../../assets/images/logo/prisma.svg";
import aws from "../../assets/images/logo/aws.webp";
import scaleway from "../../assets/images/logo/scaleway.png";
import redis from "../../assets/images/logo/redis.png";

import gitci from "../../assets/images/logo/ci_cd.png";
import docker from "../../assets/images/logo/docker.png";
import prometheus from "../../assets/images/logo/prometheus.png";
import grafana from "../../assets/images/logo/grafana.png";
import nginx from "../../assets/images/logo/nginx.png";

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
