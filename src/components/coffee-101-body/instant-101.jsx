import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import "../../index.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Instant = () => {
  const introRef = useRef(null);
  const mythBusterRef = useRef(null);
  const factRef = useRef(null);
  const endnoteRef = useRef(null);
  const listItems = useRef([]);

  useGSAP(() => {
    const sections = [introRef, mythBusterRef, factRef, endnoteRef];
    sections.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

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

  useGSAP(() => {
    listItems.current.forEach((item) => {
      gsap.fromTo(
        item,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToList = (el) => {
    if (el && !listItems.current.includes(el)) {
      listItems.current.push(el);
    }
  };

  return (
    <>
      <main className="pt-1">
        <div className="my-5 p-2 h-full bg-evergreen">
          <h1
            className="opacity-100 almond-cream my-2 p-1 font-bold text-4xl montserrat text-center"
            id="header"
          >
            Instant Coffee: The Quick & Dirty
          </h1>
          <p
            className="lg:w-[60%] p-2 text-justify m-auto my-10 lato-regular text-md almond-cream"
            id="headerPara"
          >
            Love it or hate it, instant coffee is a modern marvel. It’s the
            culprit behind countless late-night study sessions and early-morning
            rushes. But what exactly is this convenient brown dust? And does it
            really stack up against the real deal? Let’s brew up the truth and
            separate the facts from the fiction.
          </p>
          <div id="mobile-scrollDown">
            <h3 className="text-center mt-5">Scroll to Explore ↓</h3>
          </div>
        </div>

        <div className="m-auto mt-20 pt-20 max-w-4xl px-4">
          <section
            ref={introRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              How Instant Coffee is Made
            </h2>
            <div className="text-md pl-5 border-l border-amber-50/70">
              <p className="lato-regular almond-cream">
                Instant coffee is just regular coffee that's been brewed, then
                dehydrated. There are two main methods for this:
              </p>
              <ul className="lato-regular text-md almond-cream list-disc pl-6 mt-4">
                <li className="mb-3" ref={addToList}>
                  <strong className="almond-cream">Spray-drying:</strong> Coffee
                  extract is sprayed into a fine mist from the top of a tall
                  tower. As it falls, hot air dries the droplets into a powder
                  by the time they reach the bottom. It’s a fast, cheap process
                  that often compromises on flavor.
                </li>
                <li className="mb-3" ref={addToList}>
                  <strong className="almond-cream">Freeze-drying:</strong> This
                  is the more expensive, higher-quality method. Brewed coffee is
                  frozen into large slabs and then broken into granules. These
                  frozen granules are then placed in a vacuum chamber where the
                  ice evaporates directly into gas, leaving behind perfectly
                  preserved coffee solids. This method retains more of the
                  coffee's aroma and flavor.
                </li>
              </ul>
            </div>
          </section>

          <section
            ref={factRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              The Hard Facts
            </h2>
            <ul className="lato-regular text-md almond-cream list-disc pl-6">
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Caffeine Content:</strong> A
                standard cup of instant coffee contains about 30–90 mg of
                caffeine, compared to a regular brewed cup's 70–140 mg. This
                makes instant coffee a decent, albeit weaker, source of your
                caffeine fix.
              </li>
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Antioxidants:</strong> Instant
                coffee is packed with antioxidants, just like regular coffee.
                These compounds help fight inflammation and protect your cells
                from damage.
              </li>
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Acrylamide:</strong> Instant
                coffee contains up to twice as much acrylamide as fresh, roasted
                coffee. Acrylamide is a potentially harmful chemical that forms
                when starchy foods are roasted or fried at high temperatures.
                However, the amount is still considered well below the level
                that would cause concern.
              </li>
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Cost-Effective:</strong> It's
                undeniably cheaper and has a much longer shelf life than roasted
                beans, making it a budget-friendly option.
              </li>
            </ul>
          </section>

          <section
            ref={mythBusterRef}
            className="my-10 p-5 rounded-2xl bg-evergreen/20"
          >
            <h2 className="almond-cream font-bold text-5xl montserrat mb-4">
              Myth vs. Reality
            </h2>
            <ul className="lato-regular text-md almond-cream list-disc pl-6">
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Myth:</strong> Instant coffee
                is just for lazy people.
                <br />
                <strong className="almond-cream">Reality:</strong> While it is
                convenient, instant coffee has a place in specialty drinks like
                Dalgona coffee, baked goods, and even rubs for meat. Its instant
                solubility makes it a versatile ingredient.
              </li>
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Myth:</strong> It tastes
                terrible no matter what.
                <br />
                <strong className="almond-cream">Reality:</strong> Quality
                varies greatly. Freeze-dried brands often have a much cleaner,
                more complex flavor profile than their spray-dried counterparts.
              </li>
              <li className="mb-3" ref={addToList}>
                <strong className="almond-cream">Myth:</strong> Instant coffee
                is bad for your health.
                <br />
                <strong className="almond-cream">Reality:</strong> For the most
                part, the health benefits of regular coffee (like antioxidants
                and a lower risk of certain diseases) apply to instant coffee as
                well. The key is moderation and being aware of the minor
                differences in chemical composition.
              </li>
            </ul>
          </section>

          <section
            ref={endnoteRef}
            className="lg:my-10 p-5 mb-20 lg:p-15 border-t border-amber-50 bg-evergreen/20 text-justify almond-cream"
          >
            <h2 className="font-bold text-3xl montserrat mb-4">
              Final Verdict
            </h2>
            <p className="lato-regular text-md mb-10">
              Instant coffee is not a lesser form of coffee; it's a different
              one. It's a quick, convenient, and affordable solution for when
              time is short. While it might lack the nuanced flavor of a
              perfectly brewed pour-over, it's an indispensable tool in a
              fast-paced world. So next time you need a quick pick-me-up, don't
              feel guilty about reaching for the jar. It's more than just "brown
              dust"—it's a testament to convenience and efficiency.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Instant;
