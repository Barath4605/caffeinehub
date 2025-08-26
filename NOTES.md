// learn to brew like you mean it (not like you googled it).
// don’t just spill the beans, learn why they matter.
// coffee tastes smarter when your beans and tools are too.

import "../index.css";
const Cards = ({ title, p1, p2, p3, src, alt }) => {
return (
<section className="p-5">
<h1 className="text-3xl lato-bold brown-300 my-3">{title}</h1>
<div className="flex justify-center items-center">
<div className="flex flex-col gap-5 w-fit">
{/_ How It is Made _/}
<p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
Espresso is brewed by forcing hot water (90–96°C) through finely
ground coffee under high pressure (about 9 bars). You need an
espresso machine, fresh water, and finely ground beans. The
machine’s portafilter holds the coffee, and the pump pushes water
through to extract a concentrated shot with a layer of crema on top.
</p>
{/_ Taste and Feel _/}
<p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
Espresso is bold, rich, and intense, packing a punch in just 25–30
ml. It has a thick, velvety texture with a slightly bitter, smoky
flavor. The crema adds a smooth, aromatic layer, making each sip
feel dense and powerful despite the small volume.
</p>
{/_ How it is Used _/}
<p className="w-[60%] text-justify lato-regular text-lg pl-2 border-l-2 border-black/30">
Espresso is the base for most coffee drinks—lattes, cappuccinos,
macchiatos, mochas, and Americanos all start here. It can also be
enjoyed straight as a single or double shot for a quick caffeine
kick. Variations like ristretto (shorter, stronger pull) or lungo
(longer, milder pull) give it some versatility.
</p>
</div>
<img
          className="w-[350px] h-[350px] object-cover rounded-full"
          src="https://media.istockphoto.com/id/173537416/photo/coffee.jpg?s=612x612&w=0&k=20&c=_pIdS9FL9yKPqJmEoTK2QlpsPiG9Xepl2mwqGe67Rv0="
          alt="Image of Espresso"
        />
</div>
</section>
);
};

export default Cards;
