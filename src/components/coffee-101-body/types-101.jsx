import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import "../../index.css";
import Card from "../cards";

gsap.registerPlugin(ScrollTrigger);

const Types = () => {
  const typesRef = useRef(null);

  useGSAP(() => {
    gsap.to(typesRef.current, {
      scrollTrigger: {
        trigger: typesRef.current,
        start: "top bottom",
        end: "center top",
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

  const types = [
    {
      title: "Espresso",
      p1: "Espresso is brewed by forcing hot water (90–96°C) through finely ground coffee under high pressure (about 9 bars). You need an espresso machine, fresh water, and finely ground beans. The machine’s portafilter holds the coffee, and the pump pushes water through to extract a concentrated shot with a layer of crema on top.",
      p2: "Espresso is bold, rich, and intense, packing a punch in just 25–30 ml. It has a thick, velvety texture with a slightly bitter, smoky flavor. The crema adds a smooth, aromatic layer, making each sip feel dense and powerful despite the small volume.",
      p3: "Espresso is the base for most coffee drinks—lattes, cappuccinos, macchiatos, mochas, and Americanos all start here. It can also be enjoyed straight as a single or double shot for a quick caffeine kick. Variations like ristretto (shorter, stronger pull) or lungo (longer, milder pull) give it some versatility.",
      src: "https://images.pexels.com/photos/4736557/pexels-photo-4736557.jpeg",
      alt: "Image of Espresso",
      desc: "Freshly Brewed Espresso",
    },
    {
      title: "Latte",
      p1: "A latte is made by combining one or two shots of espresso with a large amount of steamed milk and a thin layer of milk foam on top. You need an espresso machine, fresh milk, and finely ground coffee. The steamed milk softens the espresso’s intensity and creates a creamy, smooth texture.",
      p2: "Lattes are mild and creamy, with the espresso flavor softened by the milk. The light foam adds a silky finish, making it gentle on the palate and perfect for those who prefer a less intense coffee experience.",
      p3: "Lattes are commonly enjoyed as a comforting morning drink or paired with breakfast. They can be flavored with syrups like vanilla or caramel, and they also serve as the base for latte art, making them visually appealing as well as tasty.",
      src: "https://images.pexels.com/photos/29162923/pexels-photo-29162923.jpeg",
      alt: "Image of Latte",
      desc: "A cup of Latte with Latte Art",
    },
    {
      title: "Cappuccino",
      p1: "Cappuccino is made with equal parts espresso, steamed milk, and thick milk foam. You need an espresso machine, milk, and finely ground coffee. The foam is denser than a latte’s, giving the drink a lighter, airy texture while keeping the espresso punch intact.",
      p2: "Cappuccinos are bold yet balanced, with the espresso’s strength softened by the milk and lifted by the airy foam. Each sip is creamy, frothy, and slightly stronger than a latte, offering a satisfying coffee hit with texture.",
      p3: "Cappuccinos are often enjoyed in the morning as a classic breakfast drink. They are also a favorite in cafés for their visual appeal and foam art, and they can be served with a sprinkle of cocoa or cinnamon for extra flavor.",
      src: "https://www.mashed.com/img/gallery/upgrade-your-at-home-latte-with-a-dusting-of-chocolate-powder/l-intro-1712003442.jpg",
      alt: "Image of Cappuccino",
      desc: "A cup of Cappuccino with Cocoa Powder",
    },
    {
      title: "Americano",
      p1: "An Americano is made by pouring hot water over one or two shots of espresso. You need an espresso machine, fresh water, and finely ground coffee. This dilutes the espresso, creating a longer coffee similar in strength to drip coffee but richer in flavor.",
      p2: "Americanos are smooth and slightly smoky, with a more diluted espresso flavor that makes them easier to sip than a straight shot. The texture is thin compared to lattes or cappuccinos, but the bold coffee taste remains.",
      p3: "Americanos are ideal for those who want a longer coffee without losing the espresso essence. They can be enjoyed black or with milk and sugar, and they’re a popular choice for work or study sessions due to their drinkable size and moderate intensity.",
      src: "https://images.pexels.com/photos/25482736/pexels-photo-25482736.jpeg",
      alt: "Image of Americano",
      desc: "A cup of Americano with Coffee Beans",
    },
    {
      title: "Frappe",
      p1: "A frappe is made by blending coffee (instant or espresso) with ice, milk or cream, and sometimes sugar or flavorings until frothy. You need a blender, cold coffee, ice, and optional flavorings. It’s a cold, sweet, and creamy drink that’s more like a dessert than a traditional coffee.",
      p2: "Frappes are sweet, cold, and refreshing with a thick, frothy texture. The coffee flavor is there but softened by the ice and milk, making it easy to drink and highly customizable with syrups or toppings.",
      p3: "Frappes are perfect for hot weather or as a treat, often served in cafés as a dessert-like beverage. They’re popular with students and young adults who want a cold, caffeinated pick-me-up that’s more playful than a standard espresso drink.",
      src: "https://images.pexels.com/photos/5211575/pexels-photo-5211575.jpeg",
      alt: "Image of Frappe",
      desc: "A glass of Frappe",
    },
  ];

  return (
    <main className="rounded-2xl">
      <div className="my-5 p-5">
        <h1 className="brown-200 my-2 font-bold text-2xl montserrat">
          1. The Types of Coffee
        </h1>
        <p className="text-md pl-5 border-l-2 border-black/30 font-semibold montserrat text-justify w-[70%]">
          No matter how much you know about coffee in this section you will get
          to know all about coffee, so that the next time you go to Starbucks
          you won't get overwhelmed by your friend ordering a "No Skim Latte
          with an extra shot" We will cover all the different types of coffee
          from a cappuccino to a gesha, show they are made, the difference
          between a cold brew and a cold coffee and much more...
        </p>
      </div>

      <div className="my-5 p-5">
        <h1 className="brown-200 my-2 font-bold text-4xl montserrat text-center">
          The Barista Populars - 101
        </h1>
      </div>
      <div
        id="types"
        ref={typesRef}
        className="m-auto scale-90 bg-gradient-to-b shadow-black shadow-2xl from-red-400/30 via-red-200/70 to-orange-800/20 rounded-2xl backdrop-blur-2xl"
      >
        {types.map((type) => (
          <Card
            key={type.title}
            title={type.title}
            p1={type.p1}
            p2={type.p2}
            p3={type.p3}
            src={type.src}
            alt={type.alt}
            desc={type.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Types;
