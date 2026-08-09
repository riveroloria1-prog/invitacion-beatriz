export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00120f] via-[#013327] to-[#00120f]" />

      {/* Luz dorada */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-[#D4AF37]/20 blur-[120px] animate-glow" />

      {/* Brillos */}
      <div className="absolute left-16 top-24 h-2 w-2 rounded-full bg-[#D4AF37] animate-sparkle" />
      <div className="absolute bottom-32 right-20 h-3 w-3 rounded-full bg-[#D4AF37] animate-sparkle-delay" />
      <div className="absolute right-20 top-1/3 h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-sparkle" />
      <div className="absolute bottom-1/3 left-20 h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-sparkle-delay" />

      {/* Contenido */}
      <div className="relative px-6 text-center">

        <p className="animate-fade-down text-sm uppercase tracking-[12px] text-[#D4AF37] md:text-lg">
          Celebrando
        </p>

        <div className="mt-8 flex justify-center animate-line">
          <div className="h-px w-32 bg-[#D4AF37]" />
        </div>

        <h1 className="mt-8 animate-title text-7xl font-serif font-bold text-white drop-shadow-2xl md:text-9xl">
          Beatriz
        </h1>

        <h2 className="mt-5 animate-subtitle text-5xl font-serif text-[#D4AF37] md:text-7xl">
          50 Años
        </h2>

        <p className="mt-8 animate-text text-lg font-serif text-gray-300 md:text-xl">
          Una noche para celebrar la vida,
          <br />
          el amor y los recuerdos.
        </p>

        <div className="mt-8 flex justify-center animate-line-delay">
          <div className="h-px w-32 bg-[#D4AF37]" />
        </div>

        <p className="mt-6 animate-date text-sm uppercase tracking-[5px] text-[#D4AF37]">
          23 Enero 2027 · 7:00 PM
        </p>

      </div>
    </section>
  );
}

