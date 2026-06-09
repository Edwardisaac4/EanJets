export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-bg-primary via-bg-primary to-bg-secondary pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 pt-28 pb-16 lg:px-10 lg:pt-0 lg:pb-0">
        {/* Left — Copy */}
        <div className="flex-1 max-w-xl animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            The future
            <br />
            of flying is here
          </h1>

          <a
            href="#fleet"
            id="hero-cta"
            className="mt-8 inline-flex items-center px-7 py-3 text-sm font-semibold text-text-primary bg-gold hover:bg-gold-light rounded-full transition-colors duration-200 shadow-lg shadow-gold/20"
          >
            Prepare for takeoff
          </a>
        </div>

        {/* Right — Hero Jet Image */}
        <div className="flex-1 flex justify-center lg:justify-end animate-slide-left" style={{ animationDelay: "0.2s" }}>
          <img
            src="/assets/new hero image.png"
            alt="HondaJet — gold livery in flight"
            className="w-full max-w-lg lg:max-w-2xl drop-shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
