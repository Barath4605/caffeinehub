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
      p1: "Espresso is made by forcing hot water (90–96°C) through finely ground coffee under high pressure (around 9 bars). You need an espresso machine, fresh water, and finely ground beans. The machine’s portafilter holds the coffee, and the pump pushes water through to pull a concentrated shot.",
      p2: "Espresso is small but mighty—25–30 ml of bold, rich, and intense coffee with a velvety texture. It tastes strong, slightly bitter, and smoky, topped with a golden layer of crema that adds smoothness.",
      p3: "Espresso is the foundation of most café drinks—lattes, cappuccinos, macchiatos, mochas, and Americanos. It can be enjoyed straight (single or double shot) or varied into ristretto (shorter, stronger) or lungo (longer, lighter).",
      src: espresso,
      alt: "Image of Espresso",
      modalContent:
        "Espresso is a concentrated coffee made by forcing hot water through finely ground beans under high pressure. It’s intense, flavorful, and the base for most coffee drinks.",
      prereqs: [
        "Freshly roasted beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Fine, consistent grind (burr grinder)",
        "Understanding of tamping (even pressure)",
        "Basic knowledge of brew ratios (1:2 is standard)",
      ],
      tools: [
        "Espresso machine (9-bar pressure)",
        "Portafilter + basket",
        "Tamper (snug fit)",
        "Digital scale",
        "Espresso cup or shot glass",
        "Milk frother/steam wand (if making milk drinks)",
      ],
      recipe1: "Grind 18–20g of beans to a fine consistency (like table salt).",
      recipe2:
        "Fill the portafilter basket with grounds, distribute evenly, and tamp down firmly with 30 pounds of pressure.",
      recipe3:
        "Lock the portafilter into the espresso machine and start extraction. Aim for 25–30ml of espresso in 25–30 seconds.",
      recipe4:
        "Serve in a preheated cup immediately. Drink as is, or add sugar for sweetness.",
      endline:
        "Espresso isn’t gentle—it’s coffee’s knockout punch in a tiny cup.",
    },
    {
      title: "Latte",
      p1: "A latte mixes one or two shots of espresso with lots of steamed milk and a thin layer of foam. The milk softens the espresso’s strength, creating a smooth and creamy drink.",
      p2: "Lattes are mild and silky, perfect for people who want coffee flavor without too much bite. The foam gives it a soft finish, making it approachable and comforting.",
      p3: "Lattes are common breakfast drinks. They can be flavored with syrups like vanilla or caramel, and they’re the canvas for latte art, making them as pretty as they are tasty.",
      src: latte,
      alt: "Image of Latte",
      modalContent:
        "A latte is espresso blended with a generous amount of steamed milk and topped with light foam. It’s smooth, mild, and often used for latte art.",
      prereqs: [
        "Espresso beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Cold whole milk",
        "Fine espresso grind",
        "Basic milk steaming technique (silky microfoam)",
      ],
      tools: [
        "Espresso machine with steam wand",
        "Burr grinder",
        "Portafilter + basket",
        "Tamper",
        "Milk pitcher (20oz)",
        "Latte cup or glass (240–300ml)",
        "Digital scale",
      ],
      recipe1:
        "Pull a fresh double shot of espresso (60ml) into a large latte cup.",
      recipe2:
        "Fill a pitcher with 200–250ml of cold milk. Submerge the steam wand tip just below the surface and steam until milk reaches 65°C.",
      recipe3:
        "Stretch the milk slightly (introduce air at the start), then swirl to create silky microfoam.",
      recipe4:
        "Pour milk slowly into the espresso, holding back foam with a spoon, then finish with a thin foam layer. Add vanilla or caramel syrup if you want.",
      endline:
        "Latte = espresso in a cozy blanket of milk, smooth and Instagram-ready.",
    },
    {
      title: "Cappuccino",
      p1: "A cappuccino is equal parts espresso, steamed milk, and milk foam. The foam is thicker than a latte’s, giving the drink a light, airy feel while keeping the coffee strong.",
      p2: "Cappuccinos are bold but balanced. The espresso hits hard, the milk softens it, and the foam lightens it up. The texture is creamy yet frothy, stronger than a latte but not as intense as straight espresso.",
      p3: "Cappuccinos are a morning favorite, often topped with cocoa or cinnamon. They also make great foam art canvases and are served in smaller cups than lattes.",
      src: cappuccino,
      alt: "Image of Cappuccino",
      modalContent:
        "A cappuccino balances espresso, milk, and foam in equal parts. Strong yet smooth, with a velvety mouthfeel thanks to the thick foam.",
      prereqs: [
        "Espresso beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Cold whole milk",
        "Consistent fine grind",
        "Foam-making technique (stretching milk)",
      ],
      tools: [
        "Espresso machine with steam wand",
        "Burr grinder",
        "Portafilter + basket",
        "Tamper",
        "Milk pitcher (12oz)",
        "Cappuccino cup (150–180ml)",
        "Digital scale",
      ],
      recipe1: "Brew a single or double espresso into a cappuccino cup.",
      recipe2:
        "Steam 120ml of cold milk, adding more air than for a latte to create thick, airy foam.",
      recipe3:
        "Pour the steamed milk into the espresso, then spoon the foam on top so the layers are 1:1:1 (espresso:milk:foam).",
      recipe4: "Dust the top with cocoa powder or cinnamon if you like.",
      endline:
        "Cappuccino is balance in a cup—mess up the foam, and it’s ruined.",
    },
    {
      title: "Americano",
      p1: "An Americano is just espresso diluted with hot water. Pour water over one or two shots, and you get a longer drink that tastes smoother and less intense.",
      p2: "It’s thinner than a latte or cappuccino but still richer than regular drip coffee. The flavor is smoky, bold, and easy to sip over time.",
      p3: "Americanos are go-to work or study coffees—big enough to sip slowly, customizable with milk or sugar, and less heavy than milk-based drinks.",
      src: "https://images.pexels.com/photos/25482736/pexels-photo-25482736.jpeg",
      alt: "Image of Americano",
      modalContent:
        "An Americano is espresso stretched with hot water. Think drip coffee’s smoother, richer cousin.",
      prereqs: [
        "Espresso beans (18–20g for double shot)",
        "Filtered water (90–96°C)",
        "Fine espresso grind",
      ],
      tools: [
        "Espresso machine",
        "Portafilter + basket",
        "Tamper",
        "Digital scale",
        "Kettle or hot water source",
        "Mug (240ml or more)",
      ],
      recipe1: "Brew a single or double shot of espresso into a large mug.",
      recipe2: "Heat water until just below boiling (85–90°C).",
      recipe3:
        "Pour 120–150ml of hot water directly into the mug with espresso.",
      recipe4: "Stir lightly. Add milk or sugar to taste if you prefer.",
      endline: "Americano is espresso that learned to chill out and sip slow.",
    },
    {
      title: "Frappe",
      p1: "A frappe is an iced coffee drink made by blending coffee, ice, milk (or cream), and sugar or flavorings until frothy. You need a blender, cold coffee, and ice—it’s more dessert than classic coffee.",
      p2: "It’s cold, creamy, and sweet, with the coffee flavor softened by milk and ice. The texture is thick and refreshing, customizable with syrups, whipped cream, or toppings.",
      p3: "Frappes are perfect for hot days or as a treat. They’re café staples for younger crowds and often more about fun and indulgence than pure coffee taste.",
      src: "https://images.pexels.com/photos/5211575/pexels-photo-5211575.jpeg",
      alt: "Image of Frappe",
      modalContent:
        "A frappe is a blended iced coffee drink, creamy and refreshing, often topped with syrups or whipped cream. Less about intensity, more about fun.",
      prereqs: [
        "Instant coffee or espresso",
        "Cold milk or cream",
        "Ice cubes",
        "Sugar or syrup (optional)",
      ],
      tools: [
        "Blender",
        "Coffee source (instant/espresso)",
        "Tall glass",
        "Straw",
        "Whipped cream can (optional)",
      ],
      recipe1:
        "Prepare 2 tsp instant coffee with 30ml hot water, or pull 1 espresso shot, and let it cool.",
      recipe2:
        "Add cooled coffee, 200ml cold milk, a handful of ice cubes, and 1–2 tsp sugar/syrup into a blender.",
      recipe3: "Blend on high until smooth, frothy, and thick.",
      recipe4:
        "Pour into a tall glass, top with whipped cream and drizzle with chocolate or caramel if you want.",
      endline:
        "Frappe is coffee’s sweet, frosty party trick—it’s basically dessert in a cup.",
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
              recipe1={type.recipe1}
              recipe2={type.recipe2}
              recipe3={type.recipe3}
              recipe4={type.recipe4}
              src={type.src}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Types;
