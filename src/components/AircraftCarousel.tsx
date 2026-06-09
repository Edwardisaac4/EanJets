import { useState } from "react";

interface Aircraft {
  name: string;
  image: string;
  thumb: string;
}

const fleet: Aircraft[] = [
  {
    name: "HondaJet",
    image: "/assets/asset_2.jpg",
    thumb: "/assets/slider image.png",
  },
  {
    name: "HondaJet Elite S",
    image: "/assets/asset_2.jpg",
    thumb: "/assets/slider image.png",
  },
  {
    name: "HondaJet 2600",
    image: "/assets/asset_2.jpg",
    thumb: "/assets/slider image.png",
  },
];

export default function AircraftCarousel() {
  const [active, setActive] = useState(1);

  const prevIndex = (active - 1 + fleet.length) % fleet.length;
  const nextIndex = (active + 1) % fleet.length;

  return (
    <section id="fleet" className="py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8">
          {/* Previous (peek left) */}
          <button
            id="carousel-prev"
            onClick={() => setActive(prevIndex)}
            className="hidden sm:block shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            aria-label="Previous aircraft"
          >
            <img
              src={fleet[prevIndex].thumb}
              alt={fleet[prevIndex].name}
              className="w-28 md:w-36 lg:w-44 object-contain"
            />
          </button>

          {/* Active Card */}
          <div
            className="relative w-full max-w-2xl rounded-xl overflow-hidden bg-bg-card animate-scale-in"
            key={active}
          >
            <img
              src={fleet[active].image}
              alt={fleet[active].name}
              className="w-full aspect-16/10 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/30 to-transparent px-6 py-5">
              <p className="text-base font-semibold text-text-primary tracking-wide">
                {fleet[active].name}
              </p>
            </div>
          </div>

          {/* Next (peek right) */}
          <button
            id="carousel-next"
            onClick={() => setActive(nextIndex)}
            className="hidden sm:block shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            aria-label="Next aircraft"
          >
            <img
              src={fleet[nextIndex].thumb}
              alt={fleet[nextIndex].name}
              className="w-28 md:w-36 lg:w-44 object-contain"
            />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {fleet.map((_, i) => (
            <button
              key={i}
              id={`carousel-dot-${i}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === active
                  ? "w-8 h-2 bg-text-primary"
                  : "w-2 h-2 bg-text-muted hover:bg-text-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
