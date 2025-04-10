
import { CardHoverEffectDemo } from "./cardsSkills/cards-front";
import { BackgroundBeams } from "./ui/background-beams";

export function MesTecnosBackground() {
  return (
    <div id='tecnos' className="h-full w-full rounded-md bg-bg-blue-service relative flex flex-col items-center justify-center antialiased pb-20">
      <CardHoverEffectDemo />
      <BackgroundBeams />
    </div>
  );
}
