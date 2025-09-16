import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { lazy, Suspense, useEffect, useMemo, useRef } from "react";
import Globe from "react-globe.gl";
import "../../index.css";

const Worldmap = lazy(() => import("../ui/Globe"));
const Timeline = lazy(() => import("../ui/Timeline"));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Culture = () => {
  const globeRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create("#header", {
      type: "words, chars, lines",
    });
    gsap.from(split.words, {
      autoAlpha: 0,
      y: 50,
      stagger: 0.05,
      delay: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
  });

  useGSAP(() => {
    const split = SplitText.create("#headerPara", {
      type: "words, chars, lines",
    });
    gsap.from(split.words, {
      autoAlpha: 0,
      delay: 2,
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
      delay: 5,
      y: 20,
      scale: 0.3,
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });
  });

  useEffect(() => {
    import("../ui/Globe");
    import("../ui/Timeline");
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      globeRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 4,
        ease: "power3.inOut",
      }
    );
  });

  const isMobile = window.innerWidth < 1024;
  const colors = ["#6f4e37", "#c19a6b", "#ffcc99"]; // coffee tones

  const coffeeLocations = useMemo(
    () => [
      {
        lat: 6.7081,
        lng: 36.562,
        name: "Ethiopia (Kaffa)",
        description: "Birthplace of coffee legend – Kaldi’s goats 🐐",
        color: "brown",
      },
      {
        lat: 15.5527,
        lng: 48.5164,
        name: "Yemen",
        description: "Sufi monks brewed it for long night prayers ☕",
        color: "brown",
      },
      {
        lat: 41.0082,
        lng: 28.9784,
        name: "Istanbul",
        description: "Coffeehouses became cultural & political hubs 🎭",
        color: "brown",
      },
      {
        lat: 13.3161,
        lng: 75.772,
        name: "Chikmagalur, India",
        description: "Where Baba Budan planted the first beans in India 🌱",
        color: "brown",
      },
      {
        lat: -14.235,
        lng: -51.9253,
        name: "Brazil",
        description: "World’s largest coffee producer 🇧🇷",
        color: "brown",
      },
      {
        lat: 35.6762,
        lng: 139.6503,
        name: "Tokyo, Japan",
        description: "Kissaten traditions & coffee vending machine craze 🎌",
        color: "brown",
      },
      {
        lat: 40.7128,
        lng: -74.006,
        name: "New York",
        description: "Modern global coffee culture boom 🌆",
        color: "brown",
      },
    ],
    []
  );

  const timelineData = useMemo(
    () => [
      {
        year: "9th c. CE",
        title: "Kaldi’s Kick",
        content: (
          <p className="text-justify h-full items-center ">
            Legendary goat herder Kaldi in Ethiopia noticed his goats bouncing
            energetically after munching red berries. People soon tried the
            berries themselves and felt the same stimulating effects. thus,
            coffee’s journey began.
          </p>
        ),
      },
      {
        year: "15th c.",
        title: "Sufi Brew Rituals",
        content: (
          <p className="text-justify h-full items-center ">
            In Yemen, Sufi monks discovered coffee’s stimulant powers, using it
            to stay awake during long night prayers. They developed ritualistic
            brewing methods, and coffee became central to spiritual devotion.
            the practice slowly spread across arabia.
          </p>
        ),
      },
      {
        year: "16th c.",
        title: "Coffee Houses Ignite",
        content: (
          <p className="text-justify h-full items-center ">
            Coffeehouses spread across Cairo, Mecca, and Istanbul, becoming
            vibrant hubs of conversation. These “schools of the wise” allowed
            merchants, artists, and thinkers to exchange ideas freely. coffee
            culture was booming.
          </p>
        ),
      },
      {
        year: "17th c.",
        title: "Europe Gets Buzzed",
        content: (
          <p className="text-justify h-full items-center ">
            Venetian traders brought coffee to Europe, cafés exploded in London,
            Paris, and Vienna. People debated politics over cups of coffee, and
            societies slowly embraced the caffeinated ritual. a social
            revolution in a mug.
          </p>
        ),
      },
      {
        year: "18th c.",
        title: "Colonial Beans",
        content: (
          <p className="text-justify h-full items-center ">
            Europeans smuggled coffee plants to colonies in the Caribbean, South
            America, and Southeast Asia. Coffee became an economic powerhouse,
            fueling plantations and trade networks. wealth and exploitation
            brewed side by side.
          </p>
        ),
      },
      {
        year: "19th c.",
        title: "Industrial Brew",
        content: (
          <p className="text-justify h-full items-center ">
            The industrial revolution mechanized roasting and grinding, coffee
            became a staple of urban working life. Steam power sped up
            production, and cafés became meeting spots for the modern workforce.
            efficiency met aroma.
          </p>
        ),
      },
      {
        year: "Early 20th c.",
        title: "Espresso & Italian Ritual",
        content: (
          <p className="text-justify h-full items-center ">
            Italy transformed coffee into an art of speed and precision with the
            invention of espresso machines. Baristas mastered timing and
            technique, creating a culture around micro-brews and social rituals.
            espresso culture thrived.
          </p>
        ),
      },
      {
        year: "Mid 20th c.",
        title: "Global Coffee Boom",
        content: (
          <p className="text-justify h-full items-center ">
            Post-WWII, coffee culture spread worldwide. Instant coffee, diners,
            and café chains made it mass-consumed. Coffee became both a
            convenience and a lifestyle, reaching far beyond traditional cafés.
          </p>
        ),
      },
      {
        year: "Late 20th c.",
        title: "Specialty Awakening",
        content: (
          <p>
            The third-wave movement emphasized origin, single-source beans, and
            craft brewing techniques. Consumers began exploring flavor profiles
            and artisanal preparation, elevating coffee from commodity to craft.
            quality mattered more than ever.
          </p>
        ),
      },
      {
        year: "21st c.",
        title: "Coffee Everywhere",
        content: (
          <p>
            Global giants turned coffee into a cultural icon. Cafés mix local
            rituals with global trends. Social media amplified coffee
            aesthetics, making it both a drink and a lifestyle statement across
            the world.
          </p>
        ),
      },
      {
        year: "2025 & Beyond",
        title: "The Future of the Bean",
        content: (
          <p>
            Tech, sustainability, and innovation shape coffee’s next chapter.
            Lab-grown beans, AI roasting, and climate-smart cultivation could
            redefine the industry. the bean’s story is just getting started.
          </p>
        ),
      },
    ],
    []
  );

  const globeConfig = useMemo(
    () => ({
      pointSize: 1.2,
      globeColor: "#315533",
      atmosphereAltitude: 0.06,
      emissive: "#264526",
      emissiveIntensity: 0.12,
      shininess: 0.15,
      polygonColor: "rgba(255, 244, 225, 0.45)",
      ambientLight: "#fdf4e3",
      directionalLeftLight: "#fef8e7",
      directionalTopLight: "#fff4e1",
      pointLight: "#f5e1c4",
      arcTime: 1400,
      arcLength: 0.85,
      rings: 1,
      maxRings: 1,
      initialPosition: { lat: 5, lng: 30 },
      autoRotate: true,
      autoRotateSpeed: 0.2,
    }),
    []
  );

  return (
    <main className="h-full">
      <div className="my-5 p-2 h-full bg-evergreen almond-cream">
        <h1
          className="opacity-100 my-2 p-1 font-bold text-6xl text-center vibes"
          id="header"
        >
          The Culture of Coffee
        </h1>
        <p
          className="lg:w-[60%] text-center lg:text-justify m-auto my-10 lato-regular text-md"
          id="headerPara"
        >
          Caffeine isn’t just a chemical kick, it’s a culture, ritual, and
          survival tool. It fuels everything from ancient tea ceremonies to
          neon-lit coffeehouses. Energy drinks power restless nights, while
          espresso fuels morning wars. Shapes creativity, productivity,
          identity, and even social status.
        </p>
        {isMobile && (
          <div id="mobile-scrollDown">
            <h3 className="text-center mt-5">Scroll to Explore ↓</h3>
          </div>
        )}
      </div>
      <div
        className="m-auto lg:w-fit p-5 backdrop-blur-3xl transition-all ease-out duration-200 hover:shadow-2xl hover:shadow-black "
        ref={globeRef}
      >
        <h1 className="lg:text-5xl text-3xl text-center font-semibold almond-cream montserrat ">
          Global View <br />
          <span className="text-xs">hover over the points for full info</span>
        </h1>
        <div
          className={`h-[280px] w-[280px] lg:h-[700px] lg:w-[700px] cursor-crosshair`}
        >
          <Suspense
            fallback={
              <div className="text-center text-white">Loading Globe...</div>
            }
          >
            <div className="rounded-full m-auto">
              <Globe
                width={isMobile ? 300 : 700}
                height={isMobile ? 300 : 700}
                // globeImageUrl={globeImage}
                globeImageUrl="https://supermap.world/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnhGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--961f60e5ff365311ffc4d2202f8144ec3b6de00f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDQUFwcEFnQUsiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--5aacfc5c6afa72d892e036749ba4495ef757dc1b/577176.png"
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                atmosphereColor="rgba(0,128,0,0)"
                arcsData={coffeeLocations.map((loc, i) => ({
                  startLat: loc.lat,
                  startLng: loc.lng,
                  endLat: coffeeLocations[(i + 1) % coffeeLocations.length].lat,
                  endLng: coffeeLocations[(i + 1) % coffeeLocations.length].lng,
                  color: ["#C4A484", "#aaafff"],
                  arcAlt: 0.1,
                }))}
                arcDashLength={1.2}
                arcDashGap={0.2}
                arcDashAnimateTime={3000}
                arcStroke={0.7}
                pointsData={coffeeLocations}
                pointLat={(d) => d.lat}
                pointLng={(d) => d.lng}
                pointColor={() => "green"}
                pointRadius={0.5}
                pointAltitude={0.02}
                pointLabel={(d) =>
                  `<div style="padding:4px"><b>${
                    d.name || "Coffee Hub"
                  }</b><br>${d.description || ""}</div>`
                }
                ringsData={coffeeLocations.map((loc) => ({
                  lat: loc.lat,
                  lng: loc.lng,
                  maxR: 60,
                  propagationSpeed: 4,
                  repeatPeriod: 8000,
                }))}
                ringColor={() => ["+", "rgba(155,65,100,0)"]}
              />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="text-zinc-200">
        <Suspense
          fallback={
            <div className="text-center text-white">Loading Timeline...</div>
          }
        >
          <Timeline data={timelineData} />
        </Suspense>
      </div>

      <div className="lg:p-10 montserrat p-3 mb-5 lg:mt-10 border-t border-amber-50 lg:w-[70%] m-auto">
        <p className="text-3xl font-bold mb-5">To Wrap Up...</p>
        <p className="text-md mb-5 text-justify">
          it’s a cultural spark. from ancient rituals to modern cafés, it’s
          powered ideas, fueled debates, and wired generations. its evolution
          mirrors us: restless, curious, addicted to progress. one sip, and
          history, creativity, and energy collide in a single cup.it shaped how
          we live. from sacred sips to crowded cafés, it sparked ideas, fights,
          and late-night grind sessions. one cup, and suddenly the world moves
          faster, minds burn brighter, and nothing feels impossible.
        </p>
      </div>
    </main>
  );
};
export default Culture;
