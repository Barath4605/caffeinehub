import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import cappuccino from "../../assets/cappuccino-top.png";
import espresso from "../../assets/espresso-top.png";
import latte from "../../assets/latte-top.png";
import "../../index.css";
import Cards from "../cards";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Types = () => {
  const typesRef = useRef(null);

  useGSAP(() => {
    gsap.to(typesRef.current, {
      scrollTrigger: {
        trigger: typesRef.current,
        start: "top bottom",
        end: "50% center",
        toggleActions: "play restart restart reverse",
        scrub: true,
      },
      scale: "1",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      borderRadius: "0px",
      duration: 1,
      ease: "power2.out",
    });
  }, [typesRef]);

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
      type: "lines",
    });

    gsap.from(split.lines, {
      autoAlpha: 0,
      delay: 4,
      y: 10,
      stagger: {
        amount: 0.2,
        from: "start",
      },
    });
  });

  const types = [
    {
      title: "Espresso",
      p1: "Espresso is brewed by forcing hot water (90–96°C) through finely ground coffee under high pressure (about 9 bars). You need an espresso machine, fresh water, and finely ground beans. The machine’s portafilter holds the coffee, and the pump pushes water through to extract a concentrated shot with a layer of crema on top.",
      p2: "Espresso is bold, rich, and intense, packing a punch in just 25–30 ml. It has a thick, velvety texture with a slightly bitter, smoky flavor. The crema adds a smooth, aromatic layer, making each sip feel dense and powerful despite the small volume.",
      p3: "Espresso is the base for most coffee drinks—lattes, cappuccinos, macchiatos, mochas, and Americanos all start here. It can also be enjoyed straight as a single or double shot for a quick caffeine kick. Variations like ristretto (shorter, stronger pull) or lungo (longer, milder pull) give it some versatility.",

      src: espresso,
      alt: "Image of Espresso",
      modalContent:
        "Espresso is a concentrated form of coffee prepared by forcing hot water through finely ground coffee beans under high pressure. It produces a small but strong shot with a rich flavor and crema on top. Often regarded as the base of many coffee beverages, espresso embodies the pure essence of coffee.",

      prereqs: [
        "Freshly roasted medium-dark beans (18–20g for double shot)",
        "Filtered water (90–96°C, never straight tap)",
        "Precision burr grinder (fine, consistent grind)",
        "Proper dose-to-yield ratio knowledge (1:2 ideal)",
        "Understanding of tamping technique (even pressure)",
      ],
      tools: [
        "Espresso machine with stable 9-bar pressure",
        "Portafilter with basket",
        "Tamper (fits basket snugly)",
        "Digital scale (for accurate dosing & yield)",
        "Shot glass or espresso cup",
        "Milk frother/steam wand (if making cappuccino/latte)",
      ],
      endline:
        "Master these and your espresso won’t just wake you up—it’ll slap you awake with finesse.",
    },
    {
      title: "Latte",
      p1: "A latte is made by combining one or two shots of espresso with a large amount of steamed milk and a thin layer of milk foam on top. You need an espresso machine, fresh milk, and finely ground coffee. The steamed milk softens the espresso’s intensity and creates a creamy, smooth texture.",
      p2: "Lattes are mild and creamy, with the espresso flavor softened by the milk. The light foam adds a silky finish, making it gentle on the palate and perfect for those who prefer a less intense coffee experience.",
      p3: "Lattes are commonly enjoyed as a comforting morning drink or paired with breakfast. They can be flavored with syrups like vanilla or caramel, and they also serve as the base for latte art, making them visually appealing as well as tasty.",

      src: latte,
      alt: "Image of Latte",
      modalContent:
        "A latte is a coffee drink made with one or more shots of espresso combined with a generous amount of steamed milk. It is topped with a thin layer of milk foam, resulting in a smooth and creamy texture. The flavor is mild and balanced, making it approachable for those who prefer a less intense coffee experience.",

      prereqs: [
        "Fresh espresso beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Cold whole milk (higher volume than cappuccino)",
        "Fine espresso grind",
        "Steaming technique (silky microfoam, minimal bubbles)",
      ],
      tools: [
        "Espresso machine with steam wand",
        "Burr grinder",
        "Portafilter with basket",
        "Tamper (flat, consistent pressure)",
        "Large milk pitcher (20oz, latte art friendly)",
        "Latte cup or glass (240–300ml)",
        "Digital scale",
      ],
      endline:
        "A latte is espresso mellowed by warm milk—creamy, smooth, and the playground for latte art flexes.",
    },
    {
      title: "Cappuccino",
      p1: "Cappuccino is made with equal parts espresso, steamed milk, and thick milk foam. You need an espresso machine, milk, and finely ground coffee. The foam is denser than a latte’s, giving the drink a lighter, airy texture while keeping the espresso punch intact.",
      p2: "Cappuccinos are bold yet balanced, with the espresso’s strength softened by the milk and lifted by the airy foam. Each sip is creamy, frothy, and slightly stronger than a latte, offering a satisfying coffee hit with texture.",
      p3: "Cappuccinos are often enjoyed in the morning as a classic breakfast drink. They are also a favorite in cafés for their visual appeal and foam art, and they can be served with a sprinkle of cocoa or cinnamon for extra flavor.",

      src: cappuccino,
      alt: "Image of Cappuccino",
      modalContent:
        "A cappuccino consists of equal parts espresso, steamed milk, and milk foam. The rich espresso provides depth, while the milk and foam create a harmonious balance of strength and creaminess. The foamed layer also serves to insulate the drink, maintaining its warmth while offering a distinctive velvety mouthfeel.",

      prereqs: [
        "Fresh espresso beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Whole milk (cold, for frothing)",
        "Fine grind size consistency",
        "Knowledge of milk stretching (microfoam creation)",
      ],
      tools: [
        "Espresso machine with reliable steam wand",
        "Burr grinder",
        "Portafilter with basket",
        "Tamper (fits snugly)",
        "Milk pitcher (12oz stainless steel)",
        "Cappuccino cup (150–180ml)",
        "Digital scale",
      ],
      endline:
        "A cappuccino is all about balance—1/3 espresso, 1/3 steamed milk, 1/3 foam. Nail the foam or don’t bother.",
    },
    {
      title: "Americano",
      p1: "An Americano is made by pouring hot water over one or two shots of espresso. You need an espresso machine, fresh water, and finely ground coffee. This dilutes the espresso, creating a longer coffee similar in strength to drip coffee but richer in flavor.",
      p2: "Americanos are smooth and slightly smoky, with a more diluted espresso flavor that makes them easier to sip than a straight shot. The texture is thin compared to lattes or cappuccinos, but the bold coffee taste remains.",
      p3: "Americanos are ideal for those who want a longer coffee without losing the espresso essence. They can be enjoyed black or with milk and sugar, and they’re a popular choice for work or study sessions due to their drinkable size and moderate intensity.",
      src: "https://images.pexels.com/photos/25482736/pexels-photo-25482736.jpeg",
      alt: "Image of Americano",
    },
    {
      title: "Frappe",
      p1: "A frappe is made by blending coffee (instant or espresso) with ice, milk or cream, and sometimes sugar or flavorings until frothy. You need a blender, cold coffee, ice, and optional flavorings. It’s a cold, sweet, and creamy drink that’s more like a dessert than a traditional coffee.",
      p2: "Frappes are sweet, cold, and refreshing with a thick, frothy texture. The coffee flavor is there but softened by the ice and milk, making it easy to drink and highly customizable with syrups or toppings.",
      p3: "Frappes are perfect for hot weather or as a treat, often served in cafés as a dessert-like beverage. They’re popular with students and young adults who want a cold, caffeinated pick-me-up that’s more playful than a standard espresso drink.",
      src: "https://images.pexels.com/photos/5211575/pexels-photo-5211575.jpeg",
      alt: "Image of Frappe",
    },
  ];

  return (
    <>
      <main className="pt-1">
        <div className="my-5 p-2 h-full bg-evergreen">
          <h1
            className="opacity-100 almond-cream my-2 p-1 font-bold text-4xl montserrat text-center"
            id="header"
          >
            The Barista Populars 101
          </h1>
          <p
            className="lg:w-[60%] lg:text-justify m-auto my-10 lato-regular text-md almond-cream"
            id="headerPara"
          >
            No matter how much you know about coffee in this section you get to
            know all about coffee, the next time you go to Starbucks you won't
            get overwhelmed by your friend ordering a "No Skim Latte with an
            extra shot" We will cover all the different types of coffee from a
            cappuccino to a gesha, show they are made, the difference between a
            cold brew and a cold coffee and much more...
          </p>

          {window.innerWidth < 1024 && (
            <div id="mobile-scrollDown">
              <h3 className="text-center mt-5">Scroll to Explore ↓</h3>
            </div>
          )}
        </div>
        <div id="types" className="m-auto scale-75 rounded-2xl" ref={typesRef}>
          {types.map((type) => (
            <Cards
              className="my-10 p-5 rounded-2xl"
              key={type.title}
              title={type.title}
              p1={type.p1}
              p2={type.p2}
              p3={type.p3}
              imgSrc={type.src}
              alt={type.alt}
              content={type.modalContent}
              prereqs={type.prereqs}
              tools={type.tools}
              endline={type.endline}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Types;
