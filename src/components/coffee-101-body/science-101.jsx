import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import "../../index.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Science = () => {
  const scienceRef = useRef(null);
  const factsRef = useRef(null);
  const mythsRef = useRef(null);
  const benefitsRef = useRef(null);
  const endnoteRef = useRef(null);

  useGSAP(() => {
    const sections = [scienceRef, factsRef, mythsRef, benefitsRef, endnoteRef];
    sections.forEach((ref) => {
      gsap.from(
        ref.current,
        {
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: true,
          },
          scale: 0.9,
          opacity: 0,
          y: 50,
          duration: 2,
          ease: "linear",
        },
        {
          y: 20,
          scale: 1,
          opacity: 1,
        }
      );
    });
  }, []);

  useGSAP(() => {
    const split = SplitText.create("#header", {
      type: "words, chars, lines",
    });
    gsap.from(split.chars, {
      autoAlpha: 0,
      delay: 0.4,
      y: 80,
      stagger: {
        amount: 0.1,
        from: "end",
      },
    });
  });

  useGSAP(() => {
    const split = SplitText.create("#headerPara", {
      type: "words, chars, lines",
    });
    gsap.from(split.words, {
      autoAlpha: 0,
      delay: 1,
      y: 40,
      stagger: {
        amount: 0.4,
        from: "end",
      },
    });
  });

  useGSAP(() => {
    const split = SplitText.create("#mobile-scrollDown", {
      type: "lines, words",
    });
    gsap.from(split.words, {
      autoAlpha: 0,
      delay: 3,
      y: 20,
      scale: 0.3,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });
  });

  return (
    <>
      <main className="pt-1">
        <div className="my-5 p-2 h-full bg-evergreen">
          <h1
            className="opacity-100 almond-cream my-2 p-1 font-bold text-4xl montserrat text-center"
            id="header"
          >
            Caffeine Science 101
          </h1>
          <p
            className="lg:w-[60%] text-justify m-auto my-10 lato-regular text-md almond-cream"
            id="headerPara"
          >
            Dive into the raw, unfiltered truth about caffeine. Forget the
            sugar-coated "coffee is life" Pinterest quotes—this is the gritty
            breakdown of how caffeine hijacks your brain, fuels your hustle, and
            occasionally beats the crap out of your nervous system. By the end,
            you’ll see it's not an angel, not a demon—it’s a tricky chemical
            that plays both sides. Coffee beans, energy drinks, tea ceremonies,
            pre-workout shots—they’re all part of the same ancient, global
            relationship between humans and this sneaky psychoactive drug.
          </p>

          <div id="mobile-scrollDown">
            <h3 className="text-center mt-5">Scroll to Explore ↓</h3>
          </div>
        </div>

        <div className="m-auto mt-20 max-w-4xl px-4">
          <section
            ref={scienceRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              The Science Behind Caffeine
            </h2>
            <div className="text-md pl-5 border-l border-amber-50/70">
              <p className="lato-regular almond-cream">
                Caffeine = molecule of chaos. Technically, it’s
                1,3,7-trimethylxanthine, a bitter alkaloid that your nervous
                system instantly recognizes as a party crasher. Your brain has
                these sleepy-time signals called adenosine—naturally building up
                the longer you’re awake, whispering “yo, it’s bedtime.” Well,
                caffeine walks in, body-checks adenosine, and steals its chair.
                Suddenly, those sleep whispers? Gone. You’re sharper, faster,
                and maybe, just maybe, regretting the 11 p.m. espresso later.
              </p>
              <p className="lato-regular text-md almond-cream mt-4">
                Once swallowed, caffeine doesn’t mess around—absorbed like a
                pro, it hits the bloodstream within 30 minutes. At the 60-minute
                mark, you’re peaking. Dopamine, norepinephrine,
                adrenaline—they’re all spiking, making you feel like a wired
                superhero. But here’s the catch: your liver kicks in, using
                cytochrome P450 enzymes to slowly demolish caffeine, with a
                half-life of 3-7 hours. Meaning? Your midnight latte lingers in
                your system till sunrise. Blame your genetics if it feels even
                longer.
              </p>
              <p className="lato-regular text-md almond-cream mt-4">
                What’s wild: caffeine affects people differently. Some sip three
                cold brews and sleep like a baby. Others? One diet Coke at 4
                p.m. turns them into insomniac zombies. It’s not just
                psuedo-science—it comes down to CYP1A2 liver enzyme variations.
                TLDR: your DNA decides whether caffeine is your sidekick or your
                villain.
              </p>
              <p className="lato-regular text-md almond-cream mt-4">
                Think of caffeine as hacking your brain’s operating
                system—killing pop-ups, boosting RAM, but if you open too many
                tabs… your whole system crashes.
              </p>
            </div>
          </section>

          <section
            ref={factsRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              Hard Facts on Caffeine
            </h2>
            <ul className="lato-regular text-md almond-cream list-disc pl-6">
              <li className="mb-3">
                Daily safe limit for adults: Up to 400mg. That’s four small cups
                of coffee, not four Trenta cold brews from Starbucks. Go beyond,
                and you’re buying insomnia, jitter shakes, and anxiety as
                souvenirs.
              </li>
              <li className="mb-3">
                Sources are sneaky: Coffee has ~95mg per 8oz. Black tea around
                47mg. Green tea ~30mg. Cola ~34mg. Dark chocolate? 12mg. Oh, and
                one “hardcore” energy drink can slam you with 300+ mg in a
                single can. That’s basically a heart palpitation starter pack.
              </li>
              <li className="mb-3">
                Tolerance stacks aggressively. That first latte felt like
                teleportation. Three months later, it’s just “baseline
                functionality.” Go cold turkey, and you’ll meet the caffeine
                withdrawal boss fight: migraines, fatigue, irritability, and the
                sudden realization your personality isn’t as charming without a
                cup of joe.
              </li>
              <li className="mb-3">
                Pregnant? Stay under 200mg, or risks spike: miscarriage, low
                birth weight, developmental issues. Small bodies + high
                stimulants = bad physics.
              </li>
              <li className="mb-3">
                Yes, it’s addictive. Caffeine literally rewires reward
                pathways—milder than cocaine or nicotine, sure, but dependency
                creeps in fast. Miss your fix, and you’re cranky enough to start
                fights with WiFi routers.
              </li>
              <li className="mb-3">
                Fun twist: Athletes literally abuse caffeine as a legal
                performance drug. Before the 2000s, Olympic committees monitored
                caffeine like steroids. Now? It’s free real estate for
                sports-fueled jitter energy.
              </li>
            </ul>
          </section>

          <section
            ref={mythsRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              Busting Caffeine Myths
            </h2>
            <ul className="lato-regular text-md almond-cream list-disc pl-6">
              <li className="mb-3">
                Myth: Caffeine dehydrates you. Truth: That’s outdated nonsense.
                Moderate caffeine is no worse than water; in fact, the fluid in
                coffee offsets its mild diuretic effect. Only chugging 12 energy
                drinks would leave you desert-dry.
              </li>
              <li className="mb-3">
                Myth: It stunts growth. Truth: Zero data backs this. This myth
                was propaganda that companies used in the 20th century to scare
                teens off coffee. Unless you’re replacing milk with triple
                espressos at age 10, you’re fine.
              </li>
              <li className="mb-3">
                Myth: Caffeine sobers you up. Truth: Brutal lie. Alcohol +
                caffeine = “drunk but awake” which is actually *way* more
                dangerous. You can dance, drive, or fight while dangerously out
                of it—you just *feel* less wasted.
              </li>
              <li className="mb-3">
                Myth: It wrecks your heart. Truth: For healthy folks, coffee may
                reduce risk of cardiovascular disease. But if your ticker’s
                already sketchy, caffeine may turn your arrhythmia into a rave.
              </li>
              <li className="mb-3">
                Myth: Decaf = no caffeine. Truth: Decaf still carries 2-7mg/cup.
                Enough for an ultra-sensitive insomniac to stay up rewatching
                Netflix trash TV.
              </li>
            </ul>
          </section>

          <section
            ref={benefitsRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              Benefits of Caffeine
            </h2>
            <ul className="lato-regular text-md almond-cream list-disc pl-6">
              <li className="mb-3">
                Brain boost: Laser-sharp focus, better memory, faster response
                times. Night before exams? Caffeine = your guardian glitch.
              </li>
              <li className="mb-3">
                Fat burner cheat-code: Taps into stored fat, ramps metabolism
                3–11%. Bodybuilders literally slam coffee pre-cardio for this
                hack.
              </li>
              <li className="mb-3">
                Longevity drug: Studies link coffee drinkers to lower risk of
                Alzheimer’s, Parkinson’s, type 2 diabetes, strokes, and even
                some cancers. Who knew your espresso was low-key a medical flex.
              </li>
              <li className="mb-3">
                Vibe shifter: Lifts mood, thanks to dopamine and serotonin
                boosts when adenosine is blocked. Basically, it’s your
                pocket-sized anti-depression ally… until you cross the overdose
                border.
              </li>
              <li className="mb-3">
                Liver’s MVP: Coffee reduces chance of cirrhosis, fatty liver,
                and cancer. Heavy drinkers who also drink coffee? Paradoxically,
                their livers last longer. Coffee = occasional life insurance.
              </li>
            </ul>
            <p className="lato-regular text-md almond-cream mt-4">
              But don’t over-romanticize it—caffeine’s benefits max out with
              moderation. Too much, and suddenly you’re trading god-mode focus
              for 3 a.m. paranoia spirals, gut problems, and addiction cycles.
              The line between booster and saboteur is thinner than you think.
            </p>
          </section>

          <section
            ref={endnoteRef}
            className="lg:my-10 p-5 mb-20  lg:p-15 border-t border-amber-50 bg-evergreen/20 text-justify almond-cream"
          >
            <h2 className=" font-bold text-3xl montserrat mb-4">End Note</h2>
            <p className="lato-regular text-md mb-10">
              Caffeine isn’t good, it isn’t bad—it’s power disguised as a
              beverage. It’s the closest thing humanity has to a global,
              acceptable drug habit. But like any tool, it cuts both ways. Use
              it to fuel your day, not to patch garbage sleep schedules or
              crappy lifestyle choices. Respect the molecule, or it’ll turn on
              you. And no matter how cool you feel slamming double
              shots—remember: the real flex is needing *less*, not more.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Science;
