import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import "../../index.css";
import Worldmap from "../ui/Globe";
import Timeline from "../ui/Timeline";

const Culture = () => {
  const globeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      globeRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        ease: "power3.inOut",
      }
    );
  });

  const [hoveredPoint, setHoveredPoint] = useState(null);
  const isMobile = window.innerWidth < 1024;
  const colors = ["#6f4e37", "#c19a6b", "#ffcc99"]; // coffee tones

  const coffeeLocations = [
    // africa → middle east (coffee origin to trade)
    {
      order: 1,
      startLat: 9.145, // Ethiopia
      startLng: 40.4897,
      endLat: 15.5007, // Sudan
      endLng: 32.5599,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 1,
      startLat: 9.145, // Ethiopia
      startLng: 40.4897,
      endLat: 15.5527, // Yemen
      endLng: 48.5164,
      arcAlt: 0.35,
      color: colors[1],
    },

    // middle east → europe (coffee houses)
    {
      order: 2,
      startLat: 15.5527, // Yemen
      startLng: 48.5164,
      endLat: 41.0082, // Istanbul
      endLng: 28.9784,
      arcAlt: 0.25,
      color: colors[2],
    },
    {
      order: 2,
      startLat: 41.0082, // Istanbul
      startLng: 28.9784,
      endLat: 45.4642, // Italy
      endLng: 9.19,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 45.4642, // Italy
      startLng: 9.19,
      endLat: 48.8566, // France
      endLng: 2.3522,
      arcAlt: 0.25,
      color: colors[1],
    },

    // europe → americas (colonial trade)
    {
      order: 3,
      startLat: 48.8566, // France
      startLng: 2.3522,
      endLat: -23.5505, // Brazil
      endLng: -46.6333,
      arcAlt: 0.4,
      color: colors[2],
    },
    {
      order: 3,
      startLat: 51.5074, // UK
      startLng: -0.1278,
      endLat: 40.7128, // USA
      endLng: -74.006,
      arcAlt: 0.35,
      color: colors[0],
    },

    // asia coffee culture
    {
      order: 4,
      startLat: 35.6895, // Japan
      startLng: 139.6917,
      endLat: 1.3521, // Singapore
      endLng: 103.8198,
      arcAlt: 0.3,
      color: colors[1],
    },
    {
      order: 4,
      startLat: 1.3521, // Singapore
      startLng: 103.8198,
      endLat: 35.6762, // Tokyo (Japan)
      endLng: 139.6503,
      arcAlt: 0.25,
      color: colors[2],
    },

    // african coffee culture spread
    {
      order: 5,
      startLat: -1.2921, // Kenya
      startLng: 36.8219,
      endLat: 9.145, // Ethiopia
      endLng: 40.4897,
      arcAlt: 0.3,
      color: colors[0],
    },
    {
      order: 5,
      startLat: -1.2921, // Kenya
      startLng: 36.8219,
      endLat: -15.785493, // Brazil via trade
      endLng: -47.909029,
      arcAlt: 0.35,
      color: colors[1],
    },

    // modern coffee trade and culture
    {
      order: 6,
      startLat: 40.7128, // USA
      startLng: -74.006,
      endLat: 51.5074, // UK
      endLng: -0.1278,
      arcAlt: 0.2,
      color: colors[2],
    },
    {
      order: 6,
      startLat: 40.7128, // USA
      startLng: -74.006,
      endLat: 35.6895, // Japan
      endLng: 139.6917,
      arcAlt: 0.3,
      color: colors[0],
    },
  ];

  const timelineData = [
    {
      year: "9th c. CE",
      title: "Kaldi’s Kick",
      content: (
        <p>
          Legendary goat herder Kaldi in Ethiopia noticed his goats bouncing
          energetically after munching red berries. This is the mythical spark
          that put coffee on the map, literally. Early humans chewed the beans
          or
        </p>
      ),
    },
    {
      year: "15th c.",
      title: "Sufi Brew Rituals",
      content: (
        <p>
          In Yemen, Sufi monks discovered coffee’s stimulant powers, using it to
          stay awake during long night prayers. Coffee cultivation began, and
          beans were roasted, ground, and brewed into a beverage called qahwa.
        </p>
      ),
    },
    {
      year: "16th c.",
      title: "Coffee Houses Ignite",
      content: (
        <p>
          By now, coffeehouses spread across Cairo, Mecca, and Istanbul,
          becoming vibrant hubs of conversation, business, and debate. Known as
          “Schools of the Wise,” these qahwa houses made coffee a cultural
          staple, blending social interaction with
        </p>
      ),
    },
    {
      year: "17th c.",
      title: "Europe Gets Buzzed",
      content: (
        <p>
          Venetian traders brought coffee to Europe, where it exploded in
          popularity. Cafés appeared in London, Paris, and Vienna, often called
          “penny universities” for their intellectual scene. Coffee transitioned
          from exotic curiosity to daily
        </p>
      ),
    },
    {
      year: "18th c.",
      title: "Colonial Beans",
      content: (
        <p>
          Europeans smuggled coffee plants to colonies in the Caribbean, South
          America, and Southeast Asia. Brazil, Colombia, and Java emerged as
          major producers, scaling cultivation massively. Coffee became a global
        </p>
      ),
    },
    {
      year: "19th c.",
      title: "Industrial Brew",
      content: (
        <p>
          The industrial revolution mechanized coffee roasting and grinding,
          making it faster and more accessible. Coffee became a staple of urban
          working life in Europe and America, fueling factories, offices, and
        </p>
      ),
    },
    {
      year: "Early 20th c.",
      title: "Espresso & Italian Ritual",
      content: (
        <p>
          Italy transformed coffee into an art of speed and precision with the
          invention of espresso machines. Cafés became cultural institutions,
          blending ritual, social identity, and efficiency. Coffee culture now
          intertwined with
        </p>
      ),
    },
    {
      year: "Mid 20th c.",
      title: "Global Coffee Boom",
      content: (
        <p>
          Post-WWII, coffee culture spread worldwide. Instant coffee, diners,
          and café chains made it a mass-consumed commodity. Countries like the
          U.S., UK, and Japan embraced coffee as part of daily life, while
          coffeehouses retained their role as
        </p>
      ),
    },
    {
      year: "Late 20th c.",
      title: "Specialty Awakening",
      content: (
        <p>
          The third-wave coffee movement emerged, emphasizing origin,
          single-source beans, and craft brewing techniques. Consumers became
          connoisseurs, appreciating tasting notes, roast levels, and brewing
          rituals. Coffee evolved from mere caffeine
        </p>
      ),
    },
    {
      year: "21st c.",
      title: "Coffee Everywhere",
      content: (
        <p>
          Global giants like Starbucks and Nespresso turned coffee into a
          ubiquitous cultural icon. Cafés mix local rituals with global trends,
          while social media fuels coffee aesthetics. From espresso rituals in
          Italy to specialty pour-overs in Tokyo, coffee now represents
        </p>
      ),
    },
    {
      year: "2025 & Beyond",
      title: "The Future of the Bean",
      content: (
        <p>
          Technology, sustainability, and innovation shape coffee’s next
          chapter. Lab-grown coffee, AI roasting, and climate-conscious
          cultivation are redefining production. Coffee remains a cultural
          touchstone, a daily ritual, and a
        </p>
      ),
    },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#2E4D2B", // earthy green for land
    showAtmosphere: true,
    atmosphereColor: "#FFF4E1", // soft almond-cream glow
    atmosphereAltitude: 0.08,
    emissive: "#3A5A37", // subtle darker green emissive
    emissiveIntensity: 0.15,
    shininess: 0.3, // gentle reflection
    polygonColor: "rgba(255, 244, 225, 0.6)", // borders visible in soft cream
    ambientLight: "#FFF4E1",
    directionalLeftLight: "#FFF4E1",
    directionalTopLight: "#FFF4E1",
    pointLight: "#F7E5C7", // cream-ish highlight on points
    arcTime: 1200,
    arcLength: 0.9,
    rings: 1,
    maxRings: 2,
    initialPosition: { lat: 5, lng: 30 }, // still focus near coffee origins
    autoRotate: true,
    autoRotateSpeed: 0.25,
  };

  <Worldmap globeConfig={globeConfig} data={coffeeLocations} />;

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
          className="lg:w-[60%] lg:text-justify m-auto my-10 lato-regular text-md"
          id="headerPara"
        >
          caffeine isn’t just a chemical kick—it’s a culture, ritual, and
          survival tool. it fuels everything from ancient tea ceremonies to
          neon-lit coffeehouses. energy drinks power restless nights, while
          espresso fuels morning wars. it shapes creativity, productivity,
          identity, and even social status. this blog dives deep into how
          caffeine became the heartbeat of modern society.
        </p>
        {isMobile && (
          <div id="mobile-scrollDown">
            <h3 className="text-center mt-5">Scroll to Explore ↓</h3>
          </div>
        )}
      </div>
      <div
        className="m-auto lg:w-fit p-5 backdrop-blur-3xl transition-all ease-in-out duration-200 hover:shadow-2xl hover:shadow-black "
        ref={globeRef}
      >
        <h1 className="lg:text-5xl text-2xl text-center lg:text-start font-semibold almond-cream montserrat ">
          Global View
        </h1>
        <div
          className={`h-[400px] w-[400px] lg:h-[700px] lg:w-[700px] cursor-crosshair`}
        >
          <Worldmap
            globeConfig={globeConfig}
            pointLight="blue"
            data={coffeeLocations}
            arcLength={0.35}
            arcDashGap={0.7}
            arcDashAnimateTime={4000}
            arcAltitude={0.3}
            arcStroke={1}
          />
        </div>
      </div>
      <div className="text-zinc-200">
        <Timeline data={timelineData} />
      </div>
    </main>
  );
};
export default Culture;

{
  /* <Globe
            width={isMobile ? "360" : "800"}
            height={isMobile ? "360" : "800"}
            globeImageUrl="https://i.redd.it/bg70ybukd3881.png"
            backgroundColor="#ffffff00"
            showAtmosphere={false}
            pointsData={coffeeLocations}
            pointLat={(d) => d.lat}
            pointLng={(d) => d.lng}
            pointLabel={(d) =>
              `<b className="underline">${d.name}</b><br>${d.description}`
            }
            pointColor={() => "lightblue"}
            pointRadius={0.5}
            onPointClick={(d) => window.open(d.url, "_blank")}
/> */
}
