export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00120f] via-[#013327] to-[#00120f]" />

      {/* Luz dorada */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D4AF37]/20 blur-[120px]" />


      {/* Brillos */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-[#D4AF37] rounded-full blur-sm" />

      <div className="absolute bottom-32 right-28 w-3 h-3 bg-[#D4AF37] rounded-full blur-sm" />


      {/* Contenido */}
      <div className="relative text-center animate-fade px-6">


        <p className="uppercase tracking-[12px] text-[#D4AF37] text-sm md:text-lg">
          Celebrando
        </p>


        <div className="mt-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <h1 className="mt-8 text-white text-7xl md:text-9xl font-serif font-bold drop-shadow-2xl">
          Beatriz
        </h1>


        <h2 className="mt-5 text-[#D4AF37] text-5xl md:text-7xl font-serif">
          50 Años
        </h2>


        <p className="mt-8 text-gray-300 text-lg md:text-xl font-serif">
          Una noche para celebrar la vida,
          <br />
          el amor y los recuerdos.
        </p>


        <div className="mt-8 flex justify-center">
          <div className="h-[1px] w-32 bg-[#D4AF37]" />
        </div>


        <p className="mt-6 text-[#D4AF37] tracking-[5px] uppercase text-sm">
          23 Enero 2027
        </p>


      </div>

    </section>
  );
}