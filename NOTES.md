> learn to brew like you mean it (not like you googled it).
> don’t just spill the beans, learn why they matter.
> coffee tastes smarter when your beans and tools are too.

## How It is Made

## Taste and Feel

## How it is Used

# Coffee Types: From Basic to Advanced

## Basic / Everyday Coffees

1. **Espresso** – the OG shot, strong & small.
2. **Americano** – espresso + hot water, watered-down espresso.
3. **Latte** – espresso + steamed milk + a lil foam.
4. **Cappuccino** – espresso + equal parts steamed milk & foam.
5. **Flat White** – like a latte but silkier milk, stronger coffee taste.
6. **Macchiato** – espresso “stained” with a dash of milk.

## Intermediate / Popular Specialty Coffees

7. **Mocha** – latte + chocolate syrup, dessert vibes.
8. **Cortado** – espresso + equal milk, smooth & strong.
9. **Affogato** – espresso poured over ice cream, cheat dessert.
10. **Irish Coffee** – coffee + whiskey + cream, boozy kick.
11. **Ristretto** – super short espresso, ultra concentrated.

## Advanced / Caffeine-Head Coffees

12. **Doppio** – double shot espresso, for the hardcore.
13. **Red Eye** – drip coffee + espresso, instant jolt.
14. **Black Eye / Dead Eye** – drip + 2 or 3 shots of espresso, nuclear caffeine.
15. **Turkish Coffee** – unfiltered, thick, strong, tradition-heavy.
16. **Cold Brew** – steeped coffee, smooth & strong, less acidic.
17. **Nitro Cold Brew** – cold brew infused with nitrogen, creamy & fizzy.
18. **Café Bombón** – espresso + sweetened condensed milk, concentrated sweetness.
19. **Vienna Coffee** – espresso + whipped cream, fancy & rich.
20. **Café Cubano** – espresso with sugar whipped into foam, intense & sweet.

  <style>
      @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bungee&family=Great+Vibes&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nata+Sans:wght@100..900&family=Pinyon+Script&family=Playwrite+MX+Guides&family=Press+Start+2P&family=VT323&display=swap');
    </style>

import { useEffect, useState } from "react";
import "./index.css";

const fonts = [
"playwrite text-2xl",
"manrope text-2xl",
"montserrat text-2xl",
"playwrite text-2xl",
"bodoni text-2xl",
"pinyon-script text-4xl",
"vibes text-4xl",
];

const Brewing = () => {
const [fontIndex, setFontIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setFontIndex((prev) => (prev + 1) % fonts.length);
}, 300);
return () => clearInterval(interval);
}, []);

return (

<main className="bg-cherry-red text-vanilla flex flex-col relative">
<div className={`h-screen w-screen m-auto ${fonts[fontIndex]}`}>
<h1
className={`font-medium w-screen h-screen content-center text-center `} >
[ brewing something fresh ]
</h1>
</div>

      <div className="text-sm absolute bottom-0 ">
        <h1>site under prodcution*</h1>
      </div>
    </main>

);
};

export default Brewing;

1. Pour-over

Overview: Clean, bright cup; highlights delicate flavors.
Equipment Needed: Dripper, filter, kettle, scale, mug.
Grind & Amount: Medium-fine; ~1:16 ratio (coffee:water).
Step-by-Step:

    Rinse filter, add coffee.

    Bloom with small water pour (30 sec).

    Slowly pour remaining water in circles.
    Timing & Temp: 2.5–4 min; 90–96°C water.
    Common Mistakes: Over/under-extraction, uneven pouring.
    Flavor Notes / Tips: Bright, clean; swirl cup before sipping.

2. French Press

Overview: Full-bodied, rich, thicker coffee.
Equipment Needed: French press, coarse grinder, kettle, spoon.
Grind & Amount: Coarse; ~1:15 ratio.
Step-by-Step:

    Add coffee, pour hot water.

    Stir gently, steep 4 min.

    Press plunger slowly, pour.
    Timing & Temp: 4 min; 93–96°C water.
    Common Mistakes: Too fine grind → sludge,   .
    Flavor Notes / Tips: Strong, bold; rinse press to reduce sediment.

3. AeroPress

Overview: Smooth, versatile; can mimic espresso or drip.
Equipment Needed: AeroPress, filter, grinder, kettle, stirrer.
Grind & Amount: Medium-fine; ~1:15 ratio.
Step-by-Step:

    Insert filter, rinse.

    Add coffee, pour water, stir 10 sec.

    Press slowly (~20–30 sec).
    Timing & Temp: 1–2 min; 85–92°C water.
    Common Mistakes: Too fast pressing → weak brew; wrong grind → clog.
    Flavor Notes / Tips: Can tweak strength by water or grind; experiment.

4. Espresso / Moka Pot

Overview: Intense, concentrated coffee; crema-rich.
Equipment Needed: Espresso machine or Moka pot, fine grind, tamper, kettle.
Grind & Amount: Fine (espresso), 1:2–1:3 ratio.
Step-by-Step:

    Fill basket with coffee, tamp evenly.

    Pull shot (espresso) or heat Moka pot.

    Stop when flow turns pale.
    Timing & Temp: 25–30 sec (espresso), low-medium heat (Moka).
    Common Mistakes: Channeling → bitter; over/under-extraction.
    Flavor Notes / Tips: Strong, rich; great base for milk drinks.

5. Cold Brew

Overview: Smooth, low-acid coffee; served cold.
Equipment Needed: Jar, coarse grinder, strainer/filter.
Grind & Amount: Coarse; ~1:8 ratio.
Step-by-Step:

    Combine coffee + cold water.

    Stir, cover, steep 12–24 hrs.

    Strain, serve over ice.
    Timing & Temp: 12–24 hrs; cold water.
    Common Mistakes: Too short → weak; too fine → muddy.
    Flavor Notes / Tips: Sweet, mellow; dilute concentrate to taste.



    Pour-over: Gives a bright, clean cup that really showcases subtle flavors.

    French Press: Produces a full-bodied, rich brew with natural oils intact.

    AeroPress: Super versatile—can mimic espresso or drip in minutes.

    Espresso / Moka Pot: Concentrated, intense coffee with a crema-topped shot.

    Cold Brew: Smooth, low-acid coffee that’s perfect over ice.

import { useEffect, useState } from "react";
import "./index.css";

const fonts = [
"playwrite text-2xl",
"manrope text-2xl",
"montserrat text-2xl",
"playwrite text-2xl",
"bodoni text-2xl",
"pinyon-script text-4xl",
"vibes text-4xl",
];

const Beans = () => {
const [fontIndex, setFontIndex] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setFontIndex((prev) => (prev + 1) % fonts.length);
}, 300);
return () => clearInterval(interval);
}, []);

return (
<main className="bg-midnight text-pearl flex flex-col relative">
<div className={`h-screen w-screen m-auto ${fonts[fontIndex]}`}>
<h1
className={`font-medium w-screen h-screen content-center text-center `} >
[ roasting the beans ]
</h1>
</div>

      <div className="text-sm absolute bottom-0 ">
        <h1>site under prodcution*</h1>
      </div>
    </main>

);
};

export default Beans;
