import { HeroHighlightDemo } from "../title-highlight";
import { HoverEffect } from "./card-hover";

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
  { title: "HTML", image: "src/assets/images/logo/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "CSS", image: "src/assets/images/logo/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { title: "Tailwind", image: "src/assets/images/logo/tailwind.png", link: "https://tailwindcss.com/" },
  { title: "Javascript", image: "src/assets/images/logo/js.webp", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "React", image: "src/assets/images/logo/react.png", link: "https://react.dev/" },
  { title: "Vue", image: "src/assets/images/logo/vue.png", link: "https://vuejs.org/" },
  { title: "Typescript", image: "src/assets/images/logo/ts.png", link: "https://www.typescriptlang.org/" },
  { title: "Cypress", image: "src/assets/images/logo/cypress.png", link: "https://www.cypress.io/" }
];

export const back = [
  { title: "Nest", image: "src/assets/images/logo/nest.png", link: "https://nestjs.com/" },
  { title: "Jest", image: "src/assets/images/logo/jest.png", link: "https://jestjs.io/" },
  { title: "NodeJS", image: "src/assets/images/logo/nodejs.png", link: "https://nodejs.org/" },
  { title: "MongoDB", image: "src/assets/images/logo/mongodb.png", link: "https://www.mongodb.com/" },
  { title: "MySQL", image: "src/assets/images/logo/mysql.png", link: "https://www.mysql.com/" },
  { title: "Prisma", image: "src/assets/images/logo/prisma.svg", link: "https://www.prisma.io/" },
  { title: "AWS", image: "src/assets/images/logo/aws.webp", link: "https://aws.amazon.com/" },
  { title: "Scaleway", image: "src/assets/images/logo/scaleway.png", link: "https://www.scaleway.com/" },
  { title: "Redis", image: "src/assets/images/logo/redis.png", link: "https://redis.io/" }
];

export const devOps = [
  { title: "Git CI/CD", image: "src/assets/images/logo/ci_cd.png", link: "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" },
  { title: "Docker", image: "src/assets/images/logo/docker.png", link: "https://www.docker.com/" },
  { title: "Prometheus", image: "src/assets/images/logo/prometheus.png", link: "https://prometheus.io/" },
  { title: "Grafana", image: "src/assets/images/logo/grafana.png", link: "https://grafana.com/" },
  { title: "Nginx", image: "src/assets/images/logo/nginx.png", link: "https://nginx.org/" }
];